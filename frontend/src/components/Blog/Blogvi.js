import Udomiti from './Blog'
import { useState } from 'react'
import styled from 'styled-components';

const Blog = () => {

  const [podaciLjubimciBlog, setpodaciLjubimciBlog] = useState(
    [{
      id: 1,
      naslov: 'Lorem ispum ',
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu"
    },
    {
      id: 2,
      naslov: 'Lorem ispum ',
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu"
    },
    {
      id: 3,
      naslov: 'Lorem ispum ',
      text: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu"
    }])

  const FlexDiv = styled.div`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    
    `

  const BlogH4 = styled.h4`
    
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 25px;
    color: #000000;
    margin:0 0 15px 0;
    `


  return (
    <div className='container'>

      <BlogH4>Blog</BlogH4>
      <FlexDiv>
        {
          podaciLjubimciBlog.map(blog =>
            <Udomiti key={blog.id}
              podaciBlog={blog} />)
        }
      </FlexDiv>
    </div>
  )
}

export default Blog
