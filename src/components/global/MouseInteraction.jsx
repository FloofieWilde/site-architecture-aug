import React from 'react'
import { LuSquareMousePointer } from 'react-icons/lu'
import styled from 'styled-components'

const MouseInteraction = () => {
  return (
    <MouseInteractionContainer>
        <LuSquareMousePointer style={{fontSize: '2rem', color: 'white'}}/>
    </MouseInteractionContainer>
  )
}

const MouseInteractionContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 2;
    pointer-events: none;
    transition: all 0.4s ease-in-out;
    opacity: 1;
    * {
        color: var(--accent-bis);
    }
`

export default MouseInteraction