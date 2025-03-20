
    // 主题切换示例
    let currentSeason = 1;
    function changeTheme(season) {
    const bgVideo = document.getElementById('bg-video');
    bgVideo.src = `season${season}_bg.mp4`;
    currentSeason = season;
}

    // 登录逻辑示例
    document.querySelectorAll('.login-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // 这里添加登录逻辑
        console.log('尝试登录:', btn.textContent);
    });
});

    // 响应式菜单
    window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
    document.querySelector('.navbar').style.flexDirection = 'column';
} else {
    document.querySelector('.navbar').style.flexDirection = 'row';
}
});

    function showQuery(type) {
        fetch(`/api/query/${type}`)
            .then(response => response.json())
            .then(data => {
                // 动态生成查询结果表格
                const results = document.getElementById('query-results');
                results.innerHTML = data.map(item =>
                    `<tr><td>${item.name}</td><td>${item.value}</td></tr>`
                ).join('');
            });
    }
