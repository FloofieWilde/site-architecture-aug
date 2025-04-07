import React from 'react'
import styled from 'styled-components'

const FresqueContainer = ({children}) => {
  return (
    <FresqueContainerStyle>
        {children}
    </FresqueContainerStyle>
  )
}

const FresqueContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    overflow-y: scroll;
`

export default FresqueContainer