import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

const Ul = styled.nav`
  width: 890px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  margin: 0px;
`;

const Li = styled.li`
  list-style: none;
  width: 59px;
  height: 18px;
  flex-basis: ${({ parametarWith }) => parametarWith};

  & h5 {
    margin: 0;
  }
`;
const Ancor = styled.a`
  text-decoration: none;
  color: #111111;
  width: 80px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
`;

/////////////// drop-down menu za SAVETi ////////////////////

const DropUl = styled.ul`
  width: 138px;
  height: 124px;
  margin: 0px;
  padding: 0px;
  background: #ffffff;
  border: 2px solid #169da8;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;

  display: none;
`;

const LiDrop = styled.li`
  list-style: none;
  position: relative;

  height: 18px;
  flex-basis: ${({ parametarWith }) => parametarWith};

  & h5 {
    margin: 0px;
  }

  &:hover ${DropUl} {
    display: block;
    z-index: 1;
  }
`;
const DropLi = styled.li`
  display: block;
  width: 106px;
  height: 36px;
  position: relative;
  top: 10px;
  left: 20px;
`;
const DropAncor = styled.a`
  text-decoration: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
`;
// //////////////////////////////////////////

////////// drop-down menu za REGISTRUJ SE /////////////

const UlDropDownReg = styled.ul`
  width: 140px;
  height: 84px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  top: 20px;
  left: 2px;

  /* na hover se otkriva drop menu(setuje dispaly:blok) */
  display: none;
`;

const RegLi = styled.li`
  width: 142px;
  height: 38px;
  background: #169da8;
  border-radius: 6px;
  list-style: none;
  position: relative;

  &:hover ${UlDropDownReg} {
    display: block;
    z-index: 1;
  }
`;

const AcnorRegistar = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
`;
const DropH5 = styled.h5`
  margin: 0;
  margin-top: 5px;
  text-align: center;
`;

const LiDropReg = styled.li`
  width: 142px;
  height: 36px;
  list-style: none;
  padding-bottom: 6px;
  position: relative;

  right: 42px;
  /* margin-top: 5px; */
  /* background-color:#C0DDDF; */

  &:hover {
    background-color: #c0dddf;
  }
`;
const AncorReg = styled.a`
  text-decoration: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #111111;
`;

const SavetiIcon = styled(FaChevronDown)`
  position: absolute;
  top: 6px;
  left: 45px;

  height: 12px;
`;

const RefSpan = styled.span`
  position: relative;
  top: 8px;
  left: 16px;
`;

function Nav({ popUp }) {
  console.log(popUp);
  return (
    <Ul>
      <Li parametarWith={'74px'}>
        <Ancor href='#'>
          {' '}
          <h5>Početna</h5>
        </Ancor>
      </Li>
      <Li parametarWith={'90px'}>
        <Ancor href='#'>
          {' '}
          <h5>Udruženje</h5>
        </Ancor>
      </Li>
      <LiDrop parametarWith={'58px'}>
        <Ancor href='#'>
          {' '}
          <h5>Saveti</h5> <SavetiIcon />
        </Ancor>
        <DropUl>
          <DropLi>
            <DropAncor href='#'>Česta pitanja</DropAncor>
          </DropLi>
          <DropLi>
            <DropAncor href='#'>Veterinar</DropAncor>
          </DropLi>
          <DropLi>
            <DropAncor href='#'>Iskustva</DropAncor>
          </DropLi>
        </DropUl>
      </LiDrop>
      <Li parametarWith={'42px'}>
        <Ancor href='#'>
          <h5>Blog</h5>
        </Ancor>
      </Li>

      <Li parametarWith={'84px'} onClick={() => popUp(true)}>
        <Ancor href='#'>
          <h5>Prijavi se</h5>
        </Ancor>
      </Li>

      <RegLi>
        <AcnorRegistar href='#'>
          <DropH5>Registruj se</DropH5>
        </AcnorRegistar>
        <UlDropDownReg>
          <LiDropReg>
            {' '}
            <AncorReg href='#'>
              {' '}
              <RefSpan>Kao udruženje</RefSpan>{' '}
            </AncorReg>{' '}
          </LiDropReg>
          <LiDropReg>
            {' '}
            <AncorReg href='#'>
              {' '}
              <RefSpan>Kao korisnik</RefSpan>
            </AncorReg>{' '}
          </LiDropReg>
        </UlDropDownReg>
      </RegLi>
    </Ul>
  );
}

export default Nav;
