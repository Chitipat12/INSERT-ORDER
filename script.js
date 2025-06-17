document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // คำนวณการส่งคำสั่งซื้อ
  const productName = document.getElementById("product-name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  console.log(`สินค้าที่สั่ง: ${productName}, ปริมาณ: ${quantity}, ราคา: ${price}`);
  
  // ส่งคำสั่งซื้อและเปลี่ยนสถานะ
  alert("คำสั่งซื้อได้รับการส่ง!");
});

// สำหรับการอัปเดตสถานะคำสั่งซื้อ
document.getElementById("order-update-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const orderStatus = document.getElementById("order-status").value;
  const shippingStatus = document.getElementById("shipping-status").value;

  console.log(`สถานะการชำระเงิน: ${orderStatus}, สถานะการจัดส่ง: ${shippingStatus}`);
  alert("การอัปเดตคำสั่งซื้อเสร็จสิ้น!");

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
    // คุณสามารถเปลี่ยนเส้นทางไปยังหน้าอื่น ๆ ตามบทบาทของผู้ใช้ที่เข้าสู่ระบบ
    window.location.href = `${users[username].role.toLowerCase().replace(' ', '_')}.html`;  // เปลี่ยนไปที่หน้าแต่ละบทบาท
  } else {
    errorMessage.textContent = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
  }
});

});
