import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lander from "./pages/lander.jsx"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={< Lander />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
