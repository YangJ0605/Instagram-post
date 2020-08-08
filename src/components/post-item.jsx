import React from 'react'
import styled from 'styled-components'
import day from 'dayjs'

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
  max-height: 400px;
  padding: 10px 10px;
  overflow: hidden;
  img {
    height: 90%;
    width: 100%;
    object-fit: cover;
  }
  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
`

const PostItem = ({post}) =>  {
  const month = day(post.date).month()
  const year = day(post.date).year()
  return  (
    <div className='item'>
      <img src={post.image}/>
      <footer>
        <div className='ig_hanle'>{post.ig_handle}</div>
        <div className='date'>{month} {year}</div>
      </footer>
    </div>
   )
}

export default PostItem