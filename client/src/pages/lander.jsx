import { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup"

const Lander = () => {
    const [showSignup,setShowSignup] = useState(false)
    const [showLogin,setShowLogin] = useState(false)
    return (
        <div>
            <button onClick={() => setShowSignup(true)} className="px-3 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">Signup</button>
            <button onClick={() => setShowLogin(true)} className="border border-#c48d00 hover:bg-zinc-700 text-#c48d00 font-bold py-2 px-4 rounded login">Login</button>
            {showSignup && <Signup onClose={()=> {setShowSignup(false)}}/>}
            {showLogin && <Login onClose = {() => {setShowLogin(false)}}/>}
        </div>
    );
}

export default Lander;