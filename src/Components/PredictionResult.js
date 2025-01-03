import React from "react";
import "./PredictionResult.css";

const PredictionResult = ({ prediction }) => {
  return (
    <div className="prediction-result-container">
      <div className="prediction-card">
        <h2>Prediction Result</h2>
        <p className="prediction-text">
          Based on the analysis, the system predicts:
        </p>
        <div className="prediction-highlight">{prediction}</div>
        <div className="action-buttons">
          <button
            className="new-analysis-button"
            onClick={() => window.location.reload()}
          >
            Start New Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;
