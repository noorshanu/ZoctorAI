import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";

// import required modules
import { EffectCreative } from "swiper/modules";
import TeamCard from "../components/TeamCard";

function Teams() {
  return (
    <>
      <Swiper
        id="teams-slider"
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        speed={1000}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,

          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Autoplay, Pagination]}
        className="mySwiper6"
      >
        <SwiperSlide>
          <TeamCard
          title=' Working with Mark8 has been a game-changer for our marketing efforts. Their targeted social media campaigns and community management services have helped us build a strong and engaged community. We saw a 50% increase in user engagement within two months.'
          name='Jonathan Doe'
          Desi='Senior Director of Marketing'
          
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard 
          title='Mark8 delivered outstanding results for our product launch. Their PR and content marketing strategies generated significant media coverage and drove a substantial traffic increased. We are extremely pleased with their work and the positive impact on our brand.'
         name='Will Smith'
         Desi='Lead Marketing Manager'
         />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard 
          title='Mark8 delivered outstanding results for our product launch. Their PR and content marketing strategies generated significant media coverage and drove a substantial traffic increased. We are extremely pleased with their work and the positive impact on our brand.'
          name='Elliot Alderson'
          Desi='Consultant'
          />
        </SwiperSlide>
        <SwiperSlide>
        <TeamCard
          title=' Working with Mark8 has been a game-changer for our marketing efforts. Their targeted social media campaigns and community management services have helped us build a strong and engaged community. We saw a 50% increase in user engagement within two months.'
          name='Jonathan Doe'
          Desi='Senior Director of Marketing'
          
          />
        </SwiperSlide>
        <SwiperSlide>
        <TeamCard 
          title='Mark8 delivered outstanding results for our product launch. Their PR and content marketing strategies generated significant media coverage and drove a substantial traffic increased. We are extremely pleased with their work and the positive impact on our brand.'
          name='Elliot Alderson'
          Desi='Consultant'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Teams;
