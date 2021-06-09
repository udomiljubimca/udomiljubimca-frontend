import Cards from './Cards/Cards'
import Blogvi from './Blog/Blogvi'
import Testimanials from './Testimanials/Testimonials'
import KakoUdomitiLjubimca from './KakoUdomitiLjubimca/KakoUdomitiLjubimca'
import Popup from './Popup/Popup'


import styled from 'styled-components';


const DivContainer = styled.div`
  
  margin: auto;
  width: 1183px;
  position: relative;

`

const Content = ({ podaci, like, isTrigger, removeTrigger, sendData, resizeHeight }) => {
  console.log(podaci)
  return (
    <DivContainer>

      <Popup
        trigger={isTrigger}
        triggerOff={removeTrigger}
        pickUpData={sendData}

      />

      <Cards
        ljubimci={podaci}
        isLike={like}
        trigger={isTrigger}
      />



      <Testimanials />

      <KakoUdomitiLjubimca />

      <Blogvi />
    </DivContainer>
  )
}

export default Content
