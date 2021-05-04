import styled from "styled-components"


const FelxItem = styled.div`
 flex-basis:350px;
 height:235px;
 background-color:#fff;
 border: 1px solid #169DA8;
 box-sizing: border-box;
 border-radius: 6px;
 
`

const TextDiv = styled.blockquote`
 width:255px;
 height:111px;
 font-family: Rubik;
 font-style: normal;
 font-weight: normal;
 font-size: 16px;
 line-height: 150%;
 color: #111111;
 margin:auto;
 position: relative;
 top:45px;
 
 
 &::after{
   content:"''";
   font-family: 'Times New Roman';
   color:#169DA8;
   font-size: 48px;
   font-weight: bold;
   font-style: normal;
   position: relative;
   left:50px;
   top:65px;

 }

 &::before{
   content:"''";
   font-family: Times New Roman;
   color:#169DA8;
   font-size: 48px;
   font-weight: bold;
   font-style: normal;
   position: relative;
   right:20px;
   bottom:25px;
 }

`

function Testimanial(props) {

  console.log(props)
  return (
    <FelxItem >


      <TextDiv>
        {props.text}
      </TextDiv>


    </FelxItem>

  )

}
// defaltna vrednost koja koja stoji i bice overadovana pravoim tekstom
Testimanial.defaultProps = {
  text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget."
}

export default Testimanial
