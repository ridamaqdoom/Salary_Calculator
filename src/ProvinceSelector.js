
import React from 'react';

function ProvinceSelector({ selectedProvince, onProvinceChange }) {
  return (
    <div className="container">
      <h1>Salary Calculator Canada</h1>
      <label htmlFor="province">Select Province:</label>
      <select id="province" value={selectedProvince} onChange={(e) => onProvinceChange(e.target.value)}>
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
    </div>
  );
}

export default ProvinceSelector;
