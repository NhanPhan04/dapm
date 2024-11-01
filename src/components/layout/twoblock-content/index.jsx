
import React from "react";
import BlockItem from "../blockitem";

const TwoBlockContent= () => {
    const toolList= [
       {
         title:"Biểu đồ giá",
         imgSrc: `${process.env.PUBLIC_URL}/img/tools/toolistimg.png`
       },
       {
        title:"Vay mua nhà",
        imgSrc: `${process.env.PUBLIC_URL}/img/tools/toolistimg1.png`
       },
       {
        title:"Kinh nghiệm",
        imgSrc: `${process.env.PUBLIC_URL}/img/tools/toolistimg2.png`
       },
    ]
    const serviceList= [
        {
          title:"Gói Pro",
          imgSrc: `${process.env.PUBLIC_URL}/img/tools/toolistimg3.png`
        },
        {
         title:"Doanh nghiệp",
         imgSrc: `${process.env.PUBLIC_URL}/img/tools/toolistimg4.png`
        },
        {
         title:"Chuyên môi giới",
         imgSrc: `${process.env.PUBLIC_URL}/img/tools/toolistimg5.png`
        },
     ]
    return<div className="TwoBlockContent-wrapper w-full flex justify-between">
        <BlockItem item={toolList} title={"Công cụ tiện ích"}/>
        <BlockItem item={serviceList} title={"Dịch vụ dành cho môi giới"}/>
    </div>
}
export default TwoBlockContent