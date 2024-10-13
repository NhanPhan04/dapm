import React from "react";
import OtherFuncBar from "../header/otherfuncbar";
import './index.css' 
import TextBaseSemi from "../text/semibold/text-base";
import TextSmSemi from "../text/semibold/text-sm";

import TextBaseNor from "../text/normal/text-base";

const Footer = () => {
    return<div className="footerwrapper  py-2 ">
        <div className="flex justify-center">
         <div className="footerwrapper-content flex px-6 justify-between">
            <div className="w-5/12">
              <TextSmSemi text={"TÌM BẤT ĐỘNG SẢN TRÊN ỨNG DỤNG CHỢ TỐT"}/>
              <div className="mt-2 flex gap-4">
                <img src="https://static.chotot.com/storage/default/group-qr.webp" className="w-24"/>
                <div>
                  <img src="https://static.chotot.com/storage/default/ios.svg" className="w-24 mb-4"/>
                  <img src="https://static.chotot.com/storage/default/android.svg" className="w-24"/>
                </div>
              </div>

            </div>
            <div className="w-3/12 flex flex-col gap-2">
             <TextSmSemi text={"VỀ NHÀ TỐT"}/>
             <a href="#" className="text-gray-500">
                <TextBaseNor text={"Về nhà tốt"}/>
             </a>
             <a href="#" className="text-gray-500">
                <TextBaseNor text={"Quy chế hoạt động sàn"}/>
             </a>
             <a href="#" className="text-gray-500">
                <TextBaseNor text={"Chính sách bảo mật"}/>
             </a>
             <a href="#" className="text-gray-500">
                <TextBaseNor text={"Giải quyết tranh chấp"}/>
             </a>
            </div>
            <div className="w-2/12">
             <TextSmSemi text={"LIÊN KẾT"}/>
             <div className="flex gap-2 mt-3 mb-3">
              <img src="https://static.chotot.com/storage/default/facebook.svg" className="w-10"/>
              <img src="https://static.chotot.com/storage/default/youtube.svg" className="w-10"/>
              <img src="https://static.chotot.com/storage/default/linkedin.svg" className="w-10"/>

             </div>
             <div className="mb-3">
              <TextSmSemi text={"CHỨNG NHẬN"}/>

             </div>
             <img src="https://static.chotot.com/storage/default/certificate.webp" className="w-28"/>
             
            </div>
         </div>
         
        </div>
        <div>ffff</div>
        
    
    </div>
}
export default Footer