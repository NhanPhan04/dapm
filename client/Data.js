const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Hàm kết nối đến cơ sở dữ liệu
async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log("Connected to database successfully");
    return pool;  // Trả về đối tượng pool để sử dụng trong các truy vấn sau
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

// Ví dụ về cách sử dụng `request` với pool để thực hiện truy vấn SQL
async function queryDatabase() {
  try {
    const pool = await connectToDatabase();
    const result = await pool.request()
      .query('SELECT * FROM users');  // Thực hiện truy vấn SQL
    console.log(result);  // Hiển thị kết quả truy vấn
  } catch (error) {
    console.error("Error executing query:", error);
  }
}

module.exports = { connectToDatabase, queryDatabase, sql };
