//apps/model/user.js
class User {
    id;
    name;

    constructor() {
        // Khởi tạo đối tượng rỗng
    }

    // Một vài hàm tính toán thử nghiệm
    tonghaiso(a, b) {
        return a + b;
    }

    static tonghaisov1(a, b) {
        return a + b;
    }
}

module.exports = User;