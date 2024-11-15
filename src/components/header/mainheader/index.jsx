import React from "react";
import './index.css';
import SearchBar from "../searchbar";
import OtherFuncBar from "../otherfuncbar";

import { Link } from 'react-router-dom';
import DropdownMenuVer1 from "../../dropdownmenu/dropver1";
import PersonIcon from '@mui/icons-material/Person';

const MainHeaderContent = () => {
    return (
        <div className="MainHeaderContent-wrapper justify-between px-4 mt-4 mb-2 flex items-center">
            <div className="logo-section">
                <Link to="/">
                    <img src="./img/nhatot.png" alt="nhà tốt" />
                </Link>
            </div>

            <div className="headerFunction-section flex items-center gap-5">
                <div className="shadow-gg rounded">
                    <DropdownMenuVer1 />
                </div>
                <SearchBar />
                <OtherFuncBar />
            </div>

            {/* New Section for 'Người tìm nhà' and 'Người chủ nhà' */}
            <div className="user-options-section flex gap-5" style={{ marginTop: '10px' }}>
                <Link to="/register" className="flex items-center gap-2 bg-orange-500 p-2 rounded-lg hover:bg-orange-600 transition duration-200">
                    <PersonIcon className="text-white" />
                    <span className="text-white font-semibold">Đăng kí | Đăng Nhập</span>
                </Link>
            </div>
        </div>
    );
};

export default MainHeaderContent;
