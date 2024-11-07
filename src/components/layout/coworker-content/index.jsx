import React from "react";
import TextBaseSemi from "../../text/semibold/text-base";
import OrangeMarkBase from "../../text/mark/orangeMark";
import TextLgSemi from "../../text/semibold/text-lg";
import GppGoodIcon from '@mui/icons-material/GppGood';
import TextXsSemi from "../../text/semibold/text-xs";
import UpButton from "../../button/upbutton";

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
    return<div className="CoWorkerContent-wrapper px-6 py-3 bg-white rounded-lg">
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
    <a 
        href="https://www.chotot.com/chuong-trinh/doi-tac-doanh-nghiep-nha-tot" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-white btn-animate text-base font-semibold"
    >
        Tìm hiểu ngay chương trình
    </a>
</div>

    </div>
}
export default CoWorker