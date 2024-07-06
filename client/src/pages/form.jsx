import "../styles/form.css";
import axios from "axios";
import { CircleUserRound } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Uploadpic from "../components/uploadpic.jsx";
import { useSession } from "../contexts/SessionContext";
import { db } from "../config/firebase";  // Import the Firestore instance
import { collection, doc, setDoc, serverTimestamp, getDoc, updateDoc } from "firebase/firestore";

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
        creditCardBills: '',
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
            creditCardBills,
            fee,
            savings,
            otherExpenditures
        } = formData;

        // Convert empty strings to '0' for numerical fields
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
            creditCardBills: creditCardBills === '' ? '0' : creditCardBills,
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

        const docRef = doc(collection(db, 'users', user.uid, 'previous_months'), month);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            await updateDoc(docRef, {
                income: parseFloat(cleanedFormData.income),
                groceries: parseFloat(cleanedFormData.groceries),
                rent: parseFloat(cleanedFormData.rent),
                entertainment: parseFloat(cleanedFormData.entertainment),
                emi: parseFloat(cleanedFormData.emi),
                loans: parseFloat(cleanedFormData.loans),
                transport: parseFloat(cleanedFormData.transport),
                utilities: parseFloat(cleanedFormData.utilities),
                credit_card_bills: parseFloat(cleanedFormData.creditCardBills),
                fee: parseFloat(cleanedFormData.fee),
                savings: parseFloat(cleanedFormData.savings),
                total_expenditure,
                other_expenditures: otherExpendituresDict,
                timestamp: serverTimestamp()
            });
        } else {
            await setDoc(docRef, {
                income: parseFloat(cleanedFormData.income),
                groceries: parseFloat(cleanedFormData.groceries),
                rent: parseFloat(cleanedFormData.rent),
                entertainment: parseFloat(cleanedFormData.entertainment),
                emi: parseFloat(cleanedFormData.emi),
                loans: parseFloat(cleanedFormData.loans),
                transport: parseFloat(cleanedFormData.transport),
                utilities: parseFloat(cleanedFormData.utilities),
                credit_card_bills: parseFloat(cleanedFormData.creditCardBills),
                fee: parseFloat(cleanedFormData.fee),
                savings: parseFloat(cleanedFormData.savings),
                total_expenditure,
                other_expenditures: otherExpendituresDict,
                timestamp: serverTimestamp()
            });
        }

        alert("Data submitted successfully!");
    };

    const handleGetSavingsPlan = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/predict`, { user_id: user.uid }, {
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

    return (
        <div className="form-container">
            <nav className="navbar bg-body-tertiary px-2">
                <div className="container-fluid">
                    <img
                        src="https://i.ibb.co/V34yYZT/removal-ai-ca41a68d-d9a3-42f5-8111-14f6f72bbcb8-planmybucks.png"
                        style={{ height: '6rem', paddingRight: '1rem' }}
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
                            <CircleUserRound
                                size={30}
                                className="lg:h-10 lg:w-10 md:h-8 md:w-8 sm:h-6 sm:w-6 cursor-pointer"
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

            <div className="form-card1 flex justify-content-center">
                <div className="form-card2">
                    <form className="form" onSubmit={handleSubmit}>
                        <p className="form-heading">Get In Touch</p>

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
                                placeholder="Credit Card Bills" 
                                className="input-field" 
                                type="number" 
                                name="creditCardBills"
                                value={formData.creditCardBills}
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

                        <div className="form-field">
                            <input 
                                className="submit-button" 
                                type="submit" 
                                value="Submit" 
                            />
                        </div>
                    </form>

                    <div className="form-field">
                        <button 
                            className="savings-plan-button" 
                            onClick={handleGetSavingsPlan}
                        >
                            Get Savings Plan
                        </button>
                    </div>
                    
                    {savingsPlan && (
                        <div>
                            <h2>Savings Plan</h2>
                            <div className="savings-plan">
                                {Object.entries(savingsPlan).map(([key, value], index) => (
                                    <p key={index}><strong>{key.replace('_', ' ')}:</strong> {value}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Form;
