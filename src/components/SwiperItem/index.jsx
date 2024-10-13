import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styled.css';

// Import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import HouseItemBlockVer2 from '../item/houseItemBlock/index copy';
import TextBaseSemi from '../text/semibold/text-base';

export default function SwiperItem({ list }) {
  return (
    <div className='SwiperItem-wrapper px-3 pb-2 pt-4 bg-white rounded-lg relative'>
      <div className='next-btn top-1/2 right-0 z-20 rounded-full bg-white border-2 shadow-sm transform -translate-y-1/2 px-1 py-1 flex'>
        <KeyboardArrowRightIcon />
      </div>
      <div className='previous-btn top-1/2 left-0 z-20 rounded-full bg-white border-2 shadow-sm transform -translate-y-1/2 px-1 py-1 flex'>
        <KeyboardArrowLeftIcon />
      </div>
      <div className='mt-2 mb-4'>
       <TextBaseSemi text={"Mua bán đất"}/>

      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.previous-btn',
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}> {/* Ensure each item has a unique key */}
            <HouseItemBlockVer2 item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
