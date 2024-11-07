import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './index.css'; // Ensure this file has the necessary styles
import { Link } from "react-router-dom";

const OtherFuncBar = () => {
    const FuncItemList = [
        {
            title: "Thông báo",
            icon: NotificationsNoneIcon,
        },
        {
            title: "Yêu thích",
            icon: FavoriteIcon,
            link: "/favorites" // Link to Favorites page
        }
    ];

    return (
        <div className="OtherFuncBar-wrapper ml-5 flex w-2/12 gap-7">
            {FuncItemList.map((item, index) => (
                <div key={index}>
                    {item.link ? (
                        // Ensure to use Link for navigation
                        <Link to={item.link} onClick={() => console.log('Navigating to:', item.link)}>
                        <item.icon className="icon-button" />
                    </Link>
                    
                    ) : (
                        <item.icon className="icon-button" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default OtherFuncBar;
