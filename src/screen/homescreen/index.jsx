import React from "react";

import BehindLayout from "../../components/layout/behindwrapper";
import Header from '../../components/header';
import Footer from '../../components/footer';

const HomeScreen = () => {
    
    return<div className="homescreenwrapper bg-white">
            <Header/>
        <BehindLayout/>
        <Footer/>

    </div>
}
export default HomeScreen