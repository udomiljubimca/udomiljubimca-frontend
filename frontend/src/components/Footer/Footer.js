import styled from 'styled-components';

import './Footer.css';

// const FooterDiv = styled.div`
//   width:100%;
//   height:238px;
//   background: #169DA8;
//   margin-top:50px;
//   position: relative;
// `
// const Ul = styled.nav`
//  width:1220px;
//  height:200px;
//  display:flex;
//  justify-content:space-around;
//  align-items:center;
//   `
// const PositoinDiv = styled.div`
// width:1183px;
// margin: auto;
// /* position: absolute;
// left:255px;
// top:150px; */
// `
// const Ancor = styled.a`
//   text-decoration:none;
//   color: #FFFFFF;
//   font-size: 18px;
//   width:80px;
//   line-height: 35px;
//   font-style: normal;
//   font-weight: normal;
//   letter-spacing: 0.03em;
// `


const Li = styled.li`
  list-style:none;
  width:59px;
  height:18px;
  flex-basis:${({ parametarWith }) => parametarWith};
 `







function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <ul className='footer-nav'>
          <Li parametarWith={'71px'}> <a href="#">O Nama</a> </Li>
          <Li parametarWith={'139px'} > <a href="#">Prijevi problem</a> </Li>
          <Li parametarWith={'156px'}> <a href="#">Uslovi koriscenja</a> </Li>
          <Li parametarWith={'72px'}> <a href="#">Konctact</a> </Li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
