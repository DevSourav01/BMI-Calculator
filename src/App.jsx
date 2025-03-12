import React, { useState } from "react";
import "./index.css";
function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();

    if (height > 0 && weight > 0) {
      const heightInMeter = height / 100;
      const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory("Normal");
      else if (bmiValue >= 25 && bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    } else {
      setBmi(null);
      setCategory("Invalid Input");
    }
  };

  const resetForm = () => {
    setBmi("");
    setCategory("");
    setHeight("");
    setWeight("");
  };

  return (
    <form className="form-container" onSubmit={calculateBmi}>
      <div className="bmi-form">
        <h1>BMI Calculator</h1>
        <input
          type="number"
          placeholder="Height(cm)"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Weight(kg)"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <div className="butto-container">
          <button className="submit">Calculate</button>
          <button className="reset" onClick={resetForm}>
            Reset
          </button>
        </div>
        {bmi && (
          <h2 className="output">
            BMI: {bmi} - <span>{category}</span>
          </h2>
        )}
      </div>
    </form>
  );
}

export default BMI;
