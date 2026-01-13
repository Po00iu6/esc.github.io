// Grades.js - 自动获取考试成绩并绘制曲线

// 目标网址
const TARGET_URL = 'http://cjcx.sqshmzx.net/g3/';

// 身份证号
const ID_CARD = '411402200807100124';

// 存储成绩数据
let examData = [];

// 页面加载完成后执行
window.addEventListener('load', function() {
    // 获取所有考试成绩
    getAllExamScores();
});

// 获取所有考试成绩
async function getAllExamScores() {
    try {
        // 首先获取页面，提取所有考试选项
        const pageResponse = await fetch(TARGET_URL);
        const pageHtml = await pageResponse.text();
        
        // 解析考试选项
        const examOptions = parseExamOptions(pageHtml);
        console.log('找到的考试:', examOptions);
        
        // 逐个获取每个考试的成绩
        for (const exam of examOptions) {
            console.log(`正在获取考试: ${exam.text}`);
            const scoreData = await getExamScore(exam.value);
            if (scoreData) {
                examData.push(scoreData);
            }
        }
        
        // 按时间排序（最近的考试在前）
        examData.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        console.log('所有考试成绩:', examData);
        
        // 绘制成绩曲线
        if (examData.length > 0) {
            drawScoreChart();
        } else {
            document.getElementById('status').textContent = '未找到成绩数据';
        }
        
    } catch (error) {
        console.error('获取成绩时出错:', error);
        document.getElementById('status').textContent = '获取成绩失败，请检查网络连接';
    }
}

// 解析考试选项
function parseExamOptions(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const selectElement = doc.getElementById('time');
    
    if (!selectElement) {
        console.error('未找到考试选项');
        return [];
    }
    
    const options = [];
    for (const option of selectElement.options) {
        options.push({
            value: option.value,
            text: option.text
        });
    }
    
    return options;
}

// 获取单个考试成绩
async function getExamScore(examValue) {
    try {
        // 构建表单数据
        const formData = new FormData();
        formData.append('time', examValue);
        formData.append('name', ID_CARD);
        formData.append('button', '立即查询');
        
        // 提交表单
        const response = await fetch(TARGET_URL, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });
        
        const html = await response.text();
        
        // 解析成绩
        const scoreData = parseScoreData(html, examValue);
        return scoreData;
        
    } catch (error) {
        console.error(`获取考试 ${examValue} 成绩时出错:`, error);
        return null;
    }
}

// 解析成绩数据
function parseScoreData(html, examValue) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // 查找成绩表格
    const table = doc.querySelector('table');
    if (!table) {
        console.error('未找到成绩表格');
        return null;
    }
    
    // 解析考试名称和日期
    const examText = examValue;
    let examDate = '';
    
    // 提取日期信息（例如：2025年12月份月考）
    const dateMatch = examText.match(/(\d{4})年(\d{1,2})月份?/);
    if (dateMatch) {
        const year = dateMatch[1];
        const month = String(dateMatch[2]).padStart(2, '0');
        examDate = `${year}-${month}-01`; // 使用当月第一天作为日期
    }
    
    // 解析成绩
    const data = {
        exam: examText,
        date: examDate,
        scores: {}
    };
    
    // 遍历表格行
    const rows = doc.querySelectorAll('table tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 2) {
            const label = cells[0].textContent.trim();
            const value = cells[1].textContent.trim();
            
            // 提取关键数据
            if (label.includes('总分')) {
                data.scores.total = parseInt(value) || 0;
            } else if (label === '语文') {
                data.scores.chinese = parseInt(value) || 0;
            } else if (label === '数学') {
                data.scores.math = parseInt(value) || 0;
            } else if (label === '英语') {
                data.scores.english = parseInt(value) || 0;
            } else if (label === '物理') {
                data.scores.physics = parseInt(value) || 0;
            } else if (label.includes('化学')) {
                data.scores.chemistry = parseInt(value) || 0;
            } else if (label.includes('生政地') || label.includes('生物')) {
                data.scores.biology = parseInt(value) || 0;
            }
        }
    });
    
    return data;
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
                    borderColor: 'rgb(0, 153, 255)',
                    backgroundColor: 'rgba(0, 153, 255, 0.1)',
                    borderWidth: 2,
                    tension: 0.1
                },
                {
                    label: '语文',
                    data: chineseScores,
                    borderColor: 'rgba(114, 0, 0, 0.4)',
                    backgroundColor: 'rgba(114, 0, 0, 0.1)',
                    borderWidth: 2,
                    tension: 0.1
                },
                {
                    label: '数学',
                    data: mathScores,
                    borderColor: 'rgba(0, 106, 255, 0.4)',
                    backgroundColor: 'rgba(0, 106, 255, 0.1)',
                    borderWidth: 2,
                    tension: 0.1
                },
                {
                    label: '英语',
                    data: englishScores,
                    borderColor: 'rgba(216, 20, 255, 0.4)',
                    backgroundColor: 'rgba(216, 20, 255, 0.1)',
                    borderWidth: 2,
                    tension: 0.1
                },
                {
                    label: '物理',
                    data: physicsScores,
                    borderColor: 'rgba(14, 255, 30, 0.4)',
                    backgroundColor: 'rgba(14, 255, 30, 0.1)',
                    borderWidth: 2,
                    tension: 0.1
                },
                {
                    label: '化学',
                    data: chemistryScores,
                    borderColor: 'rgba(32, 0, 192, 0.4)',
                    backgroundColor: 'rgba(32, 0, 192, 0.1)',
                    borderWidth: 2,
                    tension: 0.1
                },
                {
                    label: '生物',
                    data: biologyScores,
                    borderColor: 'rgba(119, 177, 1, 0.4)',
                    backgroundColor: 'rgba(119, 177, 1, 0.1)',
                    borderWidth: 2,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 0,
                    suggestedMax: 750
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: '考试成绩趋势图'
                }
            }
        }
    });
    
    // 更新状态
    document.getElementById('status').textContent = `成功获取 ${examData.length} 次考试成绩`;
}
