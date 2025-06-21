/* ----------  script.js  (เวอร์ชันรวมแก้บั๊ก) ---------- */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOGIN ---------- */
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value.trim().toUpperCase();
      const password = document.getElementById('password').value.trim();
      const errorBox = document.getElementById('error-message');

      const users = {
        'ADMIN'  : { password: 'ADMIN',  role: 'Admin' },
        'USER'   : { password: 'USER',   role: 'ผู้สั่งซื้อ' },
        'MANAGER': { password: 'MANAGER',role: 'ผู้อนุมัติ' }
      };

      if (users[username] && users[username].password === password) {
        // ล็อกอินสำเร็จ
        sessionStorage.setItem('role', users[username].role);
        sessionStorage.setItem('username', username);
        errorBox.textContent = '';

        alert(ยินดีต้อนรับ ${users[username].role});
        window.location.href = 'dashboard.html';           // <— เปลี่ยนหน้า
      } else {
        errorBox.textContent = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
      }
    });
  }

  /* ---------- ORDER : สร้างคำสั่งซื้อ ---------- */
  const orderForm = document.getElementById('order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const productName = document.getElementById('product-name').value.trim();
      const quantity    = document.getElementById('quantity').value.trim();
      const price       = document.getElementById('price').value.trim();

      if (!productName || quantity <= 0 || price <= 0) {
        alert('กรุณากรอกข้อมูลให้ถูกต้อง');
        return;
      }

      console.log(สินค้าที่สั่ง: ${productName}, ปริมาณ: ${quantity}, ราคา: ${price});
      alert('คำสั่งซื้อได้รับการส่ง!');

      const historyUl = document.getElementById('order-history');
      if (historyUl) {
        const li = document.createElement('li');
        li.textContent = ชื่อสินค้า: ${productName}, ปริมาณ: ${quantity}, ราคา: ${price};
        historyUl.appendChild(li);
      }

      orderForm.reset();
    });
  }

  /* ---------- ORDER : อัปเดตสถานะ ---------- */
  const orderUpdateForm = document.getElementById('order-update-form');
  if (orderUpdateForm) {
    orderUpdateForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const orderStatus    = document.getElementById('order-status').value;
      const shippingStatus = document.getElementById('shipping-status').value;

      console.log(สถานะการชำระเงิน: ${orderStatus}, สถานะการจัดส่ง: ${shippingStatus});
      alert('การอัปเดตคำสั่งซื้อเสร็จสิ้น!');
    });
  }

  /* ---------- MANAGER : Approve / Reject ---------- */
  const approveButtons = document.querySelectorAll('.order-item .approve-button');
  approveButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const approved = btn.dataset.state !== 'approved';
      btn.dataset.state = approved ? 'approved' : 'rejected';

      const statusText = approved ? 'ได้รับการอนุมัติ' : 'ไม่อนุมัติ';
      alert(คำสั่งซื้อ ${statusText});
      btn.textContent = approved
        ? 'คำสั่งซื้อได้รับการอนุมัติ'
        : 'คำสั่งซื้อไม่ได้รับอนุมัติ';
    });
  });

  /* ---------- ADMIN : Update Order (ตัวอย่าง) ---------- */
  const updateButtons = document.querySelectorAll('.order-item .update-button');
  updateButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('การอัปเดตคำสั่งซื้อเสร็จสิ้น');
      // เพิ่มโค้ดอัปเดตจริงที่นี่ถ้าต้องการ
    });
  });

});
/* ---------- END OF FILE ---------- */
