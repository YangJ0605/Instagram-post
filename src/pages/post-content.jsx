import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {ArrowLeftOutlined} from '@ant-design/icons'

const Wrapper = styled.div`
max-width: 500px;
margin: 200px auto;
padding: 50px 15px;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
background: rgba(0, 0, 0, .05);
position: relative;
.icon {
  position: absolute;
  left: 5px;
  top: 5px;
  cursor: pointer;
}
`



const PostContent = () => {
  const history = useHistory()
  const handleClick = () => {
    history.goBack()
  }
  return (
    <Wrapper>
      <div className='icon' onClick={handleClick}>
        <ArrowLeftOutlined/>
      </div>
      <div>{history.location.state}</div>
    </Wrapper>
  )
}

export default PostContent