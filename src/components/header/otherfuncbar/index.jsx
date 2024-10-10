import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import PollIcon from '@mui/icons-material/Poll';
import Person2Icon from '@mui/icons-material/Person2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './index.css'

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
    return<div className="OtherFuncBar-wrapper flex w-2/12 gap-5">
        {FuncItemList.map((item,index)=>(
            <div key={index} className="">
                <item.icon className="icon-button"/>
            </div>
        ))}
        <div className="flex items-center">
            <div className="bg-orange rounded-2xl p-0.5">
                <Person2Icon className="icon-button"/>
            </div>
            <KeyboardArrowDownIcon className="icon-button"/>

        </div>

    </div>

}
export default OtherFuncBar
