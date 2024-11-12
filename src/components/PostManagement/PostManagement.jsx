import React, { useState } from 'react';
import './PostManagement.css'
import HeaderBroker from '../../components/header copy';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';


const PostManagement = () => {
  const [activeTab, setActiveTab] = useState("displaying");

  const tabs = [
    { id: "displaying", label: "Đang Hiển Thị", count: 0 },
    { id: "expired", label: "Hết Hạn", count: 0 },
    { id: "rejected", label: "Bị Từ Chối", count: 0 },
    { id: "payment", label: "Cần Thanh Toán", count: 0 },
    { id: "draft", label: "Tin Nháp", count: 0 },
    { id: "pending", label: "Chờ Duyệt", count: 0 },
    { id: "answered", label: "Đã Ẩn", count: 0 },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
    <HeaderBroker/>  
    <div className="post-management">
      <h2>Quản Lý Tin Đăng</h2>
      
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      <div className="content">
        {activeTab === "displaying" && <p>Hiện tại không có tin đăng nào.</p>}
        {activeTab === "expired" && <p>Hiện tại không có tin đăng nào.</p>}
        {activeTab === "rejected" && <p>Hiện tại không có tin đăng nào.</p>}
        {activeTab === "payment" && <p>Hiện tại không có tin đăng nào.</p>}
        {activeTab === "draft" && <p>Hiện tại không có tin đăng nào.</p>}
        {activeTab === "pending" && <p>Hiện tại không có tin đăng nào.</p>}
        {activeTab === "answered" && <p>Hiện tại không có tin đăng nào.</p>}
      </div>
     
        <Link to="/uploadscreen">
            <button className="post-button">Đăng tin</button>
        </Link>
     
      </div>
      <Footer/>
      </div>


  );
};

export default PostManagement;
