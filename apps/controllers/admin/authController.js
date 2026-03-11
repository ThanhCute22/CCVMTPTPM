// apps/controllers/admin/authController.js
var express = require("express");
var router = express.Router();
const { poolPromise } = require("../../config/db");

// Hiển thị trang đăng nhập
router.get("/login", function(req, res){
    res.render("admin/login.ejs", { error: null });
});

// Xử lý submit form đăng nhập
router.post("/login", async function(req, res){
    const { username, password } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('user', username)
            .input('pass', password)
            .query('SELECT * FROM Users WHERE username = @user AND password = @pass');
        
        if (result.recordset.length > 0) {
            // ĐĂNG NHẬP THÀNH CÔNG: Lưu user vào Session
            req.session.user = result.recordset[0].username;
            res.redirect("/admin/products");
        } else {
            res.render("admin/login.ejs", { error: "Sai tài khoản hoặc mật khẩu!" });
        }
    } catch (err) {
        res.status(500).send("Lỗi server: " + err.message);
    }
});

// XỬ LÝ ĐĂNG XUẤT
router.get("/logout", function(req, res){
    // Xóa session và chuyển hướng về trang đăng nhập
    req.session.destroy(function(err) {
        res.redirect("/admin/auth/login");
    });
});

module.exports = router;