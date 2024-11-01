import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import PollIcon from '@mui/icons-material/Poll';
import Person2Icon from '@mui/icons-material/Person2';
import './index.css'
import { Link } from "react-router-dom";

const OtherFuncBar = () => {
    const FuncItemList = [
        {
            title:"Thông báo",
            icon: NotificationsNoneIcon,
        },
        {
            title:"Nhắn tin",
            icon: ChatIcon,
        },
        {
            title:"Khảo sát",
            icon: PollIcon
        }
    ]
    return<div className="OtherFuncBar-wrapper ml-5  flex w-2/12 gap-7">
        {FuncItemList.map((item,index)=>(
            <div key={index} className="">
                <item.icon className="icon-button"/>
            </div>
        ))}
        <Link to="/profileScreen">
        <div className="flex items-center">
            <div className="bg-orange rounded-2xl p-0.5 ">
                <Person2Icon className="icon-button"/>
            </div>
        </div>
        </Link>

    </div>

}
export default OtherFuncBar
