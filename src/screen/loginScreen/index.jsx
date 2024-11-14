import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Login = () => {


  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', loginData);
      localStorage.setItem('token', response.data.token);
      alert('Đăng nhập thành công');
      const { role } = response.data.user;
      let redirectUrl = '/';
      if (role === 'customer') {
        redirectUrl = '/';
      } else if (role === 'broker') {
        redirectUrl = '/profilebroker';
      } else if (role === 'admin') {
        redirectUrl = '/ManagementPage';
      }
      navigate(redirectUrl);


    } catch (error) {
      alert('Thông tin đăng nhập không hợp lệ');
    }


  };


  return (
    <div className="flex justify-center items-center bg-url">
    <div className="bg-white shadow-inner rounded-md w-1/4 py-5"style={{ marginTop: '-100px' }}>
        <div className='flex justify-center'style={{
          marginRight:'40px'}}>
         <img src={`${process.env.PUBLIC_URL}/img/nhatot.png`} className='w-1/3 ml-16'/>
        </div>
    <div>
      <h1 className='text-xl font-bold' style={{ display: 'grid',textAlign:'center', ontSize:'30px',marginBottom:'20px'}}
      >Đăng nhập</h1>
      <form className='px-9 flex flex-col gap-4'onSubmit={handleSubmit}>
        <input
          type="email"  required className='px-3 border py-3 rounded-md w-full'
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"required className='px-3 border py-3 rounded-md w-full' 
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Mật khẩu"
        />
        <a href='/ChangePassword' className='text-blue-600'>Quên mật khẩu</a>
        
        
        <button type="submit"
        className='py-4 w-full bg-orange-600 text-center text-white text-xl font-medium uppercase rounded-md'
        >Đăng nhập</button>
      </form>
      <h3 className='text-center mt-4'>
                    Chưa có tài khoản ?<Link to={"/register"}> 
                    <a href='/registerScreen' className='font-semibold text-blue-600'>Đăng kí ngay</a></Link>
                </h3>
    </div>
    </div>
    </div>
  );
};

export default Login;
