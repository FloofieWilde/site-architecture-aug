import React from 'react'
import styled from 'styled-components'
import FlexRow from '../components/containers/FlexRow'
import BrowserSizedContainer from '../components/containers/BrowserSizedContainer'
import { TextContainer } from '../components/containers/TextContainer'
import MouseInteraction from '../components/global/MouseInteraction'

const Fresque = () => {
  return (
        <FlexRow style={{justifyContent:'space-between'}}>
            <TextContainer>
                <h2 style={{marginTop: 0}}>Conclusion</h2>
                <span>Le paysage urbain harmonise patrimoine, modernité et street art par une approche multi-sensorielle (lumière, son, textures) qui révèle les détails architecturaux historiques tout en intégrant des créations contemporaines. Le bâti ancien (styles néoclassique, haussmannien) devient un support narratif pour des installations artistiques ou des fresques éphémères, transformant la ville en palimpseste où chaque époque laisse sa trace. Le street art agit comme médiateur culturel, réactivant la mémoire collective (fresques commémoratives) et démocratisant l’espace (friches transformées en musées à ciel ouvert).</span>
                <span>​​Et si l’avenir des villes résidait dans une symbiose organique entre pierres millénaires et créativité disruptive ? À l’ère du métavers et de l’intelligence artificielle, le défi consistera à transposer cette alchimie dans des espaces hybrides réels et virtuel où les NFT pourraient immortaliser les fresques éphémères, et les balises AR révéler les strates historiques d’un mur à travers son smartphone. Une question émerge : comment préserver l’authenticité sensorielle (craquelures de l’enduit, écho des pas sur le pavé) face à la dématérialisation croissante ? Peut-être en faisant de chaque citoyen un architecte éphémère, muni de pinceaux numériques et d’outils participatifs, pour écrire ensemble la prochaine page de cette urbanité poétique.</span>
            </TextContainer>
            <FresqueContainer>
                <MouseInteraction/>
                <img src="./Fresque_base.png" alt="fresque"/>
                <img className='og' src="./Fresque_crop.png" alt="fresque"/>
            </FresqueContainer>
        </FlexRow>
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
`

export default Fresque