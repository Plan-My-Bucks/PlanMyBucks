import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LanderPage from "./pages/lander.js"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={< LanderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
