// apps/controllers/admin/productManageController.js
var express = require("express");
var router = express.Router();
const { poolPromise } = require("../../config/db");


// Xử lý thêm sản phẩm mới (từ form Popup)
router.post("/add", async function(req, res){
    const { name, price, description } = req.body;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('name', name)
            .input('price', price)
            .input('desc', description)
            .query('INSERT INTO Products (name, price, description) VALUES (@name, @price, @desc)');
        
        // Thêm xong load lại trang danh sách
        res.redirect("/admin/products");
    } catch (err) {
        res.status(500).send("Lỗi thêm sản phẩm: " + err.message);
    }
});

module.exports = router;