import React from 'react'

import "./Menu.css"
import { MenuItem } from '../../components'
import {data} from '../../constants'
import { useTranslation } from 'react-i18next';

import images from '../../constants/images';
import { Carousel } from 'react-responsive-carousel';

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  const [t] = useTranslation(["global"]);

  return (
    <div className="tools" style={{margin:"1rem 0"}}>
      <button className="custom__button" onClick={() => zoomIn()}>{t("zoom.zoom_in")}</button>
      <button className="custom__button" onClick={() => zoomOut()}>{t("zoom.zoom_out")}</button>
      <button className="custom__button" onClick={() => resetTransform()}>{t("zoom.reset")}</button>
    </div>
  );
};

function Menu() {
  const [t] = useTranslation(["global"]);
  return (
    <div className='app__menu section__padding app__wrapper app__bg' id="menu">
      <h1 className='headtext__tenor'>{t("navbar.menu")}</h1>
      <div className='app__menu-inventory'>
        {/* {data.map((element) => (
          <div className='menu__category' key={element.name}>
            <h1>{(element.name).toUpperCase()}</h1>
            <div className="category__inventory">
            {element.data.map((item) => (
              <MenuItem item={item} img={images["img" + item.id]}key={item.id} />
            ))}
            </div>
          </div>
          ))} */}
           <TransformWrapper
      initialScale={1}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <Controls />
          <TransformComponent>
        <Carousel
            infiniteLoop={true} 
            dynamicHeight={false}
            emulateTouch={true} 
            showThumbs={false} 
            showStatus={true} 
            showIndicators={false}
            preventMovementUntilSwipeScrollTolerance={true}
            className='inventory-carousel'
        >
          <div className="inventory-item">
            <img src={images.menu_front} alt="menu" />
          </div>
          <div className="inventory-item">
            <img src={images.menu_back} alt="menu" />
          </div>
            
      </Carousel>
      </TransformComponent>
        </>
      )}
    </TransformWrapper>
      <div className='inventory-item'>
        <img src={images.menu_summer} alt="menu" />
      </div>
      
      </div>
    </div>
  )
}

export default Menu