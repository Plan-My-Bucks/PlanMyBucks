import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LanderPage from "./pages/lander.jsx"
import Form from "./pages/form.jsx"
import ProtectedRoute from './components/protectedRoute';
import { SessionProvider } from './contexts/SessionContext';
import ForgotPassword from './pages/forgetPassword';
import GoogleRedirectHandler from './components/googleredirecthandler'; // Import the GoogleRedirectHandler component

function App() {
  return (
    <SessionProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route index element={< LanderPage />} />
          <Route path="/form" element={<ProtectedRoute><Form /></ProtectedRoute>} />
          <Route path="/google-redirect" element={<GoogleRedirectHandler />} /> {/* Add the GoogleRedirectHandler route */}
          <Route path="/forgetpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
    </SessionProvider>
  );
}

export default App;