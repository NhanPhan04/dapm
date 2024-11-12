// src/ManagementPage.js
import React from 'react';
import './ManagementPage.css';
import Header from '../../components/header copy 2';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
const ManagementPage = () => {
    return (
        <div>
            <Header/>
        <div className="ManagementPage">
            <h1>Trang Quản Lý Nhà Tốt</h1>
            <div className='body-management-container'>
            <div className="menu-management-container">
                <Link to='/PostManagementAdmin'>
                <button>Quản Lý Tin Đăng</button>
                </Link>
                <button>Quản Lý Tài Khoản</button>
                <button>Quản Lý Voucher</button>
                <button>Thống Kê</button>
            </div>
            </div>
            </div>

<Footer/>
        </div>
    );
};

export default ManagementPage;
