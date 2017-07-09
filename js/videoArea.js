
var arr = [
    {"lin": "http://v.163.com/tx3/fight", "name": "首页"},
    {"lin": "http://v.163.com/tx3/fight", "name": "展示类"},
    {"lin": "http://v.163.com/tx3/fight", "name": "剧情类"},
    {"lin": "http://v.163.com/tx3/fight", "name": "MV类"},
    {"lin": "http://v.163.com/tx3/fight", "name": "战斗类", "else": "top"}
]
// 创建导航
$(function () {
    for (var i = 0; i < arr.length; i++) {
        var lis = $("<li></li>");
        lis.addClass("nav-boxli");
        var evearr = arr[i];
        var as = $("<a href=" + evearr.lin + " target='_blank'>" + evearr.name + "</a>");
        as.addClass("nav-as");
        as.appendTo(lis);
        lis.appendTo($("ul.main-nav"));

        if (evearr.else == "top") {
            var evei = $("<s class='evei'></s>");
            lis.css("position", "relative");
            evei.appendTo(lis);
        }
    }

});

var demo = [
    {
        "type": "",
        "lunbo": "lunbo1.jpg",
        "fx": "fx1.jpg",
        "href": "",
        "titl": "逐焰南海 公测宣传片",
        "info": "《天下3》革新资料片“逐焰南海”公测宣传片。迷幻南海新场景，五大枭雄迎接命运对决！全新自定义新容颜系统降临！全定制化轻功“御风行”破空来袭！多元化势力玩法创新迭代，开创势力冲突2.0时代！"
    },
    {
        "type": "",
        "lunbo": "lunbo2.jpg",
        "fx": "fx2.jpg",
        "href": "",
        "titl": "国韵精雕容颜",
        "info": "《逐焰南海》中，自定义新容颜系统的推出，可谓是《天下3》的厚积薄发。头部预设采用多民族和多年代的标准脸作为参照值，选取最具国风韵味的容颜体系，最真实的数据采集，真正还原天下的熙熙真"
    },
    {
        "type": "",
        "lunbo": "lunbo3.jpg",
        "fx": "fx3.jpg",
        "href": "",
        "titl": "玩家驾到！天下3马年游戏春晚预告",
        "info": "玩家驾到！《天下3》马年游戏春晚预告视频来咯！冯小刚加盟助阵！开发组带感变身？更有未删减CG，提前曝光"
    },
    {
        "type": "",
        "lunbo": "lunbo4.jpg",
        "fx": "fx4.jpg",
        "href": "",
        "titl": "《南海二周目》剧情配音",
        "info": "顶级BOSS齐聚交锋，一线CV倾情加盟，《天下3》南海二周目新剧情炫目登场！配音界3磊再次集体演绎，极限美声贯穿全新剧情，声情并茂之下，旷古恩仇更加扣人心弦！"
    },
    {
        "type": "",
        "lunbo": "lunbo5.jpg",
        "fx": "fx5.jpg",
        "href": "",
        "titl": "《天下3》新资料片配音视频首曝",
        "info": "千年悬案终揭晓，五大枭雄聚首。传伽蓝神在婆娑双树神隐之际，于伽蓝古国中掩埋伽蓝经卷。幽都王觊觎这神秘而强大的力量，以逆天之力招来汹涌浪潮，淹没伽蓝古国。"
    },
    {
        "type": "",
        "lunbo": "lunbo6.jpg",
        "fx": "fx6.jpg",
        "href": "",
        "titl": "全新门派——龙巫宫展示视频",
        "info": "《天下3》五年巨变，一触即发！全新门派龙巫幻妙登场。独门变身秘术，化身龙神、萝莉；双系切换技能，能强攻能群控！"
    },
    {
        "type": "",
        "lunbo": "lunbo7.jpg",
        "fx": "fx7.jpg",
        "href": "",
        "titl": "内心独白",
        "info": "在《天下3》全新CG之中，主角一头白发、身着黑衣，他就是人王颛顼帝崩后堕入魔道、力压北溟乱世的幽都王。幽都王统领着北溟魔地，在“北溟幻世录”中上演了无尽的嗜血和厮杀。"
    },
    {
        "type": "",
        "lunbo": "lunbo8.jpg",
        "fx": "fx8.jpg",
        "href": "",
        "titl": "全新引擎_进阶力量动作",
        "info": "《天下3》携手世界引擎巨头Havok，打造全新“进阶力感”动作引擎，实时演算的高速物理破坏、符合力学原理的动作精确受力、更加带感的打击反馈及环境互动。"
    },
]

var pic = 0;
var imgHeight = 0;
var imgWeithBig = 0;
var dex = 0;
var pWidth = 0;
var imgsmWidth = 0;
var hWidth = 0;
$(function () {
    for (var i = 0; i < demo.length; i++) {
        var demoevey = demo[i];


        var lis = $("<li></li>");
        var imgBig = $("<img src='images/videoArea/" + demoevey.lunbo + "' alt=''>");
        imgBig.addClass("biglb");
        lis.append($(imgBig));
        $("#lunbophone").append(lis);


        var hs = $("<h3>" + demoevey.titl + "</h3>");
        hs.addClass("titl");
        hs.appendTo($(".hh-box"));

        var ps = $("<p>" + demoevey.info + "</p>");
        ps.addClass("introduction");
        ps.appendTo($(".paragraph-box"));

        // 右侧的图片
        var imgs = $("<img src='images/videoArea/" + demoevey.fx + "' alt=''>");
        imgs.appendTo($(".small-boximg"));


        // 下面的图片
        var imgsm = $("<img src='images/videoArea/" + demoevey.fx + "' alt=''>");
        imgsm.appendTo($("#imgul"));


        // // 获取一个图片的宽度
        imgHeight = $("#imgul").children("img").width();
        // 获取大图片的宽度

        imgWeithBig = $("#lunbophone").children("li").children("img").width();

        hWidth = $(".hh-box").children("h3").width() + 16;

        pWidth = $(".paragraph-box").children("p").width();
        imgsmWidth = $(".small-boximg").children("img").width();


        imgsm.attr("index", i);

        // 鼠标进入对应的大图说明切换
        imgsm.mouseover(function () {

            pic = $(this).attr("index");
            dex = demo[pic].titl;

            $("#lunbophone").css({"left": -pic * imgWeithBig});
            $(".small-boximg").css({"left": -pic * pWidth});
            $(".hh-box").css({"left": -pic * hWidth});
            $(".paragraph-box").css({"left": -pic * pWidth});

        });

    }

    var sons = $("#imgul").children();

    // 克隆前5张图片添加到uls中
    for (var j = 0; j < 5; j++) {
        var imgs = $("#imgul").children("img:eq(" + j + ")").clone(true);
        $("#imgul").append(imgs);

        var hhs = $(".hh-box").children("h3:eq(" + j + ")").clone(true);
        $(".hh-box").append(hhs);

        var mis = $("#lunbophone").children("li:eq(" + j + ")").clone(true);
        $("#lunbophone").append(mis);

        var miss = $(".small-boximg").children("img:eq(" + j + ")").clone(true);
        $(".small-boximg").append(miss);

        var piss = $(".paragraph-box").children("p:eq(" + j + ")").clone(true);
        $(".paragraph-box").append(piss);


    }

    var setId = null;
    setId = setInterval(f1, 5000);

    $(".content-box").mouseover(function () {

        clearInterval(setId);
    });

    $(".content-box").mouseout(function () {

        setId = setInterval(f1, 5000);
    });

    $(".right").click(f1);

    function f1() {
        if (pic == sons.length) {
            pic = 0;
            $("#imgul").css({"left": 40});
            $("#lunbophone").css({"left": 0});
            $(".paragraph-box").css({"left": 0});
            $(".small-boximg").css({"left": 0});
            $(".hh-box").css({"left": 0});

        }
        pic++;

        $("#lunbophone").stop().animate({"left": -pic * imgWeithBig});
        //
        $(".paragraph-box").stop().animate({"left": -pic * pWidth});
        $(".small-boximg").stop().animate({"left": -pic * imgsmWidth});
        $(".hh-box").stop().animate({"left": -pic * hWidth});

        $("#imgul").css({"left": -pic * (imgHeight + 41)});


    }

    $(".left").click(function () {

        if (pic == 0) {
            pic = sons.length;

            var num = -(pic + 3) * imgHeight;

            $("#imgul").css("left", "" + num + "px");

            var num1 = -(pic) * imgWeithBig;
            var num2 = -(pic) * imgsmWidth;
            var num3 = -(pic) * pWidth;
            var num4 = -(pic) * hWidth;


            $("#lunbophone").css({"left": "" + num1 + "px"});
            $(".paragraph-box").css({"left": "" + num3 + "px"});
            $(".small-boximg").css({"left": "" + num2 + "px"});
            $(".hh-box").css({"left": "" + num4 + "px"});
        }
        pic--;


        $("#lunbophone").stop().animate({"left": -pic * imgWeithBig});

        $(".paragraph-box").stop().animate({"left": -pic * pWidth});
        $(".small-boximg").stop().animate({"left": -pic * imgsmWidth});
        $(".hh-box").stop().animate({"left": -pic * hWidth});
        $("#imgul").css({"left": -pic * (imgHeight + 41)});


    });

    var img = [
        {"link": "javascript:;", "name": "", "ads": "one-1.jpg", "else": ""},
        {"link": "javascript:;", "name": "", "ads": "one-2.jpg", "else": ""},


    ]
    for (var i = 0; i < 2; i++) {
        var imgs = img[i];
        var as = $("<a href=" + imgs.link + " target=_blank><img src='images/videoArea/" + imgs.ads + "'></a>");
        $(".min").append(as);

    }

    var imgdemos = [
        {
            "num": "4510",
            "linkde": "sp1.jpg",
            "type": "重击太虚强势出击",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBSKK1S7B.html"
        },
        {
            "num": "101100",
            "linkde": "sp2.jpg",
            "type": "《天下3》新门派幽篁国三系技能全息展示",
            "links": "href://v.163.com/tx3/V95AIRMF4/VBOF1R3SC.html"
        },
        {
            "num": "103200",
            "linkde": "sp3.jpg",
            "type": "2016.6.3烽火关东流光梦境",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNPD0FVH.html"
        },
        {
            "num": "10020",
            "linkde": "sp1.3.jpg",
            "type": "2016.5.28烽火势力战即将上映",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNPD0FVH.html"
        },
        {
            "num": "10200",
            "linkde": "sp1.5.jpg",
            "type": "2016.5.25烽火关东流光",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNCIABCI.html"
        },
        {
            "num": "10852",
            "linkde": "sp12.jpg",
            "type": "2016.5.30烽火关东流光",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNCIABCI.html"
        }
    ]
    var imgde = [
        {
            "num": "985",
            "linkde": "sp4.jpg",
            "type": "炫酷魔幻一流画质只等你来",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBSKK1S7B.html"
        },
        {
            "num": "98500",
            "linkde": "sp10.jpg",
            "type": "《天下3》新门派幽篁国三系技能全息展示",
            "links": "href://v.163.com/tx3/V95AIRMF4/VBOF1R3SC.html"
        },
        {
            "num": "98500",
            "linkde": "sp1.1.jpg",
            "type": "天下杨幂喊你一起玩游戏",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNPD0FVH.html"
        },
        {
            "num": "9850",
            "linkde": "sp2.1.jpg",
            "type": "天下英雄汇，等你来加入",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNPD0FVH.html"
        },
        {
            "num": "9850",
            "linkde": "sp11.jpg",
            "type": "天下奥斯卡群英会翠",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNCIABCI.html"
        },
        {
            "num": "9852",
            "linkde": "sp8.jpg",
            "type": "烽火关东流光炫酷魔幻",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNCIABCI.html"
        }
    ]
    var ims = [
        {
            "num": "3520",
            "linkde": "sp91.jpg",
            "type": "重击太虚强势出击",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBSKK1S7B.html"
        },
        {
            "num": "352100",
            "linkde": "sp92.jpg",
            "type": "《天下3》新门派幽篁国",
            "links": "href://v.163.com/tx3/V95AIRMF4/VBOF1R3SC.html"
        },
        {
            "num": "352200",
            "linkde": "sp93.jpg",
            "type": "2016.6.3烽火关东流光梦境",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNPD0FVH.html"
        },
        {
            "num": "35220",
            "linkde": "sp94.jpg",
            "type": "2016.5.28烽火势力战上映",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNPD0FVH.html"
        },
        {
            "num": "35200",
            "linkde": "sp90.jpg",
            "type": "2016.5.25烽火关东流光",
            "links": "http://v.163.com/tx3/V95AIRMF4/VBNCIABCI.html"
        },
        // {"num":"35252","linkde":"sp12.jpg","type":"2016.5.30烽火关东流光","links":"http://v.163.com/tx3/V95AIRMF4/VBNCIABCI.html"}

    ]
    // 创建图片的函数
    function creatEl(ele, ele2) {
        for (var k = 0; k < ele.length; k++) {
            var des = ele[k];

            // console.log(de);
            var divs = $("<div></div>");
            divs.addClass("small-video");
            var imgs = $("<img src='images/videoArea/" + des.linkde + "'>");


            var spans = $("<span><a href='' class='one' target='_blank'>" + des.type + "</a><a href='' class='two' target='_blank'>" + des.num + "</a></span>");


            spans.appendTo(divs);
            spans.addClass("spanstyle");
            divs.append(imgs);
            // $(".video").append(divs);
            ele2.append(divs);
        }
        $(".one").mouseover(function () {
            $(this).stop().animate({"width": "186px"}).siblings().stop().hide(500);

        }).mouseout(function () {
            $(this).stop().animate({"width": "86px"}).siblings().stop().show(500);
        });


    }

    creatEl(imgdemos, $(".video"));

    creatEl(imgde, $(".vide"));

    creatEl(ims, $(".vid"));


    var listdemo = [
        {"lin": "http://v.163.com/paike/V95F9P9TJ/V96E6JEI7.html", "name": "流光梦境战斗"},
        {"lin": "http://v.163.com/paike/V95F9P9TJ/V96E6JC7V.html", "name": "斗魂觉醒"},
        {"lin": "http://v.163.com/paike/V95F9P9TJ/V96E6II41.html", "name": "菠萝菠萝蜜"},
        {"lin": "http://v.163.com/paike/V95F9P9TJ/V96E66U72.html", "name": "归墟战场展示"}
    ]

    var listdemos = [
        {"num": "1", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E6JEI7.html", "name": " 重击太虚强势出击", "else": "hot"},
        {"num": "2", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E6JC7V.html", "name": "《逐焰南海》大型CG", "else": "hot"},
        {"num": "3", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E6II41.html", "name": " 玄玑变", "else": "hot"},
        {"num": "4", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E66U72.html", "name": " 血战", "else": ""},
        {"num": "5", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E66U72.html", "name": " 跨服门派竞技示", "else": ""},
        {"num": "6", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E66U72.html", "name": "《天下3》年度资料片昆仑变", "else": ""},
        {"num": "7", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E66U72.html", "name": "《天下3》新门派幽篁国三系技能全息", "else": ""},
        {"num": "8", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E66U72.html", "name": " 天下3宣传片", "else": ""},
        {"num": "9", "lin": "http://v.163.com/paike/V95F9P9TJ/V96E66U72.html", "name": " 炫酷魔幻只等你的加入", "else": ""}
    ]


    // 创建右侧列表的函数
    function createElem(ele, ele2) {
        var uls = $("<ul></ul>");
        for (var i = 0; i < ele.length; i++) {
            var lisdemo = ele[i];
            var address = lisdemo.lin;
            var lis = $("<li><i class='came'></i><a class='listend' target='_blank' href='" + address + "'>" + lisdemo.name + "</a></li>");
            uls.append(lis);
            ele2.append(uls);

        }

    }

    createElem(listdemo, $(".movie"));
    createElem(listdemos, $(".mo"));

    var mdivs = [
        {"type": "观看指南", "link": "http://v.163.com/tx3/V95AIRMF4/VBSKK1S7B.html", "inf": "天下再大也有人比你更合适"},
        {"type": "上传指南", "link": "http://v.163.com/tx3/V95AIRMF4/VBSKK1S7B.html", "inf": "最近还是一样努力着叹服你的技巧"},
        {"type": "分享指南", "link": "http://v.163.com/tx3/V95AIRMF4/VBSKK1S7B.html", "inf": "独乐乐不如众乐乐分享一下"},
    ]

    for (var m = 0; m < 3; m++) {
        var mdvs = mdivs[m];
        var mdiv = $("<div></div>");
        mdiv.addClass("divone");
        console.log(mdvs.link);
        var adiv = $("<a href=" + mdvs.link + " target='_blank'></a>");

        var spandiv = $("<span>" + mdvs.type + "</span>");
        var pdiv = $("<p class=''>" + mdvs.inf + "</p>");
        if (m == 1) {
            adiv.addClass("bigtwo");
        }
        if (m == 2) {
            adiv.addClass("bigthree");
        }
        adiv.appendTo(mdiv);
        spandiv.appendTo(mdiv);
        pdiv.appendTo(mdiv);
        mdiv.appendTo(".divnum");

    }

    // $(".search-of").val("请输入关键字");
    // $(".search-of").focus(function () {
    //     if ($(this).val() == "请输入关键字") {
    //         $(this).val("");
    //     }
    // }).blur(function () {
    //     if ($(this).val().length == 0 || $(this).val() != "请输入关键字") {
    //         $(this).val("请输入关键字");
    //     }
    // })

    var endifo = [
        {"type": "公司简介 - ", "link": "http://gb.corp.163.com/gb/about/overview.html"},
        {"type": "客户服务 - ", "link": "http://help.163.com"},
        {"type": "相关法律 - ", "link": "http://gb.corp.163.com/gb/legal.html"},
        {"type": "网易游戏 - ", "link": "http://game.163.com/about/about.html"},
        {"type": "联系我们 - ", "link": "http://game.163.com/about/contactus.html"},
        {"type": "商务合作 - ", "link": "http://game.163.com/bs/business.html"},
        {"type": "加入我们 ", "link": "http://game.163.com/job"},

    ]
    for (var n = 0; n < endifo.length; n++) {
        var endinfs = endifo[n];
        var as = $("<a href=" + endinfs.link + " target='_blank'>" + endinfs.type + "</a>");
        as.addClass("sty");
        as.appendTo($(".endlogo").find("span"));
    }
    var psobj = $("<p> 网易公司版权所有 ©1997-2017　　粤网文[2014]0636-236号</p>");
    psobj.appendTo($(".endlogo"));


    setInterval(fna1, 1000);
    function fna1() {
        $("#allan").animate({"top": "80"}, function () {
            $("#allan").animate({"top": "60"})
        })


    }


    // $(".search-of")

    $(".search-of").keyup(function () {

        var keyWords = ["" + $(this).val() + " 你知道吗？", "" + $(this).val() + " 你知道今天天气吗？", "" + $(this).val() + "你好帅", "" + $(this).val() + " 大家明天见"];
        if ($("#dv")) {

            $("#dv").remove();
        }
        var tempArr = [];
        for (var i = 0; i < keyWords.length; i++) {
            var dt = keyWords[i];
            var te = $(this).val();
            if (dt.indexOf(te[0]) == 0) {
                tempArr.push(dt);
            }
        }
        if ($(this).val().length == 0 || tempArr.length == 0) {
            if ($("#dv")) {
                $("#dv").remove();

            }
            return;
        }

        var dvobj = $("<div id='dv'></div>");
        $(".search").append(dvobj);
        dvobj.css({
            "position": "absolute", "top": "33px", "right": "0px", "width": "189px", "height": "102px",
            "backgroundColor": "rgba(255,255,255,0.9)"
        });


        for (var j = 0; j < tempArr.length; j++) {

            var tems = tempArr[j];
            var pObj = $("<p></p>");
            dvobj.append(pObj);
            pObj.css({"cursor": "pointer", "margin": "3px"});
            pObj.text(tems);

            pObj.mouseover(function () {
                $(this).css("backgroundColor", "#fee7e6")
            });
            pObj.mouseout(function () {
                $(this).css("backgroundColor", "")
            });
            pObj.click(function () {
                var to = $(this).text();
                $(".search-of").val(to);
                dvobj.css("display", "none");
                $(".search-of").css({"backgroundColor": "", "color": ""});
            });
        }
    });

    $(".search-of").val("大家好");
    $(".search-of").focus(function () {
        if ($(this).val().length != 0) {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val().length == 0) {
            $(this).val("大家好");
        }
    })
});
