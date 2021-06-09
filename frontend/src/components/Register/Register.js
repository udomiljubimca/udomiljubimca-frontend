import React, { useState } from 'react';

import './Register.css';
import img2 from '/img2';
import fb from '/fb.png';
import facebook from '/facebook.png';
import logogoogle from '/logogoogle.png';
import InputField from '/input_field';

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
          <img src={img2}></img>
        </div>
      </div>

      <div className='vertical-container'>
        <div className='form-login-details'>
          <form action=''>
            <h2>Registruj se!</h2>
            <InputField
              type='text'
              placeholder='Ime'
              name='ime'
              value={value}
              handleChange={handleChange}
            />
            <InputField
              type='text'
              placeholder='Prezime'
              name='prezime'
              value={value}
              handleChange={handleChange}
            />
            <InputField
              type='text'
              placeholder='Email'
              name='email'
              value={value}
              handleChange={handleChange}
            />
            <InputField
              type='password'
              placeholder='Lozinka'
              name='lozinka'
              value={value}
              handleChange={handleChange}
            />
            <InputField
              type='password'
              placeholder='Potvrdi lozinku'
              name='potvrdiLozinku'
              value={value}
              handleChange={handleChange}
            />
            <button type='submit'>Registruj se</button>
          </form>

          <div className='fb-picture'>
            <img src={facebook} />
            <img src={logogoogle} />
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
