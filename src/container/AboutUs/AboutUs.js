import React from 'react'
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"

import "./AboutUs.css"
import images from '../../constants/images'
import video from "../../assets/promo_video.mp4"
import { useTranslation } from 'react-i18next'

function AboutUs() {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [t, i18n] = useTranslation("global");
  const videoRef = React.useRef();

  const handleVideo = () => {
    setIsVideoPlaying((prevIsVideoPlaying) => !prevIsVideoPlaying);

    if (isVideoPlaying === true) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

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
          <div
          className='app__aboutUs-video_overlay-circle flex__center'
          onClick={handleVideo}
          >
            {isVideoPlaying ? (
              <BsPauseFill color='#fff' fontSize={30} />
            ) : <BsFillPlayFill color='#fff' fontSize={30} />
            }
          </div>
        </div>
      </div>
      <div className="app__aboutUs-content">
        <p className='p__tenor' style={{"white-space": "pre-line"}}>{t("about.message")}</p>
        <img src={images.ramen} alt="bowl of ramen"/>
      </div>
    </div>
  )
}

export default AboutUs