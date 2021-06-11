import React, { useState } from 'react';

import './Register.css';
// import img2 from './../../img/img2.jpg';
// import fb from './../../img/fb.png';
// import facebook from './../../img/facebook.png';
// import logogoogle from './../../img/logogoogle.png';
import Input from './Input';

const Register = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setValue({ [name]: value });
    console.log(value);
  };

  return (
    <div className='container'>
      <div className='register-description'>
        <div>
          <h4>Registruj se i udomi ljubimca!</h4>
          <p>lorem ipsum</p>
          <img src='' alt='img2'></img>
        </div>
      </div>

      <div className='vertical-container'>
        <div className='form-login-details'>
          <form action=''>
            <h2>Registruj se!</h2>
            <Input
              type='text'
              placeholder='Ime'
              name='ime'
              value={value}
              handleChange={handleChange}
            />
            <Input
              type='text'
              placeholder='Prezime'
              name='prezime'
              value={value}
              handleChange={handleChange}
            />
            <Input
              type='text'
              placeholder='Email'
              name='email'
              value={value}
              handleChange={handleChange}
            />
            <Input
              type='password'
              placeholder='Lozinka'
              name='lozinka'
              value={value}
              handleChange={handleChange}
            />
            <Input
              type='password'
              placeholder='Potvrdi lozinku'
              name='potvrdiLozinku'
              value={value}
              handleChange={handleChange}
            />
            <button type='submit'>Registruj se</button>
          </form>

          <div className='fb-picture'>
            <img src='' alt='facebook' />
            <img src='' alt='logogoolge' />
          </div>

          <div className='check-box'>
            <input type='checkbox' style={{ width: '15px' }}></input>
            <a href='/'>Prihvati uslove korišćenja</a>
          </div>

          <div className='link-prijava'>
            <p>Već si se registrovao?</p>
            <a href='/'>Prijavi se</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
