import React from "react";
import './index.css'
import SearchBar from "../searchbar";
import CusButton from "../../button/cusbutton";
import OtherFuncBar from "../otherfuncbar";
import { useNavigate } from 'react-router-dom';

const MainHeaderContent = () => {
    const navigte = useNavigate();

    const gotoUpLoadScreen = () =>{
        navigte('/uploadscreen/index.jsx')
    }

    return<div className="MainHeaderContent-wrapper  px-4 mt-4 mb-2 flex items-center">
        <div className="logo-section">
            <img src="./img/nhatot.png" alt="nhà tốt"/>
        </div>
        <div className="headerFunction-section flex items-center gap-5">
            <SearchBar />
            <OtherFuncBar/>
        </div>
        <div className="createNews-Section">
            <CusButton title={"Đăng ngay"} func={()=>{gotoUpLoadScreen()}} />
        </div>
    </div>

}
export default MainHeaderContent