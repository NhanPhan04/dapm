import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BehindLayout from "../../components/layout/behindwrapper";

const HomeScreen = () => {
    return<div className="homescreenwrapper">
        <Header/>
        <BehindLayout/>
        <Footer/>
    </div>
}
export default HomeScreen