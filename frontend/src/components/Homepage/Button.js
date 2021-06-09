import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

const DivButton = styled.div`
  position:relative;
`

const ButtonSty = styled.button`

  width:128px;
  height:32px;
  border:2px solid #074EE8;
  box-sizing:border-box;
  border-radius:4px;
  position: absolute;
  left:190px;
  top:60px;
  

`

const Ancor = styled.a`

font-style:normal;
font-weight:normal;
font-size:16px;
line-height:18px;
color:#074EE8;
text-decoration:none;

`

const Icon = styled(FaChevronRight)`
  width:5px;
  height:9px;

`

function Button() {
  return (
    <DivButton>
      <ButtonSty> <Ancor href="#">Saznaj vise  <Icon /></Ancor> </ButtonSty>
    </DivButton>
  )
}

export default Button
