// 获取时间和日期显示元素
const timeDisplay = document.getElementById('timeDisplay');
const dateDisplay = document.getElementById('dateDisplay');

/**
 * 更新时间和日期显示
 */
function updateTime() {
    const now = new Date();
    
    // 获取年、月、日
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    // 获取时、分、秒
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // 格式化日期字符串（YYYY-MM-DD）
    const dateString = `${year}-${month}-${day}`;
    
    // 格式化时间字符串（HH:MM:SS）
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // 更新DOM
    dateDisplay.textContent = dateString;
    timeDisplay.textContent = timeString;
}

// 页面加载时立即更新一次时间
updateTime();

// 每秒更新一次时间
setInterval(updateTime, 1000);

// ==================== 倒计时功能 ====================

// 获取倒计时相关元素
const timerDisplay = document.getElementById('timerDisplay');
const timerContainer = document.getElementById('timerContainer');
const timerStatus = document.getElementById('timerStatus');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const modalOverlay = document.getElementById('modalOverlay');
const recordInput = document.getElementById('recordInput');
const confirmBtn = document.getElementById('confirmBtn');
const recordList = document.getElementById('recordList');

// 默认倒计时时间（120分钟）
const DEFAULT_TIME = 120 * 60; // 秒

// 倒计时状态
let timeLeft = DEFAULT_TIME;
let timerInterval = null;
let isRunning = false;

/**
 * 格式化时间显示
 * @param {number} seconds - 剩余秒数
 * @returns {string} 格式化后的时间字符串
 */
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * 更新倒计时显示
 */
function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

/**
 * 更新状态显示
 * @param {string} status - 状态类型
 */
function updateStatus(status) {
    timerStatus.textContent = {
        ready: '准备开始',
        running: '专注中...',
        paused: '已暂停',
        finished: '计时结束'
    }[status];
    
    // 更新状态样式
    timerStatus.className = `timer-status ${status}`;
}

/**
 * 开始倒计时
 */
function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    updateStatus('running');
    
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            stopTimer();
            finishTimer();
        }
    }, 1000);
}

/**
 * 暂停倒计时
 */
function pauseTimer() {
    if (!isRunning) return;
    
    isRunning = false;
    updateStatus('paused');
    
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

/**
 * 停止倒计时（用于内部调用）
 */
function stopTimer() {
    isRunning = false;
    
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

/**
 * 重置倒计时
 */
function resetTimer() {
    stopTimer();
    timeLeft = DEFAULT_TIME;
    updateTimerDisplay();
    updateStatus('ready');
    
    // 停止闪烁效果
    timerContainer.classList.remove('flashing');
}

/**
 * 倒计时结束处理
 */
function finishTimer() {
    updateStatus('finished');
    
    // 添加闪烁效果
    timerContainer.classList.add('flashing');
    
    // 显示弹窗
    modalOverlay.style.display = 'flex';
}

/**
 * 保存记录到localStorage
 * @param {string} description - 记录描述
 */
function saveRecord(description) {
    // 获取现有记录
    const records = getRecords();
    
    // 创建新记录
    const newRecord = {
        id: Date.now(),
        time: '120分钟',
        description: description || '无描述',
        date: new Date().toLocaleString('zh-CN')
    };
    
    // 添加到记录列表
    records.unshift(newRecord);
    
    // 保存到localStorage
    localStorage.setItem('timerRecords', JSON.stringify(records));
    
    // 更新记录列表显示
    renderRecords();
}

/**
 * 从localStorage获取记录
 * @returns {Array} 记录数组
 */
function getRecords() {
    const stored = localStorage.getItem('timerRecords');
    return stored ? JSON.parse(stored) : [];
}

/**
 * 渲染记录列表
 */
function renderRecords() {
    const records = getRecords();
    
    if (records.length === 0) {
        recordList.innerHTML = '<li style="text-align: center; opacity: 0.6;">暂无记录</li>';
        return;
    }
    
    recordList.innerHTML = records.map(record => `
        <li>
            <div class="record-info">
                <span class="record-time">${record.time}</span>
                <span class="record-description">${record.description}</span>
            </div>
            <span class="record-date">${record.date}</span>
        </li>
    `).join('');
}

/**
 * 确认按钮点击处理
 */
function handleConfirm() {
    const description = recordInput.value.trim();
    saveRecord(description);
    
    // 关闭弹窗
    modalOverlay.style.display = 'none';
    recordInput.value = '';
    
    // 停止闪烁效果，恢复原色
    timerContainer.classList.remove('flashing');
}

// 绑定事件监听
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
confirmBtn.addEventListener('click', handleConfirm);

// 点击弹窗外部关闭（可选）
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        // 点击外部不关闭，必须点击确定按钮
    }
});

// 页面加载时渲染记录列表
document.addEventListener('DOMContentLoaded', renderRecords);