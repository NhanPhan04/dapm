// OtherFuncBar.jsx
import React, { useState } from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import './index.css';
import { Link } from "react-router-dom";
import ChatBox from '../../ChatBox/ChatBox';


const OtherFuncBar = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const FuncItemList = [
        {
            title: "Thông báo",
            icon: NotificationsNoneIcon,
        },
        {
            title: "Yêu thích",
            icon: FavoriteIcon,
            link: "/favorites"
        },
        {
            title: "Chat",
            icon: ChatIcon,
            
        }
    ];

    const handleChatClick = () => {
        setIsChatOpen(true);
    };

    const handleChatClose = () => {
        setIsChatOpen(false);
    };

    return (
        <div className="OtherFuncBar-wrapper ml-5 flex w-2/12 gap-7">
            {FuncItemList.map((item, index) => (
                <div key={index} onClick={item.title === "Chat" ? handleChatClick : undefined}>
                    {item.link ? (
                        <Link to={item.link}>
                            <item.icon className="icon-button" />
                        </Link>
                    ) : (
                        <item.icon className="icon-button" />
                    )}
                </div>
            ))}
            {isChatOpen && <ChatBox onClose={handleChatClose} />}
        </div>
    );
};

export default OtherFuncBar;
