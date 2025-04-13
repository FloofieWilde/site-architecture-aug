import React from 'react'
import BrowserSizedContainer from '../components/containers/BrowserSizedContainer'
import { ActivityPanel } from '../components/containers/ActivityPanel'
import { ActivityContainer } from '../components/containers/ActivityContainer'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HoverAnchorLeave from '../components/containers/HoverAnchorLeave'
import { useLocation } from 'react-router-dom'
import MouseInteraction from '../components/global/MouseInteraction'

const Activities = () => {
  const location = useLocation()
  const [anchor, setAnchor] = React.useState(null);

  React.useEffect(() => {
    const hash = location.hash.replace('#', '');
    setAnchor(hash);
  }, [location]);

  return (
    <BrowserSizedContainer>
      <MouseInteraction/>
      <ActivityContainer>
        <HoverAnchorLeave id="Act1" />
        <ActivityPanel className={anchor === 'Act1' && 'active'} id="Act1" style={{ backgroundImage: 'url("./imgs/ImagesPanneaux/Panneau_activité_1.jpg")' }}>
          <h2 className='panelTitle'>Expérimentation 1</h2>
          <div className="imageOverlay" />
          <div className='panelContent'>
            <h3>À l’écoute du paysage : une exploration multisensorielle du cœur de ville</h3>
            <p>Comment percevons-nous la ville au-delà de ce que nous voyons ? Quels souvenirs, quelles émotions naissent d’un parfum de marché, d’un éclat de rire sur une place animée, ou du bruissement discret des feuilles dans un jardin ? C’est à ces questions sensibles qu’a tenté de répondre notre <strong>expérimentation d’analyse paysagère multisensorielle</strong>, menée dans le centre-ville de Grenoble.</p>
            <p>Conçue comme une promenade éveillant progressivement les sens, l’expérience s’est déroulée entre la <strong>Place Saint-André</strong>, la <strong>Place aux Herbes</strong> et le <strong>Jardin de Ville</strong>. Chaque étape du parcours invitait les participants à s’immerger dans les ambiances urbaines à travers les sons, les odeurs, les textures ou encore les variations de lumière. Ce cheminement, ponctué d’arrêts dans des lieux riches de contrastes, visait à <strong>mobiliser les imaginaires sensoriels</strong> qui nourrissent notre relation au paysage urbain, dans la lignée des travaux de <strong>Théa Manola</strong> et des réflexions portées par le <strong>Scity-lab</strong> sur la "ville sensible".</p>
            <ImageLandscape src='./imgs/Activité1/IMG_7233.jpg'/>
            <p>À partir d’une grille d’observation inspirée de celle proposée par Scity-lab, chaque groupe a exploré une portion du Jardin de Ville. Munis de cette grille adaptée et d’un enregistreur audio, les participants ont capté et commenté en temps réel leurs ressentis. Ces captations, riches et singulières, ont permis de composer une <strong>lecture sensible et partagée du paysage</strong>, en révélant la diversité des perceptions à l’échelle d’un même lieu.</p>
            <p>Dans cet article, nous vous partageons les <strong>résultats de cette expérience immersive</strong> : une série de regards croisés sur un espace urbain familier, qui devient soudain terrain d’émotions, de mémoires et de sensations. Bonne écoute, et surtout… ouvrez grand vos sens !</p>
            
            <TitleGroup>Groupe 1 - Place Notre-Dame</TitleGroup>
            <p>Le premier groupe s’est installé autour de la Cathédrale Notre-Dame. Ce lieu, au patrimoine religieux et architectural fort, a provoqué une impression de calme et de silence, accentuant les sons des oiseaux.  Comme le souligne un membre du groupe : <i>« C’est assez fou, on entendait tous les sons de l’autre côté, et ici, on entend même les battements d’ailes des oiseaux. On est vraiment dans le calme, donc dès qu’un bruit un peu plus fort surgit, par exemple les travaux, ça capte directement notre attention, comme si ça nous sortait de notre bulle ».</i></p>
            <p>Ce silence est aussi dû à un aménagement spécifique : la place piétonne est protégée des nuisances sonores par les bâtiments qui l’encerclent, créant une sorte de barrage.</p>
            <p>Pourtant, plusieurs éléments ont généré des sentiments contradictoires à cette ambiance sonore. <i>« On se sent apaisé… mais aussi un peu enfermé »</i> <i>« On est petit à côté de ces grands bâtiments ».</i> Plusieurs participants ont évoqué un sentiment d’enfermement, de rétrécissement spatial accentué par les hauts bâtiments qui dominent la place. L’étroitesse de l’espace fait écho à des problématiques de densification urbaine, où les espaces publics de plus en plus restreints, peuvent affecter la perception urbaine.</p>
          
            <TitleGroup>Groupe 2 - Jardin de Ville et les quais</TitleGroup>
            <p>Le deuxième groupe a choisi de flâner sans itinéraire prédéfini, déambulant dans la ville selon leurs sensations. Leur balade les a menés autour du jardin de Ville et des quais. Ici, les émotions dominantes sont le bien-être, la détente, l’envie de s’attarder. La nature y joue un rôle important. <i>« C’est vert, calme […] les sons de la ville sont atténués près du jardin de ville, notamment grâce aux bâtiments qui forment une barrière. »</i></p>
            <p>Le groupe a aussi observé la diversité patrimoniale du lieu, soulignant la cohabitation entre passé et présent : <i>« On remarque par l’aspect et le style des bâtiments s’ils sont anciens ou modernes. On arrive à différencier les différentes époques en ville ». « Tout est patrimoine (statues, parc, bulle, bâtiments, vieux arbres, kiosque) »</i></p>
            <p>La vue sur les montagnes, la cohérence paysagère entre les différents plans (façades, collines, végétation) renforce l’ancrage patrimonial du lieu selon eux.</p>
            <p>Les émotions positives évoquées confirment que la présence de la nature déclenche souvent des sentiments communs d’apaisement, de bien-être et de détente, liés à un processus connu sous le nom de restauration cognitive : la nature aide notre cerveau à se régénérer et à réduire le stress.</p>
          
            <TitleGroup>Groupe 3 - Espace au-dessus du parking Philippeville</TitleGroup>
            <p>Le dernier groupe s’est arrêté au-dessus du parking Philippeville, non loin du Jardin de Ville, un espace en dalle de béton. Ce lieu, souvent évité, a été choisi précisément pour ses contrastes.</p>
            <p><i>« Pour moi l’urbanisme de dalle, un peu mal foutu, qui fait enclave urbaine comme le forum au jardin Hoche, ou l’office du tourisme… Pour moi c’est typiquement Grenoblois. C’est l’urbanisme mal pensé, mal dessiné dont on ne sait plus quoi faire aujourd’hui. C’est un vrai héritage Grenoblois selon moi ».</i></p>
            <p>Si l’esthétique du béton dégradé n’est pas apprécié par le groupe, la végétation elle donne un autre point de vue : <i>« Le vert est agréable à voir. C’est assez étonnant car sur un urbanisme de dalle normalement il n’y a pas autant de végétation. »</i></p>
            <p>Les émotions sont mixtes : oppression, inconfort, malaise face au béton mal agencé, en mauvais état, mais aussi il y a un sentiment de curiosité, de bien-être face à la végétation. Le groupe souligne aussi la place laissée à l’expression artistique à travers les nombreux tags : <i>« J’ai l’impression qu’ici c’est un lieu où l’on peut s’exprimer alors qu’à côté l’expression est moins permise par l’espace. Il y a une liberté tolérée. Il y a des tags qui sont assez développés et d’autres plus simples, mono-couleur, qui laisse paraître une appartenance à cet espace. »</i></p>
            <p>Certains y voient un patrimoine alternatif et marginal, un lieu de créativité. Toutefois, des pratiques illégales (notamment le deal) sont aussi évoquées, contribuant à une perception négative du site.</p>
            <p>Cette zone nous montre que les espaces délaissés peuvent générer de fortes émotions négatives, mais que l’introduction d’art (notamment de rue) et de végétation transforme radicalement le vécu émotionnel. L'art suscite une forme d’appropriation, et même parfois une volonté de soin pour le lieu.</p>
            <p>Enfin, ce lieu suscite une réflexion sur le patrimoine urbain : <i>« L’architecture est très grenobloise. Les immeubles anciens ici, et de l’autre côté des immeubles plus modernes, dialoguent bien ensemble. Ce lieu a un aspect patrimonial, parce qu’à travers son architecture typique, il retrace l’évolution grenobloise, les techniques, les manières de penser la ville. Ils s’intègrent dans un paysage ancien, et on voit qu’il y a une évolution des pratiques, mais pour autant il y a quand même une cohabitation. Il y a des époques qui cohabitent les unes à côté des autres, sans qu’il y ait de lien vraiment penser ou du moins on n’a pas tjrs l’impression qu’il y est du lien pensé. Pourtant l’alignement des façades est très bien fait. »</i></p>
          
            <TitleGroup>Analyse générale</TitleGroup>
            <p>La présence prédominante de certaines émotions révélées par le diagnostic sensible et émotionnel permet de démontrer que, bien que nos perceptions et émotions varient d’un individu à l’autre, nous partageons des mécanismes perceptifs, émotionnels, cognitifs similaires. Ces similarités peuvent alors conduire à des expériences urbaines communes d’un individu à l’autre. Parmi les effets largement partagés figurent l’impact bienfaisant de la nature : lorsque nous sommes exposés à des éléments naturels (végétation, eau, etc.). Également, l’architecture monumentale peut susciter admiration et oppression, ou encore un même espace peut provoquer des émotions opposées, existantes (ex. beauté d’un bâtiment ou oppression de l’espace).</p>
          </div>
        </ActivityPanel>
        <ActivityPanel className={anchor === 'Act2' && 'active'} id='Act2' style={{ backgroundImage: 'url("./imgs/ImagesPanneaux/Panneau_activité_2.jpg")' }}>
          <h2 className='panelTitle'>Expérimentation 2</h2>
          <div className="imageOverlay" />
          <div className='panelContent'>
            <h3>Détails du paysage mêlant ancien et nouveau</h3>
            <p>Notre seconde expérimentation s’est déroulée au cœur du centre-ville de Grenoble, dans un périmètre comprenant la Place Victor Hugo, la Place Grenette et les rues adjacentes. Cette zone a été choisie pour la richesse de ses éléments patrimoniaux et la diversité de ses formes urbaines, offrant ainsi un terrain d’observation idéal pour s’initier à la lecture du paysage urbain.</p>
            <ImageLandscape src='./imgs/Activité2/IMG_7274.jpg'/>
            <p>À travers une chasse au trésor, les étudiants ont été amenés à arpenter l’espace, à s’orienter à l’aide d’une carte, et à identifier des détails patrimoniaux souvent méconnus ou ignorés dans le quotidien tels qu’une sculpture discrète, un motif de façade, une porte ancienne,...Cette expérimentation avait pour but de réveiller le regard, de montrer que le patrimoine n’est pas uniquement constitué de monuments emblématiques, mais aussi de petits indices ancrés dans le paysage urbain, que l’on croise chaque jour sans y prêter attention.</p>  
            <p>Cette démarche sensible et active a permis de stimuler l’observation, tout en révélant l’évolution du territoire à travers les traces du passé toujours visibles dans le tissu urbain présent. En arpentant la ville de manière ludique, les étudiants ont ainsi développé une nouvelle attention au paysage construit, apprenant à décrypter les signes de l’histoire du patrimoine grenoblois, souvent dissimulés dans les détails du quotidien.</p>
          </div>
        </ActivityPanel>
        <ActivityPanel className={anchor === 'Act3' && 'active'} id='Act3' style={{ backgroundImage: 'url("./imgs/ImagesPanneaux/Panneau_activité_3.jpg")' }}>
          <h2 className='panelTitle'>Expérimentation 3</h2>
          <div className="imageOverlay" />
          <div className='panelContent'>
            <h3>Création d’une œuvre collective centralisée</h3>
            <p>La dernière expérimentation était divisée en deux temps.</p>
            <p>Le premier, un temps de présentation et d’observation, s’est déroulé rue François Raoult. Cette voie de desserte, espace étroit, plutôt sombre que l’on ne devine qu’au coin d’une rue, est un des points névralgiques du réseau de street art de la ville. Les nombreuses fresques et tags, à proximité les uns des autres, en ont fait un point d’arrêt stratégique pour traiter du street art à Grenoble. Nous avons présenté 3 fresques, porteuses de messages et de revendications fortes. Cet aperçu permet de mettre en lumière les formes et styles différents proposés par les artistes pour décorer, interpeller ou communiquer. </p>
            <ImageLandscape src='./imgs/Activité3/IMG_7281.jpg'/>
            <p>Ce premier temps a laissé place à une seconde phase, pratique cette fois-ci. Le Jardin Hoche, dernière étape de notre parcours, lieu calme et étendu offrait la possibilité aux étudiants de s’isoler pour une expérimentation de réflexion et de production. En redessinant chacun une portion de l’œuvre “souvenirs d’enfants” par l’artiste Maye, ils ont créé une œuvre collective unique. Synthèse des observations et sujets abordés ce matin-là, l’expérimentation participative a permis de mettre en lien les sujets abordés tout au long de la sortie sous forme visuelle et sensible. Tous ont donc pu exprimer à leur manière comment il voyait l’art dans le paysage urbain actuel.</p>
            <ImageLandscape src='./imgs/Activité3/IMG_7285.jpg'/>
            <p>La production finale est donc une fresque inspirée de “souvenirs d’enfants” par l’artiste Maye ou chaque participant a eu l’occasion de redessiner une partie de la fresque à sa manière. Cela a permis à tous d’exprimer à sa manière comment il voyait l’art dans le paysage urbain actuel, qu’ils ont eu l’occasion de voir, écouter et ressentir au fil de la sortie.</p>
            <NavLink to="/fresque">Voir la fresque</NavLink>
            <br/>
            <ImagePortrait src='./imgs/Activité3/IMG_Whatsapp.jpg'/>
            </div>
        </ActivityPanel>
      </ActivityContainer>
    </BrowserSizedContainer>
  )
}

const ImageLandscape = styled.img`
  width: 70%;
  border-radius: 10px;
  align-self: center;
`

const ImagePortrait = styled(ImageLandscape)`
  width: 40%;
`

const TitleGroup = styled.h4`
  margin: 0;
  padding: 0;
  margin-top: 20px;
`


export default Activities