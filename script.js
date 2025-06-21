/* ---------- script.js ---------- */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOGIN ---------- */
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value.trim().toUpperCase(); // เปลี่ยนเป็นพิมพ์ใหญ่
      const password = document.getElementById('password').value.trim();
      const errorBox = document.getElementById('error-message');

      const users = {
        'admin'  : { password: 'admin',  role: 'Admin' },
        'user'   : { password: 'user',   role: 'ผู้สั่งซื้อ' },
        'manager': { password: 'manager',role: 'ผู้อนุมัติ' }
      };

      if (users[username.toLowerCase()] && users[username.toLowerCase()].password.toLowerCase() === password.toLowerCase()) { // เปลี่ยนเป็นตัวพิมพ์เล็กทั้งหมด
        sessionStorage.setItem('role', users[username.toLowerCase()].role);
        sessionStorage.setItem('username', username);
        errorBox.textContent = '';

        alert(`ยินดีต้อนรับ ${users[username.toLowerCase()].role}`);
        window.location.href = 'dashboard.html';           // <— เปลี่ยนหน้า
      } else {
        errorBox.textContent = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
      }
    });
  }

  /* ---------- Additional functions for dashboard and orders would follow... */

});
