import React from "react";
import Navbar from "./Navbar";
import "./AboutPage.css";
import BackgroundShapes from "./BackgroundShapes";

const AboutPage = () => {
  return (
    <div className="about-container">
      <Navbar className="about-nav" />
      <BackgroundShapes />
      <div className="about-content">
        <h1 className="about-title">About Our Solution</h1>
        <p className="about-intro">
          Empowering early detection of Diabetic Retinopathy (DR) through
          cutting-edge technology, our solution redefines accessibility to
          critical diagnostics. Leveraging advanced machine learning, we aim to
          enhance patient care and mitigate preventable vision loss.
        </p>

        <section className="about-section">
          <h2>Solution Overview</h2>
          <p>
            Our solution integrates state-of-the-art deep learning models like{" "}
            <strong>GoogleNet</strong> and <strong>ResNet18</strong>,
            meticulously fine-tuned for analyzing high-resolution fundus images.
            This approach ensures precision and reliability in detecting early
            indicators of DR.
          </p>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Deep Learning Models in Action"
            className="about-image"
          />
        </section>

        <section className="about-section">
          <h2>Core Features</h2>
          <ul className="feature-list">
            <li>
              <strong>Streamlined Image Upload:</strong> Intuitive interface for
              seamless fundus image submissions.
            </li>
            <li>
              <strong>Robust Pre-processing:</strong> Advanced image enhancement
              techniques such as resizing, contrast optimization, and noise
              filtering.
            </li>
            <li>
              <strong>Deep Learning Integration:</strong> Proven models like
              GoogleNet and ResNet18 for feature extraction and analysis.
            </li>
            <li>
              <strong>Stage Classification:</strong> Accurate identification of
              DR stages to support tailored treatments.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <div className="about-how-it-works">
            <div className="how-it-works-step">
              <h3>Step 1: Upload Fundus Image</h3>
              <p>
                Upload detailed fundus images, the critical starting point for
                accurate DR analysis.
              </p>
              <img
                src="https://via.placeholder.com/200"
                alt="Image Upload Interface"
                className="about-step-image"
              />
            </div>
            <div className="how-it-works-step">
              <h3>Step 2: Image Pre-processing</h3>
              <p>
                Advanced algorithms enhance image clarity and highlight
                significant visual markers.
              </p>
              <img
                src="https://via.placeholder.com/200"
                alt="Pre-processing Steps"
                className="about-step-image"
              />
            </div>
            <div className="how-it-works-step">
              <h3>Step 3: AI-powered Prediction</h3>
              <p>
                Our system analyzes critical features to classify DR stages,
                providing actionable insights.
              </p>
              <img
                src="https://via.placeholder.com/200"
                alt="AI Prediction Process"
                className="about-step-image"
              />
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Dataset</h2>
          <p>
            This project harnesses the{" "}
            <strong>Diabetic Retinopathy Detection Dataset</strong>, hosted on{" "}
            <a
              href="https://www.kaggle.com/competitions/diabetic-retinopathy-detection"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle
            </a>
            . This dataset includes a comprehensive collection of high-quality
            fundus images essential for model training and validation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
