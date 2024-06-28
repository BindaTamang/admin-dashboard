import React from 'react'
import { Icon } from '@mui/material';
import './ItemCard.scss'

const ItemCard = ({item}) => {
  return (
    <div className='item-container'>
        <div className='item-card'>
        <img src={item.image} alt={item.name}/>
        <h1 className='text-sm'>{item.name}</h1>
        <p className="text-sm"> {item.value} {item.description}</p>
        
        <p className='text-sm'>
            <Icon>{item.footerIcon.name}</Icon>
            {item.footerText}
        </p>

    </div>
    </div>
    
  )
}

export default ItemCard