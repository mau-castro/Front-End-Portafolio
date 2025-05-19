import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
const ResponsiveMenu = ({handler}) => {
  const redirect = () => {
    window.open('www.facebook.com', '_blank');
  };
  return (
    <div onClick={() => handler(false)} className='responsive-menu'>
      <div className='menu-container-responsive'>
      <Link
          className='row'
          to='/Quienes-Somos'
        >
        <button onClick={() => handler(false)} className='button'>¿Quiénes Somos?</button>
        </Link>
        <Link
          className='row'
          to='/Directorio'
        >
          <button onClick={() => handler(false)} className='button'>Directorio</button>
        </Link>

        <Link
          className='row'
          to='/Contacto'
        >
          <button onClick={() => handler(false)} className='button'>Contacto</button>
        </Link>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
