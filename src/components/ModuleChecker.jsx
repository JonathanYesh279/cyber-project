import React from 'react';

function ModuleChecker({ children, number }) {
  return (
    <div className='module-checker'>
      <h2>Tell Us About Your Module</h2>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { number: index + 1 });
      })}
    </div>
  );
}

export default ModuleChecker;
