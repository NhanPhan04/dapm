import React from "react";
import TextBaseSemi from "../../text/semibold/text-base";
import OrangeMarkBase from "../../text/mark/orangeMark";
import TextLgSemi from "../../text/semibold/text-lg";
import GppGoodIcon from '@mui/icons-material/GppGood';
import TextXsSemi from "../../text/semibold/text-xs";
import UpButton from "../../button/upbutton";
import BigButton from "../../button/bigbutton";

const CoWorker=()=>{
    const list=[
        {
            title:"Nhãn Đặc biệt",
            text:"Tăng 40% hiệu quả tin đăng",
            img:`${process.env.PUBLIC_URL}/img/partner/partner.png`,
        },
        {
            title:"Tin đăng tiếp cận",
            text:"Hơn 40 triệu người mua tiềm năng",
            img:`${process.env.PUBLIC_URL}/img/partner/partner1.png`,
        },
        {
            title:"Tài Khoản Doanh Nghiệp",
            text:"Giúp tăng hiệu quả quản lý",
            img:`${process.env.PUBLIC_URL}/img/partner/partner2.png`,
        },
    ]
    return<div className="CoWorkerContent-wrapper px-6 py-3 bg-white">
        <div className="flex gap-1">
            <TextBaseSemi text={"Đồng hành cùng"}/>
            <OrangeMarkBase text={"Nhà tốt"}/>
            <GppGoodIcon className="text-orange-400"/>
        </div>
        <div className="flex justify-between mt-5 mb-5">
            {list.map((item)=>(
                <div className="flex items-center">
               
                    <img src={item.img} className="w-20 h-20 mr-3" alt={item.title}/>
                    <div>
                        <TextLgSemi text={item.title}/>
                        <TextXsSemi text={item.text}/>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center">
            <BigButton title={"Tìm hiểu ngay chương trình"}/>
        </div>
    </div>
}
export default CoWorker