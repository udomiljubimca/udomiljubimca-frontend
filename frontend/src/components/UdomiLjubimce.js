import Udomiti from './Udomiti'
import { useState } from 'react'
import styled from 'styled-components';

const UdomiLjubimce = () => {

  const [podaciLjubimci, setpodaciLjubimci] = useState(
    [{
      id: 1,
      naslov: 'Lorem ispum',
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu"
    },
    {
      id: 2,
      naslov: 'Lorem ispum',
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu"
    },
    {
      id: 3,
      naslov: 'Lorem ispum',
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu"
    }])

  const FlexDiv = styled.div`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    
    `


  return (
    <div className='container'>
      <FlexDiv>
        <Udomiti podaci={podaciLjubimci[0]} />
        <Udomiti podaci={podaciLjubimci[1]} />
        <Udomiti podaci={podaciLjubimci[2]} />
      </FlexDiv>
    </div>
  )
}

export default UdomiLjubimce
