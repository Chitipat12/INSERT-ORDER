/* ----------  js/script.js  (เวอร์ชันรวมแก้บั๊ก + Chart) ---------- */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOGIN (index.html) ---------- */
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value.trim().toUpperCase();
      const password = document.getElementById('password').value.trim();
      const errorBox = document.getElementById('error-message');

      const users = {
        'ADMIN':   { password: 'ADMIN',   role: 'Admin'        },
        'USER':    { password: 'USER',    role: 'ผู้สั่งซื้อ'   },
        'MANAGER': { password: 'MANAGER', role: 'ผู้อนุมัติ'   }
      };

      if (users[username] && users[username].password === password) {
        // เก็บข้อมูล role ไว้ใช้งานใน Dashboard
        sessionStorage.setItem('role', users[username].role);
        sessionStorage.setItem('username', username);
        errorBox.textContent = '';

        // ไปยัง Dashboard
        window.location.href = 'dashboard.html';
      } else {
        errorBox.textContent = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
      }
    });
  }

  /* ---------- ORDER PLACEMENT (order_placement.html) ---------- */
  const orderForm = document.getElementById('order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const productName = document.getElementById('product-name').value.trim();
      const quantity    = parseInt(document.getElementById('quantity').value, 10);
      const price       = parseFloat(document.getElementById('price').value);

      if (!productName || quantity <= 0 || price <= 0) {
        alert('กรุณากรอกข้อมูลให้ถูกต้อง');
        return;
      }

      // เก็บลง localStorage พร้อมสถานะเริ่มต้นเป็น pending
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push({ productName, quantity, price, status: 'pending' });
      localStorage.setItem('orders', JSON.stringify(orders));

      alert('คำสั่งซื้อได้รับการส่ง!');

      // แสดงประวัติบนหน้านั้นๆ
      const historyUl = document.getElementById('order-history');
      if (historyUl) {
        const li = document.createElement('li');
        li.textContent = `ชื่อสินค้า: ${productName}, ปริมาณ: ${quantity}, ราคา: ${price}`;
        historyUl.appendChild(li);
      }

      orderForm.reset();
    });
  }

  /* ---------- ORDER UPDATE (order_update.html) ---------- */
  const orderUpdateForm = document.getElementById('order-update-form');
  if (orderUpdateForm) {
    orderUpdateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderStatus    = document.getElementById('order-status').value;
      const shippingStatus = document.getElementById('shipping-status').value;
      alert(`อัพเดต: สถานะชำระเงิน=${orderStatus}, สถานะจัดส่ง=${shippingStatus}`);
    });
  }

  /* ---------- ORDER APPROVAL (order_approval.html) ---------- */
  document.querySelectorAll('.order-item .approve-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const approved = btn.dataset.state !== 'approved';
      btn.dataset.state = approved ? 'approved' : 'rejected';
      btn.textContent   = approved
        ? 'คำสั่งซื้อได้รับการอนุมัติ'
        : 'คำสั่งซื้อไม่ได้รับอนุมัติ';
      alert(`คำสั่งซื้อ ${approved ? 'ได้รับการอนุมัติ' : 'ไม่อนุมัติ'}`);
    });
  });

  /* ---------- ADMIN UPDATE (admin.html) ---------- */
  document.querySelectorAll('.order-item .update-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('อัพเดตคำสั่งซื้อสำเร็จ');
    });
  });

  /* ---------- DASHBOARD (dashboard.html) ---------- */
  const chartEl = document.getElementById('myChart');
  if (chartEl) {
    // โหลดคำสั่งซื้อทั้งหมดจาก localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');

    // นับสถานะแต่ละตัว
    const pendingCount  = orders.filter(o => o.status === 'pending').length;
    const approvedCount = orders.filter(o => o.status === 'approved').length;
    const updatedCount  = orders.filter(o => o.status === 'updated').length;

    // แทรกตัวเลขลง HTML
    document.getElementById('pending-orders').textContent  = pendingCount;
    document.getElementById('approved-orders').textContent = approvedCount;
    document.getElementById('updated-orders').textContent  = updatedCount;

    // ข้อมูลกราฟ (ตัวอย่าง)
    const orderCounts = { Jan25:5, Mar25:10, May25:15, Jul25:20, Sep25:25, Nov25:30 };
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
