import os
from bs4 import BeautifulSoup

def add_css_to_html(root_dir, css_path):
    """
    改进版：智能计算相对路径
    :param root_dir: 根目录（CSS路径的基准）
    :param css_path: CSS文件相对于根目录的路径
    """
    root_dir_abs = os.path.abspath(root_dir)
    css_abs = os.path.join(root_dir_abs, css_path)
    
    for root, _, files in os.walk(root_dir_abs):
        for file in files:
            if file.lower().endswith('.html'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r+', encoding='utf-8') as f:
                        soup = BeautifulSoup(f, 'html.parser')
                        head = soup.find('head')
                        
                        if head:
                            # 计算相对路径
                            file_dir = os.path.dirname(file_path)
                            try:
                                css_rel = os.path.relpath(css_abs, file_dir)
                            except ValueError:
                                print(f"路径计算失败：{file_path} 与CSS文件不在同一驱动器")
                                continue
                                
                            css_rel = css_rel.replace('\\', '/')  # 统一使用斜杠
                            
                            # 检查是否已存在
                            existing = head.find('link', {
                                'rel': 'stylesheet', 
                                'href': css_rel
                            })
                            
                            if not existing:
                                new_link = soup.new_tag(
                                    'link',
                                    rel="stylesheet",
                                    href=css_rel,
                                    type="text/css"
                                )
                                head.insert(0, new_link)
                                
                                # 回写文件
                                f.seek(0)
                                f.write(str(soup))
                                f.truncate()
                                print(f'已更新：{file_path}')
                            else:
                                print(f'已跳过：{file_path}（CSS已存在）')
                        else:
                            print(f'警告：{file_path} 缺少<head>标签')
                            
                except Exception as e:
                    print(f'处理失败：{file_path} - {str(e)}')

if __name__ == '__main__':
    target_dir = input('请输入网站根目录：').strip()
    css = input('请输入CSS相对于根目录的路径（例：css/style.css）：').strip()
    
    if os.path.isdir(target_dir):
        add_css_to_html(target_dir, css)
        print('处理完成！')
    else:
        print('错误：目录不存在')