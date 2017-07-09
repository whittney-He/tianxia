

window.onload = function () {

    // --by张囡 2017.1.5--
    // 顶部导航效果
    // topNav();
    // 生成页面banner部分的导航
    createNav();


    // --by曹雪 2017.1.5--
    // 留言板滚动效果和信息tab切换
    messageBoardRoll();

    // --by张梦雅 2017.1.5--
    // 为a标签设置背景图片
    addAImg();
    // banner区域轮播图
    bannerImgRoll();


    // --by卢盼 2017.1.5--
    // 纪年信息文字向上滚动效果
    jobsAnnalsRoll();
    // 人物技能滑动效果
    jobsShow();
    // 右侧图片方法
    jobsImgMagnify();


    // --by孙美红 2017.1.5--
    // 天下工具部分的图片放大效果
    txToolImgMagnify();
    // 天下工具部分的二维码显示效果
    QRcodeShow();


    // --by吴昊喆 2017.1.5--
    // 同人大赏部分
    colleaguesReward();


    // --by卢盼 2017.1.5--
    // 热点关注图片放大
    hotAttImgMagnify();
    // 更多分享显示
    shareMoreShow();
};

// --hander导航   by张囡 2017.1.5--
// 生成页面banner部分的导航
function createNav() {
    // 数据
    var ullis = [
        {"link": "http://tx3.163.com/news/notice/index.html", "name": "游戏公告", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/2014/whez/", "name": "游戏特色", "targettype": "_blank", "else": ""},
        {"link": "javascript:;", "name": "天下兵书", "targettype": "_blank", "else": ""},
        {"link": "javascript:;", "name": "天下工具", "targettype": "_blank", "else": ""},
        {"link": "javascript:;", "name": "视听天下", "targettype": "_blank", "else": ""},
        {"link": "javascript:;", "name": "回溯之境", "targettype": "_blank", "else": ""},
        {"link": "javascript:;", "name": "互动服务", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.netease.com/", "name": "官方论坛", "targettype": "_blank", "else": ""},
    ]
    var spegame1 = [
        {"link": "http://tx3.163.com/news/index.html", "name": "最新消息", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/news/news/index.html", "name": "官方新闻", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/news/notice/index.html", "name": "游戏公告", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/news/actives/index.html", "name": "热点活动", "targettype": "_blank", "else": ""}
    ];
    var spegame2 = [
        // {"link": "javascript:;", "name": "游戏背景", "targettype": "_blank", "else": ""},
        {"link": "tenProfession.html", "name": "十大门派1", "targettype": "_blank", "else": ""},
        {"link": "guiMo.html", "name": "十大门派2", "targettype": "_blank", "else": ""},
        {"link": "huangHuo.html", "name": "十大门派3", "targettype": "_blank", "else": ""},
        // {"link": "http://tx3.163.com/show/scene/", "name": "场景展示", "targettype": "_blank", "else": ""},
        {
            "link": "geographyRec.html",
            "name": "国风地理志",
            "targettype": "_blank",
            "else": ""
        },
    ]
    var spegame3 = [
        {"link": "newGuide.html", "name": "新手指南", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/fans/skill/index.html", "name": "进阶攻略", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/fans/skill/zhanbao.html", "name": "精彩战报", "targettype": "_blank", "else": ""},
    ]
    var spegame4 = [
        {"link": "http://tx3.cbg.163.com/", "name": "藏宝阁", "targettype": "_blank", "else": ""},
        {"link": "heroList.html", "name": "天下英雄榜", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.baike.163.com/", "name": "天下百科", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.zhidao.163.com/", "name": "天下知道", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/hfcx/", "name": "合服查询", "targettype": "_blank", "else": ""},
    ]
    var spegame5 = [
        {"link": "mapDepot.html", "name": "天下画廊", "targettype": "_blank", "else": ""},
        {"link": "videoArea.html", "name": "天下视频", "targettype": "_blank", "else": ""},
        {"link": "gfMusic.html", "name": "国风音乐", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/fans/skill/xs.html", "name": "天下小说", "targettype": "_blank", "else": ""},
    ]
    var spegame6 = [
        {"link": "year.html", "name": "历届资料片", "else": "", "targettype": "_blank"},
        {"link": "meeting.html", "name": "历届见面会", "else": "", "targettype": "_blank"}
    ]
    var spegame7 = [
        {"link": "http://tx3.163.com/ziliaopian/", "name": "在线客服", "targettype": "_blank", "else": ""},
        {"link": "http://tx3.163.com/jianmianhui/", "name": "心意服务", "targettype": "_blank", "else": ""}
    ]
    var spegame8 = []
    var spe = [
        spegame1, spegame2, spegame3, spegame4, spegame5, spegame6, spegame7,
        spegame8
    ]

    // 动态创建li-a游戏列表
    function getSmall(element, arr) {
        for (var j = 0; j < arr.length; j++) {
            var arras = arr[j];
            var arrlis = document.createElement("li");
            var as = document.createElement("a");
            as.href = arras.link;
            as.target = arras.targettype;
            as.innerHTML = arras.name;
            as.className = "navgamea";
            arrlis.appendChild(as);
            element.appendChild(arrlis);
        }
    }

    // 动态创建nav导航
    function getNewgameA(element, arr1, spe) {
        for (var i = 0; i < arr1.length; i++) {
            var arrs = arr1[i];
            var lis = document.createElement("li");
            lis.className = "nav-ul-li";
            if (i == 4) {
                lis.className = "nav-ul-li nav-ul-li-right"
            }

            element.appendChild(lis);
            var lisa = document.createElement("a");
            lisa.href = arrs.link;
            lisa.target = arrs.targettype;
            lisa.innerHTML = arrs.name;
            lisa.className = "navas";
            lis.appendChild(lisa);
            var divs = document.createElement("div");
            divs.className = "nav-game";
            divs.style.overflow = "hidden";
            lis.appendChild(divs);
            if (i == arr1.length - 1) {
                var spans = document.createElement("span");
                spans.style.width = 116 + "px";
                spans.style.height = 160 + "px";
                spans.style.display = "block";
                spans.style.background = "url(images/all.png) no-repeat -299px -154px";
                divs.appendChild(spans);
            }
            var uls = document.createElement("ul");
            uls.className = "nav-game-ul";
            divs.appendChild(uls);
            getSmall(uls, spe[i]);
            var bs = document.createElement("b");
            bs.style.display = "block";
            bs.style.width = 116 + "px";
            bs.style.height = 37 + "px";
            lis.appendChild(bs);
        }
    }

    getNewgameA(getById("navgameul"), ullis, spe);
    var lis = getByClassName("nav-ul-li");
    // 设置nav鼠标进入的样式以及移除的样式
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            animate(this.children[0], {
                "lineHeight": 125
            })
            this.children[0].style.color = "#E97200";
            this.children[1].style.display = "block";
            // console.log(this.children[1]);
            this.children[0].style.background = "url(images/nav_bg_rep_li.png) repeat";
            this.children[1].style.background = "url(images/nav_bg_rep_li.png) repeat";
            this.children[2].style.background = "url(images/nav_bg_bottom_.png) no-repeat";
        }
        lis[i].onmouseout = function () {
            animate(this.children[0], {
                "lineHeight": 140
            })
            this.children[1].style.display = "none";
            this.children[0].style.color = "#fff";
            this.children[0].style.background = "";
            this.children[2].style.background = ""
        }
    }
}


// --banner区域   by曹雪 2017.1.5--
// 留言板滚动效果和信息tab切换
function messageBoardRoll() {
    //获取时间的函数
    getTime();
    setInterval(getTime, 1000);
    function getTime() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var week = d.getDay();
        //获取阳历日期
        getById("solar").innerHTML = month + "月" + day + "日";
        //获取星期几
        var htr = "";
        switch (week) {
            case 0:
                htr = "星期日";
                break;
            case 1:
                htr = "星期一";
                break;
            case 2:
                htr = "星期二";
                break;
            case 3:
                htr = "星期三";
                break;
            case 4:
                htr = "星期四";
                break;
            case 5:
                htr = "星期五";
                break;
            case 6:
                htr = "星期六";
                break;
        }
        getById("lunar").innerHTML = htr;
    }


    //滚动留言板---页面加载后就要移动留言(ul)
    //获取ul
    var ulObj = getById("scroll-left");
    var listObj = ulObj.children;
    var setId = null;//定义变量用来存储计时器的id值
    //鼠标进入
    for (var i = 0; i < listObj.length; i++) {
        listObj[i].onmouseover = function () {
            clearInterval(setId);
        };
        //鼠标离开
        listObj[i].onmouseout = function () {
            setId = setInterval(f1, 50);
        };
    }
    setId = setInterval(f1, 50);
    function f1() {
        var step = -2;//每次移动的步数
        var current = ulObj.offsetLeft;//当前位置
        if (current < -2000) {
            ulObj.style.left = 0 + "px";
        } else {
            //说明现在正常走
            current += step;
            ulObj.style.left = current + "px";
        }
    }


    //动画函数:任意的元素,移动到指定的位置
    function animate(element, target) {
        clearInterval(element.setId);//点击按钮的时候先清理计时器
        element.setId = setInterval(function () {
            //元素每次移动的步数
            var step = 10;
            //当前位置
            var current = element.offsetLeft;
            //如果目标比当前位置大,则走正步,否则走负数
            step = current < target ? step : -step;
            current += step;
            //元素移动后的位置=元素的当前位置+移动的步数
            if (Math.abs(target - current) > Math.abs(step)) {
                //设置div的left值
                element.style.left = current + "px";
            } else {
                clearInterval(element.setId);//停止计时器
                element.style.left = target + "px";
            }
        }, 10);
    }

    //先获取所有的tab-right-hd中li标签
    var listsTab = getById("tab-right-hd").children[0].children;
    //获取所有的tab-right-bd中的div标签----相框
    var bdObj = getById("tab-right-bd");
    //宽度
    var bdWidth = bdObj.offsetWidth;
    //装每个div的盒子
    var divTab = bdObj.children[0];
    //获取tab-right-bd中div中的子div
    // var dvObjs=divTab.children
    //遍历所有的li标签
    for (var i = 0; i < listsTab.length; i++) {
        //为li添加自定义属性索引值
        listsTab[i].setAttribute("index", i);
        //为li注册点击事件
        listsTab[i].onmouseover = function () {
            //排他功能--让所有li 类样式移除
            for (var j = 0; j < listsTab.length; j++) {
                listsTab[j].removeAttribute("class");
            }
            this.className = "current";
            // this.setAttribute("class","current");
            //移动div
            //先获取当前li中的自定义属性的索引值
            var pic = parseInt(this.getAttribute("index"));
            // console.log(pic);
            //移动图片:索引*相框的宽度
            animate(divTab, -pic * bdWidth);
        };
    }

    //模拟搜索框
    getById("tab-search-btn").onclick = function () {
        window.open("http://so.tx3.163.com/search?pg=1&fl=&plen=20&qs=");
    }

}


// --banner区域   by张梦雅 2017.1.5--
// 为a标签设置背景图片
function addAImg() {
    //获取ul
    var ulObj = getById("uu");
    //获取ul中的每个li
    var list = ulObj.children;
    //获取li中的每个a
    for (var i = 0; i < list.length; i++) {

        var aObjs = list[i].children[0];
        var spans = aObjs.children[0];
        spans.style.background = "url('images/qlink_" + (i + 1) + ".png') no-repeat";
        var spans1 = spans.nextElementSibling;
        spans1.style.background = "url('images/qlink_" + (i + 1) + "_hover.png') no-repeat";
    }
}

// banner区域轮播图
function bannerImgRoll() {

    var index = 0;
    var setId = null;
    //获取中间的图片框
    var centerBox = getById("download-center");
    //获取轮播的图片们
    var imgObjs = getById("sbanners").getElementsByTagName("a");
    //获取小按钮们
    var aObjs = getById("sbtns").getElementsByTagName("a");

    //停止计时器
    centerBox.onmouseover = function () {
        clearInterval(setId);
    }
    //开启计时器
    centerBox.onmouseout = function () {
        setId = setInterval(run, 2000);
    }

    for (var i = 0; i < aObjs.length; i++) {
        aObjs[i].id = i;
        aObjs[i].onmouseover = mouseoverHandle;
        aObjs[i].onmouseout = mouseoutHandle;
    }

    function mouseoverHandle() {
        clearInterval(setId);
        changeOption(this.id);
        for (var j = 0; j < aObjs.length; j++) {
            aObjs[j].className = "";
        }
        this.className = "current";

    }

    function mouseoutHandle() {

    }

    //定义计时器
    setId = setInterval(run, 2000);
    function run() {
        index++;
        if (index >= aObjs.length) {
            index = 0
        }
        ;
        changeOption(index);
    }

    //封装函数changeOption
    function changeOption(curindex) {
        // console.log(index)
        for (var j = 0; j < aObjs.length; j++) {
            imgObjs[j].className = "";
            aObjs[j].className = "";
        }
        imgObjs[curindex].className = "current";
        aObjs[curindex].className = "current";
        index = curindex;
    }

}

// --老友推荐   by卢盼 2017.1.5--
// 纪年信息文字向上滚动效果
function jobsAnnalsRoll() {

    // 根据json生成纪年信息
    var jsonAnnal = [
        {"content": "莫愁前路无知己，天下谁人不识君。", "server": "天下无双", "username": "不会针灸", "days": "2552", "date": "01/05"},
        {"content": "荧荧琼玉，春转秋度。遗君遗我，白头不负。", "server": "弱水三千", "username": "慕言", "days": "389", "date": "01/04"},
        {"content": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "黄鹤楼", "username": "金光瑶", "days": "908", "date": "01/04"},
        {"content": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "琉璃月", "username": "秦官人", "days": "2330", "date": "01/04"},
        {"content": "莫愁前路无知己，天下谁人不识君。", "server": "烟花三月", "username": "暗夜灬神刀", "days": "990", "date": "01/04"},
        {"content": "莫愁前路无知己，天下谁人不识君。", "server": "上善若水", "username": "小妞站住", "days": "2305", "date": "01/04"},
        {"content": "荧荧琼玉，春转秋度。遗君遗我，白头不负。", "server": "逐鹿中原", "username": "云发天玑", "days": "389", "date": "01/04"},
        {"content": "荧荧琼玉，春转秋度。遗君遗我，白头不负。", "server": "致青春", "username": "乄尐籠包", "days": "3556", "date": "01/04"},
        {"content": "荧荧琼玉，春转秋度。遗君遗我，白头不负。", "server": "墨倾天下", "username": "乀初", "days": "2330", "date": "01/04"},
        {"content": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "天外飞仙", "username": "乄灬洛羽丶", "days": "120", "date": "01/04"},
        {"content": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "墨倾天下", "username": "惗镹丶", "days": "390", "date": "01/04"},
        {"content": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "盛世长安", "username": "若梓丶", "days": "387", "date": "01/04"},
        {"content": "莫愁前路无知己，天下谁人不识君。", "server": "齐鲁天下", "username": "戰乄初色", "days": "908", "date": "01/04"},
        {"content": "莫愁前路无知己，天下谁人不识君。", "server": "天府之国", "username": "半弄清风醉丶", "days": "309", "date": "01/04"},
        {"content": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "笑看风云", "username": "北熙向暖丶", "days": "299", "date": "01/04"},
        {"content": "荧荧琼玉，春转秋度。遗君遗我，白头不负。", "server": "气壮山河", "username": "芦柑", "days": "332", "date": "01/04"},
        {"content": "知君仙骨无寒暑，千载相逢犹旦暮。", "server": "天下无双", "username": "乄曲陌离歌丶", "days": "1208", "date": "01/04"},
        {"content": "莫愁前路无知己，天下谁人不识君。", "server": "天下无双", "username": "乀四爷", "days": "2552", "2310": "01/04"}
    ];

    // 获取存放信息的div
    var annInfo = getById("ann-info");
    // 创建ul元素
    var ulObj = document.createElement("ul");
    // 添加到div中
    annInfo.appendChild(ulObj);

    // 定义存放html的数组
    var arrHtml = [];
    // 遍历纪年信息
    for (var i = 0; i < jsonAnnal.length; i++) {
        // 获取每个json对象
        var annalInfo = jsonAnnal[i];
        arrHtml.push('<li><p>' + annalInfo.content + '【<span class="server-name">' + annalInfo.server + '</span>】' +
            '的<span class="username">' + annalInfo.username + '</span>踏入天下' + annalInfo.days + '天！<em>' + annalInfo.date + '</em></p></li>');
    }
    // 添加到ul中
    ulObj.innerHTML = arrHtml.join("");

    // 获取前三条li信息，动态添加到ul最后
    ulObj.appendChild(ulObj.children[0].cloneNode(true));
    ulObj.appendChild(ulObj.children[1].cloneNode(true));
    ulObj.appendChild(ulObj.children[2].cloneNode(true));

    // 设置文字滚动效果
    // 定义滚动步数
    var step = 1;
    var timer = setInterval(annalsInfoRoll, 30);

    function annalsInfoRoll() {
        // 判断如果移出的top位置大于ul的高度-外部div高度时，则将ul的位置定位到0
        if (ulObj.offsetTop <= -(ulObj.offsetHeight - annInfo.offsetHeight)) {
            ulObj.style.top = 0 + "px";
        }
        ulObj.style.top = ulObj.offsetTop - step + "px";
    }

    // 为ul添加鼠标移入移出事件
    ulObj.onmouseover = function () {
        clearInterval(timer);
    };
    ulObj.onmouseout = function () {
        timer = setInterval(annalsInfoRoll, 30);
    };

}

// 人物技能滑动效果
function jobsShow() {
    // 获取所有的人物名称按钮
    var figureNameBtns = getById("jobs-btn").getElementsByTagName("a");

    // 遍历获取所有的a标签
    for (var i = 0; i < figureNameBtns.length; i++) {
        // 为每个a标签添加索引
        figureNameBtns[i].setAttribute("data-index", i);
        // 为a注册鼠标移入事件
        figureNameBtns[i].onmouseover = figureNameBtns_Mouseover;
    }

    // 鼠标移入事件
    function figureNameBtns_Mouseover() {

        // 使所有的a下的span标签透明，并且移除父级标签li的current样式
        for (var j = 0; j < figureNameBtns.length; j++) {
            // 使背景透明
            // 获取span
            var span = figureNameBtns[j].getElementsByTagName("span")[0];
            animate(span, {"opacity": 0});

            // 移除li的current
            // 获取父级元素li
            var li = figureNameBtns[j].parentNode;
            // 获取它的样式
            var liClassName = li.className;
            // 移除样式的current
            liClassName = liClassName.replace(" current", "");
        }

        // 设置li的current
        this.parentNode.className += " current";
        // 使span显示
        // 获取span
        var span = this.getElementsByTagName("span")[0];
        animate(span, {"opacity": 1});

        // 设置技能、武力值、人物形象滑动显示
        // 设置所有的人物详情都去掉current属性，并且滑动隐藏
        // 获取所有的人物形象div
        var jobsCons = getById("jobs-tabcon").getElementsByClassName("jobs-con");
        for (var j = 0; j < jobsCons.length; j++) {
            // 设置描述、武力值表格、人物形象滑动隐藏
            // 设置描述隐藏
            animate(jobsCons[j].getElementsByClassName("desc")[0], {"left": -140, "opacity": 0});
            // 设置武力值表格隐藏
            animate(jobsCons[j].getElementsByClassName("form")[0], {"left": -200, "opacity": 0});
            // 设置人物形象滑动隐藏
            animate(jobsCons[j].getElementsByClassName("figure")[0], {"right": -400, "opacity": 0});

            // 设置去掉current属性
            jobsCons[j].className = jobsCons[j].className.replace(" current", "");
        }

        // 设置当前对应的人物形象div添加上current属性
        // 获取选中a标签的索引
        var index = this.getAttribute("data-index");
        // 获取对应的人物形象div
        var jobsConCur = jobsCons[index];
        jobsConCur.className += " current";

        // 显示描述、武力值表格、人物形象滑动显示
        // 设置描述显示
        animate(jobsConCur.getElementsByClassName("desc")[0], {"left": 25, "opacity": 1});
        // 设置武力值表格显示
        animate(jobsConCur.getElementsByClassName("form")[0], {"left": 37, "opacity": 1});
        // 设置人物形象滑动显示
        animate(jobsConCur.getElementsByClassName("figure")[0], {"right": 0, "opacity": 1});
    }

    // 调用第一个人物按钮的鼠标进入事件
    figureNameBtns[0].onmouseover();

}

// 右侧图片方法
function jobsImgMagnify() {
    // 获取图片的父级元素a标签
    var imgObjs = getById("material").getElementsByTagName("img");
    // 鼠标进入图片放大效果
    imgMagnify(imgObjs);
}

// 公共: 鼠标进入图片放大效果  -css3
function imgMagnify(elemets) {
    // 遍历元素，设置鼠标进入移出事件
    for (var i = 0; i < elemets.length; i++) {
        elemets[i].onmouseover = mouseoverHandel;
        elemets[i].onmouseout = mouseoutHandel;
    }

    function mouseoverHandel() {
        // 为元素添加样式
        this.className += " scaleMagnify";
    }

    function mouseoutHandel() {
        // 移出元素的样式
        this.className = this.className.replace(" scaleMagnify", "");
    }
}


// --天下工具部分的图片放大效果   by孙美红 2017.1.5--
function txToolImgMagnify() {
    //天下工具中间部分，鼠标进入，图片渐渐放大
    //获取所有的图片
    var list = getByClassName("tools-mid-imglist")[0].getElementsByTagName("img");
    // 鼠标进入图片放大效果
    imgMagnify(list);
    // var oldsize = {"width": 176, "height": 108, "left": 0, "top": 0};
    // var tagetsize = {"width": 196, "height": 128, "left": -10, "top": -10};
    //
    // for (var i = 0; i < list.length; i++) {
    //
    //     list[i].onmouseover = function () {
    //
    //         //获取li标签内部的img
    //         var imgObj = this.children[0];
    //
    //         animate(imgObj, tagetsize);
    //     };
    //     list[i].onmouseout = function () {
    //         //获取li标签内部的img
    //         var imgObj = this.children[0];
    //         animate(imgObj, oldsize);
    //     };
    // }
}

// --天下工具部分的二维码显示效果   by孙美红 2017.1.5--
function QRcodeShow() {
    //天下工具右边部分 鼠标进入显示二维码图片  鼠标离开隐藏二维码
    getById("toolsRightBtn1").onmouseover = function () {
        animate(getById("toolsRightBtn1Hover"), {"top": 0});
    };
    getById("toolsRightBtn1").onmouseout = function () {
        animate(getById("toolsRightBtn1Hover"), {"top": 129});
    };
    getById("toolsRightBtn2").onmouseover = function () {
        animate(getById("toolsRightBtn2Hover"), {"top": 0});
    };
    getById("toolsRightBtn2").onmouseout = function () {
        animate(getById("toolsRightBtn2Hover"), {"top": 129});
    };
}


// --同人大赏部分   by吴昊喆 2017.1.5--
function colleaguesReward() {

    //图片中心变大
    var lists = getById("enjoy-main-left-content").getElementsByTagName("img");
    // 鼠标进入图片放大效果
    imgMagnify(lists);
    // for (var i = 0; i < lists.length; i++) {
    //     var aObjs = lists[i].getElementsByTagName("a");
    //     for (var j = 0; j < aObjs.length; j++) {
    //         var imgObjs = aObjs[j].getElementsByTagName("img");
    //         for (var k = 0; k < imgObjs.length; k++) {
    //             imgObjs[k].onmouseover = function () {
    //                 var json1 = {
    //                     "width": 245,
    //                     "height": 164,
    //                     // "top": -12,
    //                     // "left": -28
    //                 }
    //                 animate(this, json1);
    //             }
    //             imgObjs[k].onmouseout = function () {
    //                 var json2 = {
    //                     "width": 215,
    //                     "height": 140,
    //                     // "top": 0,
    //                     // "left": 0
    //                 }
    //                 animate(this, json2);
    //             }
    //         }
    //     }
    // }

    //nav文字变色
    //btn1
    getById("enjoy-header-btn1").onmouseover = function () {
        this.style.backgroundPosition = "-1113px -247px";
    }
    getById("enjoy-header-btn1").onmouseout = function () {
        this.style.backgroundPosition = "-1048px -247px";
    }
    //btn2
    getById("enjoy-header-btn2").onmouseover = function () {
        this.style.backgroundPosition = "-1236px -247px";
    }
    getById("enjoy-header-btn2").onmouseout = function () {
        this.style.backgroundPosition = "-1178px -247px";
    }
    //btn3
    getById("enjoy-header-btn3").onmouseover = function () {
        this.style.backgroundPosition = "-649px -201px";
    }
    getById("enjoy-header-btn3").onmouseout = function () {
        this.style.backgroundPosition = "-615px -201px";
    }
    //btn4
    getById("enjoy-header-btn4").onmouseover = function () {
        this.style.backgroundPosition = "-1327px -50px";
    }
    getById("enjoy-header-btn4").onmouseout = function () {
        this.style.backgroundPosition = "-1330px -92px";
    }
    //btn5
    getById("enjoy-header-btn5").onmouseover = function () {
        this.style.backgroundPosition = "-664px -262px";
    }
    getById("enjoy-header-btn5").onmouseout = function () {
        this.style.backgroundPosition = "-1310px -217px";
    }
    //btn6
    getById("enjoy-header-btn6").onmouseover = function () {
        this.style.backgroundPosition = "-729px -262px";
    }
    getById("enjoy-header-btn6").onmouseout = function () {
        this.style.backgroundPosition = "-696px -262px";
    }

    //歌曲列表
    //播放暂停按钮
    getById("radio-play").onclick = function () {
        if (this.className == "radio-play") {
            this.style.backgroundPosition = "0 -26px";
            this.className = "radio-play stop";
        } else if (this.className == "radio-play stop") {
            this.style.backgroundPosition = "0 0";
            this.className = "radio-play";
        }
    }
    //歌曲切换
    var songListUU = getById("songs-list")
    var songList = songListUU.getElementsByTagName("li");
    var SongsListIObjs = songListUU.getElementsByTagName("i");
    var SongsListEmObjs = songListUU.getElementsByTagName("em");
    var radioLeft = getById("radio-left");
    var radioRight = getById("radio-right");
    for (var i = 0; i < songList.length; i++) {
        // songList[i].id="songs-list"+i;
        //点击列表歌曲切换//////////////////////////
        songList[i].onclick = function () {
            //列表编号
            for (var j = 0; j < SongsListIObjs.length; j++) {
                SongsListIObjs[j].className = "";
            }
            this.children[0].children[0].className = "hide";
            //小喇叭
            for (var k = 0; k < SongsListEmObjs.length; k++) {
                SongsListEmObjs[k].className = "hide";
            }
            this.children[0].children[1].className = "";

        }
        //点击左右键歌曲切换//////////////////////?????
    }

}


// --热点关注   by卢盼 2017.1.7--
// 热点关注图片放大
function hotAttImgMagnify() {
    // 获取所有的图片
    var imgObjs = getById("hot-info").getElementsByTagName("img");
    // 鼠标进入图片放大效果
    imgMagnify(imgObjs);
}
// 更多分享显示
function shareMoreShow() {
    // 获取更多分享div
    var shareMoreDiv = getById("hot-share-more");
    // 获取更多按钮
    var shareMore = getById("shareMore");
    // 注册鼠标移入事件
    shareMore.onmouseover = function () {
        shareMoreDiv.style.display = "block";
    };
    // 注册鼠标移出事件
    shareMore.onmouseout = function () {
        shareMoreDiv.style.display = "none";
    };
}

