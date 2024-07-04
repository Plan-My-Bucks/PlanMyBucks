import "../styles/form.css";
import { CircleUserRound } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Uploadpic from "../components/uploadpic.jsx";

const Form = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [showUpload, setshowUpload] = useState(false);

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
                        <button className="profile-button" onClick={toggleDropdown}>
                            <CircleUserRound size={30} />
                        </button>
                        {dropdownVisible && (
                            <div
                                ref={dropdownRef}
                                className="absolute mt-4 w-48 bg-zinc-800 text-white rounded-lg shadow-lg flex flex-col items-center right-0 border border-gray-700 z-10"
                            >
                                <button className="px-4 py-2 hover:bg-zinc-700 w-full text-center rounded-lg transition duration-200 ease-in-out"
                                onClick={() => setshowUpload(true)}>
                                    Upload Picture
                                </button>
                                {showUpload && <Uploadpic onClose={()=> {setshowUpload(false)}}/>}
                                <button className="px-4 py-2 hover:bg-zinc-700 w-full text-center rounded-lg transition duration-200 ease-in-out border-t border-gray-700">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="form-card1 flex justify-content-center">
                <div className="form-card2">
                    <form className="form">
                        <p className="form-heading">Get In Touch</p>

                        <div className="form-field">
                            <input required="" placeholder="Month" className="input-field" type="date" />
                        </div>

                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Monthly Income"
                                className="input-field"
                                type="text"
                            />
                        </div>

                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Electricity Bill"
                                className="input-field"
                                type="text"
                            />
                        </div>
                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Groceries Expenditure"
                                className="input-field"
                                type="text"
                            />
                        </div>
                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Rent Expenditure"
                                className="input-field"
                                type="text"
                            />
                        </div>
                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Entertainment Expenditure"
                                className="input-field"
                                type="text"
                            />
                        </div>
                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Emi Payment"
                                className="input-field"
                                type="text"
                            />
                        </div>
                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Loan Payment"
                                className="input-field"
                                type="text"
                            />
                        </div>
                        <div className="form-field">
                            <input
                                required=""
                                placeholder="Savings"
                                className="input-field"
                                type="text"
                            />
                        </div>

                        <div className="form-field">
                            <textarea
                                required=""
                                placeholder="Other Payments"
                                cols="30"
                                rows="3"
                                className="input-field"
                            ></textarea>
                        </div>
                        <center>
                            <button className="sendMessage-btn">Submit</button><br></br>
                            <button className="sendMessage-btn">Get Savings Plan</button>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
