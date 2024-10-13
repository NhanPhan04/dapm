import React from "react";
import BigContent from "../bigcontent";
import './index.css'

const BehindLayout = () =>{
    return<div className="BehindLayout-wrapper relative mb-2 flex justify-center bg-grey">
        <div className="sideimg absolute right-0"></div>
        <div className="sideimg absolute left-0"></div>
        <BigContent/>
    </div>
}
export default BehindLayout