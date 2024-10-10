import React, { useState } from "react";
import SmallButton from "../../button/smallbutton";
import Gallery from "./Gallery";

const GalleryBlock = ({ title }) => {
    const types = [
        "Căn hộ/Chung cư",
        "Nhà ở",
        "Đất",
        "Văn phòng/mặt bằng",
    ];

    const [selectedOption, setSelectedOption] = useState('buy');
    const [color, setColor] = useState('#fa6819');

    const handleChangeColor = (option) => {
        setSelectedOption(option);
        if (option === 'buy') {
            setColor('#fa6819'); // Màu cho "Mua bán"
        } else if (option === 'rent') {
            setColor('#fa6819'); // Màu cho "Cho thuê"
        }
    };

    return (
        <div className="GalleryBlockContent-wrapper bg-white px-3 py-2">
            <h1 className="font-semibold text-base mt-2 mb-3">{title}</h1>
            <div className="type-section gap-2 flex ">
                {/* Nút Mua bán */}
                <div
                    className="buy-btn text-sm cursor-pointer px-2 py-1 font-semibold"
                    onClick={() => handleChangeColor('buy')}
                    style={{
                        borderBottom: selectedOption === 'buy' ? `2px solid ${color}` : '2px solid transparent',
                        color: selectedOption === 'buy' ? color : 'black',
                    }}
                >
                    Mua bán
                </div>

                {/* Nút Cho thuê */}
                <div
                    className="rent-btn text-sm cursor-pointer px-2 py-1 font-semibold "
                    onClick={() => handleChangeColor('rent')}
                    style={{
                        borderBottom: selectedOption === 'rent' ? `2px solid ${color}` : '2px solid transparent',
                        color: selectedOption === 'rent' ? color : 'black',
                    }}
                >
                    Cho thuê
                </div>
            </div>

            <div className="locationpick flex gap-2 mt-4">
                {types.map((item) => (
                   <SmallButton text={item} color={"#fa6819"}/>
                ))}
            </div>

            <div className="mt-4 mb-4">
                <Gallery/>
            </div>

        

        
       
        </div>
    );
};

export default GalleryBlock;
