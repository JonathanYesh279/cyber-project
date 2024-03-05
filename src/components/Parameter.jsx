import React from 'react';
import { useState } from 'react';
 
function Parameter({ number }) {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='parameter'>
      <label htmlFor={`param-${number}`}>Parameter #{number}</label>
      <input
        className='input-parameter'
        type='text'
        id={`param-${number}`}
        placeholder='Parameter'
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Parameter;
