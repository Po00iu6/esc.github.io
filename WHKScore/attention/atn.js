// 获取时间和日期显示元素
const timeDisplay = document.getElementById('timeDisplay');
const dateDisplay = document.getElementById('dateDisplay');

// 获取计时功能元素
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const startSoundSelect = document.getElementById('startSound');
const endSoundSelect = document.getElementById('endSound');
const startTimerBtn = document.getElementById('startTimer');
const stopTimerBtn = document.getElementById('stopTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const timerStatus = document.getElementById('timerStatus');
const toggleTimerBtn = document.getElementById('toggleTimer');
const timerContent = document.getElementById('timerContent');

// 计时相关变量
let timerInterval = null;
let isTimerRunning = false;
let isTimerCollapsed = false;

// 音频文件路径
const audioFolder = 'classmusic/';

// 音频文件列表（假设存在的音频文件）
// 实际使用时会动态读取文件夹中的音频文件
const audioFiles = [
    'bell.mp3',
    'chime.mp3',
    'ding.mp3',
    'notification.mp3',
    'alert.mp3'
];

/**
 * 初始化音频选项
 */
function initAudioOptions() {
    // 清空现有选项
    startSoundSelect.innerHTML = '<option value="">请选择开始音</option>';
    endSoundSelect.innerHTML = '<option value="">请选择结束音</option>';
    
    // 添加音频选项
    audioFiles.forEach(file => {
        const option1 = document.createElement('option');
        option1.value = audioFolder + file;
        option1.textContent = file;
        startSoundSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = audioFolder + file;
        option2.textContent = file;
        endSoundSelect.appendChild(option2);
    });
}

/**
 * 切换计时器折叠状态
 */
function toggleTimer() {
    isTimerCollapsed = !isTimerCollapsed;
    
    // 更新UI
    if (isTimerCollapsed) {
        timerContent.classList.add('collapsed');
        toggleTimerBtn.classList.add('active');
    } else {
        timerContent.classList.remove('collapsed');
        toggleTimerBtn.classList.remove('active');
    }
}

/**
 * 播放音频
 * @param {string} audioUrl - 音频文件路径
 */
function playAudio(audioUrl) {
    if (!audioUrl) return;
    
    try {
        const audio = new Audio(audioUrl);
        audio.play().catch(error => {
            console.error('音频播放失败:', error);
        });
    } catch (error) {
        console.error('音频加载失败:', error);
    }
}

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
    
    // 检查计时状态
    checkTimerStatus();
}

/**
 * 检查计时状态
 */
function checkTimerStatus() {
    if (!isTimerRunning) return;
    
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    
    // 检查开始时间
    if (currentTime === startTime) {
        timerStatus.textContent = '计时开始！';
        timerStatus.style.color = '#238636';
        playAudio(startSoundSelect.value);
    }
    
    // 检查结束时间
    if (currentTime === endTime) {
        timerStatus.textContent = '计时结束！';
        timerStatus.style.color = '#da3633';
        playAudio(endSoundSelect.value);
        stopTimer();
    }
}

/**
 * 开始计时
 */
function startTimer() {
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    
    // 验证时间设置
    if (!startTime || !endTime) {
        timerStatus.textContent = '请设置开始时间和结束时间';
        timerStatus.style.color = '#da3633';
        return;
    }
    
    // 开始计时
    isTimerRunning = true;
    timerInterval = setInterval(checkTimerStatus, 1000);
    
    timerStatus.textContent = '计时已启动';
    timerStatus.style.color = '#238636';
    
    // 禁用开始按钮，启用停止按钮
    startTimerBtn.disabled = true;
    stopTimerBtn.disabled = false;
    startTimeInput.disabled = true;
    endTimeInput.disabled = true;
}

/**
 * 停止计时
 */
function stopTimer() {
    isTimerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    timerStatus.textContent = '计时已停止';
    timerStatus.style.color = '#6e7681';
    
    // 启用开始按钮，禁用停止按钮
    startTimerBtn.disabled = false;
    stopTimerBtn.disabled = true;
    startTimeInput.disabled = false;
    endTimeInput.disabled = false;
}

/**
 * 重置计时
 */
function resetTimer() {
    stopTimer();
    
    // 清空输入
    startTimeInput.value = '';
    endTimeInput.value = '';
    startSoundSelect.value = '';
    endSoundSelect.value = '';
    
    timerStatus.textContent = '就绪';
    timerStatus.style.color = '#58a6ff';
}

/**
 * 初始化事件监听器
 */
function initEventListeners() {
    startTimerBtn.addEventListener('click', startTimer);
    stopTimerBtn.addEventListener('click', stopTimer);
    resetTimerBtn.addEventListener('click', resetTimer);
    toggleTimerBtn.addEventListener('click', toggleTimer);
}

// 页面加载时执行
window.addEventListener('DOMContentLoaded', () => {
    initAudioOptions();
    initEventListeners();
    updateTime();
    toggleTimer();
    
    // 初始化状态
    stopTimerBtn.disabled = true;
});

// 每秒更新一次时间
setInterval(updateTime, 1000);