import styled from 'styled-components';

import Nav from './Nav'

const HeaderDiv = styled.div`
width:100%;
height:64px;
background: #FFFFFF;
box-sizing: border-box;
margin-bottom:30px;
`
const HederDivContainer = styled.div`

  margin: auto;
  width: 1183px;
  height:64px;
`
const LogoStayle = styled.div`
width:102px;
height:42px;
box-sizing: border-box;
border: 2px solid #AAAAAA;
background: #EEEEEE;
`


function Header({ trigger }) {
  return (
    <HeaderDiv>
      <HederDivContainer className="divDispaly">
        <LogoStayle />
        <Nav
          popUp={trigger}
        />
      </HederDivContainer>

    </HeaderDiv>
  )
}

export default Header
