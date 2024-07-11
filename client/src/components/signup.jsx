import React, { useState } from "react";
import "../styles/signup.css";
import axios from 'axios';
import { X, User, Phone, Lock } from 'lucide-react'; // Assuming User icon is imported from lucide-react
import Login from "../components/login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = ({ onClose }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    if (showLogin) {
        return <Login onClose={() => setShowLogin(false)} />;
    }

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  // Reset error message

        if (formData.password.length < 6) {
            setError("Password should be at least 6 characters long.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('https://planmybucks.onrender.com/signup', formData);
            console.log(response.data);
            if (response.status === 201) {
                // Close the signup component
                toast.success("Account created successfully!");
                setTimeout(() => {
                    onClose(); // Close the signup component after the delay
                }, 3000);
            } else {
                // Handle other response statuses if needed
                setError(`Error creating account: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Error submitting form', error.response ? error.response.data : error.message);
            setError(`Error submitting form: ${error.response ? error.response.data.message : error.message}`);
            toast.error(`Error submitting form: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    const handleGoogleSignin = async (e) => {
        e.preventDefault();
        window.location.href = 'https://planmybucks.onrender.com/signin/google';
    };


    return (
        <div className="position-fixed overflow-auto top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center align-items-sm-start pt-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", zIndex: 1050 }}>
            <div className="flex flex-col">
                <button onClick={onClose} className="place-self-end text-white"><X size={20} /></button>
                <div className="signup-form">
                {error && <div className="error">{error}</div>}
                    <form onSubmit={handleSubmit} className=" mt-1">
                        <h2 className="text-center font-bold text-2xl">Signup</h2>
                        <div className="flex-column">
                            <label>Name </label>
                        </div>
                        <div className="inputForm">
                            <User strokeWidth={1.5} />
                            <input required placeholder="Enter your Name" className="input" type="text" name="name" onChange={handleChange} value={formData.name}/>
                        </div><br></br>

                        <div className="flex-column">
                            <label>Mobile </label>
                        </div>
                        <div className="inputForm">
                            <Phone strokeWidth={1.25} />
                            <input required placeholder="Enter your Mobile Number" className="input" type="text" name="mobile" onChange={handleChange} value={formData.mobile}/>
                        </div><br></br>

                        <div className="flex-column">
                            <label>Email </label>
                        </div>
                        <div className="inputForm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
                                <g data-name="Layer 3" id="Layer_3">
                                    <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                                </g>
                            </svg>
                            <input required placeholder="Enter your Email" className="input" type="text" name="email" onChange={handleChange} value={formData.email}/>
                        </div><br></br>
                        
                        <div className="flex-column">
                            <label>Password </label>
                        </div>
                        <div className="inputForm">
                            <Lock strokeWidth={1.25} />      
                            <input required placeholder="Enter your Password" className="input" type="password" name="password" onChange={handleChange} value={formData.password}/>
                        </div><br></br>

                        <div className="flex-column">
                            <label>Confirm Password </label>
                        </div>
                        <div className="inputForm">
                            <Lock strokeWidth={1.25} />
                            <input required placeholder="Repeat Password Again" className="input" type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword}/>
                        </div><br></br>
                        
                        <div className="flex-row">
                            <span className="span">Forgot password?</span>
                        </div>
                        <button className="button-submit">Sign Up</button>
                        </form>
                        <p className="p">Already have an account? <a className="span" onClick={handleLoginClick}>Login</a></p>
                        <p className="p line">Or With</p>

                        <div className="flex-row">
                            <button className="button google" onClick={handleGoogleSignin}>
                                <svg xmlSpace="preserve" style={{ enableBackground: "new 0 0 512 512" }} viewBox="0 0 512 512" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="20" version="1.1">
                                    <path d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z" style={{ fill: "#FBBB00" }}></path>
                                    <path d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" style={{ fill: "#518EF8" }}></path>
                                    <path d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" style={{ fill: "#28B446" }}></path>
                                    <path d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z" style={{ fill: "#F14336" }}></path>
                                </svg>
                                Google 
                            </button>
                        </div>
                    
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Signup;