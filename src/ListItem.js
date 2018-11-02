import React from 'react'

function ListItem({ item }) {
  console.log('render list')
  return (
    <li>{item}</li>
  )
}

export default React.memo(ListItem)
