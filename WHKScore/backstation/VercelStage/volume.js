// 音乐控制模块
const MusicPlayer = {
    // 音乐播放列表
    playlist: [
    "music/AURORA,HOYO-MiX---挪德卡莱-Nod-Krai.mp3",
    "music/HOYO-MiX,Aimer---未行之路-The-Road-Not-Taken.mp3",
    "music/HOYO-MiX---Da-Capo.mp3",
    "music/HOYO-MiX---凋萎于昔时之花-Marcescent-Floret.mp3",
    "music/HOYO-MiX---回家的路-The-Long-Way-Home-(伴奏).mp3",
    "music/HOYO-MiX---埠上风光-What-a-Delightful-Scenery.mp3",
    "music/HOYO-MiX---寒星遥遥-Lustrous-Stars.mp3",
    "music/HOYO-MiX---春尽水如天-Into-the-Yonder-and-Water.mp3",
    "music/HOYO-MiX---柔风的欢愿-Que-le-vent-soit-doux.mp3",
    "music/HOYO-MiX---流光过隙-Passage-of-an-Era.mp3",
    "music/HOYO-MiX---深夕映繁星-Nocturnal-Illumination.mp3",
    "music/HOYO-MiX---清润玉响-A-Mild-Tale-Untold.mp3",
    "music/HOYO-MiX---温情的遥忆-A-Memorable-Fancy.mp3",
    "music/HOYO-MiX---漫徊繁荫之原-Across-the-Meadows.mp3",
    "music/HOYO-MiX---灯如明月在中天-Moonlit-Lanterns.mp3",
    "music/HOYO-MiX---煦风染细浪-Mellow-Alize.mp3",
    "music/HOYO-MiX---王山遗威-Guhuas-Legacy.mp3",
    "music/HOYO-MiX---竹林溪涧-Dweller-of-Bamboo-Groves.mp3",
    "music/HOYO-MiX---繁沸之港-The-Bustling-Port-Market.mp3",
    "music/HOYO-MiX---纵然时岁流转-Throughout-the-Flow-of-Years.mp3",
    "music/HOYO-MiX---花与树的女儿们-Maidens-of-Sanctity.mp3",
    "music/HOYO-MiX---轻漪的节音-Ondulations-du-rythme.mp3",
    "music/HOYO-MiX---轻语如露-Whispering-Dewdrops.mp3",
    "music/HOYO-MiX---银鸥的回旋-Tourdion-of-Silver-Seagulls.mp3",
    "music/HOYO-MiX---陌路新交-Incontro꞉-Bellezza-e-Rosula.mp3",
    "music/HOYO-MiX---领航人的倦憩-Pilots-Rest.mp3",
    "music/HOYO-MiX---饫沃坡野-Bounty-of-the-Fertile-Slopes.mp3",
    "music/《回家的路》.mp3",
    "music/一梦千宵.mp3",
    "music/下一个远方.mp3",
    "music/别让我担心.mp3",
    "music/周深---Rubia.mp3",
    "music/如果突然想起我.mp3",
    "music/希林娜依高,HOYO-MiX---烬火-Emberfire.mp3",
    "music/张杰,HOYO-MiX---经过.mp3",
    "music/我不曾忘记.mp3",
    "music/提瓦特民谣.mp3",
    "music/知更鸟,HOYO-MiX,Chevy---希望有羽毛和翅膀.mp3",
    "music/茶理理,TetraCalyx,Hanser---Moon-Halo.mp3",
    "music/让风告诉你.mp3",
    "music/鈴木愛理,HOYO-MiX---尘间星旅-Star-Odyssey.mp3",
    "music/陈致逸,HOYO-MiX---商港的闲暇-Relaxation-in-Liyue.mp3",
    "music/陈致逸,HOYO-MiX---杯中明月-Moon-in-Ones-Cup.mp3",
    "music/陈致逸,HOYO-MiX---皎洁的笑颜-Moonlike-Smile.mp3",
    "music/陈致逸,HOYO-MiX---银白的希望-Fragile-Fantasy.mp3",
    "music/黄龄,HOYO-MiX---TruE.mp3"
],
    
    // 音乐缩略图映射 - 使用预提取的封面图片
    thumbnails: {},
    
    // 获取音乐对应的封面图片路径
    getCoverPath(musicPath) {
        const baseName = musicPath.replace('music/', '').replace('.mp3', '');
        return `music_cover/${baseName}.jpg`;
    },
    
    // 当前播放索引
    currentIndex: -1,
    
    // 音频元素 - 使用两个音频对象，一个播放当前歌曲，一个预加载下一首
    audio: null,
    nextAudio: null,
    
    // 播放状态
    isPlaying: false,
    
    // 音量
    volume: 0.3,
    
    // 是否循环单曲
    isLoopSingle: false,
    
    // 是否循环列表
    isLoopList: true,
    
    // 通知状态
    notificationState: 'hidden', // 'hidden', 'show', 'minimized'
    
    // 自动隐藏定时器
    autoHideTimer: null,
    
    // 预加载状态
    preloadedIndex: -1,
    
    // 初始化音乐播放器
    init() {
        // 立即初始化两个音频对象，加载2个音乐文件
        this.audio = new Audio();
        this.nextAudio = new Audio();
        
        // 随机选择初始播放歌曲
        this.currentIndex = Math.floor(Math.random() * this.playlist.length);
        this.preloadedIndex = -1;
        
        // 设置音量
        this.audio.volume = this.volume;
        this.nextAudio.volume = this.volume;
        
        // 设置循环属性
        this.audio.loop = this.isLoopSingle;
        this.nextAudio.loop = false;
        
        // 监听当前音频结束事件
        this.audio.addEventListener('ended', () => {
            // 音乐结束，完全隐藏通知
            this.hideNotification();
            
            if (this.isLoopSingle) {
                this.audio.play().then(() => {
                    this.showNotification(); // 单曲循环时显示通知
                });
            } else {
                this.playNext();
            }
        });
        
        // 添加播放进度监听器，在播放到80%时预加载下一首，确保有足够时间
        this.audio.addEventListener('timeupdate', () => {
            if (this.audio.duration > 0) {
                // 当播放到80%时预加载下一首
                if (this.audio.currentTime / this.audio.duration >= 0.8) {
                    this.preloadNext();
                }
            }
        });
        
        // 初始加载2个音乐文件：当前播放的和下一首要播放的
        const randomParam = Math.random().toString(36).substring(2, 15);
        this.audio.src = this.playlist[this.currentIndex] + '?v=' + randomParam;
        this.preloadNext(); // 预加载下一首
        
        // 不自动播放音乐，等待用户交互
    },
    
    // 延迟初始化音频元素（现在是冗余的，但为了兼容性保留）
    lazyInitAudio() {
        // 音频对象已经在init()中初始化，这里什么都不用做
        // 保留此方法是为了兼容之前的调用
    },
    
    // 预加载下一首歌曲
    preloadNext() {
        const nextIndex = (this.currentIndex + 1) % this.playlist.length;
        
        // 如果下一首已经预加载过，跳过
        if (this.preloadedIndex === nextIndex) {
            return;
        }
        
        // 预加载下一首歌曲
        const nextMusic = this.playlist[nextIndex];
        const randomParam = Math.random().toString(36).substring(2, 15);
        this.nextAudio.src = nextMusic + '?v=' + randomParam;
        this.nextAudio.preload = 'auto'; // 自动预加载完整音频
        
        this.preloadedIndex = nextIndex;
        console.log('预加载完成:', nextMusic);
    },
    
    // 检查封面图片是否存在
    async checkCoverExists(coverPath) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = coverPath;
        });
    },
    
    // 更新关闭按钮朝向
    updateCloseButton() {
        const closeBtn = document.getElementById('close-notification');
        if (closeBtn) {
            if (this.notificationState === 'minimized') {
                closeBtn.textContent = '▼'; // 朝下
            } else {
                closeBtn.textContent = '▲'; // 朝上
            }
        }
    },
    
    // 显示音乐播放通知
    async showNotification() {
        const notification = document.getElementById('music-notification');
        const musicIcon = document.getElementById('music-icon');
        const musicThumbnail = document.getElementById('music-thumbnail');
        
        if (notification && musicIcon && musicThumbnail) {
            const currentMusic = this.playlist[this.currentIndex];
            
            // 获取封面图片路径
            const coverPath = this.getCoverPath(currentMusic);
            
            // 检查封面图片是否存在
            const coverExists = await this.checkCoverExists(coverPath);
            
            if (coverExists) {
                // 封面存在，显示专辑封面，隐藏默认图标
                musicThumbnail.src = coverPath;
                musicThumbnail.style.display = 'block';
                musicIcon.style.display = 'none';
            } else {
                // 封面不存在，显示默认图标，隐藏专辑封面
                musicThumbnail.style.display = 'none';
                musicIcon.style.display = 'block';
            }
            
            // 清除之前的定时器
            if (this.autoHideTimer) {
                clearTimeout(this.autoHideTimer);
                this.autoHideTimer = null;
            }
            
            // 移除所有状态类
            notification.classList.remove('hidden', 'minimized');
            
            // 设置为显示状态
            notification.classList.add('show');
            this.notificationState = 'show';
            
            // 更新关闭按钮朝向
            this.updateCloseButton();
            
            // 1秒后自动最小化
            this.autoHideTimer = setTimeout(() => {
                this.minimizeNotification();
            }, 1000);
        }
    },
    
    // 最小化音乐播放通知
    minimizeNotification() {
        const notification = document.getElementById('music-notification');
        if (notification) {
            notification.classList.remove('show', 'hidden');
            notification.classList.add('minimized');
            this.notificationState = 'minimized';
            this.updateCloseButton();
        }
    },
    
    // 完全隐藏音乐播放通知
    hideNotification() {
        const notification = document.getElementById('music-notification');
        if (notification) {
            notification.classList.remove('show', 'minimized');
            notification.classList.add('hidden');
            this.notificationState = 'hidden';
            this.updateCloseButton();
        }
    },
    
    // 切换通知的展开/收起状态
    toggleNotification() {
        const notification = document.getElementById('music-notification');
        if (notification) {
            if (this.notificationState === 'minimized') {
                // 展开
                notification.classList.remove('minimized', 'hidden');
                notification.classList.add('show');
                this.notificationState = 'show';
                
                // 清除自动隐藏定时器
                if (this.autoHideTimer) {
                    clearTimeout(this.autoHideTimer);
                    this.autoHideTimer = null;
                }
            } else if (this.notificationState === 'show') {
                // 收起（最小化）
                notification.classList.remove('show', 'hidden');
                notification.classList.add('minimized');
                this.notificationState = 'minimized';
            }
            this.updateCloseButton();
        }
    },
    
    // 尝试播放音乐（需用户交互触发）
    tryPlay() {
        if (!this.isPlaying) {
            // 延迟初始化音频元素
            this.lazyInitAudio();
            
            // 设置当前音频源
            const currentMusic = this.playlist[this.currentIndex];
            if (!this.audio.src || !this.audio.src.includes(currentMusic)) {
                const randomParam = Math.random().toString(36).substring(2, 15);
                this.audio.src = currentMusic + '?v=' + randomParam;
            }
            
            this.audio.play().then(() => {
                this.isPlaying = true;
                this.updateButtonState();
                this.showNotification(); // 显示播放通知
                this.preloadNext(); // 预加载下一首
            }).catch(error => {
                console.log('音乐播放被浏览器拦截，请用户交互后重试');
            });
        }
    },
    
    // 播放/暂停切换
    togglePlay() {
        // 延迟初始化音频元素
        this.lazyInitAudio();
        
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            // 设置当前音频源
            const currentMusic = this.playlist[this.currentIndex];
            if (!this.audio.src || !this.audio.src.includes(currentMusic)) {
                const randomParam = Math.random().toString(36).substring(2, 15);
                this.audio.src = currentMusic + '?v=' + randomParam;
            }
            
            this.audio.play().then(() => {
                this.showNotification(); // 恢复播放时显示通知
                this.preloadNext(); // 预加载下一首
            });
        }
        this.isPlaying = !this.isPlaying;
        this.updateButtonState();
    },
    
    // 播放下一首
    playNext() {
        // 延迟初始化音频元素
        this.lazyInitAudio();
        
        // 使用预加载的音频对象播放下一首
        this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
        
        // 交换音频对象
        const tempAudio = this.audio;
        this.audio = this.nextAudio;
        this.nextAudio = tempAudio;
        
        // 播放当前音频（之前预加载的）
        this.audio.play().then(() => {
            this.showNotification(); // 显示播放通知
            this.preloadNext(); // 预加载新的下一首
        }).catch(error => {
            console.error('播放下一首失败:', error);
            // 失败时回退到传统方式
            const currentMusic = this.playlist[this.currentIndex];
            const randomParam = Math.random().toString(36).substring(2, 15);
            this.audio.src = currentMusic + '?v=' + randomParam;
            this.audio.play().then(() => {
                this.showNotification();
                this.preloadNext();
            });
        });
        
        this.isPlaying = true;
        this.updateButtonState();
    },
    
    // 播放上一首
    playPrev() {
        // 延迟初始化音频元素
        this.lazyInitAudio();
        
        this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
        
        // 设置当前音频源
        const currentMusic = this.playlist[this.currentIndex];
        const randomParam = Math.random().toString(36).substring(2, 15);
        this.audio.src = currentMusic + '?v=' + randomParam;
        
        // 播放当前音频
        this.audio.play().then(() => {
            this.showNotification(); // 显示播放通知
            this.preloadNext(); // 预加载下一首
        }).catch(error => {
            console.error('播放上一首失败:', error);
        });
        
        this.isPlaying = true;
        this.updateButtonState();
    },
    
    // 设置音量
    setVolume(volume) {
        this.volume = volume;
        if (this.audio) {
            this.audio.volume = volume;
        }
        if (this.nextAudio) {
            this.nextAudio.volume = volume;
        }
    },
    
    // 切换循环单曲
    toggleLoopSingle() {
        this.isLoopSingle = !this.isLoopSingle;
        if (this.audio) {
            this.audio.loop = this.isLoopSingle;
        }
        if (this.nextAudio) {
            this.nextAudio.loop = false;
        }
        if (this.isLoopSingle) {
            this.isLoopList = false;
        }
    },
    
    // 切换循环列表
    toggleLoopList() {
        this.isLoopList = !this.isLoopList;
        if (this.isLoopList) {
            this.isLoopSingle = false;
            if (this.audio) {
                this.audio.loop = false;
            }
            if (this.nextAudio) {
                this.nextAudio.loop = false;
            }
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
    
    // 绑定通知展开/收起事件
    const closeNotification = document.getElementById('close-notification');
    if (closeNotification) {
        closeNotification.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡
            MusicPlayer.toggleNotification();
        });
    }
    
    // 点击通知标签也可以展开/收起
    const notification = document.getElementById('music-notification');
    if (notification) {
        notification.addEventListener('click', () => {
            MusicPlayer.toggleNotification();
        });
    }
});
