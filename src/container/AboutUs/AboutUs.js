import React from 'react'
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./AboutUs.css"
import images from '../../constants/images'
import video from "../../assets/promo_video.mp4"
import { useTranslation } from 'react-i18next'

function AboutUs() {
  const [t] = useTranslation("global");
  const videoRef = React.useRef();

  return (
    <div className='app__aboutUs section__padding app__wrapper app__bg' id="about">
      <div className='app__aboutUs-video flex__center'>
        <video
        src={video}
        ref={videoRef}
        type="video/mp4"
        muted
        loop
        controls={false}
        autoPlay
        playsInline
        />
        <div className='app__aboutUs-video_overlay flex__center'>
        </div>
      </div>
      <div className="app__aboutUs-carousel">
        <Carousel style={{ height: '100%' }} infiniteLoop={true} dynamicHeight={false} emulateTouch={true} showThumbs={false} showStatus={false} autoPlay={true} interval={1235000}>
          <div className="app__aboutUs-content">
            <h1 className='headtext__tenor'>Iekei Ramen History</h1>
            <p className='p__tenor' style={{whiteSpace: "pre-line"}}>{t("about.message.1")}<br/>{t("about.message.2")}</p>
          </div>
          <div className="app__aboutUs-content">
            <h1 className='headtext__tenor'>Our Recipe</h1>
            <p className='p__tenor' style={{whiteSpace: "pre-line"}}>{t("about.message.4")}</p>
          </div>
          <div className="app__aboutUs-content">
            <h1 className='headtext__tenor'>Yah-Yah-Ya Ramen History</h1>
            <p className='p__tenor' style={{whiteSpace: "pre-line"}}>{t("about.message.3")}</p>
          </div>

        </Carousel>
      </div>
    </div>
  )
}

export default AboutUs