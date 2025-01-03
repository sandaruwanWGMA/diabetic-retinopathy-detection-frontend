import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import DiabeticDetection from "./Components/DiabeticDetection";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diabetic-detection" element={<DiabeticDetection />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// {
//   prediction && (
//     <div className="dia-result-section">
//       <h2>Prediction Result</h2>
//       <p className="dia-predicted-class">
//         The predicted class is: <strong>{prediction}</strong>
//       </p>
//     </div>
//   );
// }
