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
    }  
});