import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar";
import BackgroundShapes from "./BackgroundShapes";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />
      <BackgroundShapes />
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Diabetic Retinopathy Detection</h1>
          <p>
            Diabetic retinopathy is a serious complication of diabetes that
            affects the retina. It arises from prolonged high blood sugar
            levels, causing damage to the tiny blood vessels in the retina. If
            untreated, it can progress to severe stages, resulting in
            significant vision loss or blindness.
          </p>
          <p>
            Our application uses cutting-edge machine learning techniques to
            detect diabetic retinopathy early. By analyzing retinal images with
            advanced transfer learning models like GoogleNet and ResNet18, we
            provide accurate classifications of the condition's stages. Early
            detection is critical to prevent vision impairment and improve
            patient outcomes.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Diabetic Retinopathy Detection | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
