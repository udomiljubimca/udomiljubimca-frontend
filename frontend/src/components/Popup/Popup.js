import { useState } from 'react'

import styled from 'styled-components';
import { FaFacebook, FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";

const DivPopUp = styled.div`

width:612px;
height:445px;
border-radius: 16px;
box-sizing: border-box;
border: 2px solid #169DA8;
background: #FFFFFF;
z-index:2;
/* position:fixed;
left:650px; */

position: fixed;
margin-left:287px;

`


const RegForm = styled.form`

 width:438px;
 margin:auto;

`

// icon /////
const DivIcon = styled.div`
  text-align:center;

`


const IconEye = styled(FaEye)`

  cursor: pointer;
  width:25px;
  height:17px;
 
  position:absolute;
  top:172px;
  left:480px;
`

const IconEysSlash = styled(FaEyeSlash)`

  cursor: pointer;
  width:25px;
  height:17px;
 
  position:absolute;
  top:172px;
  left:480px;
`

const IconUser = styled(FaRegUser)`
  
   width:13px;
   height:21px;
   fill: #169DA8;
   
  
`

const SocialDiv = styled.div`
  
   text-align:center;

   margin:20px 0 20px 0;
`
// ///////////

// input ///////

const InputEmail = styled.input`

  display:inline-block;
  width:438px;
  height:61px;
  border: 2px solid #169DA8;
  box-sizing: border-box;
  border-radius: 16px;

  margin: 20px 0 20px 0;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;

  outline:none;

`

const InputPassword = styled.input`
   
   display:inline-block;
   width:438px;
   height:61px;
   border: 2px solid #169DA8;
   box-sizing: border-box;
   border-radius: 16px;

   font-style: normal;
   font-weight: normal;
   font-size: 20px;
   line-height: 140%;

   outline:none;
`

// //////////////

const ZaboravLozinDiv = styled.div`
   
     text-align:center;

     margin:20px 0 20px 0;

     & a{
       width:166px;
       height:21px;

       text-decoration:none;
       font-style: normal;
       font-weight: normal;
       font-size: 16px;
       line-height: 19px;
       color: #074EE8;
     }
`


const PopButton = styled.button`
 

   width:438px;
   height:61px;

   margin-top:20px 0 20px 0;

   background: #169DA8;


   border: 2px solid #169DA8;
   box-sizing: border-box;
   border-radius: 6px;

   & h5{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    color: #FFFFFF;

    margin:0;

    cursor: pointer;
   }
 
 `




function Popup({ trigger, triggerOff, pickUpData }) {

  const [isVisible, setisVisible] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log("Toggle visible", isVisible)


  const submit = (e) => {

    e.preventDefault()

    pickUpData({ email, password })

    setEmail('')
    setPassword('')

  }


  console.log(triggerOff)
  return ((trigger) ? (



    <DivPopUp>


      <button onClick={() => triggerOff(false)} >X</button>

      <RegForm onSubmit={submit} >

        <DivIcon>
          <IconUser />Prijavi se
      </DivIcon>

        <InputEmail type='email'
          required
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />




        <InputPassword type={isVisible ? 'password' : 'text'}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Lozinka' />
        {isVisible ? <IconEye onClick={() => setisVisible(!isVisible)} />
          :
          <IconEysSlash onClick={() => setisVisible(!isVisible)} />}


        <ZaboravLozinDiv>

          <a href="#">Zaboravljena lozinka</a>

        </ZaboravLozinDiv>

        <PopButton> <h5>Prijavi se</h5></PopButton>

        <SocialDiv>

          <FaFacebook />

        </SocialDiv>

      </RegForm>


    </DivPopUp>

  ) : ""
  )
}

export default Popup
