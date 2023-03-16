import React from 'react'
import ItemsListContainer from '../ItemsListContainer/ItemsListContainer'
import { Link } from 'react-router-dom'

const ItemList = () => {
  return (<>

  <div className='productos'>
    <ItemsListContainer/>
  </div>
    </>
  )
}

export default ItemList;
