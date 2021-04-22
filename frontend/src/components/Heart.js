import { FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';

const HeartBox = styled.div`
width: 48px;
height: 48px;
border-radius: 24px;
background-color:#BDBDBD ;
position: absolute;
left: 77%;
right: 5%;
top: 3%;
bottom: 84%;
`


const IconHeart = styled(FaRegHeart)`

width:21px;
height:18px;
position: absolute;
left: 28%;
top:30%;
cursor: pointer;
/* ako dolazi false daj mi staru boju ako je true daj mi plavu boju */
${({ favorite }) => {
    console.log('styled', favorite)
    if (favorite) {
      return `
    color:blue
    `
    } else {
      return `
    color:''
    `
    }
  }}
   
`



function Heart({ kojeSrce, isLike }) {
  console.log('u srcu')
  console.log(kojeSrce)
  return (
    <HeartBox>

      <IconHeart favorite={kojeSrce.isLike} onClick={() => isLike(kojeSrce.id)} />

    </HeartBox>

  )
}

export default Heart
// &:hover{
//   fill:blue;
//  }