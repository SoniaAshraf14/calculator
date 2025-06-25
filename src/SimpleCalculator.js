import React, { useState } from 'react';

function SimpleCalculator() {
  const [display, setDisplay] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (value) => {
    if (!operator) {
      const updated = firstNumber + value;
      setFirstNumber(updated);
      setDisplay(updated);
    } else {
      const updated = secondNumber + value;
      setSecondNumber(updated);
      setDisplay(firstNumber + ' ' + operator + ' ' + updated);
    }
  };

  const handleOperatorClick = (op) => {
    if (firstNumber !== '' && !operator) {
      setOperator(op);
      setDisplay(firstNumber + ' ' + op + ' ');
    }
  };
  const handleBackspace = () => {
  if (!operator) {
    const updated = firstNumber.slice(0, -1);  // remove last char
    setFirstNumber(updated);
    setDisplay(updated);
  } else if (secondNumber) {
    const updated = secondNumber.slice(0, -1);
    setSecondNumber(updated);
    setDisplay(firstNumber + ' ' + operator + ' ' + updated);
  } else if (operator) {
    setOperator('');
    setDisplay(firstNumber);
  }
};

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let res = 0;

    if (operator === '+') res = num1 + num2;
    else if (operator === '-') res = num1 - num2;
    else if (operator === '*') res = num1 * num2;
    else if (operator === '/') {
      if (num2 === 0) {
        return "Cannot divide by 0";
      }
      res = num1 / num2;
    }

    setDisplay(res.toString());
    // Reset for new calculation
    setFirstNumber(res.toString());
    setSecondNumber('');
    setOperator('');
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperator('');
    setDisplay('');
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="display">{display || '0'}</div>

      <div className="buttons">
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num.toString())}>
            {num}
          </button>
        ))}

        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={handleBackspace}>X</button>
        <button onClick={clear} className='clear'>C</button>
      </div>
    </div>
  );
}

export default SimpleCalculator;
