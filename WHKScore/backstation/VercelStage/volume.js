// 音乐控制模块
const MusicPlayer = {
    // 音乐播放列表 - 使用远程CDN地址
    playlist: [
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/AURORA,HOYO-MiX---挪德卡莱-Nod-Krai.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX,Aimer---未行之路-The-Road-Not-Taken.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---Da-Capo.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---凋萎于昔时之花-Marcescent-Floret.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---回家的路-The-Long-Way-Home-(伴奏).mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---埠上风光-What-a-Delightful-Scenery.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---寒星遥遥-Lustrous-Stars.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---春尽水如天-Into-the-Yonder-and-Water.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---柔风的欢愿-Que-le-vent-soit-doux.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---流光过隙-Passage-of-an-Era.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---深夕映繁星-Nocturnal-Illumination.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---清润玉响-A-Mild-Tale-Untold.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---温情的遥忆-A-Memorable-Fancy.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---漫徊繁荫之原-Across-the-Meadows.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---灯如明月在中天-Moonlit-Lanterns.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---煦风染细浪-Mellow-Alize.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---王山遗威-Guhuas-Legacy.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---竹林溪涧-Dweller-of-Bamboo-Groves.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---繁沸之港-The-Bustling-Port-Market.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---纵然时岁流转-Throughout-the-Flow-of-Years.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---花与树的女儿们-Maidens-of-Sanctity.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---轻漪的节音-Ondulations-du-rythme.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---轻语如露-Whispering-Dewdrops.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---银鸥的回旋-Tourdion-of-Silver-Seagulls.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---陌路新交-Incontro꞉-Bellezza-e-Rosula.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---领航人的倦憩-Pilots-Rest.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/HOYO-MiX---饫沃坡野-Bounty-of-the-Fertile-Slopes.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/《回家的路》.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/一梦千宵.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/下一个远方.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/别让我担心.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/周深---Rubia.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/如果突然想起我.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/希林娜依高,HOYO-MiX---烬火-Emberfire.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/张杰,HOYO-MiX---经过.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/我不曾忘记.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/提瓦特民谣.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/知更鸟,HOYO-MiX,Chevy---希望有羽毛和翅膀.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/茶理理,TetraCalyx,Hanser---Moon-Halo.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/让风告诉你.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/鈴木愛理,HOYO-MiX---尘间星旅-Star-Odyssey.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/陈致逸,HOYO-MiX---商港的闲暇-Relaxation-in-Liyue.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/陈致逸,HOYO-MiX---杯中明月-Moon-in-Ones-Cup.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/陈致逸,HOYO-MiX---皎洁的笑颜-Moonlike-Smile.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/陈致逸,HOYO-MiX---银白的希望-Fragile-Fantasy.mp3",
    "https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/黄龄,HOYO-MiX---TruE.mp3"
],
    
    // 音乐缩略图映射 - 使用预提取的封面图片
    thumbnails: {},
    
    // 获取音乐对应的封面图片路径
    getCoverPath: function(musicPath) {
        var baseName = musicPath.replace('https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/', '').replace('.mp3', '');
        return 'https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music_cover/' + baseName + '.jpg';
    },
    
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
    
    // 通知状态
    notificationState: 'hidden', // 'hidden', 'show', 'minimized'
    
    // 自动隐藏定时器
    autoHideTimer: null,
    
    // 初始化音乐播放器
    init: function() {
        // 创建音频元素
        this.audio = new Audio();
        this.audio.volume = this.volume;
        this.audio.loop = this.isLoopSingle;
        
        // 监听音乐结束事件
        this.audio.addEventListener('ended', function() {
            // 音乐结束，完全隐藏通知
            MusicPlayer.hideNotification();
            
            if (MusicPlayer.isLoopSingle) {
                MusicPlayer.audio.play().then(function() {
                    MusicPlayer.showNotification(); // 单曲循环时显示通知
                });
            } else {
                MusicPlayer.playNext();
            }
        });
        
        // 随机选择初始播放歌曲
        this.currentIndex = Math.floor(Math.random() * this.playlist.length);
        // 添加随机参数，避免浏览器缓存影响
        var randomParam = Math.random().toString(36).substring(2, 15);
        this.audio.src = this.playlist[this.currentIndex] + '?v=' + randomParam;
        
        // 生成音乐列表
        this.generateMusicList();
        
        // 绑定通知事件
        this.bindNotificationEvents();
        
        // 默认尝试播放音乐
        this.tryPlay();
    },
    
    // 绑定通知相关事件
    bindNotificationEvents: function() {
        var closeNotification = document.getElementById('close-notification');
        if (closeNotification) {
            closeNotification.addEventListener('click', function(e) {
                e.stopPropagation(); // 阻止事件冒泡
                MusicPlayer.toggleNotification();
            });
        }
        
        var notification = document.getElementById('music-notification');
        if (notification) {
            notification.addEventListener('click', function() {
                MusicPlayer.toggleNotification();
            });
        }
    },
    
    // 检查封面图片是否存在
    checkCoverExists: function(coverPath) {
        return new Promise(function(resolve) {
            var img = new Image();
            img.onload = function() {
                resolve(true);
            };
            img.onerror = function() {
                resolve(false);
            };
            img.src = coverPath;
        });
    },
    
    // 更新关闭按钮朝向
    updateCloseButton: function() {
        var closeBtn = document.getElementById('close-notification');
        if (closeBtn) {
            if (this.notificationState === 'minimized') {
                closeBtn.textContent = '▼'; // 朝下
            } else {
                closeBtn.textContent = '▲'; // 朝上
            }
        }
    },
    
    // 显示音乐播放通知
    showNotification: function() {
        var notification = document.getElementById('music-notification');
        var musicIcon = document.getElementById('music-icon');
        var musicThumbnail = document.getElementById('music-thumbnail');
        
        if (notification && musicIcon && musicThumbnail) {
            var currentMusic = this.playlist[this.currentIndex];
            
            // 获取封面图片路径
            var coverPath = this.getCoverPath(currentMusic);
            
            // 检查封面图片是否存在
            this.checkCoverExists(coverPath).then(function(coverExists) {
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
                if (MusicPlayer.autoHideTimer) {
                    clearTimeout(MusicPlayer.autoHideTimer);
                    MusicPlayer.autoHideTimer = null;
                }
                
                // 移除所有状态类
                notification.classList.remove('hidden', 'minimized');
                
                // 设置为显示状态
                notification.classList.add('show');
                MusicPlayer.notificationState = 'show';
                
                // 更新关闭按钮朝向
                MusicPlayer.updateCloseButton();
                
                // 1秒后自动最小化
                MusicPlayer.autoHideTimer = setTimeout(function() {
                    MusicPlayer.minimizeNotification();
                }, 1000);
            });
        }
    },
    
    // 最小化音乐播放通知
    minimizeNotification: function() {
        var notification = document.getElementById('music-notification');
        if (notification) {
            notification.classList.remove('show', 'hidden');
            notification.classList.add('minimized');
            this.notificationState = 'minimized';
            this.updateCloseButton();
        }
    },
    
    // 完全隐藏音乐播放通知
    hideNotification: function() {
        var notification = document.getElementById('music-notification');
        if (notification) {
            notification.classList.remove('show', 'minimized');
            notification.classList.add('hidden');
            this.notificationState = 'hidden';
            this.updateCloseButton();
        }
    },
    
    // 切换通知的展开/收起状态
    toggleNotification: function() {
        var notification = document.getElementById('music-notification');
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
    tryPlay: function() {
        if (!this.isPlaying) {
            this.audio.play().then(function() {
                MusicPlayer.isPlaying = true;
                MusicPlayer.updateButtonState();
                MusicPlayer.showNotification(); // 显示播放通知
                MusicPlayer.updateCurrentPlaying(); // 更新当前播放高亮
            }).catch(function(error) {
                console.log('音乐播放需要用户交互:', error.message);
            });
        }
    },
    
    // 播放/暂停切换
    togglePlay: function() {
        if (this.isPlaying) {
            // 暂停播放
            this.audio.pause();
            this.isPlaying = false;
            this.updateButtonState();
            this.updateCurrentPlaying(); // 更新当前播放高亮
        } else {
            // 设置当前音频源
            var currentMusic = this.playlist[this.currentIndex];
            if (!this.audio.src || !this.audio.src.includes(currentMusic.replace(/\?.*/, ''))) {
                var randomParam = Math.random().toString(36).substring(2, 15);
                this.audio.src = currentMusic + '?v=' + randomParam;
            }
            
            // 尝试播放，只有成功后才更新状态
            this.audio.play().then(function() {
                MusicPlayer.isPlaying = true;
                MusicPlayer.showNotification(); // 恢复播放时显示通知
                MusicPlayer.updateButtonState();
                MusicPlayer.updateCurrentPlaying(); // 更新当前播放高亮
            }).catch(function(error) {
                console.log('音乐播放需要用户交互:', error.message);
                // 播放失败，保持isPlaying为false
                MusicPlayer.isPlaying = false;
                MusicPlayer.updateButtonState();
            });
        }
    },
    
    // 播放下一首
    playNext: function() {
        // 更新播放索引
        this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
        
        // 先更新当前播放高亮，提升用户体验
        this.updateCurrentPlaying();
        
        // 设置当前音频源
        var currentMusic = this.playlist[this.currentIndex];
        var randomParam = Math.random().toString(36).substring(2, 15);
        this.audio.src = currentMusic + '?v=' + randomParam;
        
        // 尝试播放
        this.audio.play().then(function() {
            MusicPlayer.isPlaying = true;
            MusicPlayer.showNotification(); // 显示播放通知
            MusicPlayer.updateButtonState();
        }).catch(function(error) {
            console.error('播放下一首失败:', error);
            // 播放失败，保持isPlaying为false
            MusicPlayer.isPlaying = false;
            MusicPlayer.updateButtonState();
        });
    },
    
    // 播放上一首
    playPrev: function() {
        // 更新播放索引
        this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
        
        // 先更新当前播放高亮，提升用户体验
        this.updateCurrentPlaying();
        
        // 设置当前音频源
        var currentMusic = this.playlist[this.currentIndex];
        var randomParam = Math.random().toString(36).substring(2, 15);
        this.audio.src = currentMusic + '?v=' + randomParam;
        
        // 尝试播放
        this.audio.play().then(function() {
            MusicPlayer.isPlaying = true;
            MusicPlayer.showNotification(); // 显示播放通知
            MusicPlayer.updateButtonState();
        }).catch(function(error) {
            console.error('播放上一首失败:', error);
            // 播放失败，保持isPlaying为false
            MusicPlayer.isPlaying = false;
            MusicPlayer.updateButtonState();
        });
    },
    
    // 设置音量
    setVolume: function(volume) {
        this.volume = volume;
        if (this.audio) {
            this.audio.volume = volume;
        }
    },
    
    // 切换循环单曲
    toggleLoopSingle: function() {
        this.isLoopSingle = !this.isLoopSingle;
        if (this.audio) {
            this.audio.loop = this.isLoopSingle;
        }
        if (this.isLoopSingle) {
            this.isLoopList = false;
        }
    },
    
    // 切换循环列表
    toggleLoopList: function() {
        this.isLoopList = !this.isLoopList;
        if (this.isLoopList) {
            this.isLoopSingle = false;
            if (this.audio) {
                this.audio.loop = false;
            }
        }
    },
    
    // 更新按钮状态
    updateButtonState: function() {
        var button = document.getElementById('music-toggle');
        if (button) {
            button.checked = this.isPlaying;
        }
    },
    
    // 自动生成音乐列表
    generateMusicList: function() {
        var musicList = document.getElementById('music-list');
        if (!musicList) {
            console.log('音乐列表元素不存在');
            return;
        }
        
        // 清空现有列表
        musicList.innerHTML = '';
        
        // 遍历播放列表，生成li元素
        for (var i = 0; i < this.playlist.length; i++) {
            var musicPath = this.playlist[i];
            // 提取音乐名称
            var musicName = musicPath.replace('https://static-mp-54c94446-e6a2-431f-84c4-ed0d181ae263.next.bspapp.com/music/music/', '').replace('.mp3', '');
            
            var li = document.createElement('li');
            li.textContent = musicName;
            li.dataset.index = i;
            
            // 添加波浪动画元素
            var wave = document.createElement('span');
            wave.className = 'music-wave';
            li.appendChild(wave);
            
            // 添加点击事件
            li.addEventListener('click', function() {
                var index = parseInt(this.dataset.index);
                MusicPlayer.currentIndex = index;
                // 添加随机参数，避免浏览器缓存影响
                var randomParam = Math.random().toString(36).substring(2, 15);
                MusicPlayer.audio.src = MusicPlayer.playlist[index] + '?v=' + randomParam;
                MusicPlayer.audio.play().then(function() {
                    MusicPlayer.isPlaying = true;
                    MusicPlayer.updateButtonState();
                    MusicPlayer.showNotification();
                    MusicPlayer.updateCurrentPlaying();
                }).catch(function(error) {
                    console.error('播放选中歌曲失败:', error);
                });
            });
            
            musicList.appendChild(li);
        }
    },
    
    // 更新当前播放音乐的高亮和波浪动画
    updateCurrentPlaying: function() {
        var musicList = document.getElementById('music-list');
        if (!musicList) return;
        
        // 移除所有高亮样式
        var allLis = musicList.querySelectorAll('li');
        for (var i = 0; i < allLis.length; i++) {
            allLis[i].classList.remove('playing');
        }
        
        // 高亮当前播放的音乐
        var currentLi = musicList.querySelector('[data-index="' + this.currentIndex + '"]');
        if (currentLi) {
            currentLi.classList.add('playing');
        }
    }
};

// 初始化音乐播放器
window.addEventListener('DOMContentLoaded', function() {
    MusicPlayer.init();
    
    // 添加用户交互事件，尝试激活音乐
    document.addEventListener('mousemove', function() {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    document.addEventListener('touchstart', function() {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    document.addEventListener('click', function() {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    // 滚动事件
    document.addEventListener('scroll', function() {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    // 键盘按键事件
    document.addEventListener('keydown', function() {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    // 鼠标悬停事件
    document.addEventListener('mouseover', function() {
        MusicPlayer.tryPlay();
    }, { once: true });
    
    // 3秒后尝试激活音乐
    setTimeout(function() {
        MusicPlayer.tryPlay();
    }, 3000);
    
    // 绑定开关事件
    var toggle = document.getElementById('music-toggle');
    if (toggle) {
        toggle.addEventListener('change', function() {
            MusicPlayer.togglePlay();
        });
    }
});
