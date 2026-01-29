const ctx = document.getElementById('scoreChart').getContext('2d');

let labels = [
    '2024年10月月考',
    '2025年1月期末考试',
    '2025年4月期中考试',
    '2025年7月期末考试',
    '2025年10月月考',
    '2025年11月青桐鸣高三联考',
    '2025年12月24日高三联考河南'
]

let whkzcj = [0,352,426,471,432,458,482];
let yw = [0,79,75,91,102,94,94];
let sx = [0,45,86,80,78,90,89];
let yy = [0,81,79,86,57,100,94];
let wl = [0,28,31,48,41,41,40];
let hf = [0,55,80,79,68,69,76];
let sf = [0,64,75,87,86,64,89];
let pm = [1879,808,381,222,596,449,315];

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
    '2025/12/21',
    '2025/12/24',
    '2026/1/3',
    '2026/1/18',
    '2026/1/20',
    '2026/1/23',
    '2026/1/26',
    '2026/1/28'
]

let Nsx = [66,75,78,55,74,90,74,65,82,87,89,69,85,74,77,105,101]

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

// 创建六边形图线（雷达图）
const hexagonCtx = document.getElementById('hexagonChart').getContext('2d');

// 从现有数据中获取最近一次考试的成绩
function getLatestScores() {
    // 最近一次考试的索引是数组的最后一个元素
    const latestIndex = labels.length - 1;
    
    // 语数英满分150，其他科目满分100，需要转换为百分比
    const convertScore = (score, is150Full) => {
        return is150Full ? (score / 150) * 100 : score;
    };
    
    return {
        labels: ['语文', '数学', '英语', '物理', '化赋', '生赋'],
        scores: [
            { raw: yw[latestIndex], converted: convertScore(yw[latestIndex], true) },
            { raw: sx[latestIndex], converted: convertScore(sx[latestIndex], true) },
            { raw: yy[latestIndex], converted: convertScore(yy[latestIndex], true) },
            { raw: wl[latestIndex], converted: convertScore(wl[latestIndex], false) },
            { raw: hf[latestIndex], converted: convertScore(hf[latestIndex], false) },
            { raw: sf[latestIndex], converted: convertScore(sf[latestIndex], false) }
        ],
        totalScore: whkzcj[latestIndex]
    };
}

// 获取最近一次考试数据
const latestExamData = getLatestScores();

// 更新总分显示
const scoreValueElement = document.querySelector('.score-value');
if (scoreValueElement) {
    scoreValueElement.textContent = latestExamData.totalScore;
}

// 计算进步情况
function calculateProgress() {
    // 最近一次考试索引
    const latestIndex = labels.length - 1;
    // 前一次考试索引
    const previousIndex = latestIndex - 1;
    
    // 确保有前一次数据
    if (previousIndex < 0) {
        return {
            subjects: [],
            totalProgress: 0,
            rankProgress: 0
        };
    }
    
    // 计算总分进步
    const totalProgress = whkzcj[latestIndex] - whkzcj[previousIndex];
    
    // 计算排名进步（注意排名是越小越好，所以进步是负数）
    const rankProgress = pm[previousIndex] - pm[latestIndex];
    
    // 科目数据数组
    const subjects = [
        { name: '语文', latest: yw[latestIndex], previous: yw[previousIndex] },
        { name: '数学', latest: sx[latestIndex], previous: sx[previousIndex] },
        { name: '英语', latest: yy[latestIndex], previous: yy[previousIndex] },
        { name: '物理', latest: wl[latestIndex], previous: wl[previousIndex] },
        { name: '化学', latest: hf[latestIndex], previous: hf[previousIndex] },
        { name: '生物', latest: sf[latestIndex], previous: sf[previousIndex] }
    ];
    
    // 计算科目进步/退步
    const subjectProgress = subjects.map(subject => {
        const difference = subject.latest - subject.previous;
        return {
            name: subject.name,
            difference: difference,
            isImproved: difference > 0
        };
    });
    
    return {
        subjects: subjectProgress,
        totalProgress: totalProgress,
        rankProgress: rankProgress
    };
}

// 更新进步情况显示
const progressData = calculateProgress();

// 更新总分和排名进步
const progressDetailsElement = document.querySelector('.progress-details');
if (progressDetailsElement) {
    // 清空现有内容
    progressDetailsElement.innerHTML = '';
    
    // 添加总分进步
    const totalProgressItem = document.createElement('span');
    totalProgressItem.className = 'progress-item';
    
    const totalDifference = Math.abs(progressData.totalProgress);
    const totalIsImproved = progressData.totalProgress > 0;
    const totalProgressClass = totalIsImproved ? 'progress-up' : 'progress-down';
    const totalArrow = totalIsImproved ? '↑' : '↓';
    
    totalProgressItem.innerHTML = `总分进步: <span class="${totalProgressClass}">${totalArrow} ${totalDifference}</span>`;
    progressDetailsElement.appendChild(totalProgressItem);
    
    // 添加排名进步
    const rankProgressItem = document.createElement('span');
    rankProgressItem.className = 'progress-item';
    
    const rankDifference = Math.abs(progressData.rankProgress);
    const rankIsImproved = progressData.rankProgress > 0;
    const rankProgressClass = rankIsImproved ? 'progress-up' : 'progress-down';
    const rankArrow = rankIsImproved ? '↑' : '↓';
    
    rankProgressItem.innerHTML = `排名进步: <span class="${rankProgressClass}">${rankArrow} ${rankDifference}</span>`;
    progressDetailsElement.appendChild(rankProgressItem);
}

// 更新科目进步情况显示
const progressContainer = document.querySelector('.subject-progress');
if (progressContainer) {
    // 清空现有内容，只保留标题
    const titleElement = progressContainer.querySelector('h4');
    progressContainer.innerHTML = '';
    if (titleElement) {
        progressContainer.appendChild(titleElement);
    }
    
    // 添加进步情况
    progressData.subjects.forEach(item => {
        const progressItem = document.createElement('div');
        progressItem.className = 'progress-item';
        
        const difference = Math.abs(item.difference);
        const progressClass = item.isImproved ? 'progress-up' : 'progress-down';
        const arrow = item.isImproved ? '↑' : '↓';
        
        progressItem.innerHTML = `${item.name}: <span class="${progressClass}">${arrow} ${difference}</span>`;
        progressContainer.appendChild(progressItem);
    });
}

// 雷达图数据
const hexagonData = {
    labels: latestExamData.labels,
    datasets: [{
        label: '最近一次考试分数',
        data: latestExamData.scores.map(item => item.converted),
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        borderColor: '#00ffff',
        borderWidth: 2,
        pointBackgroundColor: '#00ffff',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#00ffff',
        pointHoverBorderWidth: 3
    }]
};

// 雷达图配置
const hexagonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            beginAtZero: true,
            max: 100,
            ticks: {
                display: false, // 隐藏刻度值
                stepSize: 20
            },
            grid: {
                color: 'rgba(0, 255, 255, 0.3)',
                circular: false, // 关闭圆形网格，使用多边形网格
                lineWidth: 2
            },
            angleLines: {
                color: 'rgba(0, 255, 255, 0.5)',
                lineWidth: 2
            },
            pointLabels: {
                color: '#00ffff',
                font: {
                    size: 14,
                    weight: 'bold'
                }
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#00ffff',
            bodyColor: '#ffffff',
            borderColor: '#00ffff',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
                label: function(context) {
                    const subject = context.label;
                    const index = context.dataIndex;
                    const rawScore = latestExamData.scores[index].raw;
                    return `${subject}: ${rawScore}分`;
                }
            }
        }
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    animation: {
        animateScale: true,
        animateRotate: true,
        duration: 2000
    }
};

// 创建雷达图
const hexagonChart = new Chart(hexagonCtx, {
    type: 'radar',
    data: hexagonData,
    options: hexagonOptions
});