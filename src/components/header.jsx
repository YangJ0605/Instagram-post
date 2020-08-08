import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.header`
  h3 {
    font-weight: 700;
  }
`

const Header = (props) => (
  <Wrapper>
    <h3>{props.text}</h3>
  </Wrapper>
)

export default Header