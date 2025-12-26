// 音乐播放器类 - 负责管理音乐播放的核心逻辑
class MusicPlayer {
    constructor() {
        this.audio = new Audio(); // 创建 Audio 对象用于播放音乐
        this.playlist = []; // 音乐播放列表
        this.currentIndex = 0; // 当前播放的音乐索引
        this.volume = 0.5; // 默认音量（0-1之间）
        this.isPlaying = false; // 播放状态标记
        this.isLooping = false; // 循环播放标记
        this.hasInteracted = false; // 用户是否与页面交互过（用于绕过浏览器自动播放限制）
        this.init(); // 初始化播放器
    }

    // 初始化方法 - 设置音频事件监听和用户交互监听
    init() {
        this.audio.volume = this.volume; // 设置初始音量
        this.audio.loop = false; // 禁用 Audio 原生的 loop 属性，使用自定义循环逻辑
        
        // 监听音乐播放结束事件 - 自动播放下一首
        this.audio.addEventListener('ended', () => {
            this.playNext();
        });
        
        // 监听音频错误事件 - 出错时自动播放下一首
        this.audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            this.playNext();
        });

        // 设置用户交互监听器 - 用于绕过浏览器自动播放限制
        this.setupInteractionListeners();
    }

    // 设置用户交互监听器 - 监听用户的点击、按键、滚动、触摸等事件
    // 浏览器通常会阻止自动播放音频，但允许在用户交互后播放
    // 手机端需要更明确的用户交互（如点击）才能触发音频播放
    setupInteractionListeners() {
        console.log('[MusicPlayer] 开始设置事件监听器');

        // 桌面端事件 - 移除 once: true，改为手动检查标志
        const desktopEvents = ['click', 'keydown', 'scroll'];
        desktopEvents.forEach(event => {
            document.addEventListener(event, (e) => {
                console.log(`[MusicPlayer] 桌面端事件触发: ${event}`, e);
                if (!this.hasInteracted) {
                    console.log(`[MusicPlayer] 首次交互，标记 hasInteracted = true`);
                    // this.hasInteracted = true;
                    this.tryAutoPlay();
                } else {
                    console.log(`[MusicPlayer] 已经交互过，跳过`);
                }
            });
            console.log(`[MusicPlayer] 已添加 ${event} 事件监听器`);
        });

        // 手机端触摸事件 - 移除 once: true，改为手动检查标志
        const touchEvents = ['touchstart', 'touchend', 'touchmove'];
        touchEvents.forEach(event => {
            document.addEventListener(event, (e) => {
                console.log(`[MusicPlayer] 触摸事件触发: ${event}`, e);
                if (!this.hasInteracted) {
                    console.log(`[MusicPlayer] 首次交互，标记 hasInteracted = true`);
                    // this.hasInteracted = true;
                    // 延迟一点时间再尝试播放，确保触摸事件完全处理完毕
                    setTimeout(() => {
                        this.tryAutoPlay();
                    }, 100);
                } else {
                    console.log(`[MusicPlayer] 已经交互过，跳过`);
                }
            }, { passive: true });
            console.log(`[MusicPlayer] 已添加 ${event} 事件监听器`);
        });

        // 添加页面可见性变化监听 - 当用户切换回页面时尝试播放
        document.addEventListener('visibilitychange', (e) => {
            console.log(`[MusicPlayer] visibilitychange 事件触发`, e);
            if (!document.hidden && !this.isPlaying && this.hasInteracted) {
                console.log('[MusicPlayer] 页面可见性变化，尝试播放');
                this.tryAutoPlay();
            }
        });
        console.log('[MusicPlayer] 已添加 visibilitychange 事件监听器');

        // 添加鼠标事件作为备用（F12模拟器可能使用鼠标事件模拟触摸）
        document.addEventListener('mousedown', (e) => {
            console.log(`[MusicPlayer] mousedown 事件触发`, e);
            if (!this.hasInteracted) {
                console.log(`[MusicPlayer] 首次交互，标记 hasInteracted = true`);
                this.hasInteracted = true;
                this.tryAutoPlay();
            } else {
                console.log(`[MusicPlayer] 已经交互过，跳过`);
            }
        });
        console.log('[MusicPlayer] 已添加 mousedown 事件监听器');

        console.log('[MusicPlayer] 所有事件监听器设置完成');
    }

    // 尝试自动播放 - 在用户交互后或延迟后调用
    tryAutoPlay() {
        console.log('[MusicPlayer] 尝试自动播放 - 播放列表长度:', this.playlist.length, '当前播放状态:', this.isPlaying);
        if (this.playlist.length > 0 && !this.isPlaying) {
            this.play(); // 如果有音乐且未播放，则开始播放
        } else {
            console.log('[MusicPlayer] 跳过自动播放 - 播放列表为空或正在播放');
        }
    }

    // 设置播放列表 - 接收音乐文件路径数组
    setPlaylist(playlist) {
        this.playlist = playlist; // 保存播放列表
        // 随机选择一首音乐作为起始音乐
        this.currentIndex = Math.floor(Math.random() * this.playlist.length);
        if (this.playlist.length > 0) {
            this.audio.src = this.playlist[this.currentIndex]; // 加载随机选择的音乐
            console.log('[MusicPlayer] 播放列表已设置，音乐数量:', this.playlist.length, '随机选择第', this.currentIndex + 1, '首');
            // 如果用户已经交互过，立即尝试播放
            if (this.hasInteracted && !this.isPlaying) {
                console.log('[MusicPlayer] 用户已交互，立即开始播放');
                this.play();
            }
        }
    }

    // 播放音乐
    play() {
        if (this.playlist.length === 0) {
            console.warn('[MusicPlayer] 播放列表为空'); // 播放列表为空时警告
            return;
        }
        console.log('[MusicPlayer] 开始播放音乐:', this.playlist[this.currentIndex]);
        this.audio.play().then(() => {
            console.log('[MusicPlayer] 播放成功');
            this.isPlaying = true; // 标记为播放中
            this.updateUI(); // 更新UI显示
        }).catch(error => {
            console.error('[MusicPlayer] 播放失败:', error); // 播放失败时输出错误
            this.isPlaying = false;
        });
    }

    // 暂停音乐
    pause() {
        this.audio.pause();
        this.isPlaying = false; // 标记为暂停
        this.updateUI(); // 更新UI显示
    }

    // 切换播放/暂停状态
    togglePlay() {
        if (this.isPlaying) {
            this.pause(); // 如果正在播放则暂停
        } else {
            this.play(); // 如果暂停则播放
        }
    }

    // 播放下一首音乐
    playNext() {
        if (this.playlist.length === 0) return;
        
        if (this.isLooping) {
            // 如果开启循环，则重新播放当前音乐
            this.audio.currentTime = 0;
            this.audio.play();
        } else {
            // 否则播放下一首
            this.currentIndex = (this.currentIndex + 1) % this.playlist.length; // 循环索引
            this.audio.src = this.playlist[this.currentIndex]; // 加载下一首
            if (this.isPlaying) {
                this.play(); // 如果正在播放则继续播放
            }
        }
        this.updateUI(); // 更新UI显示
    }

    // 播放上一首音乐
    playPrevious() {
        if (this.playlist.length === 0) return;
        
        this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length; // 向前循环索引
        this.audio.src = this.playlist[this.currentIndex]; // 加载上一首
        if (this.isPlaying) {
            this.play(); // 如果正在播放则继续播放
        }
        this.updateUI(); // 更新UI显示
    }

    // 设置音量 - 参数范围 0-1
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume)); // 限制音量在0-1之间
        this.audio.volume = this.volume; // 应用音量设置
    }

    // 切换循环播放模式
    toggleLoop() {
        this.isLooping = !this.isLooping; // 切换循环状态
    }

    // 获取当前播放的音乐信息
    getCurrentTrack() {
        if (this.playlist.length === 0) return null;
        return {
            index: this.currentIndex, // 当前索引
            name: this.getTrackName(this.playlist[this.currentIndex]), // 音乐名称
            src: this.playlist[this.currentIndex] // 音乐路径
        };
    }

    // 从音乐路径中提取文件名（不含扩展名）
    getTrackName(src) {
        const parts = src.split('/');
        return parts[parts.length - 1].replace('.mp3', '');
    }

    // 更新UI显示 - 根据播放状态更新按钮图标
    updateUI() {
        const volumeBtn = document.getElementById('volumeToggleBtn');
        if (volumeBtn) {
            if (this.isPlaying) {
                volumeBtn.textContent = '🔊'; // 播放中显示扬声器图标
                volumeBtn.style.opacity = '1'; // 完全不透明
            } else {
                volumeBtn.textContent = '🔇'; // 暂停显示静音图标
                volumeBtn.style.opacity = '0.6'; // 半透明
            }
        }
    }
}

// 创建音乐播放器实例
const musicPlayer = new MusicPlayer();

// ========== 音乐配置区域 - 在这里修改音乐列表和设置 ==========

// 音乐播放列表 - 添加所有 Music 文件夹中的音乐文件
const defaultPlaylist = [
    'Music/《回家的路》.mp3',
    'Music/「未行之路」.mp3',
    'Music/「烬中歌」.mp3',
    'Music/一梦千宵.mp3',
    'Music/下一个远方.mp3',
    'Music/别让我担心.mp3',
    'Music/如果突然想起我.mp3',
    'Music/尘间星旅.mp3',
    'Music/我不曾忘记.mp3',
    'Music/提瓦特民谣.mp3',
    'Music/空月之歌.mp3',
    'Music/让风告诉你.mp3'
];

// 默认音量设置（0-1之间，0.5表示50%音量）
const defaultVolume = 0.5;

// 是否循环播放当前音乐（true=循环播放当前音乐，false=播放完自动播放下一首）
const defaultLoop = false;

// 自动播放延迟时间（毫秒）- 页面加载后多久尝试自动播放
const autoPlayDelay = 1000;

// ========== 应用配置 ==========

musicPlayer.setPlaylist(defaultPlaylist); // 设置播放列表
musicPlayer.setVolume(defaultVolume); // 设置音量
musicPlayer.isLooping = defaultLoop; // 设置循环模式

// ========== UI初始化函数 ==========

// 初始化音乐控制UI - 创建音量开关按钮
function initMusicUI() {
    // 创建音量切换按钮
    const volumeBtn = document.createElement('button');
    volumeBtn.id = 'volumeToggleBtn';
    volumeBtn.textContent = '🔇'; // 初始显示静音图标
    
    // 设置按钮样式 - 小巧精致的圆形按钮，固定在右下角
    volumeBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.7);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
        font-size: 24px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        opacity: 0.6;
    `;

    // 鼠标悬停事件 - 按钮变深并放大
    volumeBtn.addEventListener('mouseenter', () => {
        volumeBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // 背景变深
        volumeBtn.style.transform = 'scale(1.1)'; // 放大1.1倍
    });

    // 鼠标离开事件 - 恢复原样
    volumeBtn.addEventListener('mouseleave', () => {
        volumeBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // 恢复背景
        volumeBtn.style.transform = 'scale(1)'; // 恢复大小
    });

    // 点击事件 - 切换播放/暂停
    volumeBtn.addEventListener('click', () => {
        musicPlayer.togglePlay();
    });

    // 将按钮添加到页面
    document.body.appendChild(volumeBtn);
    musicPlayer.updateUI(); // 更新按钮初始状态
}

// ========== 页面加载完成后执行 ==========

document.addEventListener('DOMContentLoaded', () => {
    initMusicUI(); // 初始化UI
    
    // 延迟后尝试自动播放
    setTimeout(() => {
        musicPlayer.tryAutoPlay();
    }, autoPlayDelay);
});
