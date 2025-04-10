import React from 'react'
import BrowserSizedContainer from '../../components/containers/BrowserSizedContainer'
import { ActivityContainer } from '../../components/containers/ActivityContainer'
import { ActivityPanel } from '../../components/containers/ActivityPanel'

const Activity2 = () => {
  return (
    <BrowserSizedContainer>
      <ActivityContainer>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité2/IMG_7271.jpg")' }}>
          <h2 className='panelTitle'>Activity 2</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
        <ActivityPanel style={{ backgroundImage: 'url("./imgs/Activité2/IMG_7274.jpg")' }}>
          <h2 className='panelTitle'>Activity 2</h2>
          <div className='panelContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
          </div>
        </ActivityPanel>
      </ActivityContainer>
    </BrowserSizedContainer>
  )
}

export default Activity2