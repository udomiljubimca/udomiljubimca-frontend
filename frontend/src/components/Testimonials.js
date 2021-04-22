import styled from 'styled-components';

import Testimanial from './Testimanial'


// flex div koji ompotava oko pojedinacne komponente (Testimanial)
const DivFex = styled.div`
 display:flex;
 justify-content:space-between;
 margin:100px 0 100px 0;


`


function Testimonials() {


  return (
    <DivFex>
      <Testimanial />
      <Testimanial />
      <Testimanial />
    </DivFex>
  )
}

export default Testimonials


