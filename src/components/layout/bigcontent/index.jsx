import React from "react";
import './index.css'
import Banner from "../../banner";
import DropdownMenuVer2 from "../../dropdownmenu/dropver2";
import TwoBlockContent from "../twoblock-content";
import GalleryBlockContent from "../galleryblock-content";

const BigContent = () => {
    const SellDropList=[
        {
            describe:"Căn hộ",
            function: ()=>{}
        },
        {
            describe:"Nhà ở",
            function: ()=>{}
        },
        {
            describe:"Đất ",
            function: ()=>{}
        },
        {
            describe:"Văn phòng mặt bằng kinh doanh",
            function: ()=>{}
        }
    ]
    return <div className="BigContent-wrapper ">
        <Banner/>
        <div className="flex bg-white justify-between rounded-e-lg rounded-bl-lg">
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item.png`} title={"Mua bán"}/>
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item.png`} title={"Cho thuê"}/>
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item1.png`} title={"Dự án"}/>
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item2.png`} title={"Môi giới"}/>
        </div>
        <div className="mt-2 flex">
            <TwoBlockContent/>
        </div>
        <div className="mt-2">
            <GalleryBlockContent/>
        </div>
    </div>
}
export default BigContent