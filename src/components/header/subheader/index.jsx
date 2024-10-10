import React from "react";
import './index.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const SubHeaderContent=()=>{
    return <div className="SubHeaderContent-wrapper ">
        <div className="flex justify-between text-12px items-center">
            <div className="navigate-to-chotot flex gap-7 px-6 py-1">
                <p>Chợ tốt</p>
                <p>Nhà tốt</p>
                <p>Chợ tốt xe</p>
                <p>Việc làm tốt</p>
            </div>
            <div className="flex gap-6 items-center">
                <p>Đóng góp ý kiến</p>
                <div className="download relative" >
                 <p>Tải ứng dụng</p>
                 <div className="qr absolute hidden">
                    <img src="./img/qr.png" alt="qr" />
                 </div>
                </div>
                <p>Trợ giúp</p>
                <div className="flex gap-1 grey-bg items-center px-1 py-1">
                    <WorkOutlineIcon/>
                    <p>Dành cho môi giới</p> 
                </div>
            </div>
        </div>
    </div>
}
export default SubHeaderContent