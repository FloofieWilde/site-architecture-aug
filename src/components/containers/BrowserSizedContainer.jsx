import React from 'react'
import styled from 'styled-components'

const BrowserSizedContainer = ({children}) => {
  return (
    <ContainerStyle>{children}</ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  box-sizing: border-box;
`


export default BrowserSizedContainer