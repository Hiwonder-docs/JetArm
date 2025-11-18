function initMenu() {
    const alreadyItems = document.querySelector('.toctree-l2.current');
    if (alreadyItems) {
        alreadyItems.classList.remove('current');
        alreadyItems.classList.add('h-current');
    }

    // 事件委托绑定到父级
    const menuContainer = document.querySelector('.wy-menu-vertical > .current');
    menuContainer.addEventListener('click', function(e) {
        const target = e.target.closest('.toctree-l2>a');
        if (target) {
            console.log(1);
            target.parentNode.classList.toggle('h-current');
        }
    });
}
// 获取所有包含特定a标签的li元素
const aTags = document.querySelectorAll('.wy-menu-vertical > ul:nth-of-type(1) > li.toctree-l1 a');
aTags.forEach(aTag => {
    // 检查是否是目标链接
    if (aTag) {
        // 创建完整的button元素
        const button = document.createElement('button');
        button.className = 'toctree-expand';
        button.title = 'Open/close menu';
        // 不需要设置innerHTML，因为button是空的

        // 将button插入到a标签的文本内容前面
        aTag.insertBefore(button, aTag.firstChild);
    }
});
const aTags1 = document.querySelectorAll('.wy-menu-vertical > ul:nth-of-type(2) > li.toctree-l1 a');

const aTags2 = document.querySelector('.wy-menu-vertical > p:nth-of-type(2)');
const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg1.setAttribute('t', '1763468920658');
svg1.setAttribute('class', 'icon');
svg1.setAttribute('viewBox', '0 0 1024 1024');
svg1.setAttribute('version', '1.1');
svg1.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svg1.setAttribute('p-id', '1226');
svg1.setAttribute('width', '22');
svg1.setAttribute('height', '22');

// 创建path元素
const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path1.setAttribute('d', 'M537 139c165.23 0 302.183 121.067 326.991 279.332C922.626 466.753 960 540.012 960 622c0 145.803-118.197 264-264 264H348c-156.942-0.542-284-127.933-284-285 0-115.73 68.98-215.348 168.067-259.984C282.35 222.296 399.947 139 537 139z m0 64c-108.247 0-204.502 64.996-246.001 162.976l-6.113 14.433a24 24 0 0 1-12.242 12.522l-14.291 6.438C179.66 434.817 128 513.188 128 601c0 120.513 96.481 218.546 216.474 220.956l3.643 0.044H696c110.457 0 200-89.543 200-200 0-60.52-26.962-116.498-72.761-154.32l-11.698-9.66a24 24 0 0 1-8.428-14.79l-2.35-14.987C780.558 299.34 668.927 203 537 203z m-25 191c17.673 0 32 14.327 32 32v176.285l46.485-46.025c12.56-12.434 32.82-12.333 45.255 0.225 12.31 12.434 12.334 32.416 0.148 44.88l-0.373 0.375-85.444 84.598c-20.908 20.7-54.484 20.824-75.543 0.434l-0.635-0.624-84.52-84.52c-12.497-12.497-12.497-32.759 0-45.255C401.744 544 421.726 543.877 434.25 556l0.377 0.372L480 601.745V426c0-17.673 14.327-32 32-32z');
path1.setAttribute('fill', '#bfbfbf');
path1.setAttribute('p-id', '1227');

// 将path添加到svg
svg1.appendChild(path1);

// 将svg插入到a标签的文本内容前面
aTags2.appendChild(svg1, aTags2.firstChild);

aTags1.forEach(aTag1 => {
    // 检查是否是目标链接
    if (aTag1) {
        // 创建svg元素
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('t', '1763468920658');
        svg.setAttribute('class', 'icon');
        svg.setAttribute('viewBox', '0 0 1024 1024');
        svg.setAttribute('version', '1.1');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('p-id', '1226');
        svg.setAttribute('width', '22');
        svg.setAttribute('height', '22');

        // 创建path元素
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M537 139c165.23 0 302.183 121.067 326.991 279.332C922.626 466.753 960 540.012 960 622c0 145.803-118.197 264-264 264H348c-156.942-0.542-284-127.933-284-285 0-115.73 68.98-215.348 168.067-259.984C282.35 222.296 399.947 139 537 139z m0 64c-108.247 0-204.502 64.996-246.001 162.976l-6.113 14.433a24 24 0 0 1-12.242 12.522l-14.291 6.438C179.66 434.817 128 513.188 128 601c0 120.513 96.481 218.546 216.474 220.956l3.643 0.044H696c110.457 0 200-89.543 200-200 0-60.52-26.962-116.498-72.761-154.32l-11.698-9.66a24 24 0 0 1-8.428-14.79l-2.35-14.987C780.558 299.34 668.927 203 537 203z m-25 191c17.673 0 32 14.327 32 32v176.285l46.485-46.025c12.56-12.434 32.82-12.333 45.255 0.225 12.31 12.434 12.334 32.416 0.148 44.88l-0.373 0.375-85.444 84.598c-20.908 20.7-54.484 20.824-75.543 0.434l-0.635-0.624-84.52-84.52c-12.497-12.497-12.497-32.759 0-45.255C401.744 544 421.726 543.877 434.25 556l0.377 0.372L480 601.745V426c0-17.673 14.327-32 32-32z');
        path.setAttribute('fill', '#bfbfbf');
        path.setAttribute('p-id', '1227');

        // 将path添加到svg
        svg.appendChild(path);

        // 将svg插入到a标签的文本内容前面
        aTag1.appendChild(svg, aTag1.firstChild);
    }
});
//<svg t="1763468920658" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1226" width="200" height="200"><path d="M537 139c165.23 0 302.183 121.067 326.991 279.332C922.626 466.753 960 540.012 960 622c0 145.803-118.197 264-264 264H348c-156.942-0.542-284-127.933-284-285 0-115.73 68.98-215.348 168.067-259.984C282.35 222.296 399.947 139 537 139z m0 64c-108.247 0-204.502 64.996-246.001 162.976l-6.113 14.433a24 24 0 0 1-12.242 12.522l-14.291 6.438C179.66 434.817 128 513.188 128 601c0 120.513 96.481 218.546 216.474 220.956l3.643 0.044H696c110.457 0 200-89.543 200-200 0-60.52-26.962-116.498-72.761-154.32l-11.698-9.66a24 24 0 0 1-8.428-14.79l-2.35-14.987C780.558 299.34 668.927 203 537 203z m-25 191c17.673 0 32 14.327 32 32v176.285l46.485-46.025c12.56-12.434 32.82-12.333 45.255 0.225 12.31 12.434 12.334 32.416 0.148 44.88l-0.373 0.375-85.444 84.598c-20.908 20.7-54.484 20.824-75.543 0.434l-0.635-0.624-84.52-84.52c-12.497-12.497-12.497-32.759 0-45.255C401.744 544 421.726 543.877 434.25 556l0.377 0.372L480 601.745V426c0-17.673 14.327-32 32-32z" fill="#bfbfbf" p-id="1227"></path></svg>

// 遍历每个匹配的li元素
liElements.forEach(aTag => {
    // 创建button元素
    const button = document.createElement('button');
    button.textContent = 'Click Me'; // 设置按钮文字，可根据需要修改
    button.type = 'button'; // 确保button不会提交表单

    // 将button插入到a标签之前
    aTag.parentNode.insertBefore(button, aTag);
});
// 根据场景选择执行时机
if (document.readyState === 'complete') {
    initMenu();
} else {
    window.addEventListener('load', initMenu);
}
