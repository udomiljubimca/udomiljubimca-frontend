import styled from 'styled-components';




const Ul = styled.nav`
 
 width:890px;
 display:flex;
 justify-content:space-around;
 margin-top:10px;
 margin:0px;
 position: relative;
 `

const Li = styled.li`
  list-style:none;
  width:59px;
  height:18px;
  flex-basis:${({ parametarWith }) => parametarWith};

 `
const Ancor = styled.a`
 text-decoration:none;
 color: #111111;
 width:80px;
 font-family: Rubik;
 font-style: normal;
 font-weight: normal;
 font-size: 20px;
 line-height: 24px;
`


/////////////// drop-down menu za SAVETi ////////////////////

const DropUl = styled.ul`
 width:138px;
 height:124px;
 margin:0px;
 padding:0px;
 background: #FFFFFF;
 border: 2px solid #169DA8;
 box-sizing: border-box;
 border-radius: 4px;
 position: absolute;
 top:55px;

 display:none;


`

const LiDrop = styled.li`
  list-style:none;

  
  height:18px;
  flex-basis:${({ parametarWith }) => parametarWith};
  
  &:hover ${DropUl}{
    display:block;
    z-index:1;
  }

`
const DropLi = styled.li`

  display:block;
  width:106px;
  height:36px;
  position: relative;
  top:10px;
  left:20px;
  
`
const DropAncor = styled.a`
 text-decoration:none;
 font-family: Rubik;
 font-style: normal;
 font-weight: normal;
 font-size: 16px;
 line-height: 150%;
 color: #111111;

`
// //////////////////////////////////////////

////////// drop-down menu za REGISTRUJ SE /////////////

const UlDropDownReg = styled.ul`
  width: 141px;
  height: 88px;
  background: #FFFFFF;
  border: 2px solid #169DA8;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  top: 20px;

  /* na hover se otkriva drop menu(setuje dispaly:blok) */
  display: none;

`



const RegLi = styled.li`

  width: 142px;
  height: 38px;
  background: #169DA8;
  border-radius: 6px;
  list-style: none;
  position: relative;
  top: 25px;

  &:hover ${UlDropDownReg}{
    display:block;
    z-index:1;
  }
`

const AcnorRegistar = styled.a`
  text-decoration: none;
  color: #FFFFFF;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
 

`
const DropH5 = styled.h5`

  margin: 0;
  margin-top: 5px;
  text-align: center;

`

const LiDropReg = styled.li`

  list-style: none;
  position: relative;
  top: 10px;
  right: 20px;
  margin-top: 5px;

`
const AncorReg = styled.a`

  text-decoration: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #111111;

`


function Nav() {
  return (
    <Ul>
      <Li parametarWith={'74px'} ><Ancor href="#"> <h5>Pocetna</h5></Ancor></Li>
      <Li parametarWith={'90px'} ><Ancor href="#"> <h5>Udruzenje</h5></Ancor></Li>
      <LiDrop parametarWith={'58px'} ><Ancor href="#"> <h5>Saveti</h5></Ancor>
        <DropUl >

          <DropLi><DropAncor href="#">Cesto pitanje</DropAncor></DropLi>
          <DropLi ><DropAncor href="#">Veterinar</DropAncor></DropLi>
          <DropLi ><DropAncor href="#">Iskustva</DropAncor></DropLi>

        </DropUl>
      </LiDrop>
      <Li parametarWith={'42px'} ><Ancor href="#"><h5>Blog</h5></Ancor></Li>
      <Li parametarWith={'84px'} ><Ancor href="#"><h5>Prijavi se</h5></Ancor></Li>
      <RegLi><AcnorRegistar href="#"><DropH5>Registruje se</DropH5></AcnorRegistar>
        <UlDropDownReg>

          <LiDropReg> <AncorReg href="#"> Kao korisnik</AncorReg> </LiDropReg>
          <LiDropReg> <AncorReg href="#"> Kao udruzenje</AncorReg> </LiDropReg>

        </UlDropDownReg>

      </RegLi>
    </Ul>
  )
}

export default Nav
