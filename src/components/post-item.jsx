import React from 'react'
import styled from 'styled-components'

export const PostWrapper = styled.div`
max-width: 1400px;
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
.item {
  margin-right: 10px;
  width: 24%;
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