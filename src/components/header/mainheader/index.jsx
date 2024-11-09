import React from "react";
import './index.css';
import SearchBar from "../searchbar";
import OtherFuncBar from "../otherfuncbar";

import { Link } from 'react-router-dom';
import DropdownMenuVer1 from "../../dropdownmenu/dropver1";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

const MainHeaderContent = () => {
    return (
        <div className="MainHeaderContent-wrappern justify-between px-4 mt-4 mb-2 flex items-center">
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
            <div className="user-options-section flex gap-5"  style={{
      marginTop: '10px'
    }}>
                <Link to="/register" className="flex items-center gap-2 bg-orange-500 p-2 rounded-lg">
                    <PersonIcon className="text-white" />
                    <div>
                        <div>DÀNH CHO NGƯỜI TÌM NHÀ</div>
                        
                    </div>
                </Link>
                
                <Link to="/registerbroker" className="flex items-center gap-2 bg-orange-500 p-2 rounded-lg">
                    <HomeIcon className="text-white" />
                    <div>DÀNH CHO NGƯỜI CHỦ NHÀ</div>
                </Link>
            </div>

            {/*    <div className="createNews-Section">
                <Link to="/uploadscreen">
                    <CusButton title={"Đăng ngay"} func={() => {}} />
                </Link>
            </div> */}   

            
        </div>
    );
};

export default MainHeaderContent;
