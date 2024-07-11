import "../styles/form.css";
import axios from "axios";
import { CircleUserRound, Download, IndianRupee } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Uploadpic from "../components/uploadpic.jsx";
import { useSession } from "../contexts/SessionContext";
import { jsPDF } from 'jspdf';

const Form = () => {
    const { user, loading, signOut } = useSession();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [showUpload, setShowUpload] = useState(false);
    const [formData, setFormData] = useState({
        month: new Date().toISOString().slice(0, 7),  // Default to current month in YYYY-MM format
        income: '',
        groceries: '',
        rent: '',
        entertainment: '',
        emi: '',
        loans: '',
        transport: '',
        utilities: '',
        bills: '',
        fee: '',
        savings: '',
        otherExpenditures: ''
    });
    const [savingsPlan, setSavingsPlan] = useState(null);
    const [error, setError] = useState('');
    
    const dropdownRef = useRef(null);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Function to close dropdown when clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    // Effect to add click event listener when dropdown is visible
    useEffect(() => {
        if (dropdownVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownVisible]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!user) {
                throw new Error("User is not authenticated");
            }
    
            const {
                month,
                income,
                groceries,
                rent,
                entertainment,
                emi,
                loans,
                transport,
                utilities,
                bills,
                fee,
                savings,
                otherExpenditures
            } = formData;
    
            const cleanedFormData = {
                ...formData,
                income: income === '' ? '0' : income,
                groceries: groceries === '' ? '0' : groceries,
                rent: rent === '' ? '0' : rent,
                entertainment: entertainment === '' ? '0' : entertainment,
                emi: emi === '' ? '0' : emi,
                loans: loans === '' ? '0' : loans,
                transport: transport === '' ? '0' : transport,
                utilities: utilities === '' ? '0' : utilities,
                bills: bills === '' ? '0' : bills,
                fee: fee === '' ? '0' : fee,
                savings: savings === '' ? '0' : savings,
            };
    
            const otherExpendituresDict = {};
            if (otherExpenditures) {
                otherExpenditures.split(',').forEach(item => {
                    const [key, value] = item.split(':');
                    otherExpendituresDict[key.trim()] = parseFloat(value.trim());
                });
            }
    
            const total_expenditure = [
                parseFloat(cleanedFormData.groceries),
                parseFloat(cleanedFormData.rent),
                parseFloat(cleanedFormData.entertainment),
                parseFloat(cleanedFormData.emi),
                parseFloat(cleanedFormData.loans),
                parseFloat(cleanedFormData.transport),
                parseFloat(cleanedFormData.utilities),
                parseFloat(cleanedFormData.creditCardBills),
                parseFloat(cleanedFormData.fee)
            ].reduce((acc, val) => acc + val, 0) + 
            Object.values(otherExpendituresDict).reduce((acc, val) => acc + val, 0);
    
            const dataToSend = {
                userId: user.uid,
                month,
                income: parseFloat(cleanedFormData.income),
                groceries: parseFloat(cleanedFormData.groceries),
                rent: parseFloat(cleanedFormData.rent),
                entertainment: parseFloat(cleanedFormData.entertainment),
                emi: parseFloat(cleanedFormData.emi),
                loans: parseFloat(cleanedFormData.loans),
                transport: parseFloat(cleanedFormData.transport),
                utilities: parseFloat(cleanedFormData.utilities),
                bills: parseFloat(cleanedFormData.bills),
                fee: parseFloat(cleanedFormData.fee),
                savings: parseFloat(cleanedFormData.savings),
                total_expenditure,
                other_expenditures: otherExpendituresDict
            };
    
            const response = await axios.post('http://127.0.0.1:5000/api/add-data', dataToSend, {
                withCredentials: true,
            });
    
            if (response.status === 200) {
                alert("Data submitted successfully!");
            } else {
                alert("Error submitting data: " + response.statusText);
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Error submitting data: " + error.message);
        }
    };
    

    const handleGetSavingsPlan = async () => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/predict`, { user_id: user.uid }, {
                withCredentials: true,
            });
            setSavingsPlan(response.data);
        } catch (error) {
            console.error("Error fetching savings plan:", error);
            setError("Error getting the savings plan. Please try again.");
        }
    };

    const handleLogout = async () => {
        try {
          await axios.get('http://127.0.0.1:5000/logout');
          signOut();
          window.location.href = '/'; 
        } catch (error) {
          console.error('Error logging out:', error);
        }
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const formatSavingsPlan = (savingsPlan) => {
        let formattedText = '';
        for (const [key, value] of Object.entries(savingsPlan)) {
            formattedText += `${key}: ${value}\n`;
        }
        return formattedText;
    };
    
    const downloadSavingsPlan = () => {
        const doc = new jsPDF();
    
        // Format the savings plan into a readable text format
        const formattedSavingsPlan = formatSavingsPlan(savingsPlan);
        const lines = formattedSavingsPlan.split('\n');
    
        // Add each line to the PDF
        lines.forEach((line, index) => {
            doc.text(line, 10, 10 + (index * 10));
        });
    
        // Save the PDF
        doc.save(`savings_plan_${formData.month}.pdf`);
    };
    

    return (
        <div className="form-container">
            <nav className="navbar">
                <div className="container-fluid">
                    <img
                        src="https://i.ibb.co/V34yYZT/removal-ai-ca41a68d-d9a3-42f5-8111-14f6f72bbcb8-planmybucks.png"
                        style={{ height: '6rem' }}
                        alt="Logo"
                        className="navbar-brand"
                    />
                    <div className="d-flex position-relative">
                        {/* <button className="profile-button" onClick={toggleDropdown}>
                            <CircleUserRound size={30} />
                        </button> */}
                        <span className='lg:text-lg md:text-sm sm:text-xs'>{user.name}</span> 
                        {user.profileImage ? (
                            <img
                                src={user.profileImage}
                                alt="User Avatar"
                                className="lg:h-10 lg:w-10 md:h-8 md:w-8 sm:h-6 sm:w-6 rounded-full cursor-pointer"
                                onClick={toggleDropdown}
                            />
                        ) : (
                            <CircleUserRound strokeWidth={1.25} 
                                size={10}
                                className="lg:h-10 lg:w-10 md:h-8 md:w-8 sm:h-6 sm:w-6 cursor-pointer pl-1 pb-2"
                                onClick={toggleDropdown}
                            />
                        )}
                        {dropdownVisible && (
                            <div
                                ref={dropdownRef}
                                className="absolute mt-4 w-48 bg-zinc-800 text-white rounded-lg shadow-lg flex flex-col items-center right-0 border border-gray-700 z-10"
                            >
                                <button className="px-4 py-2 hover:bg-zinc-700 w-full text-center rounded-lg transition duration-200 ease-in-out"
                                onClick={() => setShowUpload(true)}>
                                    Upload Picture
                                </button>
                                {showUpload && <Uploadpic onClose={()=> {setShowUpload(false)}}/>}
                                <button className="px-4 py-2 hover:bg-zinc-700 w-full text-center rounded-lg transition duration-200 ease-in-out border-t border-gray-700" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="form-card1 flex justify-content-center mt-5">
                <div className="form-card2">
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 className="form-heading">Enter your expenditure here</h2>

                        <div className="form-field">
                            <input 
                                required 
                                placeholder="Month (YYYY-MM)" 
                                className="input-field" 
                                type="month" 
                                name="month"
                                value={formData.month}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                required 
                                placeholder="Income" 
                                className="input-field" 
                                type="number" 
                                name="income"
                                value={formData.income}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Groceries" 
                                className="input-field" 
                                type="number" 
                                name="groceries"
                                value={formData.groceries}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Rent" 
                                className="input-field" 
                                type="number" 
                                name="rent"
                                value={formData.rent}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Entertainment" 
                                className="input-field" 
                                type="number" 
                                name="entertainment"
                                value={formData.entertainment}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="EMI" 
                                className="input-field" 
                                type="number" 
                                name="emi"
                                value={formData.emi}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Loans" 
                                className="input-field" 
                                type="number" 
                                name="loans"
                                value={formData.loans}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Transport" 
                                className="input-field" 
                                type="number" 
                                name="transport"
                                value={formData.transport}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Utilities" 
                                className="input-field" 
                                type="number" 
                                name="utilities"
                                value={formData.utilities}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Bills" 
                                className="input-field" 
                                type="number" 
                                name="bills"
                                value={formData.bills}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Fee" 
                                className="input-field" 
                                type="number" 
                                name="fee"
                                value={formData.fee}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Savings" 
                                className="input-field" 
                                type="number" 
                                name="savings"
                                value={formData.savings}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <input 
                                placeholder="Other Expenditures (comma-separated, e.g. Food:200, Travel:100)" 
                                className="input-field" 
                                type="text" 
                                name="otherExpenditures"
                                value={formData.otherExpenditures}
                                onChange={handleChange}
                            />
                        </div>

                        <center><div className="form-submit">
                            <input 
                                className="submit-button" 
                                type="submit" 
                                value="Submit" 
                            />
                        </div></center>
                    </form>

                    <div className="show-plan">
                        <button 
                            className="savings-plan-button" 
                            onClick={handleGetSavingsPlan}
                        >
                            Get Savings Plan
                        </button>
                    </div>
                    
                    {savingsPlan && (
                        <div className="savings-plan">
                            <center><h2>SAVINGS PLAN</h2></center>
                            <br />
                            <div className="center-text">
                            <div className="savings-plan-details">
                                {Object.entries(savingsPlan).map(([key, value], index) => (
                                <p key={index}>
                                    <strong>{capitalizeFirstLetter(key.replace('_', ' '))}:</strong> 
                                    <span className="savings-value">
                                    <IndianRupee size={15} className="rupee-icon" />
                                    {value}
                                    </span>
                                </p>
                                ))}
                            </div>
                            </div>
                            <br />
                            <button className="download-button" onClick={downloadSavingsPlan}>
                            <span className="download-content">
                                <Download className="download-icon" />
                                <span>Download</span>
                            </span>
                            </button>
                        </div>
                        )}


                    
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Form;
