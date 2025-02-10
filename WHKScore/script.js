const ctx = document.getElementById('scoreChart').getContext('2d');

let labels = ['2024年10月月考','2025年1月期末考试']

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '文化课总成绩',
            data: [0,352],
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgb(0, 153, 255)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '语文',
            data: [0,79],
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 192, 147, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '数学',
            data: [0,45],
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 192, 147, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '英语',
            data: [0,81],
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 192, 147, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '物理',
            data: [0,28],
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 192, 147, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '化赋',
            data: [0,55],
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 192, 147, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '生赋',
            data: [0,64],
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 192, 147, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
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

// // 添加成绩的函数
// function addScore() {
//     const score = prompt("请输入新的成绩:");
//     const parsedScore = parseInt(score);
//     if (!isNaN(parsedScore)) {
//         scores.push(parsedScore);
//         updateChart();
//     } else {
//         alert("请输入有效的成绩!");
//     }
// }

// // 更新图表数据
// function updateChart() {
//     chart.data.labels = scores.map((_, index) => `第 ${index + 1} 次`);
//     chart.data.datasets[0].data = scores;
//     chart.update();
// }3