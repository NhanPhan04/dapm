import React from "react";
import './index.css';
import SearchBar from "../searchbar";
import OtherFuncBar from "../otherfuncbar";
import { Link } from 'react-router-dom';
import DropdownMenuVer1 from "../../dropdownmenu/dropver1";
import PersonIcon from '@mui/icons-material/Person';

const MainHeaderContent = () => {
    return (
        <div className="MainHeaderContent-wrapper">
            {/* Logo Section */}
            <div className="logo-section">
                <Link to="/profilebroker">
                    <img src="./img/nhatot.png" alt="nhà tốt" />
                </Link>
            </div>

            {/* Function Section */}
            <div className="headerFunction-section">
                <DropdownMenuVer1 className="shadow-gg" />
                <SearchBar />
                <OtherFuncBar />
            </div>

            {/* User Options Section */}
            <div className="user-options-section">
                <Link to="/register" className="register-button">
                    <PersonIcon className="text-white" />
                        <div>DÀNH CHO NGƯỜI TÌM NHÀ</div>
                </Link>
                <Link to="/uploadscreen" className="register-button">
                    <PersonIcon  className="text-white" />
                    Đăng Tin
                </Link>
            </div>
        </div>
    );
};

export default MainHeaderContent;
