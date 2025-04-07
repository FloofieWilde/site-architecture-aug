import React from 'react'

const Tab = ({label, id, handler}) => {
  return (
    <div onClick={handler}>{label}</div>
  )
}

export default Tab