import React from "react";
import BigContent from "../bigcontent";
import './index.css'

const BehindLayout = () =>{
    return<div className="BehindLayout-wrapper  mb-2 flex justify-center bg-grey">
        <div className="sideimg "></div>
        <BigContent/>
        <div className="sideimg"></div>
    </div>
}
export default BehindLayout