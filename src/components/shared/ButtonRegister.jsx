import { FcGoogle } from 'react-icons/fc';
import { FaGithub, } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function ButtonRegister({ provider, onClick }) {
  let icon;

  if (provider === 'Google') {
    icon = <FcGoogle size={20} />;
  } else if (provider === 'GitHub') {
    icon = <FaGithub size={20} />
  } else if (provider === 'Facebook') {
    icon = <FaFacebook size={20} />
  }
  return (
    <button onClick={onClick} className='login-button'>
        {icon}
        <p>Sign in with {provider}</p>
    </button>
  );
}

export default ButtonRegister;
