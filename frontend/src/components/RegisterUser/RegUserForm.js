import React, { useState } from 'react';
import useValidation from '../../hooks/use-validation';

import './RegUserForm.css';
import eyeIcon from '../../assets/eye_icon.png';

const validateName = (value) => value.trim() !== '';
const validateEmail = (value) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  );
};
const validatePassword = (value) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(
    value
  );
};

const RegUserForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    enteredValue: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: firstNameIsValid,
    valueChangedHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    resetInput: resetFirstNameInput,
  } = useValidation(validateName);

  const {
    enteredValue: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: lastNameIsValid,
    valueChangedHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    resetInput: resetLastNameInput,
  } = useValidation(validateName);

  const {
    enteredValue: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetInput: resetEmailInput,
  } = useValidation(validateEmail);

  const {
    enteredValue: enteredPassword,
    hasError: passwordInputHasError,
    isValid: passwordIsValid,
    valueChangedHandler: passwordChangedHandler,
    inputBlurHandler: passwordInputBlurHandler,
    resetInput: resetPasswordInput,
  } = useValidation(validatePassword);

  const showPasswordHandler = () => {
    setShowPassword(prevState => !prevState);
  }

  const showPasswordConfirmHandler = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const [passwordsMatch, setPasswordsMatch] = useState(false);

  let formIsValid = false;

  const passwordsMathcChecker = (e) => {
    if (enteredPassword == e.target.value) {
      setPasswordsMatch(true);
    }
  };

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (!passwordsMatch) {
      alert('Passwords do not match');
      return;
    }

    alert('valid');

    const user = {
      name: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };

    console.log(user);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
    setPasswordsMatch(false);
  };

  const firstNameClasses = !firstNameInputHasError
    ? 'form-input'
    : 'form-input invalid';

  const lastNameClasses = !lastNameInputHasError
    ? 'form-input'
    : 'form-input invalid';

  const emailClasses = !emailInputHasError
    ? 'form-input'
    : 'form-input invalid';

  const passwordClasses = !passwordInputHasError
    ? 'form-input'
    : 'form-input invalid';

  return (
    <form className='regUser-form' onSubmit={formSubmitHandler}>
      <input
        className={firstNameClasses}
        type='text'
        name='name'
        id='name'
        placeholder='Ime'
        value={enteredFirstName}
        onChange={firstNameChangedHandler}
        onBlur={firstNameInputBlurHandler}
      />
      {firstNameInputHasError && <p>Please enter a first name...</p>}
      <input
        className={lastNameClasses}
        type='text'
        name='last-name'
        id='last-name'
        placeholder='Prezime'
        value={enteredLastName}
        onChange={lastNameChangedHandler}
        onBlur={lastNameInputBlurHandler}
      />
      {lastNameInputHasError && <p>Please enter a last name...</p>}
      <input
        className={emailClasses}
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        value={enteredEmail}
        onChange={emailChangedHandler}
        onBlur={emailInputBlurHandler}
      />
      {emailInputHasError && <p>Please enter a valid email address...</p>}
      <div className='password-input'>
        <input
          className={passwordClasses}
          type={showPassword? 'text' : 'password'}
          name='password'
          id='password'
          placeholder='Lozinka'
          value={enteredPassword}
          onChange={passwordChangedHandler}
          onBlur={passwordInputBlurHandler}
        />
        <img src={eyeIcon}  onClick={showPasswordHandler}/>
      </div>
      {passwordInputHasError && (
        <p>
          Lozinka mora sadrzati jedno veliko i malo slovo, broj i mora biti duza
          od 6 slova
        </p>
      )}
      <div className='password-input'>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name='password-confirm'
          id='password-confirm'
          placeholder='Potvrdi lozinku'
          onBlur={passwordsMathcChecker}
        />
        <img src={eyeIcon}  onClick={showPasswordConfirmHandler}/>
      </div>

      <input type='submit' value='Registruj se' disabled={!formIsValid} />
    </form>
  );
};

export default RegUserForm;
