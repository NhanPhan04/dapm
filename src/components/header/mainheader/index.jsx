import React from "react";
import './index.css'
import SearchBar from "../searchbar";
import CusButton from "../../button/cusbutton";
import OtherFuncBar from "../otherfuncbar";

import { Link } from 'react-router-dom';

const MainHeaderContent = () => {

    return<div className="MainHeaderContent-wrapper  px-4 mt-4 mb-2 flex items-center">
        <div className="logo-section">
           <Link to="/">
             <img src="./img/nhatot.png" alt="nhà tốt"/>
           </Link>
        </div>
        <div className="headerFunction-section flex items-center gap-5">
            <SearchBar />
            <OtherFuncBar/>
        </div>
        <div className="createNews-Section">
            <Link to="/uploadscreen">
             <CusButton title={"Đăng ngay"} func={()=>{}} />
            </Link>
        </div>
    </div>

}
export default MainHeaderContent