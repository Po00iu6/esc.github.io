// Grades.js - 自动获取考试成绩并绘制曲线

// 存储成绩数据
let examData = [];

// 分数段背景配置
const scoreSegments = [
    { min: 0  , max: 150 , color: '#ffffff11' }, 
    { min: 150, max: 250 , color: '#CCCCCC31' }, 
    { min: 250, max: 300 , color: '#77FF7731' }, 
    { min: 300, max: 350 , color: '#77DDBB31' }, 
    { min: 350, max: 430 , color: '#AAAAFF31' }, 
    { min: 430, max: 500 , color: '#FF88FF31' }, 
    { min: 500, max: 540 , color: '#FFCC8831' }, 
    { min: 540, max: 560 , color: '#FFBB5531' }, 
    { min: 560, max: 600 , color: '#FF777731' }, 
    { min: 600, max: 680 , color: '#FF333331' }, 
    { min: 680, max: 9999, color: '#AA000031' } 
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

// 静态数据作为备选方案
const backupExamData = [
    {
        exam: '2025年12月份月考--高三',
        date: '2025-12-01',
        scores: {
            total: 549,
            chinese: 98,
            math: 108,
            english: 83,
            physics: 78,
            chemistry: 88,
            biology: 94
        }
    },
    {
        exam: '2025年11月期中考试--高三',
        date: '2025-11-01',
        scores: {
            total: 527.5,
            chinese: 97.5,
            math: 107,
            english: 100,
            physics: 60,
            chemistry: 82,
            biology: 81
        }
    },
    {
        exam: '2025年10月考试--高三',
        date: '2025-10-01',
        scores: {
            total: 535.5,
            chinese: 102.5,
            math: 95,
            english: 101,
            physics: 68,
            chemistry: 89,
            biology: 80
        }
    }
];

// // 页面加载完成后执行
// window.addEventListener('load', function() {
//     // 直接使用备选数据
//     useBackupData();
// });

useBackupData();

// 使用备选数据绘制成绩曲线
function useBackupData() {
    console.log('使用备选数据');
    document.getElementById('status').textContent = '正在使用备选数据绘制成绩曲线...';
    
    // 使用备选数据
    examData = [...backupExamData];
    
    // 按时间排序（最近的考试在后，这样最新成绩会在时间轴右边）
    examData.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // 绘制成绩曲线
    drawScoreChart();
    
    document.getElementById('status').textContent = `成功使用 ${examData.length} 次考试的备选数据绘制成绩曲线`;
}

// 绘制成绩曲线
function drawScoreChart() {
    // 准备数据
    const labels = examData.map(item => item.exam);
    const totalScores = examData.map(item => item.scores.total || 0);
    const chineseScores = examData.map(item => item.scores.chinese || 0);
    const mathScores = examData.map(item => item.scores.math || 0);
    const englishScores = examData.map(item => item.scores.english || 0);
    const physicsScores = examData.map(item => item.scores.physics || 0);
    const chemistryScores = examData.map(item => item.scores.chemistry || 0);
    const biologyScores = examData.map(item => item.scores.biology || 0);
    
    // 获取Canvas元素
    const ctx = document.getElementById('scoreChart').getContext('2d');
    
    // 创建图表
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '总分',
                    data: totalScores,
                    fill: true,
                    backgroundColor: ['rgba(246, 255, 0, 0)'],
                    borderColor: 'rgba(1, 153, 255, 1)',
                    borderWidth: 2,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(totalScores)
                },
                {
                    label: '语文',
                    data: chineseScores,
                    fill: true,
                    backgroundColor: ['rgba(246, 255, 0, 0)'],
                    borderColor: 'rgba(255, 14, 14, 1)',
                    borderWidth: 2,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(chineseScores)
                },
                {
                    label: '数学',
                    data: mathScores,
                    fill: true,
                    backgroundColor: ['rgba(246, 255, 0, 0)'],
                    borderColor: 'rgba(18, 117, 255, 1)',
                    borderWidth: 2,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(mathScores)
                },
                {
                    label: '英语',
                    data: englishScores,
                    fill: true,
                    backgroundColor: ['rgba(246, 255, 0, 0)'],
                    borderColor: 'rgba(216, 20, 255, 1)',
                    borderWidth: 2,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(englishScores)
                },
                {
                    label: '物理',
                    data: physicsScores,
                    fill: true,
                    backgroundColor: ['rgba(246, 255, 0, 0)'],
                    borderColor: 'rgba(14, 255, 30, 1)',
                    borderWidth: 2,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(physicsScores)
                },
                {
                    label: '化学',
                    data: chemistryScores,
                    fill: true,
                    backgroundColor: ['rgba(246, 255, 0, 0)'],
                    borderColor: 'rgba(74, 38, 255, 1)',
                    borderWidth: 2,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(chemistryScores)
                },
                {
                    label: '生物',
                    data: biologyScores,
                    fill: true,
                    backgroundColor: ['rgba(246, 255, 0, 0)'],
                    borderColor: 'rgba(176, 255, 17, 1)',
                    borderWidth: 2,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(biologyScores)
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            // 修复悬停交互，只显示单个节点的信息
            interaction: {
                mode: 'nearest',
                intersect: true
            },
            plugins: {
                tooltip: {
                    enabled: true,
                    mode: 'nearest',
                    intersect: true,
                    // 自定义提示框样式
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#00ffff',
                    bodyColor: '#ffffff',
                    borderColor: '#00ffff',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8
                },
                legend: {
                    enabled: true,
                    position: 'top',
                    // 设置图例文字颜色
                    labels: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    });
    
    // 更新状态
    document.getElementById('status').textContent = `成功获取 ${examData.length} 次考试成绩`;
    
    // 绘制雷达图
    drawRadarChart();
}

// 获取最近一次考试数据
function getLatestExamData() {
    // 确保有数据
    if (examData.length === 0) {
        return null;
    }
    
    // 按时间排序，最近的考试在最后
    const sortedData = [...examData].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // 返回最近一次考试数据
    return sortedData[sortedData.length - 1];
}

// 绘制雷达图
function drawRadarChart() {
    // 获取最近一次考试数据
    let latestExam = getLatestExamData();
    
    // 如果没有获取到数据，使用备选数据中的最新数据
    if (!latestExam) {
        // 按时间排序备选数据，最近的考试在最后
        const sortedBackupData = [...backupExamData].sort((a, b) => new Date(a.date) - new Date(b.date));
        latestExam = sortedBackupData[sortedBackupData.length - 1];
    }
    
    // 确保有数据
    if (!latestExam) {
        console.error('没有可用的考试数据来绘制雷达图');
        return;
    }
    
    // 从最近一次考试数据中提取各科成绩
    const subjects = [
        { name: '语文', score: latestExam.scores.chinese || 0 },
        { name: '数学', score: latestExam.scores.math || 0 },
        { name: '英语', score: latestExam.scores.english || 0 },
        { name: '物理', score: latestExam.scores.physics || 0 },
        { name: '化学', score: latestExam.scores.chemistry || 0 },
        { name: '生物', score: latestExam.scores.biology || 0 }
    ];
    
    // 语数英满分150，其他科目满分100，需要转换为百分比
    const convertScore = (score, is150Full) => {
        return is150Full ? (score / 150) * 100 : score;
    };
    
    // 准备雷达图数据
    const radarData = {
        labels: subjects.map(subject => subject.name),
        datasets: [{
            label: latestExam.exam,
            data: subjects.map(subject => {
                // 语文、数学、英语满分150，其他满分100
                const is150Full = ['语文', '数学', '英语'].includes(subject.name);
                return convertScore(subject.score, is150Full);
            }),
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
    const radarOptions = {
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
                        const value = context.parsed.r;
                        // 将百分比转换回原始分数
                        const is150Full = ['语文', '数学', '英语'].includes(subject);
                        const rawScore = is150Full ? Math.round((value / 100) * 150) : Math.round(value);
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
    
    // 获取Canvas元素并绘制雷达图
    const ctx = document.getElementById('hexagonChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: radarData,
        options: radarOptions
    });
    
    // 显示成绩升降分析
    displayProgressAnalysis();
}

// 计算成绩进步情况
function calculateProgress() {
    // 首先尝试使用动态获取的数据
    if (examData.length >= 2) {
        // 按时间排序动态获取的数据
        const sortedExamData = [...examData].sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // 获取最近两次考试数据
        const latestIndex = sortedExamData.length - 1;
        const previousIndex = latestIndex - 1;
        
        const latestExam = sortedExamData[latestIndex];
        const previousExam = sortedExamData[previousIndex];
        
        // 计算总分进步
        const totalProgress = (latestExam.scores.total || 0) - (previousExam.scores.total || 0);
        
        // 计算各科进步
        const subjects = [
            {
                name: '语文', 
                current: latestExam.scores.chinese || 0,
                previous: previousExam.scores.chinese || 0,
                progress: (latestExam.scores.chinese || 0) - (previousExam.scores.chinese || 0)
            },
            {
                name: '数学', 
                current: latestExam.scores.math || 0,
                previous: previousExam.scores.math || 0,
                progress: (latestExam.scores.math || 0) - (previousExam.scores.math || 0)
            },
            {
                name: '英语', 
                current: latestExam.scores.english || 0,
                previous: previousExam.scores.english || 0,
                progress: (latestExam.scores.english || 0) - (previousExam.scores.english || 0)
            },
            {
                name: '物理', 
                current: latestExam.scores.physics || 0,
                previous: previousExam.scores.physics || 0,
                progress: (latestExam.scores.physics || 0) - (previousExam.scores.physics || 0)
            },
            {
                name: '化学', 
                current: latestExam.scores.chemistry || 0,
                previous: previousExam.scores.chemistry || 0,
                progress: (latestExam.scores.chemistry || 0) - (previousExam.scores.chemistry || 0)
            },
            {
                name: '生物', 
                current: latestExam.scores.biology || 0,
                previous: previousExam.scores.biology || 0,
                progress: (latestExam.scores.biology || 0) - (previousExam.scores.biology || 0)
            }
        ];
        
        return {
            currentTotal: latestExam.scores.total || 0,
            previousTotal: previousExam.scores.total || 0,
            totalProgress: totalProgress,
            subjects: subjects
        };
    } 
    // 如果动态获取的数据不足，尝试使用备选数据
    else if (backupExamData.length >= 2) {
        // 按时间排序备选数据
        const sortedBackupData = [...backupExamData].sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // 获取最近两次考试数据
        const latestIndex = sortedBackupData.length - 1;
        const previousIndex = latestIndex - 1;
        
        const latestExam = sortedBackupData[latestIndex];
        const previousExam = sortedBackupData[previousIndex];
        
        // 计算总分进步
        const totalProgress = (latestExam.scores.total || 0) - (previousExam.scores.total || 0);
        
        // 计算各科进步
        const subjects = [
            {
                name: '语文', 
                current: latestExam.scores.chinese || 0,
                previous: previousExam.scores.chinese || 0,
                progress: (latestExam.scores.chinese || 0) - (previousExam.scores.chinese || 0)
            },
            {
                name: '数学', 
                current: latestExam.scores.math || 0,
                previous: previousExam.scores.math || 0,
                progress: (latestExam.scores.math || 0) - (previousExam.scores.math || 0)
            },
            {
                name: '英语', 
                current: latestExam.scores.english || 0,
                previous: previousExam.scores.english || 0,
                progress: (latestExam.scores.english || 0) - (previousExam.scores.english || 0)
            },
            {
                name: '物理', 
                current: latestExam.scores.physics || 0,
                previous: previousExam.scores.physics || 0,
                progress: (latestExam.scores.physics || 0) - (previousExam.scores.physics || 0)
            },
            {
                name: '化学', 
                current: latestExam.scores.chemistry || 0,
                previous: previousExam.scores.chemistry || 0,
                progress: (latestExam.scores.chemistry || 0) - (previousExam.scores.chemistry || 0)
            },
            {
                name: '生物', 
                current: latestExam.scores.biology || 0,
                previous: previousExam.scores.biology || 0,
                progress: (latestExam.scores.biology || 0) - (previousExam.scores.biology || 0)
            }
        ];
        
        return {
            currentTotal: latestExam.scores.total || 0,
            previousTotal: previousExam.scores.total || 0,
            totalProgress: totalProgress,
            subjects: subjects
        };
    } 
    // 如果都没有足够的数据
    else {
        return {
            currentTotal: 0,
            previousTotal: 0,
            totalProgress: 0,
            subjects: []
        };
    }
}

// 显示成绩升降分析
function displayProgressAnalysis() {
    // 计算进步情况
    const progressData = calculateProgress();
    
    // 获取容器
    const container = document.getElementById('progress-details');
    
    // 如果没有数据，显示提示
    if (progressData.subjects.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #8B949E;">数据不足，无法分析成绩变化</p>';
        return;
    }
    
    // 生成HTML
    let html = '<div style="display: flex; flex-wrap: wrap; gap: 20px;">';
    
    // 总分卡片
    const totalProgressClass = progressData.totalProgress > 0 ? 'progress-up' : 'progress-down';
    const totalArrow = progressData.totalProgress > 0 ? '↑' : '↓';
    html += `
        <div style="flex: 1 1 250px; background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: 10px; border: 1px solid rgba(0, 255, 255, 0.2);">
            <h3 style="color: #00ffff; margin-bottom: 20px;">总分</h3>
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <div style="display: flex; align-items: baseline;">
                    <div style="font-size: 36px; font-weight: bold; color: #ffffff;">
                        ${progressData.currentTotal}
                    </div>
                    <div style="margin-left: 8px; font-size: 18px; color: rgba(255, 255, 255, 0.6);">
                        上次：${progressData.previousTotal}
                    </div>
                </div>
                <div style="font-size: 24px; font-weight: bold; color: #${totalProgressClass === 'progress-up' ? '00ff00' : 'ff0000'};">
                    ${totalArrow} ${Math.abs(progressData.totalProgress)}
                </div>
            </div>
        </div>
    `;
    
    // 科目卡片
    html += `
        <div style="flex: 2 1 400px; background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: 10px; border: 1px solid rgba(0, 255, 255, 0.2);">
            <h3 style="color: #00ffff; margin-bottom: 20px;">科目情况</h3>
            <div style="display: flex; flex-direction: column; gap: 15px;">
    `;
    
    progressData.subjects.forEach(subject => {
        const progressClass = subject.progress > 0 ? 'progress-up' : 'progress-down';
        const arrow = subject.progress > 0 ? '↑' : '↓';
        html += `
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <div style="display: flex; align-items: baseline;">
                    <div style="color: #ffffff; font-weight: bold; min-width: 60px; margin-right: 10px;">${subject.name}</div>
                    <div style="font-size: 20px; font-weight: bold; color: #ffffff; margin-right: 8px;">
                        ${subject.current}
                    </div>
                    <div style="font-size: 14px; color: rgba(255, 255, 255, 0.6); min-width: 100px;">
                        上次：${subject.previous}
                    </div>
                    
                </div>
                <div style="display: flex; align-items: baseline; justify-content: flex-start; min-width: 120px;margin-left: 5px;">
                    <div style="font-size: 18px; font-weight: bold; color: #${progressClass === 'progress-up' ? '00ff00' : 'ff0000'};">
                        ${arrow} ${Math.abs(subject.progress)}
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    html += '</div>';
    
    // 添加CSS样式
    html += `
        <style>
            .progress-up {
                color: #00ff00;
            }
            .progress-down {
                color: #ff0000;
            }
        </style>
    `;
    
    // 设置HTML
    container.innerHTML = html;
}