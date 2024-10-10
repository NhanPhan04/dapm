import React, { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './index.css'

const SliderCustom = () => {
    const bannerList = [
        `${process.env.PUBLIC_URL}/img/slider/sliderimg.png`,
        `${process.env.PUBLIC_URL}/img/slider/sliderimg1.png`,
        `${process.env.PUBLIC_URL}/img/slider/sliderimg2.png`,
        `${process.env.PUBLIC_URL}/img/slider/sliderimg3.png`,

    ]; // Đường dẫn trực tiếp đến file ảnh trong thư mục public

    const [bannerIndex, setBannerIndex] = useState(0);

    const increaseIndex = () => {
        setBannerIndex((prevIndex) => (prevIndex + 1) % bannerList.length);
    };

    const decreaseIndex = () => {
        setBannerIndex((prevIndex) => (prevIndex - 1 + bannerList.length) % bannerList.length);
    };

    const autoChange = () => {
        setInterval(
            setBannerIndex(),2000
        )
    }

    return (
        <div className="Slider-wrapper relative">
        
            <button onClick={decreaseIndex} className="button-slider left-rounded flex absolute px-2 py-2 trans-y left-0 top-1/2 text-white">
                <KeyboardArrowLeftIcon/>
            </button>
            <button onClick={increaseIndex} className="button-slider right-rounded flex absolute px-2 py-2 trans-y right-0 top-1/2  text-white ">
                <KeyboardArrowRightIcon/>
            </button>
            <img src={bannerList[bannerIndex]} alt="banner" className="slider-img" onChange={()=>{}}/>
        </div>
    );
};

export default SliderCustom;
