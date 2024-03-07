

function Button({ onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick()
  };

  return (
    <button className='btn' onClick={handleClick}>
      Send
    </button>
  );
}

export default Button
