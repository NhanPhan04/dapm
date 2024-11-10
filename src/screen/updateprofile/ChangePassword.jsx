// ChangePassword.js
import React, { useState } from 'react';
import axios from 'axios';
import './ChangePassword.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('/api/change-password', { currentPassword, newPassword });
      setMessage(response.data.msg);
    } catch (err) {
      setMessage(err.response.data.msg || "An error occurred");
    }
  };

  return (
    <div>
<Header/>
    <div className="change-password">
      <h2>Thay đổi mật khẩu</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mật khẩu hiện tại *
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Mật khẩu mới *
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Xác nhận mật khẩu mới *
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Đổi mật khẩu</button>

        <Link to="/login">
          <button type="button" className="font-semibold text-blue-600">
            Hủy
          </button>
        </Link>
        {message && <p>{message}</p>}
      </form>
    </div>
    <Footer/>
    </div>

  );
};

export default ChangePassword;
