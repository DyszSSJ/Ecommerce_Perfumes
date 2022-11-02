import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Invictus from "../assets/versace-eros-flame-eau-de-parfum-100-ml-34-fl-oz.jpg";
import CK from "../assets/CK.jpg";
import Gucci from "../assets/Gucci2.jpg";
import HugoBoss from "../assets/HugoBoss.webp";
import Fahrenheit from "../assets/Fahrenheit-de-Dior.jpg";
import Dior from "../assets/10301579-1.jpg";

function SwiperSliderComponent() {
  return (
    <div className="portfolio">
      <Swiper
        spaceBetween={40}
        slidesPerView={2.8}
        grabCursor={false}
        className="portfolio-slider"
      >
        <div className="divFlecha">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 flexha-D"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div>
          <SwiperSlide>
            <img src={Invictus} alt="" className="cardSwiper" />
          </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <img src={CK} alt="" className="cardSwiper" />
          </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <img src={HugoBoss} alt="" className="cardSwiper" />
          </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <img src={Gucci} alt="" className="cardSwiper" />
          </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <img src={Fahrenheit} alt="" className="cardSwiper" />
          </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <img src={Dior} alt="" className="cardSwiper" />
          </SwiperSlide>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 flecha"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Swiper>
    </div>
  );
}

export default SwiperSliderComponent;
