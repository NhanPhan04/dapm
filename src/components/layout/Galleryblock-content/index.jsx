import React from "react";

const GalleryBlockContent = ({title}) => {
    const Type=[
        ""
    ]
    return<div className="GalleryBlockContent-wrapper">
        <h1>{title}</h1>
        <div className="type-section gap-2 flex">
            <div className="">Mua bán</div>
            <div className="">Cho thuê</div>
        </div>
        <div className="locationpick">

        </div>
    </div>
}
export default GalleryBlockContent