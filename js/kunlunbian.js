
$(function () {

    //页面头部导航
    // topNav();

    //领取礼物轮播图
    getGifts();


    //新剧情 新地图 部分轮播图
    newBlock();

    //11大门派
    menPai();

    //分享
    shareMoreShow();

});


//领取礼物
function getGifts() {
    //需求:自动切换  点击切换按钮切换
    //相框宽度
    var imgbox = $(".fr-imglist");
    //相册列表
    var ulimgObj = $(".fr-img-box");
    var listimg = $(".fr-img-box>li");

    //console.log(listimg);
    //按钮列表
    var ulbtnObj = $(".fr-img-btn");
    var listbtn = $(".fr-img-btn>li");
    lunbotu(imgbox, ulimgObj, listimg, ulbtnObj, listbtn);
}

//新地图 新剧情
function newBlock() {

    //默认进入第一个菜单选中 第一个div显示
    $(".new-left>ul>li:first").addClass("current");
    $(".new-right>.new-imglist:first").css("display", "block");

    $(".new-right>.new-imglist").each(function () {

        var imgbox = $(this);

        //相册列表
        var ulimgObj = imgbox.find("ul.new-img-box");
        var listimg = ulimgObj.children("li");

        //console.log(listimg.length);

        //按钮列表
        var ulbtnObj = imgbox.find("ul.new-img-btn");
        var listbtn = ulbtnObj.children("li");

        lunbotu(imgbox, ulimgObj, listimg, ulbtnObj, listbtn);
    });


    //f11();
    //鼠标进入左侧菜单 切换div
    $(".new-left>ul>li").mouseover(function () {
        $(this).addClass("current").siblings("li").removeClass("current");
        var index = $(this).index();
        //设置对应的div显示与隐藏
        $(".new-right>.new-imglist:eq(" + index + ")").css("display", "block").siblings("div").css("display", "none");
    });

}

/**
 * 轮播图函数
 * @param imgbox  相框对象
 * @param ulimgObj 相册ul对象
 * @param listimg  相册li集合
 * @param ulbtnObj 相册按钮ul对象
 * @param listbtn  相册按钮li集合
 */
function lunbotu(imgbox, ulimgObj, listimg, ulbtnObj, listbtn) {

    var pic = 0;
    var target = "";
    var imgWidth = imgbox.width();

    var flag = true;

    //默认选中第一个按钮
    listbtn.first().addClass("current");

    //动态创建一个li图片，为无缝连接做准备
    if (listimg.length == 3) {
        listimg.first().clone(true).appendTo(ulimgObj);
        listimg = ulimgObj.children("li");
    }

    // console.log(listimg.length);

    //自动切换
    var setId = null;
    setId = setInterval(f1, 1000);

    //为按钮注册鼠标点击事件
    listbtn.click(function () {

        if (flag) {
            flag = false;
            //当前按钮的索引
            var index = $(this).index();

            //设置当前的li样式为current，其它兄弟节点移除样式current
            $(this).addClass("current").siblings("li").removeClass("current");

            //移动图片
            pic = index;
            target = -pic * imgWidth;
            ulimgObj.stop().animate({"left": target}, 500, function () {
                flag = true;
            });
        }
    });



    function f1() {

        //移动图片
        if (pic == listimg.length - 1) {
            pic = 0;
            ulimgObj.css("left", "0");
        }
        pic++;
        target = -pic * imgWidth;
        ulimgObj.stop().animate({"left": target}, 1000);

        //样式设置
        if (pic == listimg.length - 1) {
            listbtn.first().addClass("current");
            listbtn.last().removeClass("current");
        } else {
            listbtn.eq(pic).addClass("current").siblings("li").removeClass("current");
        }
    }
}

//11大门派
function menPai() {

    // //默认进入第一个显示
    $(".menpai-namelist>a:first").addClass("current").siblings("a").removeClass("current");
    $(".menpai-imglist>a:eq(1)").show();
    $(".menpai-imglist>a:eq(1)").siblings("a").hide();

    //需求：1.页面进入后 自动切换 当前每个门派的，显示对应图片
    //      2. 鼠标经过切换到对应图片

    var setId = null;
    var index = 0;
    //首先为每个门派名称注册鼠标进入事件
    $(".menpai-namelist>a").mouseover(function () {

        if (setId) {
            clearInterval(setId);
        }
        //获取当前a的索引设置显示对应的图片
        index = $(this).index();

        $(this).addClass("current").siblings("a").removeClass("current");

        // $(".menpai-imglist>a").hide();
        $(".menpai-imglist>a:eq(" + index + ")").fadeIn(500);
        $(".menpai-imglist>a:eq(" + index + ")").siblings("a").fadeOut(100);
    });

    $(".menpai-namelist").mouseout(function () {
        if (setId) {
            clearInterval(setId);
        }
        setId = setInterval(f1, 1000);
    });
    //自动切换  0-10

    setId = setInterval(f1, 1000);

    function f1() {
        if (index < 10) {
            index++
        } else {
            index = 0;
        }
        $(".menpai-namelist>a:eq(" + index + ")").addClass("current").siblings("a").removeClass("current");

        $(".menpai-imglist>a:eq(" + index + ")").fadeIn(500);
        $(".menpai-imglist>a:eq(" + index + ")").siblings("a").fadeOut(100);
    }

}

// 更多分享显示
function shareMoreShow() {

    $("#hot-share-more").hide();
    $("#shareMore").mouseover(function () {

        $("#hot-share-more").show();
    });
    $(".share-con").mouseout(function () {
        $("#hot-share-more").hide();

    });
}
