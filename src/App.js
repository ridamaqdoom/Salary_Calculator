import React, { useState } from 'react';
import ProvinceSelector from './ProvinceSelector';
import InputForm from './InputForm';
import Results from './Results';
import TaxRatesTable from './TaxRatesTable';
import './App.css';

function App() {
  const [income, setIncome] = useState('');
  const [selectedProvince, setProvince] = useState('');
  const taxRates = [
   
  ];

  const [results, setResults] = useState({
    takeHome: '',
    monthlyIncome: '',
    weeklyIncome: '',
  });

  const calculateSalary = () => {
    const income = parseFloat(document.getElementById("income").value);
    const province = document.getElementById("province").value;
    let taxRate = 0;

    // Set tax rates based on selected province
    switch (province) {
        case "quebec":
            taxRate = 28.2;
            break;
        case "nova_scotia":
            taxRate = 27.5;
            break;
        case "prince_edward_island":
            taxRate = 26.6;
            break;
        case "newfoundland_and_labrador":
            taxRate = 25.9;
            break;
        case "manitoba":
            taxRate = 25.7;
            break;
        case "new_brunswick":
            taxRate = 25.3;
            break;
        case "saskatchewan":
            taxRate = 24.6;
            break;
        case "alberta":
            taxRate = 23.4;
            break;
        case "ontario":
            taxRate = 23.0;
            break;
        case "yukon":
            taxRate = 22.1;
            break;
        case "british_columbia":
            taxRate = 21.9;
            break;
        case "northwest_territories":
            taxRate = 20.5;
            break;
        case "nunavut":
            taxRate = 18.6;
            break;
        default:
            taxRate = 0; // Default tax rate if province is not selected
    }

    const taxedIncome = income * (1 - taxRate / 100); // Calculate taxed income
    const takeHome = taxedIncome.toFixed(2);
    const monthlyIncome = (taxedIncome / 12).toFixed(2);
    const weeklyIncome = (taxedIncome / 52).toFixed(2);

    const results = `
         <p>Total Take-Home: $${takeHome}</p>
        <p>Monthly Income (After Tax): $${monthlyIncome}</p>
        <p>Weekly Income (After Tax): $${weeklyIncome}</p>
    `;
   
    document.getElementById("results").innerHTML = results;
  };

  return (
    
    <div class= "App">
     <div class="img1"><img  class="image" src="../O.png"></img>
    <div className="container">
      <h1>Salary Calculator Canada</h1>
      <label htmlFor="province">Select Province:</label>
      <select id="province" value={selectedProvince} onChange={(e) => setProvince(e.target.value)}>
        <option value="" disabled>Select Province</option>
        <option value="quebec">Quebec</option>
        <option value="nova_scotia">Nova Scotia</option>
        <option value="prince_edward_island">Prince Edward Island</option>
        <option value="newfoundland_and_labrador">Newfoundland and Labrador</option>
        <option value="manitoba">Manitoba</option>
        <option value="new_brunswick">New Brunswick</option>
        <option value="saskatchewan">Saskatchewan</option>
        <option value="alberta">Alberta</option>
        <option value="ontario">Ontario</option>
        <option value="yukon">Yukon</option>
        <option value="british_columbia">British Columbia</option>
        <option value="northwest_territories">Northwest Territories</option>
        <option value="nunavut">Nunavut</option>
       
      </select>
      <br /><br />
      <label htmlFor="income">Annual Income (CAD):</label>
      <input type="number" id="income" placeholder="Gross salary" value={income} onChange={(e) => setIncome(e.target.value)} />
      <br /><br />
      <button className="calculate-button" onClick={calculateSalary}>Calculate</button>

      {/* Display results */}
      <div id="results">
            <p id="monthlyIncome"></p>
            <p id="weeklyIncome"></p>
            <p id="takeHome"></p>
        </div>
   </div>
</div>
    {/* Tax rates table outside the container */}
    <div class="tax-table">
        <h2>Tax Rates by Province</h2>
        <table>
            <tr>
                <th>Province</th>
                <th>Tax Rate (%)</th>
            </tr>
            <tr>
                <td>Quebec</td>
                <td>28.2</td>
            </tr>
            <tr>
                <td>Nova Scotia</td>
                <td>27.5</td>
            </tr>
            <tr>
                <td>Prince Edward Island</td>
                <td>26.6</td>
            </tr>
            <tr>
                <td>Newfoundland and Labrador</td>
                <td>25.9</td>
            </tr>
            <tr>
                <td>Manitoba</td>
                <td>25.7</td>
            </tr>
            <tr>
                <td>New Brunswick</td>
                <td>25.3</td>
            </tr>
            <tr>
                <td>Saskatchewan</td>
                <td>24.6</td>
            </tr>
            <tr>
                <td>Alberta</td>
                <td>23.4</td>
            </tr>
            <tr>
                <td>Ontario</td>
                <td>23.0</td>
            </tr>
            <tr>
                <td>Yukon</td>
                <td>22.1</td>
            </tr>
            <tr>
                <td>British Columbia</td>
                <td>21.9</td>
            </tr>
            <tr>
                <td>Northwest Territories</td>
                <td>20.5</td>
            </tr>
            <tr>
                <td>Nunavut</td>
                <td>18.6</td>
            </tr>
        </table>
    </div>
    </div>
  );
}

export default App;
