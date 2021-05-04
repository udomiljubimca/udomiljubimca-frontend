import styled from 'styled-components';

const FooterDiv = styled.div`
  width:100%;
  height:238px;
  background: #169DA8;
  margin-top:50px;
  position: relative;


`

const Ul = styled.nav`
 
 width:1220px;
 height:200px;
 display:flex;
 justify-content:space-around;
 align-items:center;
 
  `


const Li = styled.li`
  list-style:none;
  width:59px;
  height:18px;
  
  
  flex-basis:${({ parametarWith }) => parametarWith};
  
  

 `

const Ancor = styled.a`
  text-decoration:none;
  color: #FFFFFF;
  font-size: 18px;
  width:80px;
  line-height: 35px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.03em;
 
 
`

const PositoinDiv = styled.div`
width:1183px;
margin: auto;
/* position: absolute;
left:255px;
top:150px; */


`



function Footer() {
  return (
    <FooterDiv>

      <PositoinDiv>
        <Ul>
          <Li parametarWith={'71px'}> <Ancor href="#">O Nama</Ancor> </Li>
          <Li parametarWith={'139px'} > <Ancor href="#">Prijevi problem</Ancor> </Li>
          <Li parametarWith={'156px'}> <Ancor href="#">Uslovi koriscenja</Ancor> </Li>
          <Li parametarWith={'72px'}> <Ancor href="#">Konctact</Ancor> </Li>
        </Ul>

      </PositoinDiv>



    </FooterDiv>
  )
}

export default Footer
