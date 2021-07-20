import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

import "./Nav.css";

const SavetiIcon = styled(FaChevronDown)`
  position: absolute;
  top: 6px;
  left: 45px;

  height: 12px;
`;

function Nav({ popUp }) {
  return (
    <nav className="main-nav">
      <li className="main-nav-item">
        <a className="main-nav-link" href="/#">
          Pocetna
        </a>
      </li>
      <li className="main-nav-item">
        <a className="main-nav-link" href="/#">
          Udruzenje
        </a>
      </li>
      <li className="nav-dropdown-parent">
        <a className="main-nav-link" href="/#">
          Saveti <SavetiIcon />
        </a>
        <ul className="nav-dropdown-list">
          <li className="nav-dropdown-item">
            <a className="nav-dropdown-link" href="/#">
              Cesto pitanje
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a className="nav-dropdown-link" href="/#">
              Veterinar
            </a>
          </li>
          <li className="nav-dropdown-item">
            <a className="nav-dropdown-link" href="/#">
              Iskustva
            </a>
          </li>
        </ul>
      </li>
      <li className="main-nav-item">
        <a className="main-nav-link" href="/blog">
          Blog
        </a>
      </li>
      <li className="main-nav-item" onClick={() => popUp(true)}>
        <a className="main-nav-link" href="/#">
          Prijavi se
        </a>
      </li>
      <li className="nav-dropdown-reg-parent">
        <a className="nav-register-btn" href="/#">
          <h5 className="register-btn-heading">Registruje se</h5>
        </a>
        <ul className="nav-dropdown-reg-list">
          <li className="register-dropdown-item">
            <a className="reg-dropdown-link" href="/#">
              <span>Kao udruzenje</span>
            </a>
          </li>
          <li className="register-dropdown-item">
            <a className="reg-dropdown-link" href="/#">
              <span>Kao korisnik</span>
            </a>
          </li>
        </ul>
      </li>
    </nav>
  );
}

export default Nav;
