function validateLogin() {
    const username = document.getElementById("username").value; // ดึงค่าจากช่องกรอกชื่อผู้ใช้
    const password = document.getElementById("password").value; // ดึงค่าจากช่องกรอกรหัสผ่าน

    // เช็คว่าชื่อผู้ใช้และรหัสผ่านตรงกับที่กำหนดไว้หรือไม่
    if (username === "ADMIN" && password === "ADMIN") {
        alert("Login Successful!"); // หากถูกต้อง จะแสดงข้อความ "Login Successful!"
    } else {
        alert("Invalid Username or Password."); // หากไม่ถูกต้อง จะแสดงข้อความ "Invalid Username or Password."
    }
}
