<!-- แทนที่ <img> ด้วยกราฟ -->
<canvas id="myChart"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // เดือน
      datasets: [{
        label: 'คำสั่งซื้อสำเร็จ',
        data: [12, 19, 3, 5, 2], // ข้อมูลคำสั่งซื้อที่สำเร็จ
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
