

function Button() {
  const handleClick = (e) => {
    e.preventDefault()
  }
  
  return (
    <button className="btn"
      onClick={handleClick}>
      Send
    </button>
  )
}

export default Button
