import React, { useState } from 'react';

function NumberConverter() {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleInputChange = (event) => {
    const filteredValue = event.target.value.replace(/[^0-9.]/g, ''); // Allow only numbers and periods
    setInputValue(filteredValue);
  };

  const convertNumber = () => {
    // Validate input first
    if (!inputValue || isNaN(Number(inputValue))) {
      setConvertedValue('Invalid input. Please enter a valid number.');
      return;
    }

    const number = parseFloat(inputValue);
    let convertedNumber = '';

    const UNITS = [
      { unit: 'Billion', divisor: 1000000000 },
      { unit: 'Crore', divisor: 10000000 },
      { unit: 'Lakh', divisor: 100000 },
      { unit: '' }, // No unit for thousands or below
    ];

    for (const unit of UNITS) {
      if (number >= unit.divisor) {
        convertedNumber = (number / unit.divisor).toFixed(2) + ' ' + unit.unit;
        break;
      }
    }

    setConvertedValue(convertedNumber);
  };

  return (
    <div className="NumberConverter">
      <h1>Number Converter</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={convertNumber}>Convert</button>
      <p>{convertedValue}</p>
    </div>
  );
}

export default NumberConverter;
