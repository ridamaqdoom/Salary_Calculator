import React from 'react';

function TaxRatesTable({ taxRates }) {
  return (
    <div className="tax-table">
      <h2>Tax Rates by Province</h2>
      <table>
        <thead>
          <tr>
            <th>Province</th>
            <th>Tax Rate (%)</th>
          </tr>
        </thead>
        <tbody>
          {taxRates.map((province) => (
            <tr key={province.name}>
              <td>{province.name}</td>
              <td>{province.taxRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaxRatesTable;
