// ฟังก์ชันสำหรับการส่งคำสั่งซื้อ
document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // คำนวณการส่งคำสั่งซื้อ
  const productName = document.getElementById("product-name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  console.log(`สินค้าที่สั่ง: ${productName}, ปริมาณ: ${quantity}, ราคา: ${price}`);
  
  // ส่งคำสั่งซื้อและเปลี่ยนสถานะ
  alert("คำสั่งซื้อได้รับการส่ง!");

  // เพิ่มคำสั่งซื้อในประวัติ
  const orderHistory = document.getElementById('order-history');
  const newOrder = document.createElement('li');
  newOrder.textContent = `ชื่อสินค้า: ${productName}, ปริมาณ: ${quantity}, ราคา: ${price}`;
  orderHistory.appendChild(newOrder);
});

// ฟังก์ชันสำหรับการอัปเดตสถานะคำสั่งซื้อ
document.getElementById("order-update-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const orderStatus = document.getElementById("order-status").value;
  const shippingStatus = document.getElementById("shipping-status").value;

  console.log(`สถานะการชำระเงิน: ${orderStatus}, สถานะการจัดส่ง: ${shippingStatus}`);
  alert("การอัปเดตคำสั่งซื้อเสร็จสิ้น!");
});

// ฟังก์ชันสำหรับการตรวจสอบการเข้าสู่ระบบ (Login)
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // รับค่าชื่อผู้ใช้งานและรหัสผ่าน
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // ข้อมูลผู้ใช้ที่อนุมัติการเข้าถึง
  const users = {
    'ADMIN': { password: 'ADMIN', role: 'Admin' },
    'USER': { password: 'USER', role: 'ผู้สั่งซื้อ' },
    'MANAGER': { password: 'MANAGER', role: 'ผู้อนุมัติ' }
  };

  // ตรวจสอบข้อมูลการเข้าสู่ระบบ
  if (users[username] && users[username].password === password) {
    errorMessage.textContent = '';  // ลบข้อความผิดพลาด
    alert(`ยินดีต้อนรับ ${users[username].role}`);
    // เปลี่ยนไปที่หน้าแต่ละบทบาท
    window.location.href = "dashboard.html";  // เปลี่ยนเส้นทางไปที่ dashboard.html
  } else {
    errorMessage.textContent = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
  }
});

// ฟังก์ชันสำหรับการอนุมัติคำสั่งซื้อ (สำหรับผู้อนุมัติ)
document.querySelectorAll('.order-item .approve-button').forEach((button) => {
  button.addEventListener('click', function() {
    const orderStatus = button.textContent === 'อนุมัติ' ? 'ได้รับการอนุมัติ' : 'ไม่อนุมัติ';
    alert(`คำสั่งซื้อ ${orderStatus}`);

    // สามารถเพิ่มการอัปเดตคำสั่งซื้อในที่นี้ (ถ้าต้องการ)
    button.textContent = orderStatus === 'ได้รับการอนุมัติ' ? 'คำสั่งซื้อได้รับการอนุมัติ' : 'คำสั่งซื้อไม่ได้รับอนุมัติ';
  });
});

// ฟังก์ชันสำหรับการอัปเดตคำสั่งซื้อ (สำหรับผู้ดูแลระบบ)
document.querySelectorAll('.order-item .update-button').forEach((button) => {
  button.addEventListener('click', function() {
    alert('การอัปเดตคำสั่งซื้อเสร็จสิ้น');
    // สามารถเพิ่มการอัปเดตสถานะหรือข้อมูลคำสั่งซื้อในที่นี้
  });
});
// ฟังก์ชันสำหรับการเข้าสู่ระบบ
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // รับค่าชื่อผู้ใช้งานและรหัสผ่าน
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // ข้อมูลผู้ใช้ที่อนุมัติการเข้าถึง
  const users = {
    'ADMIN': { password: 'ADMIN', role: 'Admin' },
    'USER': { password: 'USER', role: 'ผู้สั่งซื้อ' },
    'MANAGER': { password: 'MANAGER', role: 'ผู้อนุมัติ' }
  };

  // ตรวจสอบข้อมูลการเข้าสู่ระบบ
  if (users[username] && users[username].password === password) {
    errorMessage.textContent = '';  // ลบข้อความผิดพลาด
    alert(`ยินดีต้อนรับ ${users[username].role}`);
    
    // เก็บบทบาทของผู้ใช้ใน sessionStorage
    sessionStorage.setItem('role', users[username].role);
    
    // เปลี่ยนเส้นทางไปที่หน้า dashboard.html
    window.location.href = "dashboard.html"; 
  } else {
    errorMessage.textContent = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
  }
});
