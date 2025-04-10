import React from 'react'
import BrowserSizedContainer from '../../components/containers/BrowserSizedContainer'
import styled from 'styled-components'
import { ActivityPanel } from '../../components/containers/ActivityPanel'
import { ActivityContainer } from '../../components/containers/ActivityContainer'

const Activity1 = () => {
  return (
    <BrowserSizedContainer>
      <ActivityContainer>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité1/IMG_7233.jpg")' }}>
          <h2 className='panelTitle'>Activity 1</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité1/IMG_7237.jpg")' }}>
          <h2 className='panelTitle'>Activity 1</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité1/IMG_7240.JPG")' }}>
          <h2 className='panelTitle'>Activity 1</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
      </ActivityContainer>
    </BrowserSizedContainer>
  )
}

export default Activity1