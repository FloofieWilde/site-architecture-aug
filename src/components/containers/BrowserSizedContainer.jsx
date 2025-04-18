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
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary);
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`


export default BrowserSizedContainer