import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BehindLayout from "../../components/layout/behindwrapper";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    
    return<div className="homescreenwrapper bg-white">
        <Header/>
        <BehindLayout/>
        <Footer/>
    </div>
}
export default HomeScreen