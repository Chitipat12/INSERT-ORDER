// การตรวจสอบการล็อกอิน
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มตามปกติ

    const username = document.getElementById('username').value.toUpperCase(); // เปลี่ยนชื่อผู้ใช้เป็นตัวพิมพ์ใหญ่
    const password = document.getElementById('password').value; // เก็บค่ารหัสผ่าน

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
    if (username === "ADMIN" && password === "ADMIN") {
        window.location.href = 'dashboard.html'; // ถ้าถูกต้องให้ไปที่หน้าหลังจากล็อกอินสำเร็จ
    } else {
        document.getElementById('errorMessage').textContent = "Invalid username or password!"; // ข้อความหากข้อมูลไม่ถูกต้อง
    }
});
