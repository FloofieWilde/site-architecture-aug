import React from 'react'
import BrowserSizedContainer from '../components/containers/BrowserSizedContainer'
import styled from 'styled-components'

const Home = () => {
  return (
    <BrowserSizedContainer>
      <ImageContainer/>
      <TextContainer>
        <h1 style={{background:'transparent'}}>&nbsp;</h1>
        <h3>Comment le paysage urbain peut-il faire cohabiter patrimoine, modernité et expression artistique ?</h3>
      </TextContainer>
      <TextContainer>
        <h1>Analyse et Stratégie Paysagère</h1>
      </TextContainer>
      <TextBottom>
        <h3>Léa BADIER, Viktoriia BOIKO, 
          Maxence BONOMINI, Augustin BOUELE, Eléa BOYAT, Chloé BROULOU, 
          Léanne CAILLOSSE, Martin CHAIZE</h3>
      </TextBottom>
    </BrowserSizedContainer>
  )
}

const ImageContainer = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url('./imgs/IntroContexte/IMG_7196.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.7;
  filter: blur(3px);
`

const TextContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  color: var(--content-primary);
  overflow: hidden;
  position: absolute;
  left: 140px;
  top: 60px;
  max-width: calc(100% - 140px);
  max-height: calc(100% - 60px);
  font-size: 1.2rem;

  h1, h3 {
    background-color: var(--background-accent-bis);
    color: var(--content-primary-reverse);
    padding: 10px 20px;
    opacity: 0.6;
  }
`

const TextBottom = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--content-primary);
  overflow: hidden;
  position: absolute;
  right: 100px;
  bottom: 60px;
  max-width: calc(100% - 140px);
  max-height: calc(100% - 60px);
  h3 {
    background-color: var(--background-accent-bis);
    color: var(--content-primary-reverse);
    padding: 10px 20px;
    opacity: 0.6;
  }
`

export default Home