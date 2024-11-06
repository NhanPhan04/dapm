import React from "react";
import './index.css'
import Banner from "../../banner";
import DropdownMenuVer2 from "../../dropdownmenu/dropver2";
import TwoBlockContent from "../twoblock-content";
import GalleryBlock from "../Galleryblock";
import TextBaseSemi from "../../text/semibold/text-base";
import SliderCustomVer2 from "../../slider/index1";
import CoWorker from "../coworker-content";
import SizeAdjustContent from "../sizeadjustcontent";
import SpecialContent from "../../speacial";
import SwiperItem from "../../SwiperItem";
import HouseItemBlockVer2 from "../../item/houseItemBlock/index copy";
import PopularSearchListContent from "../popularsearchlist-content";
import { Link } from "react-router-dom";
import { RealEstate } from "../../../data/realestate";


const BigContent = () => {
    const HouseSaleList=RealEstate.filter((item)=>item.RentorSell==="Sell")
    const HouseSaleListm=RealEstate.filter((item)=>item.RentorSell==="Sell").slice(0,5)
    const HouseRentList=RealEstate.filter((item)=>item.RentorSell==="rent").slice(0,5)
    const DatList=HouseSaleList.filter((item)=>item.category==="Đất")
    

    
    return <div className="BigContent-wrapper ">
        <Banner/>

        <div className="flex bg-white rounded-e-lg rounded-bl-lg shadow-lg">
            <Link to="/sellListScreen" className="w-1/2">
            <div className="flex justify-center gap-2  h-28 items-center hoverver1 cursor-pointer">
                <img className="size-14" src={`${process.env.PUBLIC_URL}/img/bruh/item.png`} alt=""/>
                <h1 className="font-semibold text-orange-500">Mua bán</h1>
            </div>
            </Link>
           
             <div className="w-small bg-gray-200"></div>
             <Link to="/rentListScreen" className="w-1/2">
             <div className="flex justify-center gap-2  h-28 items-center hoverver1 cursor-pointer">
                <img className="size-14" src={`${process.env.PUBLIC_URL}/img/bruh/item.png`} alt=""/>
                <h1 className="font-semibold text-orange-500">Cho thuê</h1>
            </div>
             </Link>
        </div>
        
        <div className="mt-3 flex shadow-md">
            <TwoBlockContent/>
        </div>
        
        <div className="mt-3 shadow-md">
            <GalleryBlock title={"Bất động sản theo khu vực"}/>
        </div>

        <div className="mt-3 px-3 py-2 rounded-lg bg-white shadow-md ">
            <div className="my-2">
             <TextBaseSemi text={"Mua bán bất động sản"}/>
            </div>
            <div className="flex justify-between">
                {HouseSaleListm.map((item)=>(
                    <Link to={`/product/${item.id}`} key={item.id}>
                      <HouseItemBlockVer2 item={item} />
                    </Link>
                ))}
            </div>
        </div>

        <div className="mt-3 px-3 py-2 bg-white rounded-lg shadow-md">
            <div className="py-2">
            <TextBaseSemi text={"Cho thuê bất động sản"}/>

            </div>
            <div className="flex justify-between">
              {HouseRentList.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id}>
                     <HouseItemBlockVer2 item={item} />
                </Link>
              ))}
             </div>
        </div>

        <div className="mt-3 shadow-md">
            <SwiperItem list={DatList} showItemComponents={HouseItemBlockVer2}/>
        </div>

        <div className="mt-3 shadow-md">
            <SliderCustomVer2 />
        </div>

        <div className="mt-3 shadow-md">
            <CoWorker/>
        </div>
        <div className="mt-3 shadow-md">
            <SpecialContent/>
        </div>

        <div className="mt-3 shadow-md">
            <SizeAdjustContent/>
        </div>


        <div className="mt-3 mb-3 shadow-md">
            <PopularSearchListContent />
        </div>

    </div>
}
export default BigContent