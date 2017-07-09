

$(function () {
    // topNav();
    
    //header部分底部导航

    //鼠标进入事件
    var index = 0;
    $("#h-bottom-nav>li").mouseover(function () {
        //当前元素应用类样式，其余移除类样式
        $(this).find("a").addClass("current");
        $(this).siblings("li").find("a").removeClass("current");
        $("#h-bottom-nav>li:eq(" + index + ")>a").addClass("current");
    });

    //点击事件
    $("#h-bottom-nav>li").click(function () {
        $("#h-bottom-nav>li>a").removeClass("current");
        //当前元素应用类样式，其余移除类样式
        index = $(this).index();
        $("#h-bottom-nav>li:eq(" + index + ")>a").addClass("current");
    });

    //分享更多部分
    shareMoreShow();

    //slider列表部分
    var oldindex = -1;

    $(".rlist>ul>li").mouseover(function () {
        $(this).find("a").addClass("current");
        $(this).siblings("li").find("a").removeClass("current");
        if (oldindex >= 0) {
            $(".rlist>ul>li:eq(" + oldindex + ")>a").addClass("current");
        }
    });

    $(".rlist>ul>li").click(function () {
        oldindex = $(this).index()+1;
        $("#dv"+oldindex).animate({"opacity":0},500,function () {
            $(this).animate({"opacity":1},500);
        });
    });

    $(".rlist>ul").mouseout(function () {
        $(".rlist>ul>li>a").removeClass("current");
        if (oldindex >= 0) {
            $(".rlist>ul>li:eq(" + oldindex + ")>a").addClass("current");
        }
    });

    //slider固定部分
    $(window).scroll(function () {
        var top=$(document).scrollTop();
        console.log(top);
        var height=$(".top").height()+$(".header").height()
        if(top>=height){
            $(".rslider").css({"position":"fixed","top":"115px"});
        }else{
            $(".rslider").css({"position":"absolute","top":"600px"});
        }
    });
    
    //slider关闭按钮
    $(".closeslider").click(function () {
        $(".rslider").css("display","none");
    });
    //slider返回顶部
    $(".rslider .top").click(function () {
        $(document).scrollTop("0");
        $(".rslider").css({"position":"fixed","top":"600px"});
    });

});
// 更多分享显示
function shareMoreShow() {

    $("#hot-share-more").hide();
    $("#shareMore").mouseover(function () {

        $("#hot-share-more").show();
    });
    $(".hot-share").mouseout(function () {
        $("#hot-share-more").hide();
    });
}



