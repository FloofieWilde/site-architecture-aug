import React from 'react'
import BrowserSizedContainer from '../../components/containers/BrowserSizedContainer'
import { ActivityContainer } from '../../components/containers/ActivityContainer'
import { ActivityPanel } from '../../components/containers/ActivityPanel'

const Activity3 = () => {
  return (
    <BrowserSizedContainer>
      <ActivityContainer>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité3/IMG_7281.jpg")' }}>
          <h2 className='panelTitle'>Activity 3</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité3/IMG_7282.jpg")' }}>
          <h2 className='panelTitle'>Activity 3</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité3/IMG_7285.jpg")' }}>
          <h2 className='panelTitle'>Activity 3</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité3/IMG_WhatsApp.jpg")' }}>
          <h2 className='panelTitle'>Activity 3</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
      </ActivityContainer>
    </BrowserSizedContainer>
  )
}

export default Activity3