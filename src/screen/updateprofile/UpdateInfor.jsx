// UpdateInfor.js
import React, { useState } from 'react';
import './UpdateInfor.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
const UpdateInfor = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [email, setEmail] = useState('sontung123005@gmail.com');
  const [idNumber, setIdNumber] = useState('');
  const [invoiceInfo, setInvoiceInfo] = useState('');
  const [code, setCode] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSave = () => {
    // Logic để lưu thông tin người dùng
    console.log('Lưu thay đổi:', { name, phone, address, introduction, email, idNumber, invoiceInfo, code, gender, birthdate });
  };

  return (
    <div>
        <Header/>
    <div className="update-infor">
      <h2>Hồ sơ cá nhân</h2>
      
      <div className="form-group">
        <label>Họ và tên</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Họ và tên" />
        <label>Số điện thoại</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Số điện thoại" />
      </div>
      
      <div className="form-group">
        <label>Địa chỉ</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Địa chỉ" />
      </div>
      
      <div className="form-group">
        <label>Giới thiệu</label>
        <textarea value={introduction} onChange={(e) => setIntroduction(e.target.value)} placeholder="Viết vài dòng giới thiệu về gian hàng của bạn..." />
      </div>

      <h3>Thông tin bảo mật</h3>
      <div className="form-group">
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </div>
      
      <div className="form-group">
        <label>CCCD / CMND / Hộ chiếu</label>
        <input type="text" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} placeholder="Nhập CCCD / CMND / Hộ chiếu" />
      </div>

      <div className="form-group">
        <label>Thông tin xuất hóa đơn</label>
        <input type="text" value={invoiceInfo} onChange={(e) => setInvoiceInfo(e.target.value)} placeholder="Thông tin xuất hóa đơn" />
      </div>

      <div className="form-group">
        <label>Mã số thuế</label>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Mã số thuế" />
      </div>

    
      <div className="form-group">
        <label>Giới tính</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Chọn giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Khác">Khác</option>
        </select>
      </div>

      <div className="form-group">
        <label>Ngày, tháng, năm sinh</label>
        <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      </div>

      <button className="save-button" onClick={handleSave}>Lưu thay đổi</button>
    </div>
<Footer/>
    </div>

  );
};

export default UpdateInfor;
