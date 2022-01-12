import React from 'react';
import { FaGooglePlay, FaApple, FaHeart, FaUserAlt } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import "./BottomNav.css"
const BottomNav = () => {
    return (
        <div className='bottom-nav container flex'>
            <div className='bottom-nav__stores flex flex-column flex--align-center flex--justify-center'>
                <p>Preuzmi aplikaciju:</p>
                <div className='d-flex'>
                    <a href=""><FaGooglePlay /></a>
                    <a href=""><FaApple /></a>
                </div>
            </div>
            <div className='bottom-nav__left'>
                <div className='bottom-nav__search'>
                    <input type="text" placeholder='Pretraži' />
                    <span><BiSearch /></span>
                </div>
                <div className='bottom-nav__user'>
                    <a href=""><FaHeart /><span className='link-text'>Omiljeni</span></a>
                    <a href=""><FaUserAlt /><span className='link-text'>Profil</span></a>
                </div>
            </div>
        </div>
    );
}

export default BottomNav;
