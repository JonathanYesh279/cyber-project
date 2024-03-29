import { useState } from 'react';
 
function Parameter({ label, onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInputChange(label, e.target.value);
  };

  return (
    <div className='parameter'>
      <label>{label}</label>
      <input
        className='input-parameter'
        type='text'
        placeholder='Input'
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Parameter;
