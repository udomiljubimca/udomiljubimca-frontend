import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ popUp, mobileNav }) {
  return (
    <nav className={`main-nav ${mobileNav ? "mobile-nav-show" : ""}`}>
      <li className="main-nav-item">
        <Link className="main-nav-link" to="/">
          Udruženja
        </Link>
      </li>
      <li className="main-nav-item nav-dropdown-parent">
        <span className="main-nav-link">
          Saveti <FaChevronDown />
        </span>
        <ul className="nav-dropdown-list">
          <li className="nav-dropdown-item">
            <Link className="nav-dropdown-link" to="#">
              Česta pitanja
            </Link>
          </li>
          <li className="nav-dropdown-item">
            <Link className="nav-dropdown-link" to="#">
              Veterinar
            </Link>
          </li>
          <li className="nav-dropdown-item">
            <Link className="nav-dropdown-link" to="#">
              Iskustva
            </Link>
          </li>
        </ul>
      </li>
      <li className="main-nav-item">
        <Link className="main-nav-link" to="/blog">
          Blog
        </Link>
      </li>
      <li className="main-nav-item" onClick={() => popUp(true)}>
        <Link className="main-nav-link" to="#">
          Prijavi se
        </Link>
      </li>
      <li className="main-nav-item nav-dropdown-parent">
        <span className="main-nav-link custom-btn btn-primary d-block">
          Registruj se
        </span>
        <ul className="nav-dropdown-list">
          <li className="nav-dropdown-item">
            <Link to="/registracija-korisnika">Kao korisnik</Link>
          </li>
          <li className="nav-dropdown-item">
            <Link to="/registracija-udruzenja">Kao udruzenje</Link>
          </li>
        </ul>
      </li>
    </nav>
  );
}

export default Nav;
