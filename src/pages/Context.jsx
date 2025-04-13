import React from 'react'
import BrowserSizedContainer from '../components/containers/BrowserSizedContainer'
import { TextContainer } from '../components/containers/TextContainer'
import FlexRow from '../components/containers/FlexRow'
import styled from 'styled-components'
import MouseInteraction from '../components/global/MouseInteraction'

const Context = () => {
  return (
    <BrowserSizedContainer>  
      <FlexRow style={{flex: 1, minHeight: 0, gap: '20px'}}>
      <TextContainer style={{textAlign: 'center'}}>
        <Quote>
        "Les villes portent les stigmates des passages du temps, occasionnellement les promesses d'époques futures" 
        <br/>
        Marguerite Yourcenar
        </Quote>
        <span>Le paysage, le patrimoine et l’art sont trois notions étroitement liées qui participent à la construction de notre rapport au territoire. Le paysage, au sens large, désigne une portion d’espace perçue, résultant de l’interaction entre la nature et les sociétés humaines. Il ne se limite pas à une vue, mais inclut des dimensions sensibles, vécues, symboliques et culturelles. Le patrimoine, quant à lui, représente une sélection du passé  matériel ou immatériel  que les sociétés choisissent de préserver, interprétant ainsi leur histoire et leur identité à travers les lieux. L’art, enfin, joue un rôle fondamental dans la représentation, la transformation ou la révélation des paysages, en y introduisant un regard subjectif et créatif. Ces trois notions, bien qu’ issues de champs différents, s'entrecroisent et se renforcent mutuellement pour donner du sens aux espaces que nous habitons. Leur mise en relation permet d’interroger la manière dont les territoires sont perçus, valorisés et transmis au fil du temps.</span>
        <span>Nous avons donc expérimenté ce paysage urbain en faisant apparaître la notion de patrimoine par rapport à la temporalité du bâti, de l’ancien vers le moderne. Notre déambulation dans la ville de Grenoble s'est basée sur son extension, partant du quartier Saint-Laurent, vers le Jardin de Ville, la Place Grenette et Victor Hugo en terminant au Jardin Hoche accolé à la Caserne de Bonne.</span>
        <span>Tout au long de ce parcours, nous pouvons nous questionner sur qu’est-ce qui fait paysage dans notre environnement actuel en intégrant les notions d’art, de culture et de social.</span>
      </TextContainer>
      <div style={{position: 'relative', height: '100%', width: '100%', flex: '1', minHeight:0}}>
      <MouseInteraction/>
      <iframe 
            src="https://framacarte.org/fr/map/itinetaire-de-la-sortie_206628#15/45.1899/5.7275"
            title="Carte de la sortie"
            style={{
                height: '100%',
                width: '100%',
                border: 'none',
                flex: '1',
                minHeight:0,
              }}
        />
      </div>
      </FlexRow>
    </BrowserSizedContainer>
  )
}

const Quote = styled.h3`
  text-decoration: dashed underline;
  font-style: italic;
`
export default Context