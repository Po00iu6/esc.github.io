document.addEventListener('DOMContentLoaded', function() {  
    // 获取所有span元素  
    var spans = document.getElementsByTagName('span');  

    // 遍历每个span元素  
    for (var i = 0; i < spans.length; i++) {  
        
        if (spans[i].textContent.includes("//")) {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#6a9955';
        }
        if (spans[i].textContent.trim() === "std") {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#6a9955';
        }
        // 检查span的文本内容是否包含"string"  
        if (spans[i].textContent.trim() === "string") {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#3ac9b0';
        }

        if (spans[i].textContent.startsWith('<') && spans[i].textContent.endsWith('>')) {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#ce723c'; 
        }
        if (spans[i].textContent.trim() === "0"||spans[i].textContent.trim() === "1"||spans[i].textContent.trim() === "2"||spans[i].textContent.trim() === "3"||spans[i].textContent.trim() === "4"||spans[i].textContent.trim() === "5"||spans[i].textContent.trim() === "6"||spans[i].textContent.trim() === "7"||spans[i].textContent.trim() === "8"||spans[i].textContent.trim() === "9") {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#b5ce9b'; 
        }
        
        if (spans[i].textContent.trim() === "stread()"||spans[i].textContent.trim() === "main()"||spans[i].textContent.trim() === "getchar()") {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#cbcb33'; 
        }
        if (spans[i].textContent.trim() === "while"||spans[i].textContent.trim() === "for"||spans[i].textContent.trim() === "#include"||spans[i].textContent.trim() === "using"||spans[i].textContent.trim() === "return"||spans[i].textContent.trim() === "#define") {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#c586a1'; 
        }

        if (spans[i].textContent.trim() === "char"||spans[i].textContent.trim() === "namespace"||spans[i].textContent.trim() === "int"||spans[i].textContent.trim() === "double"||spans[i].textContent.trim() === "bool"||spans[i].textContent.trim() === "LL"||spans[i].textContent.trim() === "long long") {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#4a9cd6';
        }



        if (spans[i].textContent.includes('"')||spans[i].textContent.includes('\'')) {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#ce916a'; 
        }
        if (spans[i].textContent.trim() === "s"||spans[i].textContent.trim() === "ch"||spans[i].textContent.trim() === "a"||spans[i].textContent.trim() === "b"||spans[i].textContent.trim() === "ans"||spans[i].textContent.trim() === "n"||spans[i].textContent.trim() === "i"||spans[i].textContent.trim() === "j"||spans[i].textContent.trim() === "v[10001][10001]"||spans[i].textContent.trim() === "f[10001]"||spans[i].textContent.trim() === "c[10001]"||spans[i].textContent.trim() === "f"||spans[i].textContent.trim() === "v[i][j]"||spans[i].textContent.trim() === "memset(f,0x3f,sizeof(f))") {  
            // 将span的颜色更改为绿色  
            spans[i].style.color = '#9cdcfe'; 
        }
    }  


    //------------------------------------------

    // 获取所有的b标签  
    const aTags = document.getElementsByTagName('a');  
  
    // 遍历每一个b标签  
    for (let i = 0; i < aTags.length; i++) {  
        const aTag = aTags[i];  
        const textContent = aTag.textContent || aTag.innerText; // 兼容不同浏览器的文本内容获取  

        // 检查文本内容是否包含特定的字符串  
        if (textContent.includes('省选/NOI-')) {  
            // 修改样式  
            aTag.style.backgroundColor = '#9D3DCF';  
            aTag.style.borderRadius = '3px'; // 圆角边框  
            aTag.style.border = '1px solid black'; // 可选：添加边框以更清楚地看到效果  
            aTag.style.paddingLeft = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.paddingRight = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.color = '#FFFFFF';
            aTag.style.textDecoration = 'none';
            aTag.style.borderStyle = 'none';
        }  

        // 检查文本内容是否包含特定的字符串  
        if (textContent.includes('提高+/省选-')) {  
            // 修改样式  
            aTag.style.backgroundColor = '#3498DB';  
            aTag.style.borderRadius = '3px'; // 圆角边框  
            aTag.style.border = '1px solid black'; // 可选：添加边框以更清楚地看到效果  
            aTag.style.paddingLeft = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.paddingRight = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.color = '#FFFFFF';
            aTag.style.textDecoration = 'none';
            aTag.style.borderStyle = 'none';
        }   
        
        // 检查文本内容是否包含特定的字符串  
        if (textContent.includes('普及-')) {  
            // 修改样式  
            aTag.style.backgroundColor = '#F39C11';  
            aTag.style.borderRadius = '3px'; // 圆角边框  
            aTag.style.border = '1px solid black'; // 可选：添加边框以更清楚地看到效果  
            aTag.style.paddingLeft = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.paddingRight = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.color = '#FFFFFF';
            aTag.style.textDecoration = 'none';
            aTag.style.borderStyle = 'none';
        }  

        // 检查文本内容是否包含特定的字符串  
        if (textContent.includes('普及+/提高')) {  
            // 修改样式  
            aTag.style.backgroundColor = '#52C41A';  
            aTag.style.borderRadius = '3px'; // 圆角边框  
            aTag.style.border = '1px solid black'; // 可选：添加边框以更清楚地看到效果  
            aTag.style.paddingLeft = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.paddingRight = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.color = '#FFFFFF';
            aTag.style.textDecoration = 'none';
            aTag.style.borderStyle = 'none';
        }  

        // 检查文本内容是否包含特定的字符串  
        if (textContent.includes('普及/提高-')) {  
            // 修改样式  
            aTag.style.backgroundColor = '#FFC116';  
            aTag.style.borderRadius = '3px'; // 圆角边框  
            aTag.style.border = '1px solid black'; // 可选：添加边框以更清楚地看到效果  
            aTag.style.paddingLeft = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.paddingRight = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.color = '#FFFFFF';
            aTag.style.textDecoration = 'none';
            aTag.style.borderStyle = 'none';
        }  

        // 检查文本内容是否包含特定的字符串  
        if (textContent.includes('NOI/NOI+/CTSC')) {  
            // 修改样式  
            aTag.style.backgroundColor = '#0E1D69';  
            aTag.style.borderRadius = '3px'; // 圆角边框  
            aTag.style.border = '1px solid black'; // 可选：添加边框以更清楚地看到效果  
            aTag.style.paddingLeft = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.paddingRight = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.color = '#FFFFFF';
            aTag.style.textDecoration = 'none';
            aTag.style.borderStyle = 'none';
        }  

        // 检查文本内容是否包含特定的字符串  
        if (textContent.includes('Rated')) {  
            // 修改样式  
            aTag.style.backgroundColor = '#5EB95E';  
            aTag.style.borderRadius = '3px'; // 圆角边框  
            aTag.style.border = '1px solid black'; // 可选：添加边框以更清楚地看到效果  
            aTag.style.paddingLeft = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.paddingRight = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.color = '#FFFFFF';
            aTag.style.textDecoration = 'none';
            aTag.style.borderStyle = 'none';
        }  

        // 检查文本内容是否包含特定的字符串  
        if (textContent.includes('UnRated')) {  
            // 修改样式  
            aTag.style.backgroundColor = '#E74C3C';  
            aTag.style.borderRadius = '3px'; // 圆角边框  
            aTag.style.border = '1px solid black'; // 可选：添加边框以更清楚地看到效果  
            aTag.style.paddingLeft = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.paddingRight = '10px'; // 可选：增加一些内边距以使效果更明显  
            aTag.style.color = '#FFFFFF';
            aTag.style.textDecoration = 'none';
            aTag.style.borderStyle = 'none';
        }  
    }  
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('CF');
    const links = container.getElementsByTagName('a');
    // 定义一个函数来设置特殊链接的样式
    function setSpecialLinkStyle(link) {
        link.style.fontWeight = 'bold';
        link.style.color = 'black';
        link.style.textDecoration = 'none';

        // 添加鼠标悬停事件监听器
        link.addEventListener('mouseover', function() {
            link.style.color = 'gray'; // 鼠标悬停时更改颜色
        });

        // 添加鼠标离开事件监听器以恢复原始颜色
        link.addEventListener('mouseout', function() {
            link.style.color = 'black'; // 鼠标离开时恢复颜色
        });
    }
    // 遍历所有链接并应用样式
    for (let i = 0; i < links.length; i++) {
        const text = links[i].textContent || links[i].innerText;
        const regex = /^[A-Z]\./;

        if (regex.test(text.trim())) {
            setSpecialLinkStyle(links[i]);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取ID为CF的元素
    const cfElement = document.getElementById('CF');

    // 更改背景颜色
    cfElement.style.backgroundColor = 'rgba(255,186,  2,0.8)';
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取ID为CF的元素
    const cfElement = document.getElementById('CF');

    // 创建一个新的img元素
    const imgElement = document.createElement('img');

    imgElement.style.maxHeight='80px';
    imgElement.style.backgroundColor='white';

    // 设置img元素的src属性为指定的URL
    imgElement.src = 'https://upload-bbs.miyoushe.com/upload/2024/11/10/198629752/9d5d40b2b9cf67b7b9baadddd7e284a0_3255032010487932117.webp'; // 请替换为你的图片URL

    // 添加点击事件监听器
    imgElement.addEventListener('click', function() {
        // 指定要跳转的URL
        const targetUrl = 'https://codeforces.com/contests'; // 请替换为实际的目标URL

        // 执行页面跳转
        window.location.href = targetUrl;
    });

    // 可选：设置img元素的其他属性，如alt文本
    imgElement.alt = 'Description of the image';

    // 将img元素插入到CF元素的内容的最前面
    cfElement.insertBefore(imgElement, cfElement.firstChild);
});

















document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('AT');
    const links = container.getElementsByTagName('a');
    container.style.color='white';
    // 定义一个函数来设置特殊链接的样式
    function setSpecialLinkStyle(link) {
        link.style.fontWeight = 'bold';
        link.style.color = 'white';
        link.style.textDecoration = 'none';

        // 添加鼠标悬停事件监听器
        link.addEventListener('mouseover', function() {
            link.style.color = 'gray'; // 鼠标悬停时更改颜色
        });

        // 添加鼠标离开事件监听器以恢复原始颜色
        link.addEventListener('mouseout', function() {
            link.style.color = 'white'; // 鼠标离开时恢复颜色
        });
    }
    // 遍历所有链接并应用样式
    for (let i = 0; i < links.length; i++) {
        const text = links[i].textContent || links[i].innerText;
        const regex = /^[A-Z]\ -/;

        if (regex.test(text.trim())) {
            setSpecialLinkStyle(links[i]);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取ID为CF的元素
    const cfElement = document.getElementById('AT');

    // 更改背景颜色
    cfElement.style.backgroundColor = 'rgba( 45, 51, 59,0.8)';
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取ID为CF的元素
    const cfElement = document.getElementById('AT');

    // 创建一个新的img元素
    const imgElement = document.createElement('img');

    imgElement.style.maxHeight='80px';
    imgElement.style.backgroundColor='black';

    // 设置img元素的src属性为指定的URL
    imgElement.src = 'https://upload-bbs.miyoushe.com/upload/2024/11/10/198629752/0e376758c2a79d84a388734053349d88_8323781477114625186.png'; // 请替换为你的图片URL

    // 添加点击事件监听器
    imgElement.addEventListener('click', function() {
        // 指定要跳转的URL
        const targetUrl = 'https://atcoder.jp/contests/'; // 请替换为实际的目标URL

        // 执行页面跳转
        window.location.href = targetUrl;
    });

    // 可选：设置img元素的其他属性，如alt文本
    imgElement.alt = 'Description of the image';

    // 将img元素插入到CF元素的内容的最前面
    cfElement.insertBefore(imgElement, cfElement.firstChild);
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取ID为CF的元素
    const cfElement = document.getElementById('AT');

    const childElements = cfElement.getElementsByTagName('a');
            for (let i = 0; i < childElements.length; i++) {
                childElements[i].style.color = 'white';
                childElements[i].style.textDecoration='none';
            }
    cfElement.style.color = 'white';
});
















document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('LG');
    const links = container.getElementsByTagName('a');
    // 定义一个函数来设置特殊链接的样式
    function setSpecialLinkStyle(link) {
        link.style.fontWeight = 'bold';
        link.style.color = 'black';
        link.style.textDecoration = 'none';

        // 添加鼠标悬停事件监听器
        link.addEventListener('mouseover', function() {
            link.style.color = 'gray'; // 鼠标悬停时更改颜色
        });

        // 添加鼠标离开事件监听器以恢复原始颜色
        link.addEventListener('mouseout', function() {
            link.style.color = 'black'; // 鼠标离开时恢复颜色
        });
    }
    // 遍历所有链接并应用样式
    for (let i = 0; i < links.length; i++) {
        const text = links[i].textContent || links[i].innerText;
        const regex = /^[A-Z]\./;

        if (regex.test(text.trim())) {
            setSpecialLinkStyle(links[i]);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取ID为CF的元素
    const cfElement = document.getElementById('LG');

    // 更改背景颜色
    cfElement.style.backgroundColor = 'rgba(231,245,231,0.8)';
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取ID为CF的元素
    const cfElement = document.getElementById('LG');

    // 创建一个新的img元素
    const imgElement = document.createElement('img');

    imgElement.style.maxHeight='80px';
    imgElement.style.backgroundColor='white';

    // 设置img元素的src属性为指定的URL
    imgElement.src = 'https://upload-bbs.miyoushe.com/upload/2024/11/10/198629752/35e6d0796eab39c4bf304d03e6d332c0_3893909472695035573.png'; // 请替换为你的图片URL

    // 添加点击事件监听器
    imgElement.addEventListener('click', function() {
        // 指定要跳转的URL
        const targetUrl = 'https://www.luogu.com.cn/'; // 请替换为实际的目标URL

        // 执行页面跳转
        window.location.href = targetUrl;
    });

    // 可选：设置img元素的其他属性，如alt文本
    imgElement.alt = 'Description of the image';

    // 将img元素插入到CF元素的内容的最前面
    cfElement.insertBefore(imgElement, cfElement.firstChild);
});