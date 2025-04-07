import React, { useState } from 'react'
import TabContainer from '../components/global/tab/TabContainer'
import Activity1 from './Activities/Activity1'
import Activity2 from './Activities/Activity2'
import Activity3 from './Activities/Activity3'

const Activities = () => {
    const [Tab, setTab] = useState(1)
  return (
    <>
    <TabContainer tabs={[
        {id: 1, label: 'Activity 1'},
        {id: 2, label: 'Activity 2'},
        {id: 3, label: 'Activity 3'},
        ]} handler={(id) => setTab(id)}
    />
        { Tab === 1 && <Activity1 />}
        { Tab === 2 && <Activity2 />}
        { Tab === 3 && <Activity3 />}

    </>
  )
}

export default Activities