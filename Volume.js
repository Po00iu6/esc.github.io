document.getElementById("dd").volume=0.1;


document.addEventListener('DOMContentLoaded', (event) => {
    // Music playlist URLs
    const playlist = [
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/希望有羽毛和翅膀.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/经过.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/使一颗心免于哀伤.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/若我不曾见过太阳.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/在银河中孤独摇摆.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/MoonHalo.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/pinKing.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/不眠之夜.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/我不曾忘记.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/三千娑世御咏歌.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/烬火.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/绮縠纷披.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/让风告诉你.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/遨欢同游.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/你呀你呀.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/如果突然想起我.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/别让我担心.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/门的另一端.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/璃云月海.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/绝望吧台.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/0to0.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/百味一锅.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/华霄纪事.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/烟火人间月.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/有你刚刚好.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/雨物语.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/归途.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/给另一个世界的你.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/终焉.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/一梦千宵.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/下一个远方.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/侠客行.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/问神.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/提瓦特最屑反派.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/深呼吸.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/千岩军京歌.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/喵呜喵呜大冒险.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/溜达谣.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/雨物语.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/有你刚刚好.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/烟火人间月.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/百味一锅.mp3',
        'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/红色高跟鞋.mp3'
        // Add more URLs as needed
    ];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Starting index, can be set to any valid index in the playlist
    let startIndex = getRandomInt(0, playlist.length);
    let currentIndex = startIndex; // You can set a different start index if needed

    // Get the audio element
    const audio = document.getElementById('dd');

    // Function to play the song at the given index
    function playSongAtIndex(index) {
        audio.src = playlist[index];
        audio.play();
    }

    // Initialize the playlist from the specified start index
    playSongAtIndex(currentIndex);

    // Event listener for when the current song ends
    audio.addEventListener('ended', () => {
        // Increment the current index
        currentIndex++;
        // If the index is out of bounds, reset to the start index
        currentIndex%=(playlist.length);
        // Play the song at the new index
        playSongAtIndex(currentIndex);
    });

    // Optionally, you can set a different start index here after page load
    // startIndex = 1; // For example, start from the second song
    // currentIndex = startIndex; // Update the current index to match the new start index
    // playSongAtIndex(currentIndex); // Re-initialize playback if you change the start index
});













//天气
// 创建一个新的 iframe 元素
const iframe = document.createElement('iframe');

// 设置 iframe 的属性
iframe.id = 'day';
iframe.width = '320';
iframe.scrolling = 'no';
iframe.height = '85';
iframe.frameBorder = '0'; // 注意：frameBorder 是小写，尽管在 HTML 中常常写作 frameborder
iframe.allowTransparency = 'true'; // 注意：allowTransparency 是小写，但在 HTML5 中通常使用 allowtransparency="true"（不带大写T），但这里为兼容性保持原样
iframe.src = 'https://i.tianqi.com?c=code&id=6&icon=1&py=liangyuanqu&site=12';

// 将 iframe 添加到页面的某个元素中，例如 body
document.body.appendChild(iframe);