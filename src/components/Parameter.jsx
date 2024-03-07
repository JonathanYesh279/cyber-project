import React from 'react';
import { useState } from 'react';
 
function Parameter({ label }) {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='parameter'>
      <label>{label}</label>
      <input
        className='input-parameter'
        type='text'
        placeholder='Parameter'
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Parameter;
