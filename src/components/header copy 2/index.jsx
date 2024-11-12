import React from "react";
import './index.css';

import MainHeaderContent from "./mainheader";

const Header = () => {
    return<div className="headerwrapper shadow-sm pb-2 bg-white"  style={{
        marginTop: '30px'
      }}>
        <MainHeaderContent/>
    </div>

}
export default Header