import React from "react";
import './index.css';
import SubHeaderContent from "./subheader";
import MainHeaderContent from "./mainheader";

const Header = () => {
    return<div className="headerwrapper shadow-sm pb-2 bg-white">
        <SubHeaderContent/>
        <MainHeaderContent/>
    </div>

}
export default Header