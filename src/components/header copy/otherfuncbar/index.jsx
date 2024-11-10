import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import './index.css'; // Đảm bảo bạn có các styles cho icon và container
import { Link } from "react-router-dom";

const OtherFuncBar = () => {
    const FuncItemList = [
        {
            title: "Quản lý tin", // Tiêu đề mục
            icon: CalendarTodayIcon, // Icon cho mục
            link: "/PostManagement" // Đường dẫn khi nhấn vào mục
        }
        // Có thể thêm các mục khác vào đây nếu cần
    ];

    return (
        <div className="OtherFuncBar-wrapper ml-5 flex w-2/12 gap-7">
            {FuncItemList.map((item, index) => (
                <div key={index}>
                    {item.link ? (
                        // Nếu có link thì sử dụng Link để chuyển hướng
                        <Link to={item.link} className="flex items-center gap-2">
                            <item.icon className="icon-button" /> {/* Icon */}
                            <span>{item.title}</span> {/* Tiêu đề bên cạnh icon */}
                        </Link>
                    ) : (
                        // Nếu không có link, chỉ hiển thị div đơn giản
                        <div className="flex items-center gap-2">
                            <item.icon className="icon-button" />
                            <span>{item.title}</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default OtherFuncBar;
