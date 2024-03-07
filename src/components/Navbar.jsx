import '../index.css'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h2><Link to='/'>CyberProject</Link></h2> 
        <ul className='nav-links'>
            <li className='nav-link'><Link to='/about'>About</Link></li>
            <li className='nav-link'><Link to='/register'>Register</Link></li>
            <li className='nav-link'><Link to='/Login'>Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}


export default Navbar
