// apps/config/db.js
const sql = require('mssql/msnodesqlv8');

const config = {
    // Nếu LAPTOP-S1U5MI7D chạy không được, bạn có thể thử đổi thành 'localhost\\SQLEXPRESS'
    server: 'LAPTOP-S1U5MI7D\\SQLEXPRESS', 
    database: 'bookstorenodejs', // Chú ý: Đảm bảo database này đã được tạo trong SQL Server nhé!
    driver: 'SQL Server',
    options: {
        trustedConnection: true, 
        encrypt: false, // <-- BẮT BUỘC LÀ FALSE để không bị treo
        trustServerCertificate: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Đã kết nối thành công tới SQL Server (bookstorenodejs)!');
        return pool;
    })
    .catch(err => {
        console.log('Kết nối CSDL thất bại: ', err);
        throw err; // Bắt buộc ném lỗi ra để app không bị kẹt
    });

module.exports = { sql, poolPromise };