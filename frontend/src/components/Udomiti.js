import styled from 'styled-components';



const DivCard = styled.div`
  width:350px;
  height:427px;
  background-color:#fff;
  box-sizing:border-box;
  
`
const InnerDiv = styled.div`
   width:350px;
   height:355px;
   font-style:normal;
   font-weight:normal;
   margin:auto;
   text-align: center;
  
 
 `

const Img = styled.img`
  width:350px;
  height:200px;
 
  
 
 `

const Paragraf = styled.p`
  width:318px;
  height:60px;
  font-size:16px;
  line-height:20px;
  color:#111111;
  font-style:normal;
  

 
 `

function Udomiti({ podaci }) {


  return (
    <DivCard>

      <InnerDiv>


        <Img />
        <h1> {podaci.naslov}</h1>
        <Paragraf>{podaci.text}</Paragraf>


      </InnerDiv>


    </DivCard>
  )
}

export default Udomiti
