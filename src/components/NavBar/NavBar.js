import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiCrossedAirFlows } from 'react-icons/gi';

import images from '../../constants/images';

import "./NavBar.css"

function NavBar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className="p__opensans"><a href='#home'>Home</a></li>
        <li className="p__opensans"><a href='#about'>About</a></li>
        <li className="p__opensans"><a href='#menu'>Menu</a></li>
        <li className="p__opensans"><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-order'>
        <a href='https://www.doordash.com/en-CA/store/yah-yah-ya-ramen-richmond-576879/' className='p__opensans' target='_blank'>Doordash</a>
        <div/>
        <a href='https://www.fantuanorder.com/store/yah-yah-ya-ramen/ca-5202/' className='p__opensans' target='_blank'>Fantuan</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center'>
            <GiCrossedAirFlows
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
              />
            <ul className='app__navbar-smallscreen_links'>
              <li className="p__opensans"><a href='#home'></a>Home</li>
              <li className="p__opensans"><a href='#about'></a>About</li>
              <li className="p__opensans"><a href='#menu'></a>Menu</li>
              <li className="p__opensans"><a href='#contact'></a>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar