import React from 'react'
import styled from 'styled-components'

export const PostWrapper = styled.div`
max-width: 1400px;
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
.item {
  box-sizing: border-box;
  flex: 1;
  width: 25%;
  min-width: 25%;
  max-width: 25%;
  height: 400px;
  padding: 10px 10px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
`

const PostItem = ({post}) =>  {
  return  (
    <div className='item'>
      <img src={post.image}/>
    </div>
   )
}

export default PostItem