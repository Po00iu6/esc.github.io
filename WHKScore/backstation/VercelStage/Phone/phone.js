// 页面元素获取
const homeScreen = document.getElementById('home-screen');
const splashScreen = document.getElementById('splash-screen');
const chatListScreen = document.getElementById('chat-list-screen');
const chatScreen = document.getElementById('chat-screen');
const wechatApp = document.getElementById('wechat-app');
const friendItem = document.getElementById('friend-item');
const backBtn = document.getElementById('back-btn');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');
const backButton = document.getElementById('back-button');
const homeButton = document.getElementById('home-button');
const statusTime = document.getElementById('status-time');
const unreadBadge = document.getElementById('unread-badge');
const contextMenu = document.getElementById('context-menu');
const copyBtn = document.getElementById('copy-btn');
const deleteBtn = document.getElementById('delete-btn');
const viewImageBtn = document.getElementById('view-image-btn');
const saveImageBtn = document.getElementById('save-image-btn');
const forwardImageBtn = document.getElementById('forward-image-btn');
const loadingIndicator = document.getElementById('loading-indicator');
const emojiPicker = document.getElementById('emoji-picker');
const emojiList = document.getElementById('emoji-list');
const emojiBtn = document.querySelector('.input-tools .tool-btn:nth-child(1)');
const imagePicker = document.getElementById('image-picker');
const imagePickerClose = document.getElementById('image-picker-close');
const imageBtn = document.querySelector('.input-tools .tool-btn:nth-child(2)');
const voiceBtn = document.getElementById('voice-btn');
const voiceRecording = document.getElementById('voice-recording');
const voiceRecordingCancel = document.querySelector('.voice-recording-cancel');
const voiceRecordingDuration = document.getElementById('voice-recording-duration');
const voiceToolBtn = document.querySelector('.input-tools .tool-btn:nth-child(3)');

// 页面切换函数
function switchScreen(toScreen, playAnimation = true, direction = 'forward') {
    // 获取当前活跃屏幕
    const currentScreen = document.querySelector('.screen.active');
    
    // 如果当前已经在目标屏幕且不需要播放动画，直接返回
    if (currentScreen === toScreen && !playAnimation) {
        return;
    }
    
    if (currentScreen) {
        if (playAnimation) {
            // 添加退出动画，根据方向选择正向或反向
            if (direction === 'forward') {
                currentScreen.classList.add('animate-out');
            } else {
                currentScreen.classList.add('animate-out-reverse');
            }
        }
        
        // 等待动画结束后隐藏当前屏幕
        setTimeout(() => {
            if (playAnimation) {
                currentScreen.classList.remove('active', 'animate-out', 'animate-out-reverse');
            } else {
                currentScreen.classList.remove('active');
            }
            
            // 显示目标屏幕并添加进入动画，根据方向选择正向或反向
            if (playAnimation) {
                if (direction === 'forward') {
                    toScreen.classList.add('active', 'animate-in');
                } else {
                    toScreen.classList.add('active', 'animate-in-reverse');
                }
                
                // 动画结束后移除动画类
                setTimeout(() => {
                    toScreen.classList.remove('animate-in', 'animate-in-reverse');
                }, 500);
            } else {
                toScreen.classList.add('active');
            }
        }, playAnimation ? 500 : 0);
    } else {
        // 如果没有当前活跃屏幕，直接显示目标屏幕
        toScreen.classList.add('active');
    }
}



// 聊天消息历史记录
let chatHistory = {
    'friend-item': {
        messages: [],
        lastMessage: '点击开始聊天',
        lastTime: getCurrentTime(),
        lastTimestamp: null // 最后显示的时间戳
    }
};

// 更新好友列表显示
function updateChatListItem() {
    const friendItem = document.getElementById('friend-item');
    const lastMessageElement = friendItem.querySelector('.last-message');
    const timeElement = friendItem.querySelector('.time');
    
    lastMessageElement.textContent = chatHistory['friend-item'].lastMessage;
    timeElement.textContent = chatHistory['friend-item'].lastTime;
}

// 检查是否需要显示时间戳（5分钟规则）
function checkTimestampNeeded(currentTime) {
    const chatData = chatHistory['friend-item'];
    
    // 如果没有消息或没有最后时间戳，需要显示时间戳
    if (chatData.messages.length === 0 || !chatData.lastTimestamp) {
        chatData.lastTimestamp = currentTime;
        return true;
    }
    
    // 解析时间字符串为分钟数
    const parseTime = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    };
    
    const currentMinutes = parseTime(currentTime);
    const lastMinutes = parseTime(chatData.lastTimestamp);
    
    // 计算时间差（分钟）
    const timeDiff = Math.abs(currentMinutes - lastMinutes);
    
    // 如果超过5分钟，显示时间戳
    if (timeDiff >= 5) {
        chatData.lastTimestamp = currentTime;
        return true;
    }
    
    return false;
}

// 发送消息函数
function sendMessage() {
    let messageText = messageInput.value.trim();
    if (messageText === '') return;
    
    // 处理表情，添加span标签
    let processedText = messageText;
    // 正则表达式匹配表情
    const emojiRegex = /([\u{1F000}-\u{1FFFF}])/gu;
    processedText = processedText.replace(emojiRegex, '<span class="emoji">$1</span>');
    
    // 检测是否为纯表情消息
    const isPureEmoji = emojiRegex.test(messageText) && messageText.replace(emojiRegex, '').trim() === '';
    const bubbleClass = isPureEmoji ? 'message-bubble pure-emoji' : 'message-bubble';
    
    // 检查是否需要显示时间戳
    const currentTime = getCurrentTime();
    const shouldShowTimestamp = checkTimestampNeeded(currentTime);
    
    // 如果需要显示时间戳，先添加时间戳元素
    if (shouldShowTimestamp) {
        const timestampElement = document.createElement('div');
        timestampElement.className = 'timestamp';
        timestampElement.textContent = currentTime;
        chatMessages.appendChild(timestampElement);
    }
    
    // 创建消息元素
    const messageElement = document.createElement('div');
    messageElement.className = 'message sent';
    
    let messageHTML = `
        <div class="message-content">
            <div class="avatar">
                <img src="wofang.jpg" alt="我方" class="avatar-img">
            </div>
            <div class="message-bubble-container">
                <div class="${bubbleClass}">${processedText}</div>
            </div>
        </div>
    `;
    
    messageElement.innerHTML = messageHTML;
    
    // 添加到聊天消息区域
    chatMessages.appendChild(messageElement);
    
    // 更新聊天历史
    chatHistory['friend-item'].messages.push({
        text: messageText,
        type: 'sent',
        time: currentTime
    });
    
    // 更新最近消息和时间
    chatHistory['friend-item'].lastMessage = messageText;
    chatHistory['friend-item'].lastTime = currentTime;
    
    // 更新好友列表显示
    updateChatListItem();
    
    // 清空输入框
    messageInput.value = '';
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // 模拟回复（根据关键词触发）
    setTimeout(() => {
        let replyText = '收到你的消息啦~';
        
        // 检查消息中是否包含关键词
        const lowerCaseText = messageText.toLowerCase();
        for (const [keyword, reply] of Object.entries(keywordReplies)) {
            if (lowerCaseText.includes(keyword.toLowerCase())) {
                replyText = reply;
                break;
            }
        }
        
        const replyTime = getCurrentTime();
        
        // 检查是否需要显示时间戳
        const shouldShowTimestamp = checkTimestampNeeded(replyTime);
        
        // 如果需要显示时间戳，先添加时间戳元素
        if (shouldShowTimestamp) {
            const timestampElement = document.createElement('div');
            timestampElement.className = 'timestamp';
            timestampElement.textContent = replyTime;
            chatMessages.appendChild(timestampElement);
        }
        
        const replyElement = document.createElement('div');
        replyElement.className = 'message received';
        
        let replyHTML = `
            <div class="message-content">
                <div class="avatar">
                    <img src="Avatar.jpg" alt="对方" class="avatar-img">
                </div>
                <div class="message-bubble-container">
                    <div class="message-bubble">${replyText}</div>
                </div>
            </div>
        `;
        
        replyElement.innerHTML = replyHTML;
        
        chatMessages.appendChild(replyElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // 更新聊天历史
        chatHistory['friend-item'].messages.push({
            text: replyText,
            type: 'received',
            time: replyTime
        });
        
        // 更新最近消息和时间
        chatHistory['friend-item'].lastMessage = replyText;
        chatHistory['friend-item'].lastTime = replyTime;
        
        // 更新好友列表显示
        updateChatListItem();
    }, 1000);
}

// 发送图片消息函数
function sendImageMessage(imageUrl) {
    // 检查是否需要显示时间戳
    const currentTime = getCurrentTime();
    const shouldShowTimestamp = checkTimestampNeeded(currentTime);
    
    // 如果需要显示时间戳，先添加时间戳元素
    if (shouldShowTimestamp) {
        const timestampElement = document.createElement('div');
        timestampElement.className = 'timestamp';
        timestampElement.textContent = currentTime;
        chatMessages.appendChild(timestampElement);
    }
    
    // 创建图片消息元素
    const messageElement = document.createElement('div');
    messageElement.className = 'message sent';
    
    let messageHTML = `
        <div class="message-content">
            <div class="avatar">
                <img src="wofang.jpg" alt="我方" class="avatar-img">
            </div>
            <div class="message-bubble-container">
                <div class="message-image sent">
                    <img src="${imageUrl}" alt="图片消息">
                </div>
            </div>
        </div>
    `;
    
    messageElement.innerHTML = messageHTML;
    
    // 添加到聊天消息区域
    chatMessages.appendChild(messageElement);
    
    // 更新聊天历史
    chatHistory['friend-item'].messages.push({
        text: '[图片]',
        type: 'sent',
        time: currentTime,
        isImage: true
    });
    
    // 更新最近消息和时间
    chatHistory['friend-item'].lastMessage = '[图片]';
    chatHistory['friend-item'].lastTime = currentTime;
    
    // 更新好友列表显示
    updateChatListItem();
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // 模拟回复（这里可以根据需要扩展）
    setTimeout(() => {
        const replyText = '收到你的图片啦~';
        const replyTime = getCurrentTime();
        
        // 检查是否需要显示时间戳
        const shouldShowTimestamp = checkTimestampNeeded(replyTime);
        
        const replyElement = document.createElement('div');
        replyElement.className = 'message received';
        
        let replyHTML = '';
        
        // 如果需要显示时间戳，添加时间戳元素
        if (shouldShowTimestamp) {
            replyHTML += `<div class="timestamp">${replyTime}</div>`;
        }
        
        replyHTML += `
            <div class="message-content">
                <div class="avatar">
                    <img src="Avatar.jpg" alt="对方" class="avatar-img">
                </div>
                <div class="message-bubble-container">
                    <div class="message-bubble">${replyText}</div>
                </div>
            </div>
        `;
        
        replyElement.innerHTML = replyHTML;
        
        chatMessages.appendChild(replyElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // 更新聊天历史
        chatHistory['friend-item'].messages.push({
            text: replyText,
            type: 'received',
            time: replyTime
        });
        
        // 更新最近消息和时间
        chatHistory['friend-item'].lastMessage = replyText;
        chatHistory['friend-item'].lastTime = replyTime;
        
        // 更新好友列表显示
        updateChatListItem();
    }, 1000);
}

// 获取当前时间
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// 初始化函数
function init() {
    // 显示加载指示器
    function showLoading() {
        if (loadingIndicator) {
            loadingIndicator.classList.add('show');
        }
    }
    
    // 隐藏加载指示器
    function hideLoading() {
        if (loadingIndicator) {
            loadingIndicator.classList.remove('show');
        }
    }
    
    // 微信图标点击事件
    wechatApp.addEventListener('click', () => {
        // 显示加载指示器
        showLoading();
        
        // 获取微信图标的位置和尺寸
        const appRect = wechatApp.getBoundingClientRect();
        const phoneRect = document.querySelector('.phone-container').getBoundingClientRect();
        
        // 创建一个虚像元素
        const appClone = document.createElement('div');
        appClone.style.position = 'absolute';
        appClone.style.left = `${appRect.left - phoneRect.left}px`;
        appClone.style.top = `${appRect.top - phoneRect.top}px`;
        appClone.style.width = `${appRect.width}px`;
        appClone.style.height = `${appRect.height}px`;
        appClone.style.backgroundImage = 'url(weixin.png)';
        appClone.style.backgroundSize = 'cover';
        appClone.style.backgroundPosition = 'center';
        appClone.style.borderRadius = '16px';
        appClone.style.zIndex = '1000';
        appClone.style.animation = 'appZoomIn 0.2s ease forwards';
        
        // 添加到手机容器中
        document.querySelector('.phone-container').appendChild(appClone);
        
        // 等待放大动画结束
        setTimeout(() => {
            // 显示开屏页
            switchScreen(splashScreen, false);
            
            // 移除虚像元素
            appClone.remove();
            
            // 开屏页2秒后自动跳转到聊天列表
            setTimeout(() => {
                switchScreen(chatListScreen, true, 'forward');
                // 隐藏加载指示器
                hideLoading();
            }, 2000);
        }, 200);
    });
    
    // 好友项点击事件
    friendItem.addEventListener('click', () => {
        // 清空未读消息数量
        if (unreadBadge) {
            unreadBadge.textContent = '';
        }
        switchScreen(chatScreen, true, 'forward');
    });
    
    // 返回按钮点击事件
    backBtn.addEventListener('click', () => {
        switchScreen(chatListScreen, true, 'back');
    });
    
    // 底部返回键点击事件
    backButton.addEventListener('click', () => {
        const currentScreen = document.querySelector('.screen.active');
        if (currentScreen === chatScreen) {
            switchScreen(chatListScreen, true, 'back');
        } else if (currentScreen === chatListScreen) {
            switchScreen(homeScreen, true, 'back');
        }
    });
    
    // 底部主页键点击事件
    homeButton.addEventListener('click', () => {
        // 当前已经在主页时，不播放动画
        const currentScreen = document.querySelector('.screen.active');
        if (currentScreen === homeScreen) {
            switchScreen(homeScreen, false);
        } else {
            switchScreen(homeScreen, true, 'back');
        }
    });
    
    // 发送按钮点击事件
    sendBtn.addEventListener('click', sendMessage);
    
    // 输入框回车发送
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // 自动调整输入框高度
    function adjustTextareaHeight() {
        messageInput.style.height = 'auto';
        messageInput.style.height = Math.min(messageInput.scrollHeight, 104) + 'px';
    }
    
    // 输入框内容变化时，启用/禁用发送按钮并调整高度
    messageInput.addEventListener('input', () => {
        sendBtn.disabled = messageInput.value.trim() === '';
        adjustTextareaHeight();
    });
    
    // 初始化时调整一次高度
    adjustTextareaHeight();
    
    // 初始禁用发送按钮
    sendBtn.disabled = true;
    
    // 设置初始时间
    const timeElement = document.querySelector('.time');
    timeElement.textContent = getCurrentTime();
    statusTime.textContent = getCurrentTime();
    
    // 每分钟更新一次时间
    setInterval(() => {
        const currentTime = getCurrentTime();
        timeElement.textContent = currentTime;
        statusTime.textContent = currentTime;
    }, 60000);
    
    // 长按菜单功能
    let selectedMessage = null;
    let selectedMessageType = 'text'; // 'text' 或 'image'
    
    // 监听消息长按事件
    chatMessages.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        
        const message = e.target.closest('.message');
        if (message) {
            selectedMessage = message;
            
            // 判断消息类型
            const isImageMessage = message.querySelector('.message-image') !== null;
            selectedMessageType = isImageMessage ? 'image' : 'text';
            
            // 显示/隐藏相应的菜单项
            if (isImageMessage) {
                // 图片消息
                copyBtn.style.display = 'none';
                deleteBtn.style.display = 'block';
                viewImageBtn.style.display = 'block';
                saveImageBtn.style.display = 'block';
                forwardImageBtn.style.display = 'block';
            } else {
                // 文本消息
                copyBtn.style.display = 'block';
                deleteBtn.style.display = 'block';
                viewImageBtn.style.display = 'none';
                saveImageBtn.style.display = 'none';
                forwardImageBtn.style.display = 'none';
            }
            
            // 获取长按位置
            const rect = chatMessages.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // 显示菜单
            contextMenu.style.left = `${x}px`;
            contextMenu.style.top = `${y}px`;
            contextMenu.classList.add('show');
        }
    });
    
    // 点击复制按钮
    copyBtn.addEventListener('click', () => {
        if (selectedMessage && selectedMessageType === 'text') {
            const messageText = selectedMessage.querySelector('.message-bubble').textContent;
            navigator.clipboard.writeText(messageText).then(() => {
                // 可以添加一个复制成功的提示
            }).catch(err => {
                console.error('复制失败:', err);
            });
        }
        contextMenu.classList.remove('show');
    });
    
    // 点击删除按钮
    deleteBtn.addEventListener('click', () => {
        if (selectedMessage) {
            selectedMessage.remove();
        }
        contextMenu.classList.remove('show');
    });
    
    // 点击查看大图按钮
    viewImageBtn.addEventListener('click', () => {
        if (selectedMessage && selectedMessageType === 'image') {
            const imageUrl = selectedMessage.querySelector('.message-image img').src;
            // 这里可以实现查看大图的功能
            alert(`查看大图: ${imageUrl}`);
        }
        contextMenu.classList.remove('show');
    });
    
    // 点击保存图片按钮
    saveImageBtn.addEventListener('click', () => {
        if (selectedMessage && selectedMessageType === 'image') {
            const imageUrl = selectedMessage.querySelector('.message-image img').src;
            // 这里可以实现保存图片的功能
            alert(`保存图片: ${imageUrl}`);
        }
        contextMenu.classList.remove('show');
    });
    
    // 点击转发按钮
    forwardImageBtn.addEventListener('click', () => {
        if (selectedMessage && selectedMessageType === 'image') {
            // 这里可以实现转发图片的功能
            alert('转发图片');
        }
        contextMenu.classList.remove('show');
    });
    
    // 点击其他地方关闭菜单
    document.addEventListener('click', (e) => {
        if (!contextMenu.contains(e.target) && !e.target.closest('.message')) {
            contextMenu.classList.remove('show');
        }
    });
    
    // 点击聊天消息区域外的地方关闭菜单
    chatScreen.addEventListener('click', (e) => {
        if (!contextMenu.contains(e.target) && !e.target.closest('.message')) {
            contextMenu.classList.remove('show');
        }
    });
    
    // 表情功能
    // 表情名称映射表，用于搜索
    const emojiNames = {
        '😀': '微笑', '😃': '开心', '😄': '大笑', '😁': '露齿笑', '😆': '笑出眼泪',
        '😅': '汗笑', '🤣': '捧腹笑', '😂': '笑哭', '🙂': '微笑', '🙃': '倒脸',
        '😉': '眨眼', '😊': '笑脸', '😇': '天使', '🥰': '爱心眼', '😍': '花痴',
        '🤩': '星星眼', '😘': '飞吻', '😗': '亲吻', '😙': '亲吻', '😚': '亲吻',
        '😋': '美味', '😛': '吐舌', '😝': '吐舌', '😜': '歪嘴', '🤪': '疯癫',
        '🤨': '挑眉', '🧐': '思考', '🤓': '书呆子', '😎': '酷', '🤩': '惊喜',
        '🥳': '派对', '😏': '得意', '😒': '无语', '😞': '难过', '😔': '伤心',
        '😟': '担忧', '😕': '困惑', '🙁': '皱眉', '☹️': '皱眉', '😣': '痛苦',
        '😖': '无奈', '😫': '疲惫', '😩': '崩溃', '🥺': '恳求', '😢': '哭泣',
        '😭': '大哭', '😤': '生气', '😠': '愤怒', '😡': '暴怒', '🤬': '咒骂',
        '🤯': '爆炸', '😳': '害羞', '🥵': '热', '🥶': '冷', '😱': '惊恐',
        '😨': '害怕', '😰': '恐惧', '😥': '冷汗', '😓': '出汗', '🤗': '拥抱',
        '🤔': '思考', '🤭': '捂嘴笑', '🤫': '安静', '🤥': '说谎', '😶': '无语',
        '😐': '冷漠', '😑': '无语', '😬': '尴尬', '🙄': '白眼', '😯': '惊讶',
        '😦': '震惊', '😧': '惊恐', '😮': '惊讶', '😲': '震惊', '🥱': '打哈欠',
        '😴': '睡觉', '🤤': '流口水', '😪': '困倦', '😵': '眩晕', '🤐': '闭嘴',
        '🥴': '醉了', '🤢': '恶心', '🤮': '呕吐', '🤧': '打喷嚏', '😷': '戴口罩',
        '🤒': '发烧', '🤕': '受伤', '🐶': '狗', '🐱': '猫', '🐭': '老鼠',
        '🐹': '仓鼠', '🐰': '兔子', '🦊': '狐狸', '🐻': '熊', '🐼': '熊猫',
        '🐨': '考拉', '🐯': '老虎', '🦁': '狮子', '🐮': '牛', '🐷': '猪',
        '🐽': '猪鼻子', '🐸': '青蛙', '🐵': '猴子', '🙈': '捂眼猴', '🙉': '捂耳猴',
        '🙊': '捂嘴猴', '🐒': '猴子', '🐔': '鸡', '🐧': '企鹅', '🐦': '鸟',
        '🐤': '小鸡', '🐣': '鸡蛋', '🐥': '小鸡', '🦆': '鸭子', '🦅': '鹰',
        '🦉': '猫头鹰', '🦇': '蝙蝠', '🐺': '狼', '🐗': '野猪', '🐴': '马',
        '🦄': '独角兽', '🐝': '蜜蜂', '🐛': '虫子', '🦋': '蝴蝶', '🐌': '蜗牛',
        '🐞': '瓢虫', '🐜': '蚂蚁', '🦟': '蚊子', '🦗': '蟋蟀', '🕷️': '蜘蛛',
        '🕸️': '蜘蛛网', '🦂': '蝎子', '🐢': '乌龟', '🐍': '蛇', '🦎': '蜥蜴',
        '🦖': '恐龙', '🦕': '恐龙', '🐙': '章鱼', '🦑': '鱿鱼', '🦐': '虾',
        '🦞': '龙虾', '🦀': '螃蟹', '🐡': '河豚', '🐠': '鱼', '🐟': '鱼',
        '🐬': '海豚', '🐳': '鲸鱼', '🐋': '鲸鱼', '🦈': '鲨鱼', '🐊': '鳄鱼',
        '🐅': '老虎', '🐆': '豹子', '🦓': '斑马', '🦍': '大猩猩', '🦧': '猩猩',
        '🐘': '大象', '🦛': '河马', '🦏': '犀牛', '🐪': '骆驼', '🐫': '骆驼',
        '🦒': '长颈鹿', '🦘': '袋鼠', '🐃': '牛', '🐂': '牛', '🐄': '奶牛',
        '🐎': '马', '🐖': '猪', '🐏': '羊', '🐑': '羊', '🦙': '羊驼',
        '🐐': '山羊', '🦌': '鹿', '🐕': '狗', '🐩': '狗', '🦮': '导盲犬',
        '🐕‍🦺': '搜救犬', '🐈': '猫', '🐓': '鸡', '🦃': '火鸡', '🦚': '孔雀',
        '🦜': '鹦鹉', '🦢': '天鹅', '🦩': '火烈鸟', '🕊️': '鸽子', '🐇': '兔子',
        '🦝': '浣熊', '🦨': '臭鼬', '🦡': '獾', '🦦': '水獭', '🦥': '树懒',
        '🐁': '老鼠', '🐀': '老鼠', '🐿️': '松鼠', '🦔': '刺猬', '🍎': '苹果',
        '🍐': '梨', '🍊': '橘子', '🍋': '柠檬', '🍌': '香蕉', '🍉': '西瓜',
        '🍇': '葡萄', '🍓': '草莓', '🫐': '蓝莓', '🍈': '甜瓜', '🍒': '樱桃',
        '🍑': '桃子', '🥭': '芒果', '🍍': '菠萝', '🥥': '椰子', '🥝': '猕猴桃',
        '🍅': '番茄', '🍆': '茄子', '🥑': '牛油果', '🥦': '西兰花', '🥬': '生菜',
        '🥒': '黄瓜', '🌶️': '辣椒', '🫑': '甜椒', '🌽': '玉米', '🥕': '胡萝卜',
        '🫒': '橄榄', '🧄': '大蒜', '🧅': '洋葱', '🥔': '土豆', '🍠': '红薯',
        '🥐': '牛角包', '🥖': '法棍', '🍞': '面包', '🥨': '椒盐卷饼', '🥯': '贝果',
        '🧀': '奶酪', '🥚': '鸡蛋', '🍳': '煎蛋', '🧈': '黄油', '🥞': '煎饼',
        '🧇': '华夫饼', '🥓': '培根', '🥩': '牛排', '🍗': '鸡腿', '🍖': '肉',
        '🦴': '骨头', '🌭': '热狗', '🍔': '汉堡', '🍟': '薯条', '🍕': '披萨',
        '🫓': '饼', '🥪': '三明治', '🥙': '墨西哥卷饼', '🧆': '丸子', '🌮': '墨西哥卷饼',
        '🌯': '卷饼', '🫔': '墨西哥卷饼', '🥗': '沙拉', '🥘': '炖菜', '🫕': '汤',
        '🥫': '罐头', '🍝': '意大利面', '🍜': '面条', '🍲': '火锅', '🍛': '咖喱饭',
        '🍣': '寿司', '🍱': '便当', '🥟': '饺子', '🦪': '生蚝', '🍤': '虾',
        '🍙': '饭团', '🍚': '米饭', '🍘': '仙贝', '🍥': '鱼板', '🥠': '幸运饼干',
        '🥮': '月饼', '🍢': '烤串', '🍡': '糖葫芦', '🍧': '刨冰', '🍨': '冰淇淋',
        '🍦': '冰淇淋', '🥧': '派', '🧁': '杯子蛋糕', '🍰': '蛋糕', '🎂': '生日蛋糕',
        '🍮': '布丁', '🍭': '棒棒糖', '🍬': '糖果', '🍫': '巧克力', '🍿': '爆米花',
        '🧂': '盐', '🥤': '饮料', '🧃': '果汁', '🧋': '奶茶', '🍵': '茶',
        '🍶': '清酒', '🍺': '啤酒', '🍻': '干杯', '🥂': '香槟', '🍷': '红酒',
        '🥃': '威士忌', '🍸': '鸡尾酒', '🍹': '鸡尾酒', '🧉': '马黛茶', '🧊': '冰块',
        '🍼': '奶瓶', '⚽': '足球', '🏀': '篮球', '🏈': '橄榄球', '⚾': '棒球',
        '🥎': '垒球', '🎾': '网球', '🏐': '排球', '🏉': '橄榄球', '🥏': '飞盘',
        '🎱': '台球', '🪀': '悠悠球', '🏓': '乒乓球', '🏸': '羽毛球', '🏒': '冰球',
        '🏑': '曲棍球', '🥍': '长曲棍球', '🏏': '板球', '🪃': '飞镖', '🥅': '球门',
        '⛳': '高尔夫', '🪁': '风筝', '🏹': '射箭', '🎣': '钓鱼', '🤿': '潜水',
        '🥊': '拳击', '🥋': '武术', '🎽': '运动衫', '🛹': '滑板', '🛼': '旱冰鞋',
        '🛷': '雪橇', '⛸️': '滑冰', '🥌': '冰壶', '🎿': '滑雪板', '⛷️': '滑雪',
        '🏂': '单板滑雪', '🪂': '跳伞', '🏋️‍♂️': '举重', '🏋️‍♀️': '举重', '🤸‍♂️': '体操',
        '🤸‍♀️': '体操', '🤼‍♂️': '摔跤', '🤼‍♀️': '摔跤', '🤺': '击剑', '🤾‍♂️': '手球',
        '🤾‍♀️': '手球', '🏌️‍♂️': '高尔夫', '🏌️‍♀️': '高尔夫', '🏇': '赛马', '🧘‍♂️': '瑜伽',
        '🧘‍♀️': '瑜伽', '🚴‍♂️': '骑自行车', '🚴‍♀️': '骑自行车', '🚵‍♂️': '山地自行车', '🚵‍♀️': '山地自行车',
        '🚶‍♂️': '步行', '🚶‍♀️': '步行', '🧍‍♂️': '站立', '🧍‍♀️': '站立', '🧎‍♂️': '跪拜',
        '🧎‍♀️': '跪拜', '🧏‍♂️': '耳聋', '🧏‍♀️': '耳聋', '🏃‍♂️': '跑步', '🏃‍♀️': '跑步',
        '💃': '跳舞', '🕺': '跳舞', '🕴️': '模特步', '👯‍♂️': '跳舞', '👯‍♀️': '跳舞',
        '🧖‍♂️': '桑拿', '🧖‍♀️': '桑拿', '🧗‍♂️': '攀岩', '🧗‍♀️': '攀岩', '🚣‍♂️': '划船',
        '🚣‍♀️': '划船', '🏊‍♂️': '游泳', '🏊‍♀️': '游泳', '⛹️‍♂️': '打篮球', '⛹️‍♀️': '打篮球',
        '🤽‍♂️': '水球', '🤽‍♀️': '水球', '🤸‍♂️': '体操', '🤸‍♀️': '体操', '🤹‍♂️': '杂耍',
        '🤹‍♀️': '杂耍', '🧘‍♂️': '瑜伽', '🧘‍♀️': '瑜伽'
    };
    
    // 表情数据库，按类别分类
    const emojiDatabase = {
        recent: ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃'],
        face: ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕'],
        animal: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷️', '🕸️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🕊️', '🐇', '🦝', '🦨', '🦡', '🦦', '🦥', '🐁', '🐀', '🐿️', '🦔'],
        food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥖', '🍞', '🥨', '🥯', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🧂', '🥤', '🧃', '🧋', '🍵', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🧊', '🍼'],
        activity: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛼', '🛷', '⛸️', '🥌', '🎿', '⛷️', '🏂', '🪂', '🏋️‍♂️', '🏋️‍♀️', '🤸‍♂️', '🤸‍♀️', '🤼‍♂️', '🤼‍♀️', '🤺', '🤾‍♂️', '🤾‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏇', '🧘‍♂️', '🧘‍♀️', '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️', '🚶‍♂️', '🚶‍♀️', '🧍‍♂️', '🧍‍♀️', '🧎‍♂️', '🧎‍♀️', '🧏‍♂️', '🧏‍♀️', '🏃‍♂️', '🏃‍♀️', '💃', '🕺', '🕴️', '👯‍♂️', '👯‍♀️', '🧖‍♂️', '🧖‍♀️', '🧗‍♂️', '🧗‍♀️', '🚣‍♂️', '🚣‍♀️', '🏊‍♂️', '🏊‍♀️', '⛹️‍♂️', '⛹️‍♀️', '🤽‍♂️', '🤽‍♀️', '🤸‍♂️', '🤸‍♀️', '🤹‍♂️', '🤹‍♀️', '🧘‍♂️', '🧘‍♀️'],
        travel: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🛴', '🚲', '🛵', '🏍️', '🛺', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '✈️', '🛫', '🛬', '🛩️', '💺', '🛰️', '🚀', '🛸', '⛵', '🚤', '🛥️', '🛳️', '⛴️', '🚢', '⚓', '🚧', '⛽', '🚨', '🚥', '🚦', '🛑', '🚏', '🗺️', '🗿', '🗽', '🗼', '🏰', '🏯', '🏟️', '🎡', '🎢', '🎠', '⛲', '🏖️', '🏝️', '🏜️', '🏕️', '🏔️', '⛰️', '🌋', '🗻', '🏂', '🏃‍♀️', '🏄‍♂️', '🏄‍♀️', '🏊‍♂️', '🏊‍♀️', '🚣‍♂️', '🚣‍♀️', '🧗‍♂️', '🧗‍♀️', '🚵‍♂️', '🚵‍♀️', '🚴‍♂️', '🚴‍♀️', '🚶‍♂️', '🚶‍♀️', '👣', '🌍', '🌎', '🌏', '🗺️', '🗾', '🗿'],
        object: ['⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏰', '⏲️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️', '🪔', '🏮', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📓', '📒', '📃', '📜', '📄', '📰', '🗞️', '📑', '🔖', '🏷️', '💰', '💴', '💵', '💶', '💷', '💸', '💳', '💎', '⚖️', '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🪓', '🪚', '🪛', '🪜', '🔩', '⚙️', '🗜️', '🧰', '🧲', '🔫', '🪃', '🏹', '🛡️', '🗡️', '⚔️', '🪓', '🔪', '🪤', '🪒', '🧴', '🧷', '🧹', '🧺', '🧻', '🪣', '🧽', '🧴', '🧪', '🧫', '🧬', '🦠', '🔬', '🔭', '📡', '🧮', '🪜', '📏', '📐', '🗜️', '🧲', '🧳', '👝', '👛', '👜', '🎒', '💼', '💼', '🎓', '🎒', '📚', '🎨', '🖌️', '🖼️', '🎭', '🎪', '🎟️', '🎫', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '🪕', '🎲', '♠️', '♥️', '♦️', '♣️', '🃏', '🀄', '🎯', '🎳', '🏆', '🏅', '🥇', '🥈', '🥉', '🎖️', '🏵️', '🎗️', '🎫', '🎟️', '🎪', '🎭', '🩰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '🪕'],
        symbol: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷️', '✴️', '🆚', '📳', '📴', '🅰️', '🅱️', '🆎', '🆑', '🅾️', '🆘', '🆔', '🈯', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅿️', '🚸', '🔞', '📵', '🚭', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '🚫', '📛', '💯', '💢', '💥', '💫', '💦', '💨', '🕳️', '💣', '💬', '👁️‍🗨️', '🗯️', '💭', '💤', '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍', '👎', '👊', '✊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '🦷', '🦴', '👀', '👁️', '👅', '👄', '🩸', '🧬', '🧫', '🧪', '🦠'],
        flag: ['🏁', '🚩', '🎌', '🏴', '🏳️', '🏳️‍🌈', '🏳️‍⚧️', '🏴‍☠️', '🇦🇫', '🇦🇽', '🇦🇱', '🇩🇿', '🇦🇸', '🇦🇩', '🇦🇴', '🇦🇮', '🇦🇶', '🇦🇬', '🇦🇷', '🇦🇲', '🇦🇼', '🇦🇺', '🇦🇹', '🇦🇿', '🇧🇸', '🇧🇭', '🇧🇩', '🇧🇧', '🇧🇾', '🇧🇪', '🇧🇿', '🇧🇯', '🇧🇲', '🇧🇹', '🇧🇴', '🇧🇦', '🇧🇼', '🇧🇷', '🇮🇴', '🇻🇬', '🇧🇳', '🇧🇬', '🇧🇫', '🇧🇮', '🇧🇹', '🇧🇿', '🇰🇭', '🇨🇲', '🇨🇦', '🇮🇨', '🇨🇻', '🇧🇶', '🇰🇾', '🇨🇫', '🇹🇩', '🇨🇱', '🇨🇳', '🇨🇽', '🇨🇨', '🇨🇴', '🇰🇲', '🇨🇬', '🇨🇩', '🇨🇰', '🇨🇷', '🇨🇮', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇾', '🇨🇿', '🇩🇰', '🇩🇯', '🇩🇲', '🇩🇴', '🇪🇨', '🇪🇬', '🇸🇻', '🇬🇶', '🇪🇷', '🇪🇪', '🇸🇿', '🇪🇹', '🇫🇮', '🇫🇴', '🇫🇰', '🇫🇯', '🇫🇮', '🇫🇷', '🇬🇫', '🇵🇫', '🇹🇫', '🇬🇦', '🇬🇲', '🇬🇪', '🇩🇪', '🇬🇭', '🇬🇮', '🇬🇷', '🇬🇱', '🇬🇩', '🇬🇵', '🇬🇺', '🇬🇹', '🇬🇹', '🇬🇧', '🇬🇼', '🇬🇾', '🇭🇹', '🇭🇳', '🇭🇰', '🇭🇺', '🇮🇸', '🇮🇳', '🇮🇩', '🇮🇷', '🇮🇶', '🇮🇪', '🇮🇪', '🇮🇱', '🇮🇹', '🇯🇲', '🇯🇵', '🇯🇪', '🇯🇴', '🇰🇿', '🇰🇪', '🇰🇮', '🇽🇰', '🇰🇼', '🇰🇬', '🇱🇦', '🇱🇻', '🇱🇧', '🇱🇸', '🇱🇷', '🇱🇾', '🇱🇮', '🇱🇹', '🇱🇺', '🇲🇴', '🇲🇰', '🇲🇬', '🇲🇼', '🇲🇾', '🇲🇻', '🇲🇱', '🇲🇹', '🇲🇭', '🇲🇶', '🇲🇷', '🇲🇺', '🇾🇹', '🇲🇽', '🇫🇲', '🇲🇩', '🇲🇨', '🇲🇳', '🇲🇪', '🇲🇦', '🇲🇿', '🇲🇲', '🇳🇦', '🇳🇷', '🇳🇵', '🇳🇱', '🇳🇨', '🇳🇿', '🇳🇮', '🇳🇪', '🇳🇬', '🇳🇺', '🇳🇫', '🇰🇵', '🇳🇴', '🇴🇲', '🇵🇰', '🇵🇼', '🇵🇸', '🇵🇦', '🇵🇬', '🇵🇾', '🇵🇪', '🇵🇭', '🇵🇼', '🇵🇱', '🇵🇹', '🇵🇷', '🇶🇦', '🇷🇴', '🇷🇺', '🇷🇼', '🇸🇭', '🇰🇷', '🇸🇱', '🇸🇰', '🇸🇮', '🇸🇬', '🇸🇽', '🇸🇴', '🇿🇦', '🇰🇷', '🇸🇸', '🇪🇸', '🇱🇰', '🇧🇱', '🇸🇩', '🇸🇷', '🇸🇿', '🇸🇪', '🇨🇭', '🇸🇾', '🇹🇼', '🇹🇯', '🇹🇿', '🇹🇭', '🇹🇱', '🇹🇬', '🇹🇰', '🇹🇴', '🇹🇹', '🇹🇳', '🇹🇷', '🇹🇲', '🇹🇨', '🇹🇻', '🇺🇬', '🇺🇦', '🇦🇪', '🇬🇧', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇺', '🇻🇦', '🇻🇪', '🇻🇳', '🇼🇸', '🇾🇪', '🇿🇲', '🇿🇼']
    };
    
    // 获取表情搜索和分类元素
    const emojiSearchInput = document.getElementById('emoji-search-input');
    const emojiCategories = document.getElementById('emoji-categories');
    const emojiCategoryElements = document.querySelectorAll('.emoji-category');
    
    // 最近使用的表情
    let recentEmojis = JSON.parse(localStorage.getItem('recentEmojis')) || emojiDatabase.recent;
    
    // 保存最近使用的表情
    function saveRecentEmoji(emoji) {
        if (!recentEmojis.includes(emoji)) {
            recentEmojis.unshift(emoji);
            if (recentEmojis.length > 10) {
                recentEmojis.pop();
            }
            localStorage.setItem('recentEmojis', JSON.stringify(recentEmojis));
        }
    }
    
    // 生成表情列表
    function generateEmojiList(emojisToShow = recentEmojis) {
        // 清空现有表情
        emojiList.innerHTML = '';
        
        emojisToShow.forEach(emoji => {
            const emojiItem = document.createElement('div');
            emojiItem.className = 'emoji-item';
            emojiItem.textContent = emoji;
            emojiItem.addEventListener('click', () => {
                insertEmoji(emoji);
                // 添加到最近使用
                saveRecentEmoji(emoji);
            });
            emojiList.appendChild(emojiItem);
        });
    }
    
    // 插入表情到输入框
    function insertEmoji(emoji) {
        const cursorPosition = messageInput.selectionStart;
        const textBeforeCursor = messageInput.value.substring(0, cursorPosition);
        const textAfterCursor = messageInput.value.substring(cursorPosition);
        messageInput.value = textBeforeCursor + emoji + textAfterCursor;
        
        // 将光标移动到表情后面
        messageInput.selectionStart = cursorPosition + emoji.length;
        messageInput.selectionEnd = cursorPosition + emoji.length;
        
        // 触发input事件，更新发送按钮状态和输入框高度
        messageInput.dispatchEvent(new Event('input'));
        // 聚焦输入框
        messageInput.focus();
    }
    
    // 表情按钮点击事件
    emojiBtn.addEventListener('click', () => {
        emojiPicker.classList.toggle('show');
    });
    
    // 点击其他地方关闭表情选择器
    document.addEventListener('click', (e) => {
        if (!emojiPicker.contains(e.target) && e.target !== emojiBtn) {
            emojiPicker.classList.remove('show');
        }
    });
    
    // 表情搜索功能
    emojiSearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (!searchTerm) {
            // 如果搜索框为空，显示当前分类的表情
            const activeCategory = document.querySelector('.emoji-category.active');
            const categoryName = activeCategory.dataset.category;
            if (categoryName === 'recent') {
                generateEmojiList(recentEmojis);
            } else {
                generateEmojiList(emojiDatabase[categoryName]);
            }
        } else {
            // 搜索所有表情
            const allEmojis = Object.values(emojiDatabase).flat();
            // 根据表情名称搜索
            const filteredEmojis = allEmojis.filter(emoji => {
                const emojiName = emojiNames[emoji] || '';
                return emojiName.toLowerCase().includes(searchTerm);
            });
            generateEmojiList(filteredEmojis);
        }
    });
    
    // 表情分类切换事件
    emojiCategoryElements.forEach(category => {
        category.addEventListener('click', () => {
            // 更新激活状态
            emojiCategoryElements.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            
            // 获取分类名称
            const categoryName = category.dataset.category;
            
            // 清空搜索输入
            emojiSearchInput.value = '';
            
            // 生成对应分类的表情列表
            if (categoryName === 'recent') {
                generateEmojiList(recentEmojis);
            } else {
                generateEmojiList(emojiDatabase[categoryName]);
            }
        });
    });
    
    // 初始化表情列表
    generateEmojiList();
    
    // 图片选择器功能
    const imagePickerGrid = document.getElementById('image-picker-grid');
    const imagePickerTabs = document.querySelectorAll('.image-picker-tab');
    const imagePickerAlbumItems = document.querySelectorAll('.image-picker-album-item');
    
    // 图片按钮点击事件
    imageBtn.addEventListener('click', () => {
        imagePicker.classList.toggle('show');
        // 关闭表情选择器
        emojiPicker.classList.remove('show');
    });
    
    // 图片选择器关闭按钮点击事件
    imagePickerClose.addEventListener('click', () => {
        imagePicker.classList.remove('show');
        // 重置状态
        resetImagePicker();
    });
    
    // 点击其他地方关闭图片选择器
    document.addEventListener('click', (e) => {
        if (!imagePicker.contains(e.target) && e.target !== imageBtn) {
            imagePicker.classList.remove('show');
            // 重置状态
            resetImagePicker();
        }
    });
    
    // 重置图片选择器状态
    function resetImagePicker() {
        // 切换到照片标签
        imagePickerTabs.forEach(tab => tab.classList.remove('active'));
        imagePickerTabs[0].classList.add('active');
        
        // 显示相册列表，隐藏照片网格
        document.querySelector('.image-picker-album').style.display = 'block';
        imagePickerGrid.classList.remove('active');
    }
    
    // 标签页切换事件
    imagePickerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 更新标签页激活状态
            imagePickerTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 这里可以根据标签页切换内容
            console.log(`切换到${tab.textContent}标签`);
        });
    });
    
    // 相册选择事件
    imagePickerAlbumItems.forEach(album => {
        album.addEventListener('click', () => {
            // 隐藏相册列表，显示照片网格
            document.querySelector('.image-picker-album').style.display = 'none';
            imagePickerGrid.classList.add('active');
            
            // 生成照片网格
            generatePhotoGrid();
        });
    });
    
    // 生成照片网格
    function generatePhotoGrid() {
        // 清空现有照片
        imagePickerGrid.innerHTML = '';
        
        // 生成示例照片（这里可以替换为实际的照片加载逻辑）
        for (let i = 0; i < 18; i++) {
            const photoItem = document.createElement('div');
            photoItem.className = 'image-picker-item';
            photoItem.innerHTML = `
                <div class="album-thumb" style="background: linear-gradient(${i * 20}deg, #ff6b6b 0%, #ffa500 100%);"></div>
            `;
            
            // 添加照片点击事件
            photoItem.addEventListener('click', () => {
                // 模拟发送图片消息
                const exampleImageUrl = `https://via.placeholder.com/200?text=Photo+${i+1}`;
                sendImageMessage(exampleImageUrl);
                
                // 关闭图片选择器
                imagePicker.classList.remove('show');
                // 重置状态
                resetImagePicker();
            });
            
            imagePickerGrid.appendChild(photoItem);
        }
    }
    
    // 语音输入功能
    let isVoiceMode = false;
    let isRecording = false;
    let recordingTimer = null;
    let recordingStartTime = 0;
    
    // 格式化时间函数 (秒 -> MM:SS)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }
    
    // 切换语音/文本输入模式
    voiceToolBtn.addEventListener('click', () => {
        isVoiceMode = !isVoiceMode;
        if (isVoiceMode) {
            // 切换到语音模式
            messageInput.style.display = 'none';
            sendBtn.style.display = 'none';
            voiceBtn.style.display = 'inline-block';
        } else {
            // 切换到文本模式
            messageInput.style.display = 'block';
            sendBtn.style.display = 'inline-block';
            voiceBtn.style.display = 'none';
        }
    });
    
    // 语音按钮按下事件（开始录制）
    voiceBtn.addEventListener('mousedown', () => {
        if (!isRecording) {
            isRecording = true;
            voiceBtn.classList.add('active');
            voiceBtn.textContent = '松开结束';
            
            // 显示语音录制界面
            voiceRecording.style.display = 'flex';
            recordingStartTime = Date.now();
            
            // 更新录制时间显示
            recordingTimer = setInterval(() => {
                const recordingTime = Math.floor((Date.now() - recordingStartTime) / 1000);
                voiceRecordingDuration.textContent = formatTime(recordingTime);
            }, 100);
        }
    });
    
    // 语音按钮松开事件（结束录制）
    document.addEventListener('mouseup', () => {
        if (isRecording) {
            isRecording = false;
            voiceBtn.classList.remove('active');
            voiceBtn.textContent = '按住说话';
            
            // 隐藏语音录制界面
            voiceRecording.style.display = 'none';
            
            // 清除录制计时器
            if (recordingTimer) {
                clearInterval(recordingTimer);
                recordingTimer = null;
            }
            
            // 计算录制时长
            const recordingTime = Math.max(1, Math.floor((Date.now() - recordingStartTime) / 1000));
            
            // 重置时长显示
            voiceRecordingDuration.textContent = '00:00';
            
            // 模拟发送语音消息
            setTimeout(() => {
                sendVoiceMessage(recordingTime);
            }, 300);
        }
    });
    
    // 取消语音录制
    voiceRecordingCancel.addEventListener('click', () => {
        if (isRecording) {
            isRecording = false;
            voiceBtn.classList.remove('active');
            voiceBtn.textContent = '按住说话';
            
            // 隐藏语音录制界面
            voiceRecording.style.display = 'none';
            
            // 清除录制计时器
            if (recordingTimer) {
                clearInterval(recordingTimer);
                recordingTimer = null;
            }
            
            // 重置时长显示
            voiceRecordingDuration.textContent = '00:00';
        }
    });
    
    // 发送语音消息函数
    function sendVoiceMessage(duration) {
        // 检查是否需要显示时间戳
        const currentTime = getCurrentTime();
        const shouldShowTimestamp = checkTimestampNeeded(currentTime);
        
        // 如果需要显示时间戳，先添加时间戳元素
        if (shouldShowTimestamp) {
            const timestampElement = document.createElement('div');
            timestampElement.className = 'timestamp';
            timestampElement.textContent = currentTime;
            chatMessages.appendChild(timestampElement);
        }
        
        // 创建语音消息元素
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        
        let messageHTML = `
            <div class="message-content">
                <div class="avatar">
                    <img src="wofang.jpg" alt="我方" class="avatar-img">
                </div>
                <div class="message-bubble-container">
                    <div class="message-bubble">
                        <div class="voice-message sent" data-duration="${duration}">
                            <span class="voice-icon">▶️</span>
                            <div class="voice-wave">
                                <div class="voice-wave-bar"></div>
                                <div class="voice-wave-bar"></div>
                                <div class="voice-wave-bar"></div>
                                <div class="voice-wave-bar"></div>
                                <div class="voice-wave-bar"></div>
                                <div class="voice-wave-bar"></div>
                                <div class="voice-wave-bar"></div>
                            </div>
                            <span class="voice-duration">${duration}″</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        messageElement.innerHTML = messageHTML;
        
        // 添加到聊天消息区域
        chatMessages.appendChild(messageElement);
        
        // 更新聊天历史
        chatHistory['friend-item'].messages.push({
            text: '[语音消息]',
            type: 'sent',
            time: currentTime,
            isVoice: true,
            duration: duration
        });
        
        // 更新最近消息和时间
        chatHistory['friend-item'].lastMessage = '[语音消息]';
        chatHistory['friend-item'].lastTime = currentTime;
        
        // 更新好友列表显示
        updateChatListItem();
        
        // 滚动到底部
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // 添加语音播放事件
        const voiceMessage = messageElement.querySelector('.voice-message');
        const voiceIcon = voiceMessage.querySelector('.voice-icon');
        let isPlaying = false;
        let playbackTimer = null;
        
        voiceMessage.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                voiceIcon.textContent = '⏸️';
                voiceMessage.classList.add('playing');
                voiceMessage.classList.remove('paused');
                
                // 模拟播放进度
                let progress = 0;
                const totalDuration = parseInt(voiceMessage.dataset.duration);
                playbackTimer = setInterval(() => {
                    progress++;
                    if (progress >= totalDuration) {
                        // 播放结束
                        clearInterval(playbackTimer);
                        playbackTimer = null;
                        isPlaying = false;
                        voiceIcon.textContent = '▶️';
                        voiceMessage.classList.remove('playing');
                        voiceMessage.classList.add('paused');
                    }
                }, 1000);
            } else {
                voiceIcon.textContent = '▶️';
                voiceMessage.classList.add('paused');
                voiceMessage.classList.remove('playing');
                
                // 停止播放进度
                if (playbackTimer) {
                    clearInterval(playbackTimer);
                    playbackTimer = null;
                }
            }
        });
        
        // 模拟回复（这里可以根据需要扩展）
        setTimeout(() => {
            const replyDuration = Math.floor(Math.random() * 5) + 1;
            const replyTime = getCurrentTime();
            
            // 检查是否需要显示时间戳
            const shouldShowTimestamp = checkTimestampNeeded(replyTime);
            
            // 如果需要显示时间戳，先添加时间戳元素
            if (shouldShowTimestamp) {
                const timestampElement = document.createElement('div');
                timestampElement.className = 'timestamp';
                timestampElement.textContent = replyTime;
                chatMessages.appendChild(timestampElement);
            }
            
            const replyElement = document.createElement('div');
            replyElement.className = 'message received';
            
            let replyHTML = `
                <div class="message-content">
                    <div class="avatar">
                        <img src="Avatar.jpg" alt="对方" class="avatar-img">
                    </div>
                    <div class="message-bubble-container">
                        <div class="message-bubble">
                            <div class="voice-message" data-duration="${replyDuration}">
                                <span class="voice-icon">▶️</span>
                                <div class="voice-wave">
                                    <div class="voice-wave-bar"></div>
                                    <div class="voice-wave-bar"></div>
                                    <div class="voice-wave-bar"></div>
                                    <div class="voice-wave-bar"></div>
                                    <div class="voice-wave-bar"></div>
                                    <div class="voice-wave-bar"></div>
                                    <div class="voice-wave-bar"></div>
                                </div>
                                <span class="voice-duration">${replyDuration}″</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            replyElement.innerHTML = replyHTML;
            chatMessages.appendChild(replyElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // 更新聊天历史
            chatHistory['friend-item'].messages.push({
                text: '[语音消息]',
                type: 'received',
                time: replyTime,
                isVoice: true,
                duration: replyDuration
            });
            
            // 更新最近消息和时间
            chatHistory['friend-item'].lastMessage = '[语音消息]';
            chatHistory['friend-item'].lastTime = replyTime;
            
            // 更新好友列表显示
            updateChatListItem();
            
            // 添加回复语音的播放事件
            const replyVoiceMessage = replyElement.querySelector('.voice-message');
            const replyVoiceIcon = replyVoiceMessage.querySelector('.voice-icon');
            let replyIsPlaying = false;
            let replyPlaybackTimer = null;
            
            replyVoiceMessage.addEventListener('click', () => {
                replyIsPlaying = !replyIsPlaying;
                if (replyIsPlaying) {
                    replyVoiceIcon.textContent = '⏸️';
                    replyVoiceMessage.classList.add('playing');
                    replyVoiceMessage.classList.remove('paused');
                    
                    // 模拟播放进度
                    let progress = 0;
                    const totalDuration = parseInt(replyVoiceMessage.dataset.duration);
                    replyPlaybackTimer = setInterval(() => {
                        progress++;
                        if (progress >= totalDuration) {
                            // 播放结束
                            clearInterval(replyPlaybackTimer);
                            replyPlaybackTimer = null;
                            replyIsPlaying = false;
                            replyVoiceIcon.textContent = '▶️';
                            replyVoiceMessage.classList.remove('playing');
                            replyVoiceMessage.classList.add('paused');
                        }
                    }, 1000);
                } else {
                    replyVoiceIcon.textContent = '▶️';
                    replyVoiceMessage.classList.add('paused');
                    replyVoiceMessage.classList.remove('playing');
                    
                    // 停止播放进度
                    if (replyPlaybackTimer) {
                        clearInterval(replyPlaybackTimer);
                        replyPlaybackTimer = null;
                    }
                }
            });
        }, 1000);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 添加触摸反馈效果
document.addEventListener('DOMContentLoaded', () => {
    const clickableElements = document.querySelectorAll('.app-item, .chat-item, .nav-left, .nav-right, .tool-btn, #send-btn, .button-item');
    
    clickableElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.opacity = '0.7';
        });
        
        element.addEventListener('touchend', () => {
            setTimeout(() => {
                element.style.opacity = '1';
            }, 150);
        });
        
        element.addEventListener('touchcancel', () => {
            element.style.opacity = '1';
        });
    });
});

// 防止页面滚动
document.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });

// 添加页面切换动画效果
document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    
    screens.forEach(screen => {
        screen.addEventListener('transitionend', () => {
            // 动画结束后执行的逻辑
        });
    });
});