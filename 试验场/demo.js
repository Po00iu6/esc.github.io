document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const toggleDiv = document.getElementById("toggleDiv");
    let isDivVisible = false; // 跟踪div的当前可见性状态

    toggleButton.addEventListener("click", function() {
        // 切换div的显示状态
        if (isDivVisible) {
            toggleDiv.style.display = "none";
        } else {
            toggleDiv.style.display = "block";
        }
        // 更新状态
        isDivVisible = !isDivVisible;
    });
});