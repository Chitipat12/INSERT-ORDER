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
});
