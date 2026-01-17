#!/usr/bin/env python3
# 简单的音乐封面提取脚本
# 使用方法：python extract_simple.py

import os
import sys

# 检查mutagen库
try:
    from mutagen.mp3 import MP3
    from mutagen.id3 import ID3, APIC
except ImportError:
    print("错误：未安装mutagen库")
    print("请运行：pip install mutagen")
    input("按回车键退出...")
    sys.exit(1)

def extract_cover(music_file, output_folder):
    """提取单个音乐文件的封面"""
    try:
        # 打开MP3文件
        audio = MP3(music_file, ID3=ID3)
        
        # 获取文件名（不含扩展名）
        filename = os.path.basename(music_file)
        name_without_ext = os.path.splitext(filename)[0]
        
        # 查找封面
        for tag in audio.tags.values():
            if isinstance(tag, APIC):
                # 确定图片扩展名
                ext = tag.mime.split('/')[-1]
                if ext == 'jpeg':
                    ext = 'jpg'
                
                # 保存图片
                cover_path = os.path.join(output_folder, f"{name_without_ext}.{ext}")
                with open(cover_path, 'wb') as f:
                    f.write(tag.data)
                print(f"✓ {filename} -> 封面已提取")
                return True
        
        print(f"✗ {filename} -> 未找到封面")
        return False
        
    except Exception as e:
        print(f"✗ {filename} -> 提取失败：{str(e)}")
        return False

def main():
    """主函数"""
    # 当前目录
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 音乐目录
    music_dir = os.path.join(current_dir, "music")
    
    # 输出目录
    output_dir = os.path.join(current_dir, "music_cover")
    
    # 检查音乐目录
    if not os.path.exists(music_dir):
        print(f"错误：音乐目录不存在：{music_dir}")
        print("请确保music文件夹与脚本在同一目录")
        input("按回车键退出...")
        sys.exit(1)
    
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    # 统计信息
    total = 0
    success = 0
    
    print("音乐封面提取工具")
    print("=" * 30)
    print(f"音乐目录：{music_dir}")
    print(f"输出目录：{output_dir}")
    print("=" * 30)
    
    # 遍历音乐文件
    for filename in os.listdir(music_dir):
        if filename.lower().endswith('.mp3'):
            total += 1
            music_file = os.path.join(music_dir, filename)
            if extract_cover(music_file, output_dir):
                success += 1
    
    print("=" * 30)
    print(f"提取完成！")
    print(f"总文件数：{total}")
    print(f"成功提取：{success}")
    print(f"失败：{total - success}")
    print("=" * 30)
    input("按回车键退出...")

if __name__ == "__main__":
    main()
