import React from 'react'
import BrowserSizedContainer from '../components/containers/BrowserSizedContainer'
import FresqueContainer from '../components/containers/FresqueContainer'
import FlexRow from '../components/containers/FlexRow';
import { FlexColumn } from '../components/containers/FlexColumn';

const Fresque = () => {

  const arrayOfImages = [];

  for (let i = 0; i < 6; i++) {
    const imageRow = [];
    for (let j = 0; j < 5; j++) {
      imageRow.push(`/fresque-imgs/${i+1}-${j+1}.png`);
    }
    arrayOfImages.push(imageRow);
  }

  return (
      <FresqueContainer>
          {
            arrayOfImages.map((row, rowIndex) => (
                <FlexRow key={rowIndex}>
                {row.map((image, colIndex) => (
                  <img 
                    key={colIndex} 
                    src={image}
                    style={{
                      width: '20%',
                    }}
                    alt={`Fresque ${rowIndex+1}-${colIndex+1}`}
                  />
                ))}
                </FlexRow>
              ))
            }
      </FresqueContainer>
  )
}

export default Fresque