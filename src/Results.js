import React from 'react';

function Results({ takeHome, monthlyIncome, weeklyIncome }) {
  return (
    <div id="results">
      <p>Total Take-Home: ${takeHome}</p>
      <p>Monthly Income (After Tax): ${monthlyIncome}</p>
      <p>Weekly Income (After Tax): ${weeklyIncome}</p>
    </div>
  );
}

export default Results;
