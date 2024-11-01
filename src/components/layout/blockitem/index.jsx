import React, { useState } from "react";
import './index.css'

const BlockItem = ({ item, title }) => {
  return (
    <div className="BlockItem-wrapper  rounded-md py-2 px-3 h-40 bg-white cursor-pointer">
      <h1 className="text-lg font-semibold mb-4">{title}</h1>
      <div className="flex justify-between gap-2">
        {item.map((item) => (
          <div className="item-bg relative">
            <div className="image-container relative">
              <img
                src={item.imgSrc}
                alt="moi"
                className="rounded-md top-0 z-10 itemblock-img"
              />
              <div className="em text-overlay absolute inset-0 flex items-center justify-center z-20  font-semibold text-base">
                {item.title} 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockItem;
