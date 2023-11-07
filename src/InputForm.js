import React from 'react';

function InputForm({ onIncomeChange, onCalculate }) {
  return (
    <div className="container">
      <label htmlFor="income">Annual Income (CAD):</label>
      <input type="number" id="income" placeholder="Gross salary" onChange={(e) => onIncomeChange(e.target.value)} />
      <br /><br />
      <button className="calculate-button" onClick={onCalculate}>Calculate</button>
    </div>
  );
}

export default InputForm;
