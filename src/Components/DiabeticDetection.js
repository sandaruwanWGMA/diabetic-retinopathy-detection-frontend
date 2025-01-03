import React, { useState } from "react";
import Navbar from "./Navbar";
import "./DiabeticDetection.css";
import BackgroundShapes from "./BackgroundShapes";
import axios from "axios";
import PredictionResult from "./PredictionResult";

const DiabeticDetection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPrediction(null); // Clear previous prediction when a new image is uploaded
    }
  };

  const handleCancelUpload = () => {
    setSelectedImage(null);
    setPrediction(null);
    setShowResults(false);
  };

  const handlePredict = async () => {
    if (!selectedImage) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setPrediction(response.data.class);
      setShowResults(true);
      console.log("Prediction result:", response.data.class);
    } catch (error) {
      console.error("Error making prediction:", error);
      alert("Error making prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dia-detection-container">
      <Navbar />
      <BackgroundShapes />
      <div className="dia-main-section">
        <h1>Diabetic Detection</h1>
        <p>
          Upload a retinal image, and our system will analyze it to predict the
          stage of diabetic retinopathy.
        </p>
        <div className="dia-buttons-container">
          <div className="dia-uploader">
            <label htmlFor="file-upload" className="dia-uploader-label">
              Upload Photo
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <button
              className="dia-predict-button"
              onClick={handlePredict}
              disabled={loading}
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </div>
        </div>

        <div className="dia-row-container">
          {selectedImage && (
            <div className="dia-preview-section">
              <h2>Uploaded Image</h2>
              <div className="dia-image-container">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Uploaded"
                  className="dia-uploaded-image"
                />
                <div className="dia-cancel-icon" onClick={handleCancelUpload}>
                  ✕
                </div>
              </div>
            </div>
          )}

          {showResults && <PredictionResult prediction={prediction} />}
        </div>
      </div>
    </div>
  );
};

export default DiabeticDetection;
