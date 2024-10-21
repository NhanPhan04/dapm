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


const BigContent = () => {
    const HouseSaleList = [
        {
            title: "P.15, BÌNH THẠNH, ĐIỆN BIÊN PHỦ, HẺM Ô TÔ ĐỖ CỬA, BTCT 66M2 (4 x 16.5)",
            imgsrc: 'https://www.nhatot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fh8AbfsEoVH-WnLfNuOCnT1Xc9yXd3xKsQA30Pc8Ksxw%2Fpreset%3Aview%2Fplain%2F5a2f0255d71bb0be93784c7d3f0ca62c-2900088930174230296.jpg&w=1920&q=100',
            description: 'Liên hệ đặt cọc ngay giá cả ưu đãi',
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
    const HouseSaleList2 = [
        {
            title: "Nhà Bungalow Xinh Xắn tại P.15, BÌNH THẠNH, Gần Chợ Địa Phương, 60M2 (5 x 12)",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Bungalow+ở+BÌNH+THẠNH',
            description: 'Nhà bungalow ấm cúng với tiện nghi hiện đại, lý tưởng cho gia đình.',
            location: 'Bình Thạnh',
            price: "850 triệu",
        },
        {
            title: "Căn Hộ 3 Phòng Ngủ Sang Trọng tại P.12, QUẬN 10, Trung Tâm Thành Phố, 90M2",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Căn+hộ+sang+trọng+ở+QUẬN+10',
            description: 'Căn hộ rộng rãi với các chi tiết hoàn thiện cao cấp và tầm nhìn tuyệt đẹp.',
            location: 'Quận 10',
            price: "3 tỷ",
        },
        {
            title: "Nhà Phố 4 Tầng Thời Thượng tại P. Tân Phú, Gần Trường Học, 120M2 (6 x 20)",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Nhà+phố+ở+Tân+Phú',
            description: 'Nhà phố mới xây với thiết kế sang trọng và không gian mở.',
            location: 'Tân Phú',
            price: "4 tỷ",
        },
        {
            title: "Biệt Thự Vườn Rộng Tại P. Bình Trưng Đông, QUẬN 2, 400M2",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Biệt+thự+ở+QUẬN+2',
            description: 'Biệt thự cao cấp với vườn lớn và hồ bơi riêng, lý tưởng cho sự thư giãn.',
            location: 'Quận 2',
            price: "15 tỷ",
        },
        {
            title: "Căn Hộ Studio Hiện Đại Tại P. An Khánh, QUẬN 2, 40M2",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Studio+ở+An+Khánh',
            description: 'Căn hộ nhỏ gọn và phong cách, tuyệt vời cho người độc thân hoặc cặp đôi.',
            location: 'Quận 2',
            price: "1.2 tỷ",
        },
    ];
    const HouseRentalList = [
        {
            title: "Nhà Cho Thuê 2 Phòng Ngủ Tại P.15, BÌNH THẠNH, Gần Chợ, 70M2",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Nhà+cho+thuê+ở+BÌNH+THẠNH',
            description: 'Nhà mới sửa sang, có đầy đủ nội thất, thích hợp cho gia đình.',
            location: 'Bình Thạnh',
            price: "10 triệu/tháng",
        },
        {
            title: "Căn Hộ Studio Cho Thuê Tại P.12, QUẬN 10, Gần Trung Tâm, 40M2",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Căn+hộ+studio+ở+QUẬN+10',
            description: 'Căn hộ nhỏ gọn, thiết kế hiện đại, phù hợp cho người độc thân.',
            location: 'Quận 10',
            price: "8 triệu/tháng",
        },
        {
            title: "Nhà Phố 3 Tầng Cho Thuê Tại P. Tân Phú, Gần Trường Học, 100M2",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Nhà+phố+cho+thuê+ở+Tân+Phú',
            description: 'Nhà cho thuê với không gian rộng rãi, tiện nghi đầy đủ.',
            location: 'Tân Phú',
            price: "15 triệu/tháng",
        },
        {
            title: "Biệt Thự Vườn Cho Thuê Tại P. Bình Trưng Đông, QUẬN 2, 500M2",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Biệt+thự+cho+thuê+ở+QUẬN+2',
            description: 'Biệt thự sang trọng với vườn và hồ bơi, không gian yên tĩnh.',
            location: 'Quận 2',
            price: "40 triệu/tháng",
        },
        {
            title: "Căn Hộ 1 Phòng Ngủ Cho Thuê Tại P. An Khánh, QUẬN 2, 50M2",
            imgsrc: 'https://via.placeholder.com/1920x1080?text=Căn+hộ+cho+thuê+ở+An+Khánh',
            description: 'Căn hộ hiện đại, gần các tiện ích, thuận tiện đi lại.',
            location: 'Quận 2',
            price: "12 triệu/tháng",
        },
    ]
    
    const meomeo= HouseSaleList[0]

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
    ]
    const RentDropList=[
        {
            describe:"Căn hộ/ Chung cư",
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
            describe:"Văn phòng, Mặt bằng kinh doanh  ",
            function: ()=>{}
        },
        {
            describe:"Phòng trọ",
            function: ()=>{}
        }
    ]
    return <div className="BigContent-wrapper ">
        <Banner/>

        <div className="flex bg-white rounded-e-lg rounded-bl-lg">
            <DropdownMenuVer2 list={SellDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item.png`} title={"Mua bán"}/>
             <div className="w-small bg-gray-200"></div>
            <DropdownMenuVer2 list={RentDropList} imgSrc={`${process.env.PUBLIC_URL}/img/bruh/item1.png`} title={"Cho thuê"}/>
        </div>
        <div className="mt-3 flex">
            <TwoBlockContent/>
        </div>
        <div className="mt-3">
            <GalleryBlock title={"Bất động sản theo khu vực"}/>
        </div>
        <div className="mt-3 px-3 py-2 rounded-lg bg-white ">
            <div className="my-2">
             <TextBaseSemi text={"Mua bán bất động sản"}/>
            </div>
            <div className="flex justify-between">
                {HouseSaleList.map((item)=>(
                    <HouseItemBlockVer2 item={item}/>
                ))}
            </div>
        </div>

        <div className="mt-3 px-3 py-2 bg-white rounded-lg ">
            <div className="py-2">
            <TextBaseSemi text={"Cho thuê bất động sản"}/>

            </div>
            <div className="flex justify-between">
                {HouseSaleList2.map((item)=>(
                    <HouseItemBlockVer2 item={item}/>
                ))}
            </div>
        </div>

        <div className="mt-3">
            <SwiperItem list={HouseRentalList} showItemComponents={HouseItemBlockVer2}/>
        </div>

        <div className="mt-3">
            <SliderCustomVer2 />
        </div>

        <div className="mt-3">
            <CoWorker/>
        </div>
        <div className="mt-3">
            <SpecialContent/>
        </div>

        <div className="mt-3">
            <SizeAdjustContent/>
        </div>


        <div className="mt-3 mb-3">
            <PopularSearchListContent />
        </div>

    </div>
}
export default BigContent