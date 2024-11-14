import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Kiểm tra dữ liệu
    try {
      await axios.post('http://localhost:5000/auth/register', formData);
      alert('Đăng ký thành công');
      navigate('/login'); 
    } catch (error) {
      
      console.error(error); // In lỗi chi tiết từ backend
      alert('Có lỗi khi đăng ký');
      
    }
  };

  return (
    <div>
    <Header/>

    <div className="flex justify-center items-center bg-url">
    <div className="bg-white shadow-inner rounded-md w-1/4 py-5" style={{ marginTop: '-100px' }}>

        <div className='flex justify-center'
        style={{
          marginRight:'40px'}}>
        <img src={`${process.env.PUBLIC_URL}/img/nhatot.png`} className='w-1/3 ml-16' alt=''/>
        </div>
    <div className='text-xl font-bold' style={{
  display: 'grid',
    textAlign:'center', 
marginBottom:'20px'}}
    >
      <h1  style={{
        fontSize:'30px',
        marginBottom:'20px',
          marginTop:'40px'}}>Đăng ký</h1>
      <form className='px-9 flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          type="text"required className='px-3 border py-3 rounded-md w-full'
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Tên người dùng"
        />
        <input
          type="email"
           required className='px-3 border py-3 rounded-md w-full'
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
           required className='px-3 border py-3 rounded-md w-full'
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mật khẩu"
        />
        <select name="role" value={formData.role} onChange={handleChange}>
            <option value="customer">Khách hàng</option>
            <option value="broker">Môi giới</option>
        </select>
        <button type="submit"
         className='py-4 w-full bg-orange-600 text-center text-white text-xl font-medium uppercase rounded-md'
         >Đăng ký</button>
      </form>
            <h3 className='text-center mt-4'>
                Đã có tài khoản ?<Link to={"/login"}> 
                <a  className='font-semibold text-blue-600'>Đăng nhập ngay</a>
                </Link>
            </h3>
    </div>
          
    </div>
    </div>
    <Footer/>
    </div>

  );
};

export default Register;
