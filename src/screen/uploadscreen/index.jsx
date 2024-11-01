import React, { useState } from "react";
import TextBaseSemi from "../../components/text/semibold/text-base";
import TextSmNor from "../../components/text/normal/text-sm";
import TextBaseNor from "../../components/text/normal/text-base";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextLgSemi from "../../components/text/semibold/text-lg";

const UpLoadScreen = () => {
  const [uploadImg, setUpLoadImg] = useState('');
  const [popUpForm,SetPopsUpForm]=useState('')

  const OpenPopsUp = ()=>{

  }
  // Function to handle the image import
  const importPicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUpLoadImg(imageUrl);
    }
  };
  const HouseType=[
    "Căn hộ, chung cư",
    "Nhà ở",
    "Đất",
    "Phòng trọ",
  ]


  return (
    <div className="UpLoadScreen-wrapper relative ">

      <div className="bg-slate-100 flex justify-center h-full py-12">
        <div className="w-8/12 bg-white py-7 px-3 rounded-lg flex">
          <div className="w-4/12 px-2">
            <TextBaseSemi text={"Hình ảnh Video Sản phẩm"} />
            <div className="flex gap-1">
              <TextSmNor text={"Xem thêm về"} />
              <a href="#" className="text-blue-700 underline">
                <TextSmNor text={"Quy định đăng tin của Chợ Tốt"} />
              </a>
            </div>
            <div className="uploadImg-wrapper">
              <div className="w-4/5 h-48 border-2 z-10 relative">
                {uploadImg && (
                  <img
                    className="relative z-20 h-40 object-fill"
                    src={uploadImg}
                    alt="Uploaded"
                  />
                )}
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={importPicture}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="w-8/12 px-2">
           <div className="border-2 px-5 py-4 h-12 w-full gap-1 flex items-center relative rounded-lg cursor-default" onClick={()=>{}}>
             <div className="text-gray-500">
              <TextBaseNor text={"Danh mục tin đăng"}/>
             </div>
             <div className="text-red-600">
              <TextBaseNor text={"*"}/>
             </div>
             <div className="absolute right-2 top-1/2 transform-translatey-minus50">
                <ArrowDropDownIcon/>
             </div>
           </div>

           <div className="w-100  flex flex-col items-center justify-center">
            <img className="mt-11 mb-8" src="https://static.chotot.com/storage/chotot-icons/svg/empty-category.svg" />
            <TextLgSemi text={"ĐĂNG NHANH - BÁN GỌN"}/>
            <TextSmNor text={"Chọn “danh mục tin đăng” để đăng tin"}/>
           </div> 
          </div>
        </div>

      
      </div>
      <div className="absolute hidden flex items-center justify-center top-0 w-full h-full bg-gray-500 opacity-80 z-40">
        <div className=" w-5/12 bg-white rounded-md  ">
        <div className="relative w-full bg-slate-400 h-10 items-center justify-center flex">
          <div className="absolute left-1 top-1/2 transform-translatey-minus50" onClick={()=>{}}>
            <ClearIcon/>
          </div>
          <TextBaseSemi text={"Đăng tin"}/>
        </div>
        <div className="px-3 pt-2">
          <TextBaseSemi text={"Chọn danh mục căn hộ"}/>
          <div className="py-2">
            {HouseType.map((item)=>(
              <div className="flex items-center border-2 justify-between rounded-sm hover:bg-slate-400 py-3 py-4">
                <div className="px-2">{item}</div>
                <ArrowForwardIosIcon/>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      
    </div>
  );
};
export default UpLoadScreen;
