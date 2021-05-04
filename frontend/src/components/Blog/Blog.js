import styled from 'styled-components';



const DivCard = styled.div`
  width:350px;
  height:427px;
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
  background-color:#C4C4C4;
 
  
 
 `

const Paragraf = styled.p`
  width:318px;
  height:60px;
  font-size:16px;
  line-height:20px;
  color:#111111;
  font-style:normal;
  

 
 `

function Blog({ podaciBlog }) {


  return (
    <DivCard>

      <InnerDiv>


        <Img />
        <h1> {podaciBlog.naslov}</h1>
        <Paragraf>{podaciBlog.text}</Paragraf>


      </InnerDiv>


    </DivCard>
  )
}

export default Blog
