

//header--share-more部分
$("#share-more").mouseover(function () {
    $("#share-more>ul").css("display", "block");
}).mouseout(function () {
    $("#share-more>ul").css("display", "none");
});
//main--大按钮GO部分
$("#btn-go").mouseover(function () {
    $(this).css("backgroundPosition", "-260px top");
}).mouseout(function () {
    $(this).css("backgroundPosition", "-140px top");
//大按钮GO点击下滑
}).click(function () {
    $("html,body").animate({"scrollTop": 920}, 500);
});

//固定导航栏
$(window).scroll(function () {
    //获取页面卷曲出去的高度
    var top = $(document).scrollTop();//方法
    if (top >= 920) {
        //导航固定
        $(".nav-year").css({"position": "fixed", "top": 0});
    } else {
        $(".nav-year").css({"position": "absolute"});
    }
});
//点击滑动到对应年份
//2016
$(".nav-year>ul>li:eq(7)").click(function () {
    var top2016 = $(".year2016").offset().top;
    console.log(top2016);
    $("html,body").animate({"scrollTop": top2016}, 500);
    $(this).css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
});
//2015
$(".nav-year>ul>li:eq(6)").click(function () {
    var top2015 = $(".year2015").offset().top;
    console.log(top2015);
    $("html,body").animate({"scrollTop": top2015}, 500);
    $(this).css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");

});
//2014
$(".nav-year>ul>li:eq(5)").click(function () {
    var top2014 = $(".year2014").offset().top;
    console.log(top2014);
    $("html,body").animate({"scrollTop": top2014}, 500);
    $(this).css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");

});
//2013
$(".nav-year>ul>li:eq(4)").click(function () {
    var top2013 = $(".year2013").offset().top;
    console.log(top2013);
    $("html,body").animate({"scrollTop": top2013}, 500);
    $(this).css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");

});
//2012
$(".nav-year>ul>li:eq(3)").click(function () {
    var top2012 = $(".year2012").offset().top;
    console.log(top2012);
    $("html,body").animate({"scrollTop": top2012}, 500);
    $(this).css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");

});
//2010
$(".nav-year>ul>li:eq(2)").click(function () {
    var top2010 = $(".year2010").offset().top;
    console.log(top2010);
    $("html,body").animate({"scrollTop": top2010}, 500);
    $(this).css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");

});
//2009
$(".nav-year>ul>li:eq(1)").click(function () {
    var top2009 = $(".year2009").offset().top;
    console.log(top2009);
    $("html,body").animate({"scrollTop": top2009}, 500);
    $(this).css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");

});
//2008
$(".nav-year>ul>li:eq(0)").click(function () {
    var top2008 = $(".year2008").offset().top;
    console.log(top2008);
    $("html,body").animate({"scrollTop": top2008}, 500);
    $(this).css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");

});

//图片缓慢进入
$(window).scroll(function () {
    var top = $(document).scrollTop();
    //2016缓动动画
    if (top >= 600) {
        $(".meeting2016-left .img-box-l").animate({"opacity": "1", "left": "0"}, 1000);
        $(".meeting2016-right .img-box-r").animate({"opacity": "1", "right": "0"}, 1000);
        $(".nav-year>ul>li:eq(7)").css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
    }
    //2015缓动动画
    if (top >= 950) {
        $(".meeting2015-left .img-box-l").animate({"opacity": "1", "left": "0"}, 1000);
        $(".meeting2015-right .img-box-r").animate({"opacity": "1", "right": "0"}, 1000);
        $(".nav-year>ul>li:eq(6)").css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
    }
    //2014缓动动画
    if (top >= 2014) {
        $(".meeting2014-left .img-box-l").animate({"opacity": "1", "left": "0"}, 1000);
        $(".meeting2014-right .img-box-r").animate({"opacity": "1", "right": "0"}, 1000);
        $(".nav-year>ul>li:eq(5)").css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
    }
    //2013缓动动画
    if (top >= 2602) {
        $(".meeting2013-left .img-box-l").animate({"opacity": "1", "left": "0"}, 1000);
        $(".meeting2013-right .img-box-r").animate({"opacity": "1", "right": "0"}, 1000);
        $(".nav-year>ul>li:eq(4)").css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
    }
    //2012缓动动画
    if (top >= 3270) {
        $(".meeting2012-left .img-box-l").animate({"opacity": "1", "left": "0"}, 1000);
        $(".meeting2012-right .img-box-r").animate({"opacity": "1", "right": "0"}, 1000);
        $(".nav-year>ul>li:eq(3)").css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
    }
    //2010缓动动画
    if (top >= 4096) {
        $(".meeting2010-left .img-box-l").animate({"opacity": "1", "left": "0"}, 1000);
        $(".nav-year>ul>li:eq(2)").css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
    }
    //2009缓动动画
    if (top >= 4448) {
        $(".meeting2009-left .img-box-l").animate({"opacity": "1", "left": "0"}, 1000);
        $(".meeting2009-right .img-box-r").animate({"opacity": "1", "right": "0"}, 1000);
        $(".nav-year>ul>li:eq(1)").css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
    }
    //2008缓动动画
    if (top >= 4878) {
        $(".meeting2008-left .img-box-l").animate({"opacity": "1", "left": "0"}, 1000);
        $(".meeting2008-right .img-box-r").animate({"opacity": "1", "right": "0"}, 1000);
        $(".nav-year>ul>li:eq(0)").css("backgroundPosition", "-70px -60px").siblings("li").css("backgroundPosition", "0 -60px");
    }

});
//查看详情
$(".details-btn-r,.details-btn-l").mouseover(function () {
    $(this).css("backgroundPosition", "0 -30px");
}).mouseout(function () {
    $(this).css("backgroundPosition", "0 0");
});
