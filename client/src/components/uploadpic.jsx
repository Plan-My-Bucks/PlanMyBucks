import "../styles/uploadpic.css";
import { X } from 'lucide-react';


const Uploadpic = ({ onClose }) => {
    return (
        <div className="uploadpic-container">
            <div className="position-fixed top-50 start-50 translate-middle w-full vh-100 d-flex justify-content-center align-items-center"
                 style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", zIndex: 1050 }}>
                <div className="bg-white rounded  flex flex-col p-1">
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
                                <input id="file" type="file" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Uploadpic;