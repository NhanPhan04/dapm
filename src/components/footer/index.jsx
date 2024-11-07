import React from "react";
import OtherFuncBar from "../header/otherfuncbar";
import './index.css' 
import TextBaseSemi from "../text/semibold/text-base";
import TextSmSemi from "../text/semibold/text-sm";

import TextBaseNor from "../text/normal/text-base";

const Footer = () => {
    return<div className="footerwrapper py-5 ">
        <div className="flex justify-center">
         <div className="footerwrapper-content flex px-6 justify-between">
            <div className="w-5/12">
              <TextSmSemi text={"TÌM BẤT ĐỘNG SẢN TRÊN ỨNG DỤNG CHỢ TỐT"}/>
              <div className="mt-2 flex gap-4">
                <img src="https://static.chotot.com/storage/default/group-qr.webp" className="w-24"/>
                <div>

                <a href="https://apps.apple.com/us/app/ch%E1%BB%A3-t%E1%BB%91t-chuy%C3%AAn-mua-b%C3%A1n-online/id790034666" target="_blank" rel="noopener noreferrer">
                     <img 
                        src="https://static.chotot.com/storage/default/ios.svg"
                        className="w-24 mb-4"
                        alt="Chợ Tốt ios" 
                     />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.chotot.vn" target="_blank" rel="noopener noreferrer">
                     <img 
                        src="https://static.chotot.com/storage/default/android.svg"
                       className="w-24"
                        alt="Chợ Tốt android" 
                     />
                </a>

                </div>
              </div>

            </div>
            <div className="w-3/12 flex flex-col gap-2">
             <TextSmSemi text={"VỀ NHÀ TỐT"}/>
             <a href="https://trogiup.chotot.com/nguoi-ban/ve-nha-tot/?_gl=1*1dd45wq*_gcl_aw*R0NMLjE3MzAxMDE5NTMuQ2owS0NRanc3UHk0QmhDYkFSSXNBTU14LV9LSUdDdkFlYTR4ZG05eVhQXy1zUk1IcnZrZHZ6RGtqQmpXOG9aS3FsNFc4aV9WQTZDR2R5SWFBaHloRUFMd193Y0I.*_gcl_au*MTkzMzE5MTA1MC4xNzMwMTAxNTU5*_ga*MTgyNjIyMDM0OC4xNzMwMTAxNTYw*_ga_XQVN5K27XX*MTczMDk3MDQzMC44LjEuMTczMDk3MDUzMi42MC4wLjA.&_ga=2.190674347.1656163088.1730970431-1826220348.1730101560&_gac=1.123091321.1730101954.Cj0KCQjw7Py4BhCbARIsAMMx-_KIGCvAea4xdm9yXP_-sRMHrvkdvzDkjBjW8oZKql4W8i_VA6CGdyIaAhyhEALw_wcB" className="text-gray-500" >
                <TextBaseNor text={"Về nhà tốt"}/>
                
             </a>
             <a href="https://trogiup.chotot.com/nguoi-ban/quy-che-hoat-dong-website-cung-cap-dich-vu-thuong-mai-dien-tu-nhatot-com/?_gl=1*iccf74*_gcl_aw*R0NMLjE3MzAxMDE5NTMuQ2owS0NRanc3UHk0QmhDYkFSSXNBTU14LV9LSUdDdkFlYTR4ZG05eVhQXy1zUk1IcnZrZHZ6RGtqQmpXOG9aS3FsNFc4aV9WQTZDR2R5SWFBaHloRUFMd193Y0I.*_gcl_au*MTkzMzE5MTA1MC4xNzMwMTAxNTU5*_ga*MTgyNjIyMDM0OC4xNzMwMTAxNTYw*_ga_XQVN5K27XX*MTczMDk3MDQzMC44LjEuMTczMDk3MDUzMi42MC4wLjA.&_ga=2.190199211.1656163088.1730970431-1826220348.1730101560&_gac=1.127262207.1730101954.Cj0KCQjw7Py4BhCbARIsAMMx-_KIGCvAea4xdm9yXP_-sRMHrvkdvzDkjBjW8oZKql4W8i_VA6CGdyIaAhyhEALw_wcB" className="text-gray-500">
                <TextBaseNor text={"Quy chế hoạt động sàn"} />
             </a>
             <a href="https://trogiup.chotot.com/nguoi-ban/chinh-sach-bao-mat-cua-nhatot-com/?_gl=1*iccf74*_gcl_aw*R0NMLjE3MzAxMDE5NTMuQ2owS0NRanc3UHk0QmhDYkFSSXNBTU14LV9LSUdDdkFlYTR4ZG05eVhQXy1zUk1IcnZrZHZ6RGtqQmpXOG9aS3FsNFc4aV9WQTZDR2R5SWFBaHloRUFMd193Y0I.*_gcl_au*MTkzMzE5MTA1MC4xNzMwMTAxNTU5*_ga*MTgyNjIyMDM0OC4xNzMwMTAxNTYw*_ga_XQVN5K27XX*MTczMDk3MDQzMC44LjEuMTczMDk3MDUzMi42MC4wLjA.&_ga=2.190199211.1656163088.1730970431-1826220348.1730101560&_gac=1.127262207.1730101954.Cj0KCQjw7Py4BhCbARIsAMMx-_KIGCvAea4xdm9yXP_-sRMHrvkdvzDkjBjW8oZKql4W8i_VA6CGdyIaAhyhEALw_wcB" className="text-gray-500">
                <TextBaseNor text={"Chính sách bảo mật"}/>
             </a>
             <a href="https://trogiup.chotot.com/nguoi-ban/co-che-giai-quyet-tranh-chap-cua-nhatot-com/?_gl=1*murwhq*_gcl_aw*R0NMLjE3MzAxMDE5NTMuQ2owS0NRanc3UHk0QmhDYkFSSXNBTU14LV9LSUdDdkFlYTR4ZG05eVhQXy1zUk1IcnZrZHZ6RGtqQmpXOG9aS3FsNFc4aV9WQTZDR2R5SWFBaHloRUFMd193Y0I.*_gcl_au*MTkzMzE5MTA1MC4xNzMwMTAxNTU5*_ga*MTgyNjIyMDM0OC4xNzMwMTAxNTYw*_ga_XQVN5K27XX*MTczMDk3MDQzMC44LjEuMTczMDk3MDUzMi42MC4wLjA.&_ga=2.184957609.1656163088.1730970431-1826220348.1730101560&_gac=1.19332170.1730101954.Cj0KCQjw7Py4BhCbARIsAMMx-_KIGCvAea4xdm9yXP_-sRMHrvkdvzDkjBjW8oZKql4W8i_VA6CGdyIaAhyhEALw_wcB" className="text-gray-500">
                <TextBaseNor text={"Giải quyết tranh chấp"}/>
             </a>
            </div>
            <div className="w-2/12">
             <TextSmSemi text={"LIÊN KẾT"}/>
             <div className="flex gap-2 mt-3 mb-3">
             <a href="https://www.facebook.com/chotot.vn" target="_blank" rel="noopener noreferrer">
               <img 
                  src="https://static.chotot.com/storage/default/facebook.svg" 
                  className="w-10" 
                  alt="Chợ Tốt Facebook" 
               />
            </a>

            <a href="https://www.youtube.com/ChototVN" target="_blank" rel="noopener noreferrer">
               <img 
                 src="https://static.chotot.com/storage/default/youtube.svg"
                  className="w-10" 
                  alt="Chợ Tốt youtube" 
               />
            </a>
            <a href="https://www.linkedin.com/company/cho-tot/" target="_blank" rel="noopener noreferrer">
               <img 
                 src="https://static.chotot.com/storage/default/linkedin.svg" 
                  className="w-10" 
                  alt="Chợ Tốt linkedin" 
               />
            </a>

             </div>
             <div className="mb-3">
              <TextSmSemi text={"CHỨNG NHẬN"}/>

             </div>
             <img src="https://static.chotot.com/storage/default/certificate.webp" className="w-28" alt=""/>
             
            </div>
         </div>
         
        </div>
      
        
    
    </div>
}
export default Footer