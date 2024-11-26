document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("BGButton");
    const toggleDiv = document.getElementById("BGdiv");
    let isDivVisible = true; // 跟踪div的当前可见性状态

    toggleButton.addEventListener("click", function() {
        // 切换div的显示状态
        if (isDivVisible) {
            toggleDiv.style.display = "none";
            toggleButton.style.backgroundColor="#D3BA80";
        } else {
            toggleDiv.style.display = "block";
            toggleButton.style.backgroundColor="#F9DB97";
        }
        // 更新状态
        isDivVisible = !isDivVisible;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("VBGButton");
    const toggleDiv = document.getElementById("video");
    document.getElementById("video").volume=0.5;
    let bef = document.getElementById("video").volume;
    let isDivVisible = true; // 跟踪div的当前可见性状态

    toggleButton.addEventListener("click", function() {
        // 切换div的显示状态
        if (isDivVisible) {
            toggleDiv.volume = 0;
            toggleButton.style.backgroundColor="#D3BA80";
        } else {
            toggleDiv.volume = bef;
            toggleButton.style.backgroundColor="#F9DB97";
        }
        // 更新状态
        isDivVisible = !isDivVisible;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("BGMusicButton");
    const toggleDiv = document.getElementById("dd");
    let bef = document.getElementById("dd").volume;
    let isDivVisible = false; // 跟踪div的当前可见性状态

    toggleButton.addEventListener("click", function() {
        // 切换div的显示状态
        if (isDivVisible) {
            toggleDiv.volume=bef;
            toggleButton.style.backgroundColor="#F9DB97";
        } else {
            toggleDiv.volume=0;
            toggleButton.style.backgroundColor="#D3BA80";
        }
        // 更新状态
        isDivVisible = !isDivVisible;
    });
});