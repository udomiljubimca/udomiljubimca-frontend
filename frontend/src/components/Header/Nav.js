import { FaChevronDown } from 'react-icons/fa';
import './Nav.css';

function Nav({ popUp, mobileNav }) {
  return (
    <nav className={`main-nav ${mobileNav ? 'mobile-nav-show' : ''}`}>
      <li className='main-nav-item'>
        <a className='main-nav-link' href='/#'>
          Udruženja
        </a>
      </li>
      <li className='main-nav-item nav-dropdown-parent'>
        <a className='main-nav-link' href='/#'>
          Saveti <FaChevronDown />
        </a>
        <ul className='nav-dropdown-list'>
          <li className='nav-dropdown-item'>
            <a className='nav-dropdown-link' href='/#'>
              Česta pitanja
            </a>
          </li>
          <li className='nav-dropdown-item'>
            <a className='nav-dropdown-link' href='/#'>
              Veterinar
            </a>
          </li>
          <li className='nav-dropdown-item'>
            <a className='nav-dropdown-link' href='/#'>
              Iskustva
            </a>
          </li>
        </ul>
      </li>
      <li className='main-nav-item'>
        <a className='main-nav-link' href='/blog'>
          Blog
        </a>
      </li>
      <li className='main-nav-item' onClick={() => popUp(true)}>
        <a className='main-nav-link' href='/#'>
          Prijavi se
        </a>
      </li>
      <li className='nav-dropdown-reg-parent'>
        <a className='nav-register-btn' href='/#'>
          Registruj se
        </a>
        <ul className='nav-dropdown-reg-list'>
          <li className='register-dropdown-item'>
            <a className='reg-dropdown-link' href='/#'>
              <span>Kao udruženje</span>
            </a>
          </li>
          <li className='register-dropdown-item'>
            <a className='reg-dropdown-link' href='/#'>
              <span>Kao korisnik</span>
            </a>
          </li>
        </ul>
      </li>
    </nav>
  );
}

export default Nav;
