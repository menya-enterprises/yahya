import React from 'react';
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "./News.css";
import images from '../../constants/images';
import newsVideo from "../../assets/promo_video.mp4"; // Change to your news video
import { useTranslation } from 'react-i18next';

function News() {
  const [t] = useTranslation("global");
  const videoRef = React.useRef();

  return (
    <div className='app__news section__padding app__wrapper' id="news">
      <h1 className='headtext__tenor'>News</h1>
      <div className='app__news-video'>
        <video
        src={newsVideo}
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
      <div className="app__news-content section__padding">
        <div className='news__content-item'>
          <h1 className='p__tenor'>Richmond BC</h1>
          <p className='p__opensans'>Apr. 16, 2024</p>
          <p className='p__opensans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a className='news__content-link p__opensans'>Find more</a>
        </div>
        <div className='news__content-item'>
          <h1 className='p__tenor'>Welcome to our restaraunt!</h1>
          <p className='p__opensans'>Apr. 16, 2024</p>
          <p className='p__opensans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a className='news__content-link p__opensans'>Find more</a>
        </div>
        <div className='news__content-item'>
          <h1 className='p__tenor'>We are open!</h1>
          <p className='p__opensans'>Apr. 16, 2024</p>
          <p className='p__opensans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a className='news__content-link p__opensans'>Find more</a>
        </div>
        <a className='news__content-link p__opensans' style={{paddingRight:"1rem"}}>See all</a>
      </div>
    </div>
  )
}

export default News;
