#!/usr/bin/env node
// 自动更新音乐播放列表脚本
// 使用方法：node update_playlist.js

const fs = require('fs');
const path = require('path');

// 当前目录
const currentDir = __dirname;

// 音乐目录
const musicDir = path.join(currentDir, 'music');

// volume.js文件路径
const volumeJsPath = path.join(currentDir, 'volume.js');

// 检查volume.js文件是否存在
if (!fs.existsSync(volumeJsPath)) {
    console.error('错误：volume.js文件不存在');
    process.exit(1);
}

// 检查music目录是否存在
if (!fs.existsSync(musicDir)) {
    console.error('错误：music目录不存在');
    process.exit(1);
}

// 读取volume.js文件内容
let volumeJsContent = fs.readFileSync(volumeJsPath, 'utf8');

// 扫描music目录中的所有MP3文件
console.log('正在扫描music目录中的MP3文件...');

const musicFiles = [];

// 遍历music目录
const files = fs.readdirSync(musicDir);
files.forEach(file => {
    if (file.toLowerCase().endsWith('.mp3')) {
        // 生成相对路径
        const relativePath = `music/${file}`;
        musicFiles.push(relativePath);
        console.log(`✓ 发现：${relativePath}`);
    }
});

// 生成playlist数组字符串
const playlistStr = JSON.stringify(musicFiles, null, 4);

// 替换volume.js中的playlist数组
const playlistRegex = /playlist:\s*\[(.*?)\],/gs;
const newVolumeJsContent = volumeJsContent.replace(playlistRegex, `playlist: ${playlistStr},`);

// 写入更新后的volume.js文件
fs.writeFileSync(volumeJsPath, newVolumeJsContent, 'utf8');

console.log('');
console.log('='.repeat(50));
console.log('音乐播放列表更新完成！');
console.log(`共发现 ${musicFiles.length} 个MP3文件`);
console.log(`已更新 volume.js 文件`);
console.log('='.repeat(50));
