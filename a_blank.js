// 获取所有的 <a> 标签  
const links = document.querySelectorAll('a');  
  
// 遍历每一个 <a> 标签  
links.forEach(link => {  
    // 检查链接是否不在 <header> 内  
    if (!link.closest('header')) {  
        link.setAttribute('target', '_blank');  
        link.setAttribute('rel', 'noopener noreferrer');  
    }  
});  