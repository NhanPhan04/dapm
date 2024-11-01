import { useState } from "react"
import TextSmNor from "../../text/normal/text-sm"
import TextSmSemi from "../../text/semibold/text-sm"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TextLgSemi from "../../text/semibold/text-lg";
import TextBaseSemi from "../../text/semibold/text-base";
import TextXsNor from "../../text/normal/text-xs";


const PopularSearchListContent= ()=>{

    const rentalLocations = [
        "Thuê bất động sản TP.HCM",
        "Thuê bất động sản Hà Nội",
        "Thuê bất động sản Đà Nẵng",
        "Thuê bất động sản Bình Dương",
        "Thuê bất động sản Cần Thơ",
        "Thuê bất động sản Đồng Nai",
        "Thuê bất động sản Khánh Hòa",
        "Thuê bất động sản Long An",
        "Thuê bất động sản Đắk Lắk",
        "Thuê bất động sản BR - VT"
      ];
      
      const rentalPrices = [
        "Thuê chung cư giá 5 - 10 triệu",
        "Thuê văn phòng, mặt bằng giá trên 30 triệu",
        "Thuê nhà ở giá 5 - 10 triệu",
        "Thuê chung cư giá dưới 5 triệu",
        "Thuê nhà ở giá 10 - 15 triệu",
        "Thuê chung cư giá 10 - 15 triệu",
        "Thuê văn phòng, mặt bằng giá dưới 10 triệu",
        "Thuê nhà ở giá 15 - 20 triệu",
        "Thuê nhà ở giá 20 - 30 triệu",
        "Thuê nhà ở giá dưới 5 triệu"
      ];

      const propertyTypes = [
        "Mua bán nhà ngõ, hẻm",
        "Mua bán đất thổ cư",
        "Mua bán nhà mặt phố, mặt tiền",
        "Mua bán nhà phố liền kề",
        "Mua bán đất nông nghiệp",
        "Mua bán đất nền dự án",
        "Mua bán nhà biệt thự",
        "Mua bán căn hộ dịch vụ, mini",
        "Mua bán đất công nghiệp",
        "Mua bán tập thể, cư xá"
      ];
      
      
      

    const [sizeState,SetSizeState]=useState(false)
    const ChangeStateSmall = () =>{
        SetSizeState(false)
    }
    const ChangeStateBig = ()=>{
        SetSizeState(true)
    }
    return<div className="PopularSearchListContent-wrapper px-5 pb-2 pt-4 bg-white flex flex-col gap-3 rounded-lg  rrelative">
        {sizeState?(
            <div className="PopularSearchListContentBig-wrapper mt-2">
                <div className="flex gap-3  ">
                    <div className="w-1/3">
                        <TextBaseSemi text={"Bất động sản cho thuê phổ biến"}/>
                        {rentalLocations.map((item)=>(
                            <a href="">
                                <div className="mt-4 text-gray-500">
                                 <TextXsNor text={item}/>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="w-1/3">
                        <TextBaseSemi text={"Loại hình bất động sản mua bán phổ biến"}/>
                        {propertyTypes.map((item)=>(
                            <a href="">
                                <div className="mt-4 text-gray-500">
                                 <TextXsNor text={item}/>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="w-1/3">
                        <TextBaseSemi text={"Khoảng giá cho thuê phổ biến"}/>
                        {rentalPrices.map((item)=>(
                            <a href="">
                                <div className="mt-4 text-gray-500">
                                 <TextXsNor text={item}/>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
                <div className="flex items-center text-blue-500 justify-center mt-3 cursor-pointer" onClick={()=>{ChangeStateSmall()}}>
                 <TextSmSemi className="" text={"Thu gọn"} />
                 <KeyboardArrowUpIcon/>
                </div>
            </div>
            
            
        ):(
            <div className="PopularSearchListContentSmall-wrapper mt-2">
              <div className="flex gap-3  ">
                    <div className="w-1/3">
                        <TextBaseSemi text={"Bất động sản cho thuê phổ biến"}/>
                        {rentalLocations.slice(0,4).map((item)=>(
                             <a href="">
                             <div className="mt-4 text-gray-500">
                              <TextXsNor text={item}/>
                             </div>
                         </a>
                        ))}
                    </div>
                    <div className="w-1/3">
                        <TextBaseSemi text={"Loại hình bất động sản mua bán phổ biến"}/>
                        {propertyTypes.slice(0,4).map((item)=>(
                             <a href="">
                             <div className="mt-4 text-gray-500">
                              <TextXsNor text={item}/>
                             </div>
                         </a>
                        ))}
                    </div>
                    <div className="w-1/3">
                        <TextBaseSemi text={"Khoảng giá cho thuê phổ biến"}/>
                        {rentalPrices.slice(0,4).map((item)=>(
                             <a href="">
                             <div className="mt-4 text-gray-500">
                              <TextXsNor text={item}/>
                             </div>
                         </a>
                        ))}
                    </div>
                  

                </div>
                <div className="flex items-center text-blue-500 justify-center mt-3 cursor-pointer" onClick={()=>{ChangeStateBig()}}>
                 <TextSmSemi className="" text={"Xem thêm"}/>
                 <KeyboardArrowDownIcon/>
                </div>
            </div>
        )}
    </div>
}
export default PopularSearchListContent