/**
 * Created by VAE on 2017/1/11.
 */


//顶部
/*$("#top_middle_zn").mouseover(function () {
    $($(this).children("div")[0]).hide();
    $(".top-middle-bottom").show().css("marginTop","55px");

}).mouseout(function () {
    $($(this).children("div")[0]).show();
    $(".top-middle-bottom").hide();
});*/
/**武素超  2017.1.11
 *
 * @param element      要滚动元素的 id
 * @param buttonLeft    左按钮
 * @param buttonRight   右侧按钮
 * @param elementGrandfather   element父级的父级
 */
function mySqure(element, buttonLeft, buttonRight, elementGrandfather) {
    var mySqu = $(element);
    var ulObj = $(element).find("ul");
    var liObj = $(element).find("li");
    //获取滚动宽度
    var imgWidth = liObj[0].offsetWidth;
    //设置  ul 宽度
    ulObj.css({"width": (liObj.length) * imgWidth + "px", "float": "left"});
    mySqu.css("width", 2 * (liObj.length) * imgWidth + "px")
    var pic = 0;
    //克隆第一个 ul 标签 到最后
    $(ulObj[0]).clone().appendTo($(element));
    //var lists = $("#mySquery").find("li");

    //自动播放函数
    var setId = null;
    setId = setInterval(fq, 2000);
    $(elementGrandfather).mouseover(function () {
        clearInterval(setId);
    });
    $(elementGrandfather).mouseout(function () {
        setId = setInterval(fq, 2000);
    });

    //右侧按钮 点击事件
    $(buttonRight).click(fq);
    function fq() {
        if (pic == liObj.length) {
            pic = 0;
            mySqu.css({"left": "0px"});
        }
        pic++;
        mySqu.stop().animate({"left": -pic * imgWidth + "px"}, 200);
    }

    //左侧按钮  点击事件
    $(buttonLeft).click(function () {
        if (pic == 0) {
            pic = liObj.length;
            mySqu.css({"left": -pic * imgWidth + "px"});
        }
        pic--;
        mySqu.stop().animate({"left": -pic * imgWidth + "px"}, 200);
    });
}


//过程
/*var mySqu = $("#mySquery01");
 var ulObj = $("#mySquery01").find("ul");
 var liObj = $("#mySquery01").find("li");
 //获取滚动宽度
 var imgWidth = liObj[0].offsetWidth;
 //设置  ul 宽度
 ulObj.css({"width": (liObj.length) * imgWidth + "px", "float": "left"});
 mySqu.css("width", 2 * (liObj.length) * imgWidth + "px")
 var pic = 0;
 //克隆第一个 ul 标签 到最后
 $(ulObj[0]).clone().appendTo($("#mySquery01"));
 //var lists = $("#mySquery").find("li");
 //右侧按钮 点击事件
 $("#aBut-Right-big").click(function () {
 if (pic == liObj.length) {
 pic = 0;
 mySqu.css({"left": "0px"});
 }
 pic++;
 mySqu.animate({"left": -pic * imgWidth + "px"}, 200);
 });
 //左侧按钮  点击事件
 $("#aBut-Left-big").click(function () {
 if (pic == 0) {
 pic = liObj.length;
 mySqu.css({"left": -pic * imgWidth + "px"});
 }
 pic--;
 mySqu.animate({"left": -pic * imgWidth + "px"}, 200);
 });*/

function Tab() {
//获取所有的 li 标签
    var liObjs = $(".mainCont").children(".nav").find(".g-clr").find("li");
// console.log(liObjs)
//注册鼠标进入事件
    liObjs.mouseover(function () {
        //获取 article 标签
        var articles = $(".mainCont").find(".article");
        //console.log(articles)
        $(this).addClass("current").siblings("li").removeClass("current");
        var index = $(this).index();
        //console.log(index);
        $(".mainCont>.article:eq(" + index + ")").addClass("current").siblings(".article").removeClass("current");
         //console.log($(".mainCont>article:eq(1)").hasClass("current"))
        if ($(".mainCont>.article:eq(1)").hasClass("current")){
            $(".roleIntro").hide().slideDown(800);
        }
    });
}
Tab();

//滚动效果
function aniMate() {
    var SlideWrap = $("#SlideWrap");//整个滚动的 div 大框
    var prev = $(".prev");//左侧按钮
    var next = $(".next");//右侧按钮
    var ImgList = $(".ImgList"); //可见区域框
    var ulObj = $(".PicList"); //ul 标签
    var liObjs = ulObj.children("li"); //li 标签
    var pic = 0;
    //console.log(liObjs)
    //滚动宽度
    var imgWidth = liObjs.width() + parseInt(liObjs.css("marginRight"));
    //console.log(imgWidth)
    //克隆一个li 放入 ul 中去
    $(liObjs[0]).clone().appendTo(ulObj);

    //自动滚动事件
    var setId = null;
    setId = setInterval(nextClick,2000);

    //鼠标进入、离开事件
    SlideWrap.mouseover(function () {
        clearInterval(setId);
    }).mouseout(function () {
        setId = setInterval(nextClick,2000);
    });

    var flag = true;
    //注册按钮点击事件
    //右侧按钮
    next.click(nextClick);
    function nextClick() {
        if (flag) {
            flag = false;
            if (pic == liObjs.length) {
                pic = 0;
                ulObj.css("left", "0px");
            }
            pic++;
            ulObj.animate({"left": -pic * imgWidth + "px"}, 500, function () {
                flag = true;
            });
        }
    }

    //左侧按钮
    prev.click(function () {
        if (flag) {
            flag = false;
            if (pic==0){
                pic = liObjs.length;
                ulObj.css("left",-pic*imgWidth+"px");
            }
            pic--;
            ulObj.animate({"left": -pic * imgWidth + "px"}, 500, function () {
                flag = true;
            });
        }
    });
}
aniMate();
