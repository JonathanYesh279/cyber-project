import React from 'react';

function Parameter({ number }) {
  return (
    <div className='parameter'>
      <label htmlFor={`param-${number}`}>Parameter #{number}</label>
      <input
        className='input-parameter'
        type='text'
        id={`param-${number}`}
        placeholder='Parameter'
      />
    </div>
  );
}

export default Parameter;
