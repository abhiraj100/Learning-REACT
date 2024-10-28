import React from "react";
import "./Stepper.css";
import { useState } from "react";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  console.log(currentStep);

  // backHandler
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  // continueHandler
  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <>
      <div className="stepper">
        <div>
          {steps.map(({ label, content }, index) => {
            return (
              <div key={index + 1} className="stepper-container">
                <div
                  className={`step-number ${
                    index <= currentStep ? "active" : ""
                  }`}
                >
                  {index + 1}
                  {index < steps.length - 1 && (
                    <div
                      className={`step-line ${
                        index < currentStep ? "active" : ""
                      }`}
                    ></div>
                  )}
                </div>
                <div className="step-label">{label}</div>
              </div>
            );
          })}
        </div>

        <div
          style={{ fontSize: "40px", fontWeight: "bold", color: "#017bfe", textDecoration: "underline" }}
          className="stepper-content"
        >
          {steps[currentStep].content}
        </div>
        <div className="stepper-controls">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: "30px", color: "#fff", fontWeight: "bold"}}>Created By Abhiraj Yadav</div>
    </>
  );
};

export default Stepper;
