import React from 'react'

import "./Menu.css"
import { MenuItem } from '../../components'
import {data} from '../../constants'

import images from '../../constants/images';


function Menu() {
  return (
    <div className='app__menu section__padding app__wrapper app__bg' id="menu">
      <h1 className='headtext__tenor'>Menu</h1>
      <div className='app__menu-carousel'>
        {data.map((element) => (
          <div className='menu__category' key={element.name}>
            <h1>{(element.name).toUpperCase()}</h1>
            <div className="category__inventory">
            {element.data.map((item) => (
              <MenuItem item={item} img={images["img" + item.id]}key={item.id} />
            ))}
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Menu