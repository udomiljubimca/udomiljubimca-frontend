import styled from 'styled-components';

import Nav from './Nav'

const HeaderDiv = styled.div`
width:1920px;
height:64px;
background: #FFFFFF;
box-sizing: border-box;
margin-bottom:30px;



`

const Logo = styled.div`
width:102px;
height:42px;
box-sizing: border-box;
border: 2px solid #AAAAAA;
background: #EEEEEE;


`


function Header() {
  return (
    <HeaderDiv>
      <div className="container divDispaly">
        <Logo />
        <Nav />
      </div>

    </HeaderDiv>
  )
}

export default Header
