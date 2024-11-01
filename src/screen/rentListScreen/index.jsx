import { useState } from "react"
import TextLgSemi from "../../components/text/semibold/text-lg"
import TextBaseSemi from "../../components/text/semibold/text-base"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PaidIcon from '@mui/icons-material/Paid';
import TextSmNor from "../../components/text/normal/text-sm"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TextBaseNor from "../../components/text/normal/text-base"
import './index.css'
import StarsIcon from '@mui/icons-material/Stars';
import PostItem from "../../components/post-item";
import HistoryIcon from '@mui/icons-material/History';
import sellRealEstate from "../../data/data";

import PaginationCustom from "../../components/PaginationCustom";
import RentRealEstate from "../../data/rentdata";

const RentListScreen = () => {
    const [city, setCity] = useState("default");
    const [subFilter, setsubFilter] = useState('Tin mới trước');
    const [category, setCategory] = useState("default");
    const [sellerType, setSellerType] = useState("Tất cả");
    const [open, SetOpen] = useState(false);
    const [price, SetPrice] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage=6

    var RenderList=RentRealEstate
    

    const lastItemIndex= currentPage*itemsPerPage;

    const firstItemIndex=lastItemIndex-itemsPerPage;

    const CityList = ["Tp Hồ Chí Minh", "Đà Nẵng", "Cần Thơ", "Hà Nội","Bình Dương "];

    const TypeList=[
            {
                type:"Căn hộ / Chung cư",
                src:`${process.env.PUBLIC_URL}/img/houseType/hotel.png`
            },
            {
                type:"Nhà ở",
                src:`${process.env.PUBLIC_URL}/img/houseType/home.png`
            },
            {
                type:"Đất",
                src:`${process.env.PUBLIC_URL}/img/houseType/ground.png`
            },
            {
                type:"Mặt bằng",
                src:`${process.env.PUBLIC_URL}/img/houseType/ground.png`
            },
            {
                type:"Phòng trọ",
                src:`${process.env.PUBLIC_URL}/img/houseType/home.png`
            },
            
        ]

    var RenderList=RentRealEstate
    
    //Lọc danh sách theo giá tiền
    const FilterdByPrice=(price,list)=>{
            let newList = RenderList
            if(price==="default"){
            }
            else if(price==="<1 tỷ"){
                newList=list.filter((item)=>item.price<1_000_000_000) 
                return RenderList=newList
            }
            else if(price==="1 - 2 tỷ"){
                newList=list.filter((item)=>item.price>=1_000_000_000 && item.price<2_000_000_000)
                return RenderList=newList
            }
            else if(price==="2 - 4 tỷ"){
                newList=list.filter((item)=>item.price>=2_000_000_000 && item.price<3_000_000_000)
                return RenderList=newList
            }
            else if(price==="5 - 7 tỷ"){
                newList=list.filter((item)=>item.price>=5_000_000_000 && item.price<7_000_000_000)
                return RenderList=newList
            }
            else if(price ==="> 10 tỷ"){
                newList=list.filter((item)=>item.price>10_000_000_000) 
                return RenderList=newList
            }
        }

        //Lọc danh sách theo tài khoản Cá nhân hay môi giới hay tất cả
        const FilteredBySellerTypeList = (person,list) => {
            let newList=list
            if (person === "Tất cả") {
                return list=newList
            }
            return list=newList.filter((item) => item.sellerType === person);
        };

        
        // Lọc danh sách theo thành phố
        const FilteredByCity=(city)=>{
            let newList=RenderList
            if(city==="default"){
                return RenderList=newList
            }
            return RenderList=newList.filter((item)=>item.city === city)
        }

        //Lọc danh sách theo loại nhà
        const FilteredByCategory=(category)=>{
            let newList=RenderList
            return RenderList=newList.filter((item)=>item.category === category)
        }

        //pagination
        RenderList=RenderList.slice(firstItemIndex,lastItemIndex)
        const totalPages = Math.ceil(sellRealEstate.length / itemsPerPage); // Total number of pages


        FilteredBySellerTypeList(sellerType,RenderList)
        FilterdByPrice(price,RenderList)
        FilteredByCity(city,RenderList)
        

        const HandlerRenderList = (list) => {
            return list.map((item, index) => (
                <div className="" key={index}>
                    <PostItem item={item} />
                </div>
            ));
        };

    return(
        <div className="SellListScreen flex flex-col items-center  bg-slate-100 mb-4">
        <div className="wrapper mt-4 ">
         <div className="flex gap-3">
               <p className="text-xs">Nhà tốt </p>
               <p className="text-xs">Cho thuê bất động sản giá tốt</p>
         </div>
         <div className="mt-3 mb-3 flex items-center justify-between">
            <TextLgSemi text={"Cho thuê bất động sản giá tốt"}/>
            <div className="flex gap-2 items-center">
              <em className="text-gray-500">
               <TextBaseNor text={"Bạn đang tìm kiếm theo :"}/>
              </em>
              <div className="flex gap-2 items-center">
               {category==="default"?<></>:<div className="rounded-md px-2 py-1 text-white bg-orange-600"><TextBaseSemi text={category}/></div>}
               {sellerType==="Tất cả"?
               <div className="rounded-md px-2 py-1 text-white bg-orange-600"><TextBaseSemi text={sellerType}/></div>:
               <div className="rounded-md px-2 py-1 text-white bg-orange-600"><TextBaseSemi text={sellerType}/></div>}
               {city==="default"?<></>:<div className="rounded-md px-2 py-1 text-white bg-orange-600"><TextBaseSemi text={city}/></div>}
               {price===""?<div></div>:<div className="rounded-md px-2 py-1 text-white bg-orange-600"><TextBaseSemi text={price}/></div>}
              </div>
                    
            </div>

         </div>
            <div className="bg-white rounded py-3 px-2 ">
                <div className="flex items-center gap-5 my-2">
                    <div className="text-gray-500 ml-2">
                        <TextBaseNor text={"Khu vực :"}/>
                    </div>
                        {CityList.map((item,index)=>(
                            <div key={index} className="px-2 py-1 font-light rounded-md cursor-pointer bg-slate-200 location-item-filter" onClick={()=>{setCity(item)}}>
                                <div className={city===item ? "font-bold":""}>{item}</div>
                            </div>
                        ))}
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <div className="text-gray-500 ml-2 "><TextBaseNor text={"Danh mục :"}/></div>
                    {TypeList.map((item,index)=>(
                        <div className="text-center ml-3 mt-3 " key={index} onClick={()=>{setCategory(item.type )}}>
                            <div className="bg-slate-300 p-1  flex rounded-full justify-center">
                                <img className="w-7" alt="" src={item.src}/>
                            </div>
                            <div className={category===item.type ? " font-bold":""}>
                                <div className="text-xs">{item.type}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="wrapper flex mb-6 gap-4">
            <div className="w-3/4 rounded-md">
            <div className="bg-white rounded p-2 mt-3">
                <div className="flex justify-between">
                    <div className="flex gap-5 cursor-pointer">
                        <div className={sellerType==="Tất cả"? "onClickMark h-full":"h-full"} onClick={()=>{setSellerType("Tất cả")}}>Tất cả</div>
                        <div  className={sellerType==="Cá nhân"? "onClickMark h-full":"h-full"} onClick={()=>{setSellerType("Cá nhân")}}>Cá nhân</div>
                        <div  className={sellerType==="Đối tác"? "onClickMark h-full":"h-full"} onClick={()=>{setSellerType("Đối tác")}}>Đối tác</div>
                        <div className="flex gap-1 reset-btn">
                         <div className="rounded-lg " onClick={()=>{window.location.reload()}}>Đặt lại</div>
                         <HistoryIcon/>
                        </div>
                    </div>
                    <div className="rounded-xl flex relative mb-2">
                        <div className="subFilter px-3 py-1 rounded-2xl flex" onClick={()=>{SetOpen(!open)}}>
                            <TextBaseSemi text={subFilter}/>
                            <ArrowDropDownIcon/>
                        </div>
                        
                        {open && (
                            <div className="w-36 absolute flex flex-col justify-center top-9 bg-white shadow-xl p-2 ">
                            <TextBaseSemi text={"Sắp xếp theo"}/>
                            <div className="flex justify-between newest-btn" onClick={()=>{
                                setsubFilter("Tin mới nhất")
                            }}>
                                <label id="newest">
                                <TextBaseNor text={"Tin mới nhất"}/>
                                </label>
                            <input type="radio"
                            id="newest"/>
                            </div>
                            <div className="flex justify-between lowest-btn" onClick={()=>{
                                setsubFilter("Giá thấp nhất")
                            }}>
                                <label id="lowest">
                                <TextBaseNor text={"Giá thấp nhất"}/>
                                </label>
                            <input type="radio"   id="lowest"/>
                            </div>
                            <div className="flex justify-between highest-btn" onClick={()=>{
                                setsubFilter("Giá cao nhất")
                            }}>
                                <label id="highest  ">
                                <TextBaseNor text={"Giá cao nhất"}/>
                                </label>
                            <input type="radio"   id="highest"/>
                            </div>
                        </div>
                        )}
                        
                    </div>

                </div>
                <hr/>
                <div className="render-list">
                    {HandlerRenderList(RenderList)}
                </div>
            </div>

            </div>
            <div className="w-1/4 rounded-md flex flex-col">
              <div className="bg-white rounded-md  px-3 py-2 mt-3 ">
                <div className="flex items-center gap-2 text-orange-500 ">
                 <TextBaseSemi text={"Lọc theo khoảng giá"}/>
                 <div className="flex justify-center   text-orange-500"><PaidIcon/></div>
                </div>
                <div className="flex flex-col gap-3 mt-2 text-gray-500 mb-2">
                    <div className="cursor-pointer" onClick={()=>{SetPrice("<1 tỷ")}}>
                        <div className={price==="<1 tỷ" && "font-bold text-orange-500"}>
                         <TextSmNor text={"Giá dưới 1 tỷ"}/>
                        </div>
                        
                    </div>
                    <div className="cursor-pointer" onClick={()=>{SetPrice("1 - 2 tỷ")}}>
                        <div className={price==="1 - 2 tỷ" && "font-bold text-orange-500"}>
                        <TextSmNor text={"Giá 1 - 2 tỷ"}/>
                        </div>
                    </div>
                    <div className="cursor-pointer" onClick={()=>{SetPrice("2 - 4 tỷ")}}>
                        <div className={price==="2 - 4 tỷ" && "font-bold text-orange-500"}>
                        <TextSmNor text={"Giá 2 - 4 tỷ"}/>    
                        </div>
                    </div>
                    <div className="cursor-pointer" onClick={()=>{SetPrice("5 - 7 tỷ")}}>
                        <div className={price==="5 - 7 tỷ" && "font-bold text-orange-500"}>
                        <TextSmNor text={"Giá 5 - 7 tỷ"}/>
                        </div>
                    </div>
                    <div className="cursor-pointer" onClick={()=>{SetPrice("> 10 tỷ")}}>
                        <div className={price==="> 10 tỷ" && "font-bold text-orange-500"}>
                        <TextSmNor text={"Giá trên 10 tỷ"}/>
                        </div>
                    </div>
                </div>
              </div>
              <div className="bg-white rounded-md  px-3 py-2 mt-3">
              <div className="flex items-center gap-2 text-orange-500 /">
                 <TextBaseSemi text={"Tiện ích"}/>
                 <div className="flex justify-center rounded-full text-orange-600"><ThumbUpAltIcon></ThumbUpAltIcon></div>
                </div>
                <div className="flex flex-col gap-3 mt-2 text-gray-500 mb-2">
                    <div className="cursor-pointer">
                        <TextSmNor text={"Tham khảo giá"}/>
                    </div>
                    <div className="cursor-pointer">
                        <TextSmNor text={"Vay mua nhà"}/>
                    </div>
                    <div className="cursor-pointer">
                        <TextSmNor text={"kinh nghiệm"}/>
                    </div>
                </div>
              </div>
              <div className="bg-white rounded-md  px-3 py-2 mt-3">
                <div className="flex items-center text-orange-500 gap-2">
                 <TextBaseSemi text={"Loại hình nổi bật"}/>
                 <div className="flex justify-center   text-orange-500"><StarsIcon/></div>
                </div>
                <div className="flex flex-col gap-3 mt-2 text-gray-500 mb-2">
                    <div className="cursor-pointer">
                        <TextSmNor text={"Nhà đất khu đô thị Sala"}/>
                        
                    </div>
                    <div className="cursor-pointer">
                        <TextSmNor text={"Gần sân bay Long Thành"}/>
                    </div>
                    <div className="cursor-pointer">
                        <TextSmNor text={"Khu đô thị mới"}/>
                    </div>
                    <div className="cursor-pointer">
                        <TextSmNor text={"Cảng tân triều"}/>
                    </div>
                    <div className="cursor-pointer">
                        <TextSmNor text={"Gần khu du lịch vũng tàu"}/>
                    </div>
                </div>
              </div>
            </div>
        </div>

        {}
        <PaginationCustom currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>

        <div className="mt-5"></div>
     
    </div>
    )

}
export default RentListScreen