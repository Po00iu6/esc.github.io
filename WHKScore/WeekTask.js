// 每周任务数据
// 格式：weekTasks[周数] = { startDate: 开始日期, endDate: 结束日期, tasks: [任务列表] }
// 任务列表格式：{ title: 任务名称, completed: 是否完成 }

const weekTasks = {
    "1": {
        "startDate": "2026-01-19",
        "endDate": "2026-01-25",
        "tasks": [
            { "title": "学完教材帮选必二", "completed": true },
            { "title": "数学领航计划大小本写完<p style='color:red;'>（超时完成2026-01-26）</p>", "completed": true },
            { "title": "一化必刷100讲写到化学工艺流程", "completed": true },
            { "title": "做3张生物卷子<p style='color:red;'>（超时完成2026-01-27）</p>", "completed": true }
        ]
    },
    "2": {
        "startDate": "2026-01-26",
        "endDate": "2026-02-01",
        "tasks": [
            { "title": "写两遍小本后面的专题", "completed": false },
            { "title": "一化必刷100讲将有机化学迅速学完", "completed": false },
            { "title": "做3张生物卷子", "completed": false }
        ]
    },
    "3": {
        "startDate": "2026-02-02",
        "endDate": "2026-02-08",
        "tasks": [
            { "title": "背百词斩，一天1000个", "completed": false }
        ]
    },
    "4": {
        "startDate": "2026-02-09",
        "endDate": "2026-02-15",
        "tasks": [
            { "title": "<s>早上6点起床去跑步，跑三圈回来</s><p>早上6点仰卧起坐20个</p>", "completed": false },
            { "title": "刷《必刷题高考物理合订本》，一直刷到中午吃饭", "completed": false },
            { "title": "吃完饭刷百词斩，1000个", "completed": false },
            { "title": "之后刷生物遗传学《上分专项》，刷到晚上吃饭", "completed": false },
            { "title": "吃完饭继续刷《必刷题高考物理合订本》，一直刷到21:00上床睡觉", "completed": false },
            { "title": "<p>寒假保持每天都要这样，过年期间可稍作调整，但<p style='color:red;display:inline;'>物理必刷题</p>和<p style='color:red;display:inline;'>百词斩</p>每天必须完成！</p>", "completed": false }
        ]
    },
    "5": {
        "startDate": "2026-02-16",
        "endDate": "2026-02-22",
        "tasks": [
            { "title": "同 第 4 周 的任务", "completed": false }
        ]
    },
    "6": {
        "startDate": "2026-02-23",
        "endDate": "2026-02-29",
        "tasks": [
            { "title": "同 第 4 周 的任务", "completed": false }
        ]
    },
    "7": {
        "startDate": "2026-03-01",
        "endDate": "2026-03-07",
        "tasks": [
        ]
    },
    "8": {
        "startDate": "2026-03-08",
        "endDate": "2026-03-14",
        "tasks": [
        ]
    },
    "9": {
        "startDate": "2026-03-15",
        "endDate": "2026-03-21",
        "tasks": [
        ]
    },
    "10": {
        "startDate": "2026-03-22",
        "endDate": "2026-03-28",
        "tasks": [
        ]
    },
    "11": {
        "startDate": "2026-03-29",
        "endDate": "2026-04-04",
        "tasks": [
        ]
    },
    "12": {
        "startDate": "2026-04-05",
        "endDate": "2026-04-11",
        "tasks": [
        ]
    },
    "13": {
        "startDate": "2026-04-12",
        "endDate": "2026-04-18",
        "tasks": [
        ]
    },
    "14": {
        "startDate": "2026-04-19",
        "endDate": "2026-04-25",
        "tasks": [
        ]
    },
    "15": {
        "startDate": "2026-04-26",
        "endDate": "2026-05-02",
        "tasks": [
        ]
    },
    "16": {
        "startDate": "2026-05-03",
        "endDate": "2026-05-09",
        "tasks": [
        ]
    },
    "17": {
        "startDate": "2026-05-10",
        "endDate": "2026-05-16",
        "tasks": [
        ]
    },
    "18": {
        "startDate": "2026-05-17",
        "endDate": "2026-05-23",
        "tasks": [
        ]
    },
    "19": {
        "startDate": "2026-05-24",
        "endDate": "2026-05-30",
        "tasks": [
        ]
    },
    "20": {
        "startDate": "2026-05-31",
        "endDate": "2026-06-06",
        "tasks": [
        ]
    }
};

// 页面加载完成后执行
window.addEventListener('load', function() {
    generateWeekGrid();
    // 启动实时时间更新
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
});

// 更新当前时间和当前周数显示
function updateCurrentTime() {
    const now = new Date();
    
    // 更新第一个h3：显示当前时间
    const timeH3 = document.querySelectorAll('.calendar-view h3')[0];
    if (timeH3) {
        const timeString = now.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timeH3.textContent = timeString;
    }
    
    // 更新第二个h3：显示当前周数
    const weekH3 = document.querySelectorAll('.calendar-view h3')[1];
    if (weekH3) {
        // 计算当前是第几周（相对于2026-01-19）
        const startDate = new Date('2026-01-19');
        const diffTime = now - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const currentWeek = Math.max(1, Math.floor(diffDays / 7) + 1);
        weekH3.textContent = `第${currentWeek}周`;
    }
    
    // 更新当前周高亮
    highlightCurrentWeek();
}

// 生成周格子
function generateWeekGrid() {
    const weekGrid = document.getElementById('weekGrid');
    
    // 遍历所有周
    for (const week in weekTasks) {
        if (weekTasks.hasOwnProperty(week)) {
            const weekData = weekTasks[week];
            const weekElement = document.createElement('div');
            weekElement.className = 'week-box';
            weekElement.dataset.week = week;
            
            // 计算完成的任务数量
            const completedTasks = weekData.tasks.filter(task => task.completed).length;
            const totalTasks = weekData.tasks.length;
            const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
            
            weekElement.innerHTML = `
                <div class="week-number">第${week}周</div>
            `;
            
            // 添加点击事件
            weekElement.addEventListener('click', function() {
                showWeekTasks(week);
            });
            
            weekGrid.appendChild(weekElement);
        }
    }
    
    // 高亮当前周
    highlightCurrentWeek();
}

// 高亮当前周
function highlightCurrentWeek() {
    const now = new Date();
    // 计算当前是第几周（相对于2026-01-19）
    const startDate = new Date('2026-01-19');
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const currentWeek = Math.max(1, Math.floor(diffDays / 7) + 1);
    
    // 移除所有周的高亮样式
    const allWeekBoxes = document.querySelectorAll('.week-box');
    allWeekBoxes.forEach(box => {
        box.classList.remove('current-week');
    });
    
    // 高亮当前周
    const currentWeekBox = document.querySelector(`[data-week="${currentWeek}"]`);
    if (currentWeekBox) {
        currentWeekBox.classList.add('current-week');
    }
}

// 显示周任务详情
function showWeekTasks(week) {
    const taskDetails = document.getElementById('weekTaskDetails');
    const weekData = weekTasks[week];
    
    if (!weekData) {
        taskDetails.innerHTML = `
            <h3>任务详情</h3>
            <div class="no-selection">无效的周数</div>
        `;
        return;
    }
    
    // 移除所有周的选中样式
    const allWeekBoxes = document.querySelectorAll('.week-box');
    allWeekBoxes.forEach(box => {
        box.classList.remove('selected-week');
    });
    
    // 为当前选中的周添加选中样式
    const selectedWeekBox = document.querySelector(`[data-week="${week}"]`);
    if (selectedWeekBox) {
        selectedWeekBox.classList.add('selected-week');
    }
    
    // 对任务进行排序：未完成的任务在前面，已完成的任务在后面
    const sortedTasks = [...weekData.tasks].sort((a, b) => {
        // 未完成任务（false）排在前面，已完成任务（true）排在后面
        return (a.completed === b.completed) ? 0 : (a.completed ? 1 : -1);
    });
    
    // 生成任务列表
    let tasksHtml = '';
    if (sortedTasks.length === 0) {
        tasksHtml = '<div class="no-tasks">暂无任务</div>';
    } else {
        tasksHtml = '<ul class="task-list">';
        sortedTasks.forEach(task => {
            const statusIcon = task.completed ? 
                '<div class="task-status-container">' +
                '<div class="status-circle">◯</div>' +
                '<div class="status-check">✓</div>' +
                '</div>' : 
                '<span class="task-uncompleted">㊀</span>';
            
            // 为已完成的任务添加暗色样式类
            const taskTitleClass = task.completed ? 'task-title completed-task' : 'task-title';
            
            tasksHtml += `
                <li class="task-item">
                    <div class="task-status">${statusIcon}</div>
                    <div class="${taskTitleClass}">${task.title}</div>
                </li>
            `;
        });
        tasksHtml += '</ul>';
    }
    
    // 计算完成进度
    const completedTasks = weekData.tasks.filter(task => task.completed).length;
    const totalTasks = weekData.tasks.length;
    const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    // 更新任务详情
    taskDetails.innerHTML = `
        <h3>Week ${week} 任务详情</h3>
        <div class="week-info">
            <div class="week-date-range">${weekData.startDate} - ${weekData.endDate}</div>
            <div class="task-progress">
                <div class="progress-text">${completedTasks}/${totalTasks} 已完成</div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${completionPercentage}%"></div>
                </div>
            </div>
        </div>
        ${tasksHtml}
    `;
}
