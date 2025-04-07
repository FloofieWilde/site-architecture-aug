import React from 'react'
import Tab from './Tab'
import FlexRow from '../../containers/FlexRow'

const TabContainer = ({tabs, handler}) => {
    console.log(tabs)
  return (
    <FlexRow>
        {tabs.map((tab) => {
            return (
                <Tab id={tab.id} label={tab.label} handler={() => handler(tab.id)}/>
            )
        })}
    </FlexRow>
  )
}

export default TabContainer