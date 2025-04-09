import React from 'react'
import styled from 'styled-components'

const Fresque = () => {
  return (
        <FresqueContainer>
            <img src="./fresque_base.png" alt="fresque"/>
            <img className='og' src="./fresque_crop.png" alt="fresque"/>
        </FresqueContainer>
    )
}

const FresqueContainer = styled.div`
    flex: 1;
    min-height: 0;
    height: 100%;
    transition: all 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    img {
        @media (min-aspect-ratio: 2/3) {
            max-height: 100%;           
        }
        
        object-fit: contain;
        position: absolute;
        transition: all 0.4s ease-in-out;

        &.og {
            &:hover {
                opacity: 0;
                transition: all 0.4s ease-in-out;
            }
        }
    }
    /* &:hover {
        background-image: url('./fresque_base.png');
    } */
`

export default Fresque