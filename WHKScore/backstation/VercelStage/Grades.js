// Grades.js - 自动获取考试成绩并绘制曲线

// 目标网址
const TARGET_URL = 'http://cjcx.sqshmzx.net/g3/?t=back';

// 只使用最可靠的CORS代理服务
const CORS_PROXIES = [
    'https://corsproxy.io/?' + encodeURIComponent(TARGET_URL)
];

// 当前使用的代理索引
let currentProxyIndex = 0;

// 身份证号
const ID_CARD = '411402200807100124';

// 存储成绩数据
let examData = [];

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

// 页面加载完成后执行
window.addEventListener('load', function() {
    // 获取所有考试成绩
    getAllExamScores();
});

// 重试函数 - 当请求失败时重试指定次数，支持多个代理服务
async function fetchWithRetry(url, options, maxRetries = 3, delay = 1000) {
    // 首先尝试直接请求（不使用代理）
    try {
        console.log('尝试直接请求，不使用代理...');
        const response = await fetch(url, options);
        if (response.ok) {
            return response;
        }
        console.log('直接请求失败，状态码:', response.status);
    } catch (error) {
        console.log('直接请求出错:', error.message);
    }
    
    // 如果直接请求失败，尝试使用多个代理服务
    for (let proxyIndex = 0; proxyIndex < CORS_PROXIES.length; proxyIndex++) {
        let retries = 0;
        const proxy = CORS_PROXIES[proxyIndex];
        
        // 构建使用当前代理的URL
        let proxiedUrl;
        if (proxy.includes('corsproxy.io')) {
            // corsproxy.io 已经包含了完整的目标URL
            proxiedUrl = proxy;
        } else {
            // 其他代理需要拼接目标URL
            proxiedUrl = proxy + encodeURIComponent(url);
        }
        
        console.log(`尝试使用代理 ${proxyIndex + 1}/${CORS_PROXIES.length}: ${proxy}`);
        
        while (retries < maxRetries) {
            try {
                const response = await fetch(proxiedUrl, options);
                if (!response.ok) {
                    throw new Error(`HTTP错误! 状态: ${response.status}`);
                }
                console.log(`代理 ${proxyIndex + 1} 请求成功!`);
                return response;
            } catch (error) {
                retries++;
                if (retries >= maxRetries) {
                    console.log(`代理 ${proxyIndex + 1} 重试次数用尽，切换到下一个代理...`);
                    break;
                }
                console.log(`代理 ${proxyIndex + 1} 请求失败，正在重试 (${retries}/${maxRetries})...`);
                // 等待一段时间后重试
                await new Promise(resolve => setTimeout(resolve, delay * retries)); // 指数退避
            }
        }
    }
    
    // 所有代理都尝试失败
    throw new Error('所有代理服务都请求失败');
}

// 获取所有考试成绩
async function getAllExamScores() {
    try {
        document.getElementById('status').textContent = '正在尝试连接到成绩查询系统...';
        
        // 首先获取页面，提取所有考试选项
        console.log('正在获取目标页面:', TARGET_URL);
        
        let pageHtml;
        try {
            // 直接将目标URL传递给fetchWithRetry，它会自动处理代理
            const pageResponse = await fetchWithRetry(TARGET_URL, {
                method: 'GET',
                headers: {
                    'Accept': 'text/html',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Origin': window.location.origin
                },
                cache: 'no-cache',
                mode: 'cors',
                credentials: 'omit'
            });
            
            console.log('页面响应状态:', pageResponse.status);
            console.log('页面响应头:', Object.fromEntries(pageResponse.headers.entries()));
            
            pageHtml = await pageResponse.text();
            console.log('页面内容长度:', pageHtml.length);
            console.log('页面内容预览:', pageHtml.substring(0, 200) + '...');
            
        } catch (error) {
            console.error('获取页面时详细错误:', error);
            console.error('错误类型:', error.name);
            console.error('错误消息:', error.message);
            console.error('错误堆栈:', error.stack);
            throw error;
        }
        
        // 解析考试选项
        const examOptions = parseExamOptions(pageHtml);
        console.log('找到的考试:', examOptions);
        
        if (examOptions.length === 0) {
            throw new Error('未找到考试选项');
        }
        
        document.getElementById('status').textContent = `找到 ${examOptions.length} 个考试，正在获取成绩...`;
        
        // 逐个获取每个考试的成绩
        for (const exam of examOptions) {
            console.log(`正在获取考试: ${exam.text}`);
            const scoreData = await getExamScore(exam.value);
            if (scoreData) {
                examData.push(scoreData);
            }
        }
        
        // 按时间排序（最近的考试在后，这样最新成绩会在时间轴右边）
        examData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        console.log('所有考试成绩:', examData);
        
        // 绘制成绩曲线
        if (examData.length > 0) {
            drawScoreChart();
            document.getElementById('status').textContent = `成功获取 ${examData.length} 次考试成绩`;
            
            // 保存到 localStorage，下次刷新时可以直接使用
            localStorage.setItem('examDataCache', JSON.stringify(examData));
            localStorage.setItem('examDataCacheTime', Date.now());
        } else {
            throw new Error('未找到成绩数据');
        }
        
    } catch (error) {
        console.error('获取成绩时出错:', error);
        document.getElementById('status').textContent = `获取成绩失败: ${error.message}，正在尝试使用缓存或备选数据...`;
        
        // 尝试使用缓存数据
        const cachedData = localStorage.getItem('examDataCache');
        const cacheTime = localStorage.getItem('examDataCacheTime');
        const oneHour = 60 * 60 * 1000;
        
        if (cachedData && cacheTime && (Date.now() - cacheTime < oneHour)) {
            // 使用最近1小时内的缓存数据
            console.log('使用缓存数据');
            examData = JSON.parse(cachedData);
            drawScoreChart();
            document.getElementById('status').textContent = '使用缓存数据成功绘制成绩曲线';
        } else {
            // 使用备选数据
            console.log('使用备选数据');
            examData = [...backupExamData];
            // 按时间排序
            examData.sort((a, b) => new Date(a.date) - new Date(b.date));
            // 绘制成绩曲线
            drawScoreChart();
            document.getElementById('status').textContent = '使用备选数据成功绘制成绩曲线';
        }
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
        if (option.value) { // 确保value不为空
            options.push({
                value: option.value,
                text: option.text
            });
        }
    }
    
    return options;
}

// 获取单个考试成绩
async function getExamScore(examValue) {
    try {
        console.log(`正在提交表单获取考试成绩: ${examValue}`);
        
        // 构建表单数据
        const formData = new URLSearchParams();
        formData.append('time', examValue);
        formData.append('name', ID_CARD);
        formData.append('button', '立即查询');
        
        // 直接使用目标URL，fetchWithRetry会自动处理代理
        console.log('提交表单到:', TARGET_URL);
        
        // 提交表单，使用重试机制
        const response = await fetchWithRetry(TARGET_URL, {
            method: 'POST',
            body: formData.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'text/html',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Origin': window.location.origin
            },
            cache: 'no-cache',
            mode: 'cors',
            credentials: 'omit'
        });
        
        console.log('表单提交响应状态:', response.status);
        
        const html = await response.text();
        console.log('响应内容长度:', html.length);
        
        // 解析成绩
        const scoreData = parseScoreData(html, examValue);
        console.log('解析到的成绩数据:', scoreData);
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
    } else {
        // 如果没有匹配到日期，使用当前日期
        const now = new Date();
        examDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
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
                    fill: true,
                    backgroundColor: 'rgba(246, 255, 0, 0.02)',
                    borderColor: '#21c0faff',
                    borderWidth: 3,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(totalScores)
                },
                {
                    label: '语文',
                    data: chineseScores,
                    fill: true,
                    backgroundColor: 'rgba(246, 255, 0, 0.02)',
                    borderColor: 'rgba(114, 0, 0, 0.8)',
                    borderWidth: 3,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(chineseScores)
                },
                {
                    label: '数学',
                    data: mathScores,
                    fill: true,
                    backgroundColor: 'rgba(246, 255, 0, 0.02)',
                    borderColor: 'rgba(0, 106, 255, 0.8)',
                    borderWidth: 3,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(mathScores)
                },
                {
                    label: '英语',
                    data: englishScores,
                    fill: true,
                    backgroundColor: 'rgba(246, 255, 0, 0.02)',
                    borderColor: 'rgba(216, 20, 255, 0.8)',
                    borderWidth: 3,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(englishScores)
                },
                {
                    label: '物理',
                    data: physicsScores,
                    fill: true,
                    backgroundColor: 'rgba(246, 255, 0, 0.02)',
                    borderColor: 'rgba(14, 255, 30, 0.8)',
                    borderWidth: 3,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(physicsScores)
                },
                {
                    label: '化学',
                    data: chemistryScores,
                    fill: true,
                    backgroundColor: 'rgba(246, 255, 0, 0.02)',
                    borderColor: 'rgba(32, 0, 192, 0.8)',
                    borderWidth: 3,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(chemistryScores)
                },
                {
                    label: '生物',
                    data: biologyScores,
                    fill: true,
                    backgroundColor: 'rgba(246, 255, 0, 0.02)',
                    borderColor: 'rgba(119, 177, 1, 0.8)',
                    borderWidth: 3,
                    pointHoverRadius: 5,
                    tension: 0.1,
                    ...getPointStyles(biologyScores)
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            interaction: {
                mode: 'nearest',
                intersect: true
            },
            plugins: {
                legend: {
                    position: 'top',
                    onClick: function(e, legendItem, legend) {
                        // 切换数据集的可见性
                        const index = legendItem.datasetIndex;
                        const ci = legend.chart;
                        ci.setDatasetVisibility(index, !ci.isDatasetVisible(index));
                        // 更新图表，触发坐标重新计算
                        ci.update();
                    }
                },
                title: {
                    display: true,
                    text: '考试成绩趋势图'
                },
                tooltip: {
                    enabled: true,
                    mode: 'nearest',
                    intersect: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#00ffff',
                    bodyColor: '#ffffff',
                    borderColor: '#00ffff',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        title: function(tooltipItems) {
                            return tooltipItems[0].label;
                        },
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y;
                        }
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
}
