const ctx = document.getElementById('scoreChart').getContext('2d');

let scores = [352]; // 初始成绩数据，可以根据需要修改

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: scores.map((_, index) => `第 ${index + 1} 次`), // X轴标签
        datasets: [{
            label: '我的成绩',
            data: scores,
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0)',
            borderColor: 'rgb(0, 64, 255)',
            borderWidth: 2,
            tension: 0.1
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

// 添加成绩的函数
function addScore() {
    const score = prompt("请输入新的成绩:");
    const parsedScore = parseInt(score);
    if (!isNaN(parsedScore)) {
        scores.push(parsedScore);
        updateChart();
    } else {
        alert("请输入有效的成绩!");
    }
}

// 更新图表数据
function updateChart() {
    chart.data.labels = scores.map((_, index) => `第 ${index + 1} 次`);
    chart.data.datasets[0].data = scores;
    chart.update();
}3