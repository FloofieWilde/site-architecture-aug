import React from 'react'
import BrowserSizedContainer from '../../components/containers/BrowserSizedContainer'
import styled from 'styled-components'

const Activity1 = () => {
  return (
    <BrowserSizedContainer>
        <ActivityContainer>
          <ActivityPanel className='P1' style={{backgroundColor: 'blue'}}>
            <h2 className='panelTitle'>Activity 1</h2>
            <div className='panelContent'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            </div>
          </ActivityPanel>
          <ActivityPanel style={{backgroundColor: 'white'}}>
            <h2 className='panelTitle'>Activity 1</h2>
            <div className='panelContent'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam quos laudantium alias voluptatibus, corrupti aut error dicta natus animi commodi fuga, voluptate beatae perspiciatis amet numquam doloremque tenetur a.</p>
            </div>
          </ActivityPanel>
          <ActivityPanel style={{backgroundColor: 'red'}}>
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

const ActivityContainer = styled.div`
    flex: 1;
    min-height: 0;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const ActivityPanel = styled.div`
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: auto;
    flex: 1;
    position: relative;
    flex-direction: column;
    text-align: center;

    height: 100%;

    .panelTitle {
      position: absolute;

    }

    .panelContent {
      opacity: 0;
      transition: all 0.3s ease-in-out;
      padding: 0 40px;
    }

    &:hover {
    flex: 4;

      >.panelTitle {
        transition: all 0.3s ease-in-out;
        opacity: 0;
      }
      >.panelContent {
        transition: all 0.3s ease-in-out;
        opacity: 1;
      }
    }

    &.P1 {
      background-image: url('./BgPh.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
`

export default Activity1