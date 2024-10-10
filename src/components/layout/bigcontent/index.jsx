import React from "react";
import './index.css'
import Banner from "../../banner";
import DropdownMenuVer2 from "../../dropdownmenu/dropver2";
import TwoBlockContent from "../twoblock-content";
import GalleryBlock from "../Galleryblock";
import TextBaseSemi from "../../text/semibold/text-base";
import HouseItemBlock from "../../item/houseItemBlock";



const BigContent = () => {
    const HouseSaleList = [
        {
            title: "P.15, BÌNH THẠNH, ĐIỆN BIÊN PHỦ, HẺM Ô TÔ ĐỖ CỬA, BTCT 66M2 (4 x 16.5)",
            imgsrc: 'https://www.nhatot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fh8AbfsEoVH-WnLfNuOCnT1Xc9yXd3xKsQA30Pc8Ksxw%2Fpreset%3Aview%2Fplain%2F5a2f0255d71bb0be93784c7d3f0ca62c-2900088930174230296.jpg&w=1920&q=100',
            description: '',
            location: 'Thủ Đức',
            price: "715 triệu",
        },
        {
            title: "Căn hộ 2PN tại P.12, QUẬN 10, GẦN TRUNG TÂM THÀNH PHỐ, 75M2",
            imgsrc: 'https://www.nhatot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fh8AbfsEoVH-WnLfNuOCnT1Xc9yXd3xKsQA30Pc8Ksxw%2Fpreset%3Aview%2Fplain%2F5a2f0255d71bb0be93784c7d3f0ca62c-2900088930174230296.jpg&w=1920&q=100',
            description: 'Căn hộ thiết kế hiện đại, đầy đủ nội thất, thuận tiện đi lại.',
            location: 'Quận 10',
            price: "2 tỷ",
        },
        {
            title: "Nhà phố 4 tầng tại P. Tân Phú, GẦN TRƯỜNG HỌC, 100M2 (5 x 20)",
            imgsrc: 'https://www.nhatot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fh8AbfsEoVH-WnLfNuOCnT1Xc9yXd3xKsQA30Pc8Ksxw%2Fpreset%3Aview%2Fplain%2F5a2f0255d71bb0be93784c7d3f0ca62c-2900088930174230296.jpg&w=1920&q=100',
            description: 'Nhà mới xây, thiết kế sang trọng, không gian sống thoáng đãng.',
            location: 'Tân Phú',
            price: "3 tỷ",
        },
        {
            title: "Biệt thự vườn tại P. Bình Trưng Đông, QUẬN 2, 300M2",
            imgsrc: 'https://www.nhatot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fh8AbfsEoVH-WnLfNuOCnT1Xc9yXd3xKsQA30Pc8Ksxw%2Fpreset%3Aview%2Fplain%2F5a2f0255d71bb0be93784c7d3f0ca62c-2900088930174230296.jpg&w=1920&q=100',
            description: 'Biệt thự cao cấp với hồ bơi và vườn rộng, không gian sống lý tưởng.',
            location: 'Quận 2',
            price: "12 tỷ",
        },
        {
            title: "Căn hộ studio tại P. An Khánh, QUẬN 2, 35M2",
            imgsrc: 'https://www.nhatot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fh8AbfsEoVH-WnLfNuOCnT1Xc9yXd3xKsQA30Pc8Ksxw%2Fpreset%3Aview%2Fplain%2F5a2f0255d71bb0be93784c7d3f0ca62c-2900088930174230296.jpg&w=1920&q=100',
            description: 'Căn hộ tiện nghi cho người độc thân hoặc cặp đôi, gần các tiện ích.',
            location: 'Quận 2',
            price: "1 tỷ",
        },

    ];
    
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
            <GalleryBlock title={"Bất động sản theo khu vực"}/>
        </div>
        <div className="mt-2 px-3 py-2 bg-white ">
            <div className="my-2">
             <TextBaseSemi text={"Mua bán bất động sản"}/>
            </div>
            <div className="flex justify-between">
                {HouseSaleList.map((item)=>(
                    <HouseItemBlock item={item}/>
                ))}
            </div>
        </div>
        <div className="mt-2 px-3 py-2 bg-white ">
            <div className="py-2">
            <TextBaseSemi text={"Cho thuê bất động sản"}/>

            </div>
            <div className="flex justify-between">
                {HouseSaleList.map((item)=>(
                    <HouseItemBlock item={item}/>
                ))}
            </div>
        </div>
    </div>
}
export default BigContent