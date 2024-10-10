import React from "react";
import './index.css'
import TextXsSemi from "../../../text/semibold/text-xs";
const Gallery=()=>{
    return<div className="flex justify-between">
        <div className="Gallery-pack HCM one-pic rounded-md ">
            <TextXsSemi text={"Tp Hồ Chí Minh"} className="absolute left-1 top-3 text-white"/>
            <TextXsSemi text={"6232 tin đăng"}/>
        </div>
        <div className="Gallery-pack four-pic">
            <div className="HN"></div>
            <div className="DN"></div>
            <div className="CT"></div>
            <div className="BD"></div>

        </div>
    </div>
}
export default Gallery