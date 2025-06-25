/* ----------  script.js  (เวอร์ชันรวมแก้บั๊ก + Chart) ---------- */
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
        sessionStorage.setItem('role', users[username].role);
        sessionStorage.setItem('username', username);
        errorBox.textContent = '';
        alert(`ยินดีต้อนรับ ${users[username].role}`);
        window.location.href = 'dashboard.html';
      } else {
        errorBox.textContent = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
      }
    });
  }

  /* ---------- ORDER : สร้างคำสั่งซื้อ (order_placement.html) ---------- */
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

      // เก็บลง localStorage
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders.push({ productName, quantity, price, status: 'pending' });
      localStorage.setItem('orders', JSON.stringify(orders));

      console.log(`สินค้าที่สั่ง: ${productName}, ปริมาณ: ${quantity}, ราคา: ${price}`);
      alert('คำสั่งซื้อได้รับการส่ง!');

      // แสดงในประวัติหน้าเดียวกัน
      const historyUl = document.getElementById('order-history');
      if (historyUl) {
        const li = document.createElement('li');
        li.textContent = `ชื่อสินค้า: ${productName}, ปริมาณ: ${quantity}, ราคา: ${price}`;
        historyUl.appendChild(li);
      }

      orderForm.reset();
    });
  }

  /* ---------- ORDER : อัปเดตสถานะ (order_update.html) ---------- */
  const orderUpdateForm = document.getElementById('order-update-form');
  if (orderUpdateForm) {
    orderUpdateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderStatus    = document.getElementById('order-status').value;
      const shippingStatus = document.getElementById('shipping-status').value;
      console.log(`สถานะการชำระเงิน: ${orderStatus}, สถานะการจัดส่ง: ${shippingStatus}`);
      alert('การอัปเดตคำสั่งซื้อเสร็จสิ้น!');
    });
  }

  /* ---------- MANAGER : Approve / Reject (order_approval.html) ---------- */
  document.querySelectorAll('.order-item .approve-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const approved = btn.dataset.state !== 'approved';
      btn.dataset.state = approved ? 'approved' : 'rejected';
      const statusText = approved ? 'ได้รับการอนุมัติ' : 'ไม่อนุมัติ';
      alert(`คำสั่งซื้อ ${statusText}`);
      btn.textContent = approved
        ? 'คำสั่งซื้อได้รับการอนุมัติ'
        : 'คำสั่งซื้อไม่ได้รับอนุมัติ';
    });
  });

  /* ---------- ADMIN : Update Order (admin.html) ---------- */
  document.querySelectorAll('.order-item .update-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('การอัปเดตคำสั่งซื้อเสร็จสิ้น');
    });
  });

  /* ---------- DASHBOARD: สรุปตัวเลข + แสดงกราฟ (dashboard.html) ---------- */
  const chartEl = document.getElementById('myChart');
  if (chartEl) {
    // โหลดข้อมูลคำสั่งซื้อจาก localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // นับสถานะต่างๆ
    const pendingCount  = orders.filter(o => o.status === 'pending').length;
    const approvedCount = orders.filter(o => o.status === 'approved').length;
    const updatedCount  = orders.filter(o => o.status === 'updated').length;

    // อัพเดตตัวเลขบนหน้า
    document.getElementById('pending-orders').textContent   = pendingCount;
    document.getElementById('approved-orders').textContent  = approvedCount;
    document.getElementById('updated-orders').textContent   = updatedCount;

    // กำหนดข้อมูลกราฟ (ตัวอย่าง statis)
    const orderCounts = { Jan25:5, Mar25:10, May25:15, Jul25:20, Sep25:25, Nov25:30 };

    // สร้างกราฟ
    const ctx = chartEl.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(orderCounts),
        datasets: [{
          label: 'คำสั่งซื้อสำเร็จ',
          data: Object.values(orderCounts)
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } }
      }
    });
  }

});  // end DOMContentLoaded
