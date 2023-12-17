import React from 'react'

import "./Header.css"

import images from '../../constants/images';

function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <h1 className="app__header-h1">THE TASTE OF TRADITION</h1>
        <p className="p__opensans" style={{ margin: "0 0 1rem 0"}}>An authentic ramen that honour the rich culinary heritage of Japan. Our chefs use only the freshest ingredients, and carefully prepare each bowl of ramen with the utmost attention to detail.</p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.header01} alt="ramen header" />
      </div>
    </div>
  )
}

export default Header