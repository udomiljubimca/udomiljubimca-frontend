import React from 'react';
import './Header.css';
import { FaSearch, FaUser, FaHeart } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <header className='header'>
      <div className='wrapperHeader'>
        <div className='header-container container-nav'>
          <div className='site-title'>
            <svg
              width='167'
              height='90'
              viewBox='0 0 177 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='72' cy='50' r='30' fill='#68DBFF' />
              <ellipse
                cx='104.647'
                cy='50'
                rx='29.7059'
                ry='30'
                fill='#FF7917'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M88.4039 75.1221C96.5911 69.7652 102 60.5143 102 50C102 39.4858 96.5911 30.2348 88.4039 24.878C80.2971 30.2348 74.9412 39.4858 74.9412 50C74.9412 60.5143 80.2971 69.7652 88.4039 75.1221Z'
                fill='#5D2C02'
              />
            </svg>
          </div>
          <nav>
            <ul>
              <li>
                <a href='!#'>Početna</a>
              </li>
              <li>
                <a href='!#'>Udruženja</a>
              </li>
              <li>
                <a href='!#'>Saveti &darr;</a>
              </li>
              <li>
                <a href='!#'>Blog</a>
              </li>
              <li>
                <a href='!#'>Prijavi se</a>
              </li>
              <li>
                <Button variant='primary'>
                  {' '}
                  <a href='!#'>Registruj se</a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className='under-div'>
          <div className='leftIcons'>
            <small>Preuzmi aplikaciju</small>
            <img
              src='https://icon-library.com/images/google-play-icon-png/google-play-icon-png-11.jpg'
              alt='google play logo'
              height='30px'
            />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg'
              height='30px'
              alt='apple logo'
            />
          </div>
          <div>
            <input className='searchBar' type='text' placeholder='Pretrazi' />{' '}
            <FaSearch className='white' />
          </div>
          <div className='rightIcons'>
            <FaHeart className='white' /> Omiljeni
            <FaUser className='white' /> Profil
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
