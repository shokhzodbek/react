import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carusel.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="container-carusel">
        <div className="swiper-left">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadphones-gift.40a8eb73.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadphones-gift.40a8eb73.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadphones-gift.40a8eb73.png&w=828&q=75"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-right">
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </>
  );
}
