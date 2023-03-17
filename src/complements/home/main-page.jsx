
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../../index.scss';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// import img_1 from '../../assets/images/joyas/img_1.jpg';
import collares from "../../data/routes_images";

const MainPage = () => {
  return (
    <>
      <span>𝕿𝖍𝖊 𝖔𝖓𝖑𝖎𝖓𝖊 𝖘𝖙𝖔𝖗𝖊 𝖔𝖋 𝐲𝖔𝖚𝖗 𝖉𝖗𝖊𝖆𝖜𝖘</span>

      <div className="Test-area">


        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {
            collares.length > 0

            ? collares.map((item, index) => (
              <SwiperSlide key={item}>
                <img alt={`Collar ${index}`} src={item} />
              </SwiperSlide>
            ))

            : <h2>No hay imagenes Cargadas</h2>
          }

        </Swiper>


      </div>

    </>
  )
}

export default MainPage;
