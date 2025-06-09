document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // รหัสผู้ใช้และรหัสผ่านที่ถูกต้อง
    const users = {
        "USER": "USER",
        "MANAGER": "MANAGER",
        "STORE": "STORE"
    };

    // ดึงข้อมูลจากฟอร์ม
    let username = document.getElementById('username').value.toUpperCase(); // ทำให้ตัวพิมพ์ใหญ่
    let password = document.getElementById('password').value.toUpperCase(); // ทำให้ตัวพิมพ์ใหญ่

    // ตรวจสอบ username และ password
    if (users[username] && users[username] === password) {
        // หากข้อมูลถูกต้อง
        window.location.href = 'home.html'; // เปลี่ยนไปยังหน้า Home
    } else {
        // หากข้อมูลไม่ถูกต้อง
        document.getElementById('error-message').style.display = 'block';
        function showOrderForm() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("order-form").style.display = "block";
    document.getElementById("status-order").style.display = "none";
}

function showOrderStatus() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("order-form").style.display = "none";
    document.getElementById("status-order").style.display = "block";
}

    }
});
