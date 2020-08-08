import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import day from 'dayjs'
import LazyLoad from 'react-lazyload'
import {monthObj} from '../utils/month'
import Loading from '../components/Loading'
// import logo from '../utils/logo512.png'
import {useHistory} from 'react-router-dom'


export const PostWrapper = styled.div`
max-width: 1200px;
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
.item {
  box-sizing: border-box;
  flex: 1;
  width: 25%;
  min-width: 25%;
  max-width: 25%;
  max-height: 444px;
  padding: 10px 10px;
  /* overflow: hidden; */
  .lazyload-wrapper {
    width:100%;
    height: 90%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  footer {
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ig_hanle {
      font-weight: 700;
    }
  }
}
@media(max-width:992px) {
    .item {
      box-sizing: border-box;
      flex: 1;
      width: 33.333%;
      min-width: 33.333%;
      max-width: 33.333%;
      max-height: 444px;
      padding: 10px 10px;
    }
}
@media(max-width:768px) {
    .item {
      box-sizing: border-box;
      flex: 1;
      width: 50%;
      min-width: 50%;
      max-width: 50%;
      max-height: 444px;
      padding: 10px 10px;
    }
}
@media(max-width:576px) {
    .item {
      box-sizing: border-box;
      flex: 1;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      max-height: 400px;
      padding: 10px 10px;
    }
}
`
const LazyImage = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()
  useEffect(() => {
    const img = new Image()
    img.src = props.src
    console.log(img.width)
    img.onload = () => {
      console.log('加载完成')
      setIsLoaded(true)
    }
  }, [props.src])

  const handleClick = () => {
    history.push({pathname: '/post/' + props._uid, state: props.content})
  }
  return (
    <>
    {
      isLoaded ? <img src={props.src} alt='' onClick={handleClick}/> : <Loading />
    }
    </>
  )
}

const PostItem = ({post}) =>  {
  const month = day(post.date).month()
  const year = day(post.date).year()
  return  (
    <div className='item'>
      <LazyLoad height={450}>
      <LazyImage src={post.image} {...post}/>
      </LazyLoad>
      <footer>
        <div className='ig_hanle'>{post.ig_handle}</div>
        <div className='date'>{monthObj[month]} {year}</div>
      </footer>
    </div>
   )
}

export default PostItem