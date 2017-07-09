$(function () {
    $(".share-to .last-li").mouseover(function () {
        // console.log("11")
        // $(".share-more").css("display","block");
        $(".share-more-ul").css("display", "block");
    }).mouseout(function () {
        $(".share-more-ul").css("display", "none");

    });

  $(".pro>.img-mask").mouseover(function () {
      $(this).css({"cursor":"pointer"});
      $(this).find(".mask").stop().animate({"opacity":"0.3","height":"60px"},500);
  }).mouseout(function () {
      $(this).find(".mask").stop().animate({"opacity":"0","height":"0px"},500);
  });

    function getScroll() {
        return {
            left:window.pageXOffset||document.body.offsetLeft||document.documentElement.offsetLeft||0,
            top:window.pageYOffset||document.body.offsetTop||document.documentElement.offsetTop||0
        }
    }
    $(window).scroll(function () {

        // console.log($(".year-left-2016").offset().top);

        if ($(document).scrollTop() > $(".year-left-2016").offset().top-500) {
            $(".year-left-2016").addClass("pro2");
            $(".year-right-2016").addClass("pro2");
            $(".sidebar>ul>li:eq(0)").addClass("current").siblings("li").removeClass("current");
        }
        if ($(document).scrollTop() > $(".year-left-2015").offset().top-500) {
            $(".year-left-2015").addClass("pro2")
            $(".year-right-2015").addClass("pro2")
            $(".sidebar>ul>li:eq(1)").addClass("current").siblings("li").removeClass("current");

        }
        if ($(document).scrollTop() > $(".year-left-2014").offset().top-500) {
            $(".year-left-2014").addClass("pro2")
            $(".year-right-2014").addClass("pro2")
            $(".sidebar>ul>li:eq(2)").addClass("current").siblings("li").removeClass("current");

        }
        if ($(document).scrollTop() > $(".year-left-2013").offset().top-500) {
            $(".year-left-2013").addClass("pro2")
            $(".year-right-2013").addClass("pro2")
            $(".sidebar>ul>li:eq(3)").addClass("current").siblings("li").removeClass("current");

        }
        if ($(document).scrollTop() > $(".year-left-2012").offset().top-500) {
            $(".year-left-2012").addClass("pro2")
            $(".year-right-2012").addClass("pro2")
            $(".sidebar>ul>li:eq(4)").addClass("current").siblings("li").removeClass("current");

        }
        if ($(document).scrollTop() > $(".year-left-2011").offset().top-500) {
            $(".year-left-2011").addClass("pro2")
            $(".year-right-2011").addClass("pro2")
            $(".sidebar>ul>li:eq(5)").addClass("current").siblings("li").removeClass("current");

        }
        if ($(document).scrollTop() > $(".year-left-2010").offset().top-500) {
            $(".year-left-2010").addClass("pro2")
            $(".year-right-2010").addClass("pro2")
            $(".sidebar>ul>li:eq(6)").addClass("current").siblings("li").removeClass("current");

        }
        if ($(document).scrollTop() > $(".year-left-2009").offset().top-500) {
            $(".year-left-2009").addClass("pro2")
            $(".year-right-2009").addClass("pro2")
            $(".sidebar>ul>li:eq(7)").addClass("current").siblings("li").removeClass("current");

        }
        if ($(document).scrollTop() > $(".year-left-2008").offset().top-500) {
            $(".year-left-2008").addClass("pro2")
            $(".year-right-2008").addClass("pro2")
            $(".sidebar>ul>li:eq(8)").addClass("current").siblings("li").removeClass("current");

        }
        
        // 特殊的
        if ($(document).scrollTop() > $(".pro-sp1").offset().top-500) {
            $(".pro-sp1").animate({"right":"10px","opacity":1}, 1000);
        }
        if ($(document).scrollTop() > $(".pro-sp2").offset().top-500) {
            $(".pro-sp2").animate({"right":"10px","opacity":1}, 1000);
        }
        
    });
     //  返回顶部
    $(".sidebar>.backTop>a").click(function () {
        $("html,body").animate({"scrollTop":0},500);
    });

    $(".sidebar>ul>li:eq(0)").click(function () {
        var top1=$(".year-sixteen").offset().top;
        $("html,body").animate({"scrollTop":top1},500);
        $(this).addClass("current").siblings("li").removeClass("current");
    });
    $(".sidebar>ul>li:eq(1)").click(function () {
        var top2=$(".year-Fifteen").offset().top;
        $("html,body").animate({"scrollTop":top2},500);
        $(this).addClass("current").siblings("li").removeClass("current");

    });
    $(".sidebar>ul>li:eq(2)").click(function () {
        var top3=$(".year-forteen").offset().top;
        $("html,body").animate({"scrollTop":top3},500);
        $(this).addClass("current").siblings("li").removeClass("current");

    });
    $(".sidebar>ul>li:eq(3)").click(function () {
        var top4=$(".year-thirteen").offset().top;
        $("html,body").animate({"scrollTop":top4},500);
        $(this).addClass("current").siblings("li").removeClass("current");

    });
    $(".sidebar>ul>li:eq(4)").click(function () {
        var top5=$(".year-twelve").offset().top;
        $("html,body").animate({"scrollTop":top5},500);
        $(this).addClass("current").siblings("li").removeClass("current");

    });
    $(".sidebar>ul>li:eq(5)").click(function () {
        var top6=$(".year-eleventh").offset().top;
        $("html,body").animate({"scrollTop":top6},500);
        $(this).addClass("current").siblings("li").removeClass("current");

    });
    $(".sidebar>ul>li:eq(6)").click(function () {
        var top7=$(".year-ten").offset().top;
        $("html,body").animate({"scrollTop":top7},500);
        $(this).addClass("current").siblings("li").removeClass("current");

    });
    $(".sidebar>ul>li:eq(7)").click(function () {
        var top8=$(".year-nine").offset().top;
        $("html,body").animate({"scrollTop":top8},500);
        $(this).addClass("current").siblings("li").removeClass("current");

    });
    $(".sidebar>ul>li:eq(8)").click(function () {
        var top9=$(".year-eight").offset().top;
        $("html,body").animate({"scrollTop":top9},500);
        $(this).addClass("current").siblings("li").removeClass("current");

    });


    $(".sidebar>.backTop>a").click(function () {
        
    });
});

