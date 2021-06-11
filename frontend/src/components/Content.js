import Cards from './Cards/Cards';
import Blogvi from './Blog/Blogvi';
import Testimanials from './Testimanials/Testimonials';
import KakoUdomitiLjubimca from './KakoUdomitiLjubimca/KakoUdomitiLjubimca';
import Popup from './Popup/Popup';

import styled from 'styled-components';

const DivContainer = styled.div`
  margin: auto;
  width: 1183px;
  position: relative;
`;
const UdomiH4 = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 25px;
  color: #000000;
  margin: 20px 0 15px 0;
`;

const Content = ({ podaci, like, isTrigger, removeTrigger, sendData }) => {
  console.log(podaci);
  return (
    <DivContainer>
      <Popup
        trigger={isTrigger}
        triggerOff={removeTrigger}
        pickUpData={sendData}
      />
      <UdomiH4>Udomi ljubimce</UdomiH4>
      <Cards ljubimci={podaci} isLike={like} trigger={isTrigger} />

      <Testimanials />

      <KakoUdomitiLjubimca />

      <Blogvi />
    </DivContainer>
  );
};

export default Content;
