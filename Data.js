const sql = require("msnodesqlv8");

const connectionString = "Driver={ODBC Driver 17 for SQL Server};Server=(local);Database=DAPM;Trusted_Connection=Yes;";
const query = "SELECT * FROM Users"; // Kiểm tra lại tên schema và bảng nếu đây là truy vấn mong muốn

sql.query(connectionString, query, (err, rows) => {
    if (err) {
        console.error("Lỗi khi thực thi truy vấn:", err);
    } else {
        console.log("Kết quả truy vấn:", rows);
    }
});
