//apps/controllers/index.js
var express = require("express");
var router = express.Router();


// Route mặc định khi vào trang chủ (localhost:3000)
router.get("/", function(req, res){
   res.render("index");
    //res.json({"message": "Chào mừng bạn đến với trang index!"});
});

module.exports = router;