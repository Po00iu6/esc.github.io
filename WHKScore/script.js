const ctx = document.getElementById('scoreChart').getContext('2d');

let labels = [
    '2024年10月月考',
    '2025年1月期末考试',
    '2025年4月期中考试',
    '2025年7月期末考试',
    '2025年10月月考',
    '2025年11月青桐鸣高三联考'
]

let whkzcj = [0,352,426,471,432,458];
let yw = [0,79,75,91,102,94];
let sx = [0,45,86,80,78,90];
let yy = [0,81,79,86,57,100];
let wl = [0,28,31,48,41,41];
let hf = [0,55,80,79,68,69];
let sf = [0,64,75,87,86,64];
let pm = [1879,808,381,222,596,449];

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
            pointHoverRadius: 5,
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
            hidden: true
        },{
            label: '语文',
            data: yw,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(114, 0, 0, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1
        },{
            label: '数学',
            data: sx,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 106, 255, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1
        },{
            label: '英语',
            data: yy,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(216, 20, 255, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1
        },{
            label: '物理',
            data: wl,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(14, 255, 30, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1
        },{
            label: '化赋',
            data: hf,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(32, 0, 192, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1
        },{
            label: '生赋',
            data: sf,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(119, 177, 1, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
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

// 添加第二个折线图，保持与第一个图表相同的风格
const dynamicCtx = document.getElementById('dynamicScoreChart').getContext('2d');

let Shijian = [
    '2025/9/7',
    '2025/9/28',
    '2025/10/10',
    '2025/10/19',
    '2025/11/2',
    '2025/11/13',
    '2025/11/23'
]

let Nsx = [66,75,78,55,74,90,74];

const dynamicChart = new Chart(dynamicCtx, {
    type: 'line',
    data: {
        labels: Shijian,
        datasets: [{
            label: '数学',
            data: Nsx,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 106, 255, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
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