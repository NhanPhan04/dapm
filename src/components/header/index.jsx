import React from "react";
import './index.css';
import SubHeaderContent from "./subheader";
import MainHeaderContent from "./mainheader";

const Header = () => {
    return<div className="headerwrapper ">
        <SubHeaderContent/>
        <MainHeaderContent/>
    </div>

}
export default Header