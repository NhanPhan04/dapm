import React from "react"
import TextBaseSemi from "../text/semibold/text-base"
import TextXsNor from "../text/normal/text-xs"
import './index.css'

const SpecialContent =() =>{
    return<div className="SpeacialContent-wrapper px-3 pb-2 pt-4 bg-white rounded-lg">
        <TextBaseSemi text={"Ưu đãi/ Chương trình"}/>
        <div className="flex mt-3 justify-between">
            <div className="SpecialContentBlock w-col shadow rounded-lg overflow-hidden">
                <div className="hover-hide">
                 <img className="w-full h-48" src={`${process.env.PUBLIC_URL}/img/bruh/1.png`} alt=""/>
                </div>

                <div className="flex justify-between px-2 py-2 items-center"> 
                    <div>
                        <TextBaseSemi text={"Hoàn 30% khi mua gói Pro bất động sản"} />
                        <TextXsNor text={"với giá trị đến 684000 Đồng TỐT"} />
                    </div>
                        <a 
                            href="https://chuongtrinh.nhatot.com/hoan-tien-goi-pro-bds-thang-9-10?utm_source=promotion_card&utm_medium=click&utm_campaign=pty_lb_oct24_subs_cashback" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-white btn-animate text-base font-semibold"
                        >
                            Tìm hiểu ngay
                        </a>
                </div>
            </div>
            <div className="SpecialContentBlock w-col shadow rounded-lg overflow-hidden">
                <div className="hover-hide">
                 <img className="w-full h-48" src={`${process.env.PUBLIC_URL}/img/bruh/2.png`} alt=""/>
                </div>
                <div className="flex justify-between px-2 py-2 items-center">
                    <div className="">
                     <TextBaseSemi text={"An tâm thuê trọ với Phòng 5 Tốt "}/>
                     <TextXsNor text={"Tin đăng cho thuê xác thực bởi Nhà Tốt"}/>
                     </div>
                        <a 
                            href="https://chuongtrinh.nhatot.com/nhatot-gogox?utm_source=promo_card&utm_medium=landing_page&utm_campaign=movinghouse_gogox" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-white btn-animate text-base font-semibold"
                        >
                            Tìm hiểu ngay
                        </a>
                </div>
            </div>
            

        </div>
    </div>
}
export default SpecialContent
