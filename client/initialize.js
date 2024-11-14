const { connectToDatabase, sql } = require('./Data');

async function initializeDatabase() {
  const pool = await connectToDatabase();

  if (pool) {
    try {
      // Kiểm tra và tạo bảng Users nếu chưa tồn tại
      const createTableQuery = `
        IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Users')
        CREATE TABLE Users (
          user_id INT PRIMARY KEY IDENTITY(1,1),
          username NVARCHAR(50) NOT NULL UNIQUE,
          password NVARCHAR(255) NOT NULL,
          full_name NVARCHAR(100),
          email NVARCHAR(100) NOT NULL UNIQUE,
          phone NVARCHAR(20),
          role NVARCHAR(10) CHECK (role IN ('customer', 'broker', 'admin')),
          created_at DATETIME DEFAULT GETDATE()
        );
      `;

      await pool.request().query(createTableQuery);
      console.log("Table 'Users' checked and created if it did not exist.");

      // Kiểm tra và chèn tài khoản admin nếu chưa tồn tại
      const insertAdminQuery = `
        IF NOT EXISTS (SELECT * FROM Users WHERE username = 'admin')
        BEGIN
          INSERT INTO Users (username, password, email, role)
          VALUES ('admin', '123', 'admin@example.com', 'admin');
        END
      `;

      await pool.request().query(insertAdminQuery);
      console.log("Admin user checked and created if it did not exist.");
      
    } catch (err) {
      console.error("Error creating table or inserting data:", err);
    } finally {
      pool.close();
    }
  }
}

initializeDatabase();
