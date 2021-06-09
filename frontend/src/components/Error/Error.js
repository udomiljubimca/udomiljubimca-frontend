import React from 'react';

import styled from 'styled-components';
import { Link } from "react-router-dom";

const ErrorDiv = styled.div`
text-align:center;
h3{
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 18px;
  color: #169DA8;
}
button{
  
  background-color:#169DA8;
  width:224px;
  height:64px;
  padding:16px, 24px;
  border-radius: 6px;
  
}
button a {
  text-decoration:none;
  color: #FFFFFF;
 
}
button a h4{
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  margin:0;
}

const Error = () => {
  return (
    <ErrorDiv>
      <div className='error-img'>
        <img src='' alt='' />
      </div>

      <h3>Greska, stranica nije pronadjena</h3>

      <button>
        <Link to='/'>
          <h4>Nazad</h4>
        </Link>
      </button>
    </ErrorDiv>
  );
};

export default Error;
