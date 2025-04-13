import React from 'react'
import FlexRow from '../components/containers/FlexRow'
import styled from 'styled-components'

const Thanks = () => {
  return (
    <FlexRow>
        <BaseContainer>
            <h3>Remerciements</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis repellendus, omnis natus enim aliquid voluptatem culpa saepe ipsa possimus quae obcaecati veniam quod dolor quo magni deleniti quidem quis.</p>
        </BaseContainer>
        <Maxime>
            <h3>Mot de fin</h3>
            <p>Je m'appelle Maxime Jenn, j'ai 24 ans et je suis récemment diplômé en ingénierie informatique. Passionné d'informatique depuis toujours, je travaille aujourd'hui comme consultant en développement logiciel, notamment sur une solution qui accompagne des techniques d’analyses médicales.</p>
            <p>Ce site web a été conçu à la suite d’un challenge lancé, et en collaboration avec un groupe d’étudiants en urbanisme, un domaine qui, je l’avoue, ne m’était pas familier, mais que j’ai eu plaisir à découvrir à travers ce projet.</p> 
            <p>Le site a été réalisé en React.JS, en un peu plus de 6 heures, de zéro, dans une ambiance intense, stimulante et parfois un peu improvisée. Le résultat ne reflète peut-être pas l'étendue de mon travail habituel, mais il représente un bel aperçu de ce que je peux faire dans un temps limité.</p>
            <p>Si j’avais eu davantage de temps, j’aurais aimé rendre ce site traduisible, responsif (c’est-à-dire adapté à tous les types d’écrans, que ce soit mobile, tablette ou ordinateur), et accessible à tous les profils d’utilisateurs, notamment ceux en situation de handicap.</p>
            <p>Ce projet m’a permis de repousser mes limites et de réaliser concrètement ce dont je suis capable en peu de temps. Et au final, je suis plûtot fier du résultat.</p>
            <p>Merci aux étudiants pour leur confiance et cette opportunité unique de sortir de ma zone de confort.<br/>— Maxime</p>
        </Maxime>
    </FlexRow>
  )
}

const BaseContainer = styled.div`
  font-weight: 500;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  flex: 1;
  >p {
    margin: 10px 0px;
  }
`

const Maxime = styled(BaseContainer)`
  background-image: url(./imgs/Bg_galaxy.png);
  height: 100%;
  color: var(--content-primary-reverse);
`

export default Thanks