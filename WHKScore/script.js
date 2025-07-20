const ctx = document.getElementById('scoreChart').getContext('2d');

let labels = [
    '2024年10月月考',
    '2025年1月期末考试',
    '2025年4月期中考试',
    '2025年7月期末考试'
]

let whkzcj = [0,352,426,471];
let yw = [0,79,75,91];
let sx = [0,45,86,80];
let yy = [0,81,79,86];
let wl = [0,28,31,48];
let hf = [0,55,80,79];
let sf = [0,64,75,87];
let pm = [1879,808,381];



const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '文化课总成绩',
            data: whkzcj,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgb(0, 153, 255)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '年级排名',
            data: pm,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(255, 0, 0, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1,
            hidden: true  // 添加这行使数据集默认隐藏
        },{
            label: '语文',
            data: yw,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(114, 0, 0, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '数学',
            data: sx,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 106, 255, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '英语',
            data: yy,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(216, 20, 255, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '物理',
            data: wl,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(14, 255, 30, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '化赋',
            data: hf,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(32, 0, 192, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5, //设置鼠标移动上去后圆点半径
            tension: 0.1
        },{
            label: '生赋',
            data: sf,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(119, 177, 1, 0.4)',
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