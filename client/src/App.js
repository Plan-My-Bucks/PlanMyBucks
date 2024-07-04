import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LanderPage from "./pages/lander.jsx"
import Form from "./pages/form.jsx"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={< LanderPage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;