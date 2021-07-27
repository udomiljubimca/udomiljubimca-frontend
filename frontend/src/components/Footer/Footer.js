import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content container'>
        <ul className='footer-nav'>
          <li>
            <a href='/#'>O Nama</a>
          </li>
          <li>
            <a href='/#'>Prijavi problem</a>
          </li>
          <li>
            <a href='/#'>Uslovi korišćenja</a>
          </li>
          <li>
            <a href='/#'>Kontakt</a>
          </li>
        </ul>
      </div>
      <p className='footer-copyright'>
        &copy; 2021 Udomi Ljubimca | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
