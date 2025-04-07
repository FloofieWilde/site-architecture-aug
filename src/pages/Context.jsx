import React from 'react'
import BrowserSizedContainer from '../components/containers/BrowserSizedContainer'

const Context = () => {
  return (
    <BrowserSizedContainer>
        <iframe 
            src="https://framacarte.org/fr/map/itinetaire-de-la-sortie_206628#15/45.1899/5.7275"
            style={{
                width: '100%',
                height: '100%',
                border: 'none',
            }}
        />
    </BrowserSizedContainer>
  )
}

export default Context