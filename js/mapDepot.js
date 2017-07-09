

// 上边导航栏默认类样式----开始
$(".header-nav>li").mouseover(function () {
    $(".header-nav>li").children("a").removeClass("default");

    //设置当前a标签的背景色
    $(this).children("a").addClass("default");
});
// 上边导航栏默认类样式----结束


// 侧边固定定位的导航栏sidebar----开始
//先隐藏侧边导航栏
$("#sidebar").css("display", "none");
// 注册滚动条拖动事件
$(document).scroll(function () {
    //判断向上滚动高度是否小于header1+header2高度,小于则隐藏
    //获取页面卷曲出去的高度
    var top = $(document).scrollTop();
    if (top < ($(".header1").height() + $(".header2").height())) {
        //导航固定
        $("#sidebar").css("display", "none");
    } else {
        $("#sidebar").css("display", "block");
    }
});


//头部subtab---Tab切换栏--开始
$(".tab-title>div").mouseover(function () {
    //被点击的当前div应用类样式
    $(this).addClass("tempattr")
    //未被点击的当前div移除类样式
    $(this).siblings("div").removeClass("tempattr");
    //获取当前div的索引值
    var index = $(this).index();
    //获取subtab-banner里的ul
    //与div索引值一致的ul显示
    $(".subtab-banner>ul:eq(" + index + ")").addClass("selected");
    //与div索引值不一致的ul隐藏
    $(".subtab-banner>ul:eq(" + index + ")").siblings("ul").removeClass("selected");
});
//头部subtab---Tab切换栏--结束

//让ul中li隐藏
$(".subtab1-uu>li>div").hide();
$(".subtab1-uu>li>.current-img").show();
//鼠标点击li事件
$(".subtab1-uu>li").click(function () {
    //显示被点击的
    $(this).find("div").show();
    //隐藏不被点击的
    $(this).siblings("li").find("div").hide();
});


// header3轮播图部分---开始ban
function bannerStopTO() {
    //滚动图片
    var arr = ["ptoScro1.jpg", "ptoScro2.jpg", "ptoScro3.jpg", "ptoScro4.jpg"];
//小按钮图片
// var array=[]
//图片滚动的 所在的div---- 相框
    var photoFrame = $("#photoFrame");
//获取滚动相框宽度
    var imgWidth = photoFrame.width();
//获取 photo-frame 里面的 ul
    var ulObj = photoFrame.children("ul");
//获取的是 photo-frame 的  ol 标签
    var olObj = photoFrame.children("ol");
//获取ol中的li----小按钮
    var liObj2 = olObj.children("li");
//获取左右按钮的 父级层 div
    var payButton = $("#btn");
//左边按钮
    var btnLeft = $("#btn-left");
//获取左侧按钮
    var btnRight = $("#btn-right");
//滚动的图片张数
    var pic = 0;
//第一步：创建li图片放到ul中
    for (var i = 0; i < arr.length; i++) {
        //创建 ul 里 li 标签
        var liObj1 = $("<li></li>");
        liObj1.css("backgroundImage","url(images/mapDepot/ptoScro" + (i + 1) + ".jpg)");
        ulObj.append(liObj1);
    }
//图片自动滚动效果
    var setId = null;
    setId = setInterval(fn, 3000);
// 为小按钮注册鼠标进入切换图片事件
    liObj2.mouseover(function () {
        clearInterval(setId);
        //设置当前 按钮的类样式  和其他按钮的类样式
        $(this).addClass("current-an").siblings("li").removeClass("current-an");
        //获取ol 里面 li 标签的 索引值
        pic = $(this).index();
        //对应他们的图片切换滚动的距离
        ulObj.animate({"left": -pic * imgWidth + "px"}, 100);
    });
    liObj2.mouseout(function () {
        setId = setInterval(fn, 3000);
    });
//给小焦点设置默认类样式
    $(olObj.children()[0]).addClass("current-an");
//克隆一个li
//注：li是动态创建的，不能直接$(liObj1[0]).clone().appendTo(ulObj)添加-----在页面中直接创建的可以这样写;
    $(".scrollpics>li:eq(0)").clone().appendTo(ulObj);

    $("#btn").mouseover(function () {
        clearInterval(setId);
    });
    $("#btn").mouseout(function () {
        setId = setInterval(fn, 3000);
    });
//右侧按钮 鼠标点击事件
    $("#btn-right").click(fn);
    function fn() {
        if (pic == (ulObj.children("li").length - 1)) {
            pic = 0;
            ulObj.css("left", "0px");
        }
        pic++;
        ulObj.animate({"left": -pic * imgWidth + "px"}, 100);
        //对应小按钮滚动
        if (pic == (ulObj.children("li").length - 1)) {
            $(olObj.children("li")[0]).addClass("current-an").siblings("li").removeClass("current-an");
        } else {
            $(olObj.children("li")[pic]).addClass("current-an").siblings("li").removeClass("current-an");
        }
    };
//左侧按钮点击事件
    $("#btn-left").click(function () {
        if (pic == 0) {
            pic = (ulObj.children("li").length - 1);
            ulObj.css("left", -pic * imgWidth + "px");
        }
        pic--;
        ulObj.animate({"left": -pic * imgWidth + "px"}, 100);
        //对应小按钮滚动
        $(olObj.children("li")[pic]).addClass("current-an").siblings("li").removeClass("current-an");
    });

}
bannerStopTO();
// header3轮播图部分---结束
