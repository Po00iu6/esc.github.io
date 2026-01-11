// 音乐控制模块
const MusicPlayer = {
    // 音乐播放列表
    playlist: [
        "music/热爱105的你.mp3",
        "music/Wake.mp3",
        "music/JourneytotheLight.mp3"
    ],
    
    // 当前播放索引
    currentIndex: -1,
    
    // 音频元素
    audio: null,
    
    // 播放状态
    isPlaying: false,
    
    // 音量
    volume: 0.3,
    
    // 是否循环单曲
    isLoopSingle: false,
    
    // 是否循环列表
    isLoopList: true,
    
    // 初始化音乐播放器
    init() {
        this.audio = new Audio();
        this.audio.volume = this.volume;
        this.audio.loop = this.isLoopSingle;
        
        // 监听音乐结束事件
        this.audio.addEventListener('ended', () => {
            if (this.isLoopSingle) {
                this.audio.play();
            } else {
                this.playNext();
            }
        });
        
        // 随机选择初始播放歌曲
        this.currentIndex = Math.floor(Math.random() * this.playlist.length);
        // 添加随机参数，避免浏览器缓存影响
        const randomParam = Math.random().toString(36).substring(2, 15);
        this.audio.src = this.playlist[this.currentIndex] + '?v=' + randomParam;
        
        // 默认尝试播放音乐
        this.tryPlay();
    },
    
    // 尝试播放音乐（需用户交互触发）
    tryPlay() {
        if (!this.isPlaying) {
            this.audio.play().then(() => {
                this.isPlaying = true;
                this.updateButtonState();
            }).catch(error => {
                console.log('音乐播放被浏览器拦截，请用户交互后重试');
            });
        }
    },
    
    // 播放/暂停切换
    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
        this.isPlaying = !this.isPlaying;
        this.updateButtonState();
    },
    
    // 播放下一首
    playNext() {
        this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
        // 添加随机参数，避免浏览器缓存影响
        const randomParam = Math.random().toString(36).substring(2, 15);
        this.audio.src = this.playlist[this.currentIndex] + '?v=' + randomParam;
        this.audio.play();
    },
    
    // 播放上一首
    playPrev() {
        this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
        // 添加随机参数，避免浏览器缓存影响
        const randomParam = Math.random().toString(36).substring(2, 15);
        this.audio.src = this.playlist[this.currentIndex] + '?v=' + randomParam;
        this.audio.play();
    },
    
    // 设置音量
    setVolume(volume) {
        this.volume = volume;
        this.audio.volume = volume;
    },
    
    // 切换循环单曲
    toggleLoopSingle() {
        this.isLoopSingle = !this.isLoopSingle;
        this.audio.loop = this.isLoopSingle;
        if (this.isLoopSingle) {
            this.isLoopList = false;
        }
    },
    
    // 切换循环列表
    toggleLoopList() {
        this.isLoopList = !this.isLoopList;
        if (this.isLoopList) {
            this.isLoopSingle = false;
            this.audio.loop = false;
        }
    },
    
    // 更新按钮状态
    updateButtonState() {
        const button = document.getElementById('music-toggle');
        if (button) {
            button.checked = this.isPlaying;
        }
    }
};

// 初始化音乐播放器
window.addEventListener('DOMContentLoaded', () => {
    MusicPlayer.init();
    
    // 添加用户交互事件，尝试激活音乐
    document.addEventListener('mousemove', () => {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    document.addEventListener('touchstart', () => {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    document.addEventListener('click', () => {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    // 3秒后尝试激活音乐
    setTimeout(() => {
        MusicPlayer.tryPlay();
    }, 3000);
    
    // 绑定开关事件
    const toggle = document.getElementById('music-toggle');
    if (toggle) {
        toggle.addEventListener('change', () => {
            MusicPlayer.togglePlay();
        });
    }
});
