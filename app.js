//app.js
// Nạp các thư viện cần thiết
var express = require("express");
var bodyParser = require("body-parser"); // Đã cài đặt ở bước trước
var session = require("express-session");
var app = express();

// Cấu hình Body Parser để xử lý dữ liệu form (nếu có)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'matkhau_bimat_cua_ban', // Chuỗi bí mật dùng để mã hóa session
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Đang chạy localhost HTTP nên để false
}));

// Thiết lập thư mục chứa giao diện và loại file là ejs
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

// Cấu hình đường dẫn cho các file tĩnh (css, js, ảnh)
// Khi gọi trong HTML sẽ dùng tiền tố /static
app.use("/static", express.static(__dirname + "/public"));
app.use("/partical", express.static(__dirname + "/views/partical"));


// Nạp bộ điều hướng (controller) chính
var controller = require(__dirname + "/apps/controllers");
app.use(controller);

// Chạy server ở cổng 3000
var server = app.listen(3000, function(){
    console.log("Server đang chạy ở cổng 3000...");
});