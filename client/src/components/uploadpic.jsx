import React, { useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';
import { useSession } from '../contexts/SessionContext';
import "../styles/uploadpic.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Uploadpic = ({ onClose }) => {
    const { user, updateUserField } = useSession();
    const [formData, setFormData] = useState({
        profileImage: null,
    });

    const handleInputChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, profileImage: file });
    };

    const handleSubmit = async (field) => {
        const data = new FormData();
        data.append('user', JSON.stringify(user));
        data.append(field, formData[field]);

        if (field === 'profileImage') {
            data.append('profileImage', formData.profileImage);
        }

        try {
            const response = await axios.post(`http://127.0.0.1:5000/update_profile/${field}`, data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Update user profile image URL in session context
            if (response.data.user && response.data.user.profileImage) {
                updateUserField(field, response.data.user.profileImage);
            }

            toast.success(`${field} updated successfully!`);
            // Clear the form field after successful submission
            setFormData((prevFormData) => ({ ...prevFormData, [field]: null }));
            onClose(); // Close the modal after submission
        } catch (error) {
            console.error(error);
            toast.error(`Failed to update ${field}`);
        }
    };

    return (
        <div className="uploadpic-container">
            <div className="position-fixed top-50 start-50 translate-middle w-full vh-100 d-flex justify-content-center align-items-center"
                 style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", zIndex: 1050 }}>
                <div className="bg-white rounded flex flex-col p-1">
                    <button onClick={onClose} className="place-self-end text-black mb-1">
                        <X size={20} />
                    </button>
                    <div className="text-center px-4 pb-4">
                        <form className="file-upload-form text-black">
                            <label htmlFor="file" className="file-upload-label">
                                <div className="file-upload-design">
                                    <svg viewBox="0 0 640 512" height="1em">
                                        <path
                                            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                                        ></path>
                                    </svg>
                                    <p>Drag and Drop</p>
                                    <p>or</p>
                                    <span className="browse-button">Browse file</span>
                                </div>
                                <input type="file" name="profileImage" onChange={handleInputChange} className="mt-1 cursor-pointer lg:w-[20%] md:w-[30%] sm:w-[40%]" id="file" />
                                <button type="button" onClick={() => handleSubmit('profileImage')} className="bg-blue-600 hover:bg-[#c48d00] hover:text-black text-white px-4 py-2 lg:w-40 md:w-36 sm:w-32 mt-2 sm:text-xs md:text-base lg:text-lg rounded-lg cursor-pointer">SUBMIT IMAGE</button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Uploadpic;
