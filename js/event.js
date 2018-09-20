/*
 * 2018-8-6
 * 基分科技 移动端官网
 * Po 
 */

/* 菜单栏 切换 */
(function () {
    var flag = false;
    $("#navBtn").on("click", function () {
        if (!flag) {
            $(".hid-nav-panel").slideDown("300");
            $(".icon-nav-btn").css("backgroundImage", "url(./img/back.png)")
            flag = true;
        } else {
            $(".hid-nav-panel").slideUp("300");
            $(".icon-nav-btn").css("backgroundImage", "url(./img/menu.png)")
            flag = false;
        }

    })
})();

/******************************************************** */
/* 招兵买马 招聘栏 切换 */
(function () {
    $(".h-main-item").each(function () {
        $(this).on("click", function () {
            var ele = $(this).children(".item-box").children(".icon-down");
            if (!ele.hasClass("active")) {
                $(".icon-down").removeClass("active");
                // $(".h-hid-item").css("display", "none");
                $(".h-hid-item").slideUp(200);
                // $(this).children(".h-hid-item").css("display", "block");
                $(this).children(".h-hid-item").slideDown(300);
                ele.addClass("active");
            } else {
                $(".icon-down").removeClass("active");
                // $(".h-hid-item").css("display", "none");
                $(".h-hid-item").slideUp(300);
            }

        })
    })
})();


/******************************************************** */
/* 关于我们  切换 */
(function () {
    $(".nav-item").each(function () {
        $(this).on("click", function () {
            var title = $(this).text();
            var index = $(this).index()
            $(".a-main-title").text(title);
            $(".nav-item").removeClass("cur");
            $(this).addClass("cur");
            switch (index) {
                case 0:
                    $(".a-main-item").css("display", "none");
                    $(".about-1").css("display", "block");
                    break;
                case 1:
                    $(".a-main-item").css("display", "none");
                    $(".about-2").css("display", "block");
                    break;
                case 2:
                    $(".a-main-item").css("display", "none");
                    $(".about-3").css("display", "block");
                     /* 地图组件 */
                     var map = new BMap.Map("container");
                     // 创建地图实例  
                     var point = new BMap.Point(121.411649,31.170635);
                     // 创建点坐标  
                     map.centerAndZoom(point, 15);
                     var marker = new BMap.Marker(point); // 创建标注    
                     map.addOverlay(marker); // 将标注添加到地图中
                    break;
                case 3:
                    $(".a-main-item").css("display", "none");
                    $(".about-4").css("display", "block");
                    break;
            }
        })

    })
})()