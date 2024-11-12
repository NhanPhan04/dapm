// src/PostManagementPage.js
import React from 'react';
import './PostManagementAdmin.css';
import HeaderAdmin from '../../components/header copy 2';
import Footer from '../../components/footer';
const PostManagementPage = () => {
    return (
        <div>
            <HeaderAdmin/>
        <div className="post-management-container">
            <div className="header-post-management">
                <h2>Quản Lý Tin Đăng</h2>
                <div className="tabs-post-management">
                    <span>Chờ duyệt (0)</span>
                    <span>Hết hạn (0)</span>
                    <span>Bị từ chối (0)</span>
                    <span>Cần thanh toán (0)</span>
                    <span>Đang hiển thị (0)</span>
                </div>
            </div>
            <div className="content-post-management"> 
                {/* Content goes here */}
            </div>
        </div>
<Footer/>
        </div>

    );
};

export default PostManagementPage;
