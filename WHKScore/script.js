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

// 分数段背景配置
const scoreSegments = [
    { min: 0  , max: 150 , color: '#ffffff' }, 
    { min: 150, max: 250 , color: '#CCCCCC' }, 
    { min: 250, max: 300 , color: '#77FF77' }, 
    { min: 300, max: 350 , color: '#77DDBB' }, 
    { min: 350, max: 430 , color: '#AAAAFF' }, 
    { min: 430, max: 500 , color: '#FF88FF' }, 
    { min: 500, max: 540 , color: '#FFCC88' }, 
    { min: 540, max: 560 , color: '#FFBB55' }, 
    { min: 560, max: 600 , color: '#FF7777' }, 
    { min: 600, max: 680 , color: '#FF3333' }, 
    { min: 680, max: 9999, color: '#AA0000' } 
];

// 创建图表区域背景（使用自定义插件，仅应用到第一个图表）
Chart.register({
    id: 'scoreSegmentBackground',
    beforeDraw: (chart) => {
        // 仅对第一个图表（历次文化课成绩Rated）应用分段背景
        if (chart.canvas.id === 'scoreChart') {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            const yAxis = chart.scales.y;
            
            // 绘制分段背景
            scoreSegments.forEach(segment => {
                // 将分数转换为画布坐标
                const yTop = yAxis.getPixelForValue(segment.max);
                const yBottom = yAxis.getPixelForValue(segment.min);
                
                // 确保在图表区域内
                const top = Math.max(yTop, chartArea.top);
                const bottom = Math.min(yBottom, chartArea.bottom);
                
                if (top < bottom) {
                    ctx.fillStyle = segment.color;
                    ctx.fillRect(chartArea.left, top, chartArea.right - chartArea.left, bottom - top);
                }
            });
        }
    }
});

// 为每个数据集的最高点添加特殊样式
function getPointStyles(data, maxRadius = 5, maxColor = '#ffa200ff', defaultRadius = 4, defaultColor = '#FFFFFF') {
    const maxValue = Math.max(...data);
    const maxIndex = data.indexOf(maxValue);
    
    return {
        pointBackgroundColor: data.map((_, index) => index === maxIndex ? maxColor : defaultColor),
        radius: data.map((_, index) => index === maxIndex ? maxRadius : defaultRadius)
    };
}

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
            tension: 0.1,
            ...getPointStyles(whkzcj)
        },{
            label: '年级排名',
            data: pm,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0.02)'],
            borderColor: '#EDC240',
            borderWidth: 3,
            pointHoverRadius: 5,
            tension: 0.1,
            hidden: true,
        },{
            label: '语文',
            data: yw,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(114, 0, 0, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1,
            ...getPointStyles(yw)
        },{
            label: '数学',
            data: sx,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(0, 106, 255, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1,
            ...getPointStyles(sx)
        },{
            label: '英语',
            data: yy,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(216, 20, 255, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1,
            ...getPointStyles(yy)
        },{
            label: '物理',
            data: wl,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(14, 255, 30, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1,
            ...getPointStyles(wl)
        },{
            label: '化赋',
            data: hf,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(32, 0, 192, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1,
            ...getPointStyles(hf)
        },{
            label: '生赋',
            data: sf,
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0)'],
            borderColor: 'rgba(119, 177, 1, 0.4)',
            borderWidth: 2,
            pointHoverRadius: 5,
            tension: 0.1,
            ...getPointStyles(sf)
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                // suggestedMax: Math.max(...whkzcj) + 50, // 数据最大值+50作为建议最大值
                // grace: '10%' // 添加上下缓冲空间
            }
        },
        // 启用默认的交互效果
        // responsive: true,
        // maintainAspectRatio: false,
        // interaction: {
        //     mode: 'index',
        //     intersect: false,
        // },
        // plugins: {
        //     tooltip: {
        //         enabled: true,
        //         mode: 'index',
        //         intersect: false
        //     },
        //     legend: {
        //         enabled: true,
        //         position: 'top'
        //     }
        // },
        // hover: {
        //     mode: 'index',
        //     intersect: false
        // }
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
    '2025/11/23',
    '2025/12/7',
    '2025/12/13',
    '2025/12/21'
]

let Nsx = [66,75,78,55,74,90,74,65,82,87]

const dynamicChart = new Chart(dynamicCtx, {
    type: 'line',
    data: {
        labels: Shijian,
        datasets: [{
            label: '数学',
            data: Nsx,
            // fill: true,
            // backgroundColor: ['rgba(246, 255, 0, 0)'],
            // borderColor: 'rgba(0, 106, 255, 0.4)',
            // borderWidth: 2,
            // pointHoverRadius: 5,
            // tension: 0.1,
            
            fill: true,
            backgroundColor: ['rgba(246, 255, 0, 0.02)'],
            borderColor: '#21c0faff',
            borderWidth: 3,
            pointHoverRadius: 5,
            tension: 0.1,
            ...getPointStyles(Nsx)
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