// 使用 $(document).ready() 来确保在HTML文档完全加载并准备好之后，才运行你的jQuery代码。
// 这是一个非常重要的最佳实践。
$(document).ready(function() {

    // --- 分类筛选功能 ---

    // 1. 为所有在 .filter-controls 容器里的 button 元素绑定一个点击事件。
    $('.filter-controls button').on('click', function() {

        // 2. 获取当前被点击按钮的 data-filter 属性的值。
        //    例如，如果点击了 "Poetry" 按钮, filterValue 的值就会是 "poetry"。
        let filterValue = $(this).attr('data-filter');

        // 3. 根据 filterValue 的值来显示或隐藏卡片。
        if (filterValue === 'all') {
            // 如果点击的是 "All" 按钮 (data-filter="all")...
            // ...就用一个400毫秒的动画，显示所有的 .cs-item 卡片。
            $('.cs-card-group .cs-item').show(400);
        } else {
            // 如果点击的是其他分类按钮...

            // a) 先用一个400毫셔秒的动画，隐藏所有与当前分类不匹配 (.not()) 的卡片。
            //    注意：我们在 filterValue 前面加了一个点 '.'，因为我们要用它作为类选择器。
            $('.cs-card-group .cs-item').not('.' + filterValue).hide(400);
            
            // b) 再用一个400毫秒的动画，显示所有与当前分类匹配 (.filter()) 的卡片。
            $('.cs-card-group .cs-item').filter('.' + filterValue).show(400);
        }

        // 4. (可选但推荐) 更新按钮的样式，让用户知道哪个分类是当前选中的。
        //    a) 先移除所有按钮的 'active' 类。
        $('.filter-controls button').removeClass('active');
        //    b) 再为你刚刚点击的这个按钮，加上 'active' 类。
        $(this).addClass('active');
    });

});