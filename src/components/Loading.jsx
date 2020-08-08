import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'


const Wrapper = styled.div`
 background: rgba(0, 0, 0, 0.05);
 display: flex;
 align-items: center;
 justify-content: center;
 height: 350px;
 /* max-height: 0px; */
`

const Loading = () => (
  <Wrapper>
     <Spin />
  </Wrapper>
)

export default Loading