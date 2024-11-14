const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../Data'); // Assuming db.connectToDatabase connects to the database

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Đăng ký người dùng
router.post('/register', async (req, res) => {
  const { username, password, email, role } = req.body;

  // Kiểm tra xem tất cả các thông tin cần thiết đã được cung cấp chưa
  if (!username || !password || !email || !role) {
    return res.status(400).send('Vui lòng cung cấp đầy đủ thông tin');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const pool = await db.connectToDatabase(); // Kết nối cơ sở dữ liệu

    const query = `INSERT INTO Users (username, password, email, role)
                   VALUES (@username, @password, @email, @role)`;

    await pool.request()
      .input('username', db.sql.NVarChar, username)
      .input('password', db.sql.NVarChar, hashedPassword)
      .input('email', db.sql.NVarChar, email)
      .input('role', db.sql.NVarChar, role)
      .query(query);

      res.status(201).send({
        message: 'Đăng ký người dùng thành công. Bạn có thể đăng nhập ngay.',
        redirectUrl: '/login' // Trả về URL để chuyển hướng sang trang đăng nhập
      });
  
  } catch (error) {
    console.error("Error during registration:", error);
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).send('Không thể kết nối với cơ sở dữ liệu');
    }
    res.status(500).send('Có lỗi khi đăng ký người dùng');
  }
});

// Đăng nhập người dùng
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await db.connectToDatabase(); // Kết nối cơ sở dữ liệu

    const result = await pool.request()
      .input('email', db.sql.NVarChar, email)
      .query('SELECT * FROM Users WHERE email = @email');

    if (result.recordset.length === 0) {
      return res.status(400).send('Không tìm thấy người dùng');
    }

    const user = result.recordset[0];

    // So sánh mật khẩu đã mã hóa
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Thông tin đăng nhập không hợp lệ');
    }

    // Tạo mã thông báo JWT
    const token = jwt.sign(
      { user_id: user.user_id, role: user.role },
      JWT_SECRET, // Mã bí mật JWT
      { expiresIn: '1h' }
    );

    let redirectUrl = '';
    switch (user.role) {
      case 'customer':
        redirectUrl = '/'; // Trang của customer
        break;
      case 'broker':
        redirectUrl = '/profilebroker'; // Trang của broker
        break;
      case 'admin':
        redirectUrl = '/ManagementPage'; // Trang của admin
        break;
      default:
        return res.status(400).send('Vai trò không hợp lệ');
    }

    res.status(200).json({
      token,
      expiresIn: '1h',
      redirectUrl,
      user: {
        id: user.user_id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error(error);
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).send('Không thể kết nối với cơ sở dữ liệu');
    }
    res.status(500).send('Có lỗi khi đăng nhập');
  }
});

module.exports = router;
