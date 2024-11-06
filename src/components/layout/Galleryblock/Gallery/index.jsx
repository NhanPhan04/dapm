import React from "react";
import './index.css'
import TextBaseSemi from "../../../text/semibold/text-base";

const Gallery=()=>{
    return<div className="flex justify-between">
        <div className="Gallery-pack HCM one-pic flex flex-col justify-between rounded-md">
            <div className=" text-white px-3 py-3">
             <TextBaseSemi text={"Tp Hồ Chí Minh"} className=" left-1 top-3 text-white"/>
            </div>
            <div className="text-white px-3 py-3">
             <TextBaseSemi  text={"6232 tin đăng"}/>
            </div>
        </div>
        
        <div className="Gallery-pack four-pic">
            <div className="HN flex flex-col justify-between">
             <div className=" text-white px-3 py-3">
             <TextBaseSemi text={"Hà Nội "} className=" left-1 top-3 text-white"/>
            </div>
            <div className="text-white px-3 py-3">
             <TextBaseSemi  text={"6232 tin đăng"}/>
            </div>
            </div>
            <div className="DN flex flex-col justify-between">
            <div className=" text-white px-3 py-3">
             <TextBaseSemi text={"Đà Nẵng"} className=" left-1 top-3 text-white"/>
            </div>
            <div className="text-white px-3 py-3">
             <TextBaseSemi  text={"6232 tin đăng"}/>
            </div>
            </div>
            <div className="CT flex flex-col justify-between">
            <div className=" text-white px-3 py-3">
             <TextBaseSemi text={"Cần Thơ"} className=" left-1 top-3 text-white"/>
            </div>
            <div className="text-white px-3 py-3">
             <TextBaseSemi  text={"6232 tin đăng"}/>
            </div>
            </div>
            <div className="BD flex flex-col justify-between">
            <div className=" text-white px-3 py-3">
             <TextBaseSemi text={"Bình Dương"} className=" left-1 top-3 text-white"/>
            </div>
            <div className="text-white px-3 py-3">
             <TextBaseSemi  text={"6232 tin đăng"}/>
            </div>
            </div>

        </div>
    </div>
}
export default Gallery