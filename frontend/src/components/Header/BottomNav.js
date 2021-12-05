import React from 'react';
import { FaGooglePlay, FaApple, FaHeart, FaUserAlt } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import "./BottomNav.css"
const BottomNav = () => {
    return (
        <div class='bottom-nav container flex'>
            <div class='bottom-nav__stores flex flex-column flex--align-center flex--justify-center'>
                <p>Preuzmi aplikaciju:</p>
                <div class='d-flex'>
                    <a href=""><FaGooglePlay /></a>
                    <a href=""><FaApple /></a>
                </div>
            </div>
            <div class='bottom-nav__left'>
                <div class='bottom-nav__search'>
                    <input type="text" placeholder='Pretraži' />
                    <span><BiSearch /></span>
                </div>
                <div class='bottom-nav__user'>
                    <a href=""><FaHeart /><span class='link-text'>Omiljeni</span></a>
                    <a href=""><FaUserAlt /><span class='link-text'>Profil</span></a>
                </div>
            </div>
        </div>
    );
}

export default BottomNav;
