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