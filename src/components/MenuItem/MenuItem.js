import React from 'react'
import "./MenuItem.css"

function MenuItem(props) {
  return (
    <div className='inventory__item'>
        <div className="item__image">
            <img src={props.img} alt={props.item.name}/>
        </div>
        <div className='item__header'>
            <p className='p__tenor'>{props.item.name}</p>
            <p className='p__opensans'>${(Array.isArray(props.item.price)) ? `${props.item.price[0]} - ${props.item.price[1]}` : props.item.price}</p>
            <div className='horizontal__divider'/>
            <p className='p__opensans'>{props.item.description}</p>
        </div>
    </div>
  )
}

export default MenuItem