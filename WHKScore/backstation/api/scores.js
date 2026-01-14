const axios = require('axios');

module.exports = async (req, res) => {
  try {
    // 设置CORS头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 处理OPTIONS请求
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    // 目标网址
    const TARGET_URL = 'http://cjcx.sqshmzx.net/g3/';
    const ID_CARD = '411402200807100124';

    // 首先获取页面，提取所有考试选项
    const pageResponse = await axios.get(TARGET_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 10000
    });

    const pageHtml = pageResponse.data;
    const examOptions = parseExamOptions(pageHtml);

    if (examOptions.length === 0) {
      return res.status(404).json({ error: '未找到考试选项' });
    }

    // 逐个获取每个考试的成绩
    const examData = [];
    for (const exam of examOptions) {
      const scoreData = await getExamScore(exam.value, TARGET_URL, ID_CARD);
      if (scoreData) {
        examData.push(scoreData);
      }
    }

    // 按时间排序（最近的考试在前）
    examData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return res.status(200).json({ success: true, data: examData });

  } catch (error) {
    console.error('获取成绩时出错:', error);
    return res.status(500).json({ 
      error: '获取成绩失败',
      message: error.message,
      // 使用静态数据作为备选方案
      staticData: [
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
            total: 520,
            chinese: 95,
            math: 100,
            english: 80,
            physics: 75,
            chemistry: 85,
            biology: 85
          }
        },
        {
          exam: '2025年10月考试--高三',
          date: '2025-10-01',
          scores: {
            total: 490,
            chinese: 90,
            math: 95,
            english: 75,
            physics: 70,
            chemistry: 80,
            biology: 80
          }
        }
      ]
    });
  }
};

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
async function getExamScore(examValue, targetUrl, idCard) {
  try {
    const response = await axios.post(targetUrl, {
      time: examValue,
      name: idCard,
      button: '立即查询'
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 10000,
      transformRequest: [(data) => {
        return Object.entries(data)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&');
      }]
    });

    const html = response.data;
    return parseScoreData(html, examValue);

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

// 模拟DOMParser（因为Vercel Serverless Functions中没有浏览器DOM）
class DOMParser {
  parseFromString(html, mimeType) {
    const jsdom = require('jsdom');
    const { JSDOM } = jsdom;
    const dom = new JSDOM(html);
    return dom.window.document;
  }
}
