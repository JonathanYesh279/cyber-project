import PropTypes from 'prop-types'
import '../index.css'


function Header({ children }) {
 
  return (
    <header>
      <div className="header">
        <h2>CyberProject</h2> 
        <ul className='nav-links'>{children}</ul>
      </div>
    </header>
  )
}


Header.propTypes = {
  children: PropTypes.node
}

export default Header
