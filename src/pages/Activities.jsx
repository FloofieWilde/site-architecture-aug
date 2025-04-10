import React from 'react'
import BrowserSizedContainer from '../components/containers/BrowserSizedContainer'
import { ActivityPanel } from '../components/containers/ActivityPanel'
import { ActivityContainer } from '../components/containers/ActivityContainer'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HoverAnchorLeave from '../components/containers/HoverAnchorLeave'
import { useLocation } from 'react-router-dom'

const Activities = () => {
  const location = useLocation()
  const [anchor, setAnchor] = React.useState(null);

  React.useEffect(() => {
    const hash = location.hash.replace('#', '');
    setAnchor(hash);
  }, [location]);

  return (
    <BrowserSizedContainer>
      <ActivityContainer>
        <HoverAnchorLeave id="Act1" />
        <ActivityPanel className={anchor === 'Act1' && 'active'} id="Act1" style={{ backgroundImage: 'url("./imgs/ImagesPanneaux/Panneau_activité_1.jpg")' }}>
          <h2 className='panelTitle'>Activité 1</h2>
          <div className="imageOverlay" />
          <div className='panelContent'>
            <h3>À l’écoute du paysage : une exploration multisensorielle du cœur de ville</h3>
            <p>Comment percevons-nous la ville au-delà de ce que nous voyons ? Quels souvenirs, quelles émotions naissent d’un parfum de marché, d’un éclat de rire sur une place animée, ou du bruissement discret des feuilles dans un jardin ? C’est à ces questions sensibles qu’a tenté de répondre notre activité d’analyse paysagère multisensorielle, menée dans le centre-ville de Grenoble.</p>
            <p>Conçue comme une promenade éveillant progressivement les sens, l’expérience s’est déroulée entre la Place Saint-André, la Place aux Herbes et le Jardin de Ville. Chaque étape du parcours invitait les participants à s’immerger dans les ambiances urbaines à travers les sons, les odeurs, les textures ou encore les variations de lumière. Ce cheminement, ponctué d’arrêts dans des lieux riches de contrastes, visait à mobiliser les imaginaires sensoriels qui nourrissent notre relation au paysage urbain, dans la lignée des travaux de Théa Manola et des réflexions portées par le Scity-lab sur la "ville sensible".</p>
            <p>À partir d’une grille d’observation inspirée de celle proposée par Scity-lab, chaque groupe a exploré une portion du Jardin de Ville. Munis de cette grille adaptée et d’un enregistreur audio, les participants ont capté et commenté en temps réel leurs ressentis. Ces captations, riches et singulières, ont permis de composer une lecture sensible et partagée du paysage, en révélant la diversité des perceptions à l’échelle d’un même lieu.</p>
            <p>Dans cet article, nous vous partageons les résultats de cette expérience immersive : une série de regards croisés sur un espace urbain familier, qui devient soudain terrain d’émotions, de mémoires et de sensations. Bonne écoute, et surtout… ouvrez grand vos sens !</p>
          </div>
        </ActivityPanel>
        <ActivityPanel className={anchor === 'Act2' && 'active'} id='Act2' style={{ backgroundImage: 'url("./imgs/ImagesPanneaux/Panneau_activité_2.jpg")' }}>
          <h2 className='panelTitle'>Activité 2</h2>
          <div className="imageOverlay" />
          <div className='panelContent'>
            <h3>Détails du paysage mêlant ancien et nouveau</h3>
            <p>Notre seconde activité s’est déroulée au cœur du centre-ville de Grenoble, dans un périmètre comprenant la Place Victor Hugo, la Place Grenette et les rues adjacentes. Cette zone a été choisie pour la richesse de ses éléments patrimoniaux et la diversité de ses formes urbaines, offrant ainsi un terrain d’observation idéal pour s’initier à la lecture du paysage urbain.</p>
            <p>À travers une chasse au trésor, les étudiants ont été amenés à arpenter l’espace, à s’orienter à l’aide d’une carte, et à identifier des détails patrimoniaux souvent méconnus ou ignorés dans le quotidien tels qu’une sculpture discrète, un motif de façade, une porte ancienne,...Cette activité avait pour but de réveiller le regard, de montrer que le patrimoine n’est pas uniquement constitué de monuments emblématiques, mais aussi de petits indices ancrés dans le paysage urbain, que l’on croise chaque jour sans y prêter attention.</p>  
            <p>Cette démarche sensible et active a permis de stimuler l’observation, tout en révélant l’évolution du territoire à travers les traces du passé toujours visibles dans le tissu urbain présent. En arpentant la ville de manière ludique, les étudiants ont ainsi développé une nouvelle attention au paysage construit, apprenant à décrypter les signes de l’histoire du patrimoine grenoblois, souvent dissimulés dans les détails du quotidien.</p>
          </div>
        </ActivityPanel>
        <ActivityPanel className={anchor === 'Act3' && 'active'} id='Act3' style={{ backgroundImage: 'url("./imgs/ImagesPanneaux/Panneau_activité_3.jpg")' }}>
          <h2 className='panelTitle'>Activité 3</h2>
          <div className="imageOverlay" />
          <div className='panelContent'>
            <h3>Création d’une œuvre collective centralisée</h3>
            <p>La dernière activité est divisée en deux temps. D’abord, entre la rue François Raoult et la rue de Hoche, choisie pour ses diverses fresques très diverses et fortes en messages. Et le second endroit dans le jardin de Hoche, plus calme pour le dessin collectif.</p>
            <p>Lors de la première partie, nous avons présenté 3 grandes fresques, leurs message, leurs contexte, les artistes et leur impact. Après avoir eu un aperçu de la diversité du travail permis par le graffiti, le but de l’activité au jardin de Hoche était de mettre en lien tous les sujets abordés lors de la sortie.</p>
            <p>La production finale est donc une fresque inspirée de “souvenirs d’enfants” par l’artiste Maye ou chaque participant a eu l’occasion de redessiner une partie de la fresque à sa manière. Cela a permis à tous d’exprimer à sa manière comment il voyait l’art dans le paysage urbain actuel, qu’ils ont eu l’occasion de voir, écouter et ressentir au fil de la sortie.</p>
            <NavLink to="/fresque">Voir la fresque</NavLink>
          </div>
        </ActivityPanel>
      </ActivityContainer>
    </BrowserSizedContainer>
  )
}

export default Activities