import React, { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './index.css';

const SliderCustomVer2 = () => {
    const bannerList = [
        `${process.env.PUBLIC_URL}/img/slider/sliderimg.png`,
        `${process.env.PUBLIC_URL}/img/slider/sliderimg1.png`,
        `${process.env.PUBLIC_URL}/img/slider/sliderimg2.png`,
        `${process.env.PUBLIC_URL}/img/slider/sliderimg3.png`,
    ];

    const [bannerIndex, setBannerIndex] = useState(0);

    // Automatically changes the banner every 2 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            HandleBannerList();
        }, 5000);
        
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [bannerIndex]); // Effect depends on the bannerIndex

    const DecreaseBannerIndex = () => {
        setBannerIndex(0); // Reset to the first banner
    };

    const IncreaseBannerIndex = () => {
        setBannerIndex(prevIndex => prevIndex + 1);
    };

    const HandleBannerList = () => {
        if (bannerIndex < bannerList.length - 1) {
            IncreaseBannerIndex();
        } else {
            DecreaseBannerIndex(); // Go back to the first banner
        }
    };

    return (
        <div className="Slider-wrapper relative rounded-lg">
            <img
                src={bannerList[bannerIndex]}
                alt="banner"
                className="slider-img"
            />
            <div className="absolute right-1/2">
             {bannerList.map((item,index)=>{
                <div key={index} className="rounded px-1 py-1 bg-black"></div>
             })}
            
            </div>
        </div>
    );
};

export default SliderCustomVer2;
