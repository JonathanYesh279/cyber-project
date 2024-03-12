import '../index.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <nav>
      <div className="navbar">
        <h2><Link to='/'>CyberProject</Link></h2> 
        <ul className='nav-links'>
          <li className='nav-link'><Link to='/about'>About</Link></li>
          <li className='nav-link'><Link to='/register'>Register</Link></li>
          {user ? (
            <li className='nav-link'><a href='/login' className='nav-link' onClick={() => auth.signOut()}>Sign Out</a></li>
          ) : (
            <li className='nav-link'><Link to='/Login'>Login</Link></li>  
          )}
            
        </ul>
      </div>
    </nav>
  )
}


export default Navbar
