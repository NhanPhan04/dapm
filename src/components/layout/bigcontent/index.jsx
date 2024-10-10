import React from "react";
import './index.css'
import Banner from "../../banner";
import DropdownMenuVer2 from "../../dropdownmenu/dropver2";

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
        <div className="flex bg-white justify-between">
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item.png`} title={"Mua bán"}/>
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item.png`} title={"Mua bán"}/>
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item.png`} title={"Mua bán"}/>
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item.png`} title={"Mua bán"}/>

        </div>
    </div>
}
export default BigContent