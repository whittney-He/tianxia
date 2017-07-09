
function topNav() {
    // 顶部广告进入显示大广告离开隐藏
    getById("top_middle_zn").onmouseover = function () {
        getById("top_middle_zn").children[0].style.display = "none";
        getByClassName("top-middle-bottom")[0].style.display = "block";
        getByClassName("top-middle-bottom")[0].style.marginTop = 55 + "px";

    };
    getById("top_middle_zn").onmouseout = function () {

        getById("top_middle_zn").children[0].style.display = "block";
        getByClassName("top-middle-bottom")[0].style.display = "none";

    };

    // 网易游戏全目录进入显示，离开隐藏
    getById("cataloguegame").onmouseover = function () {
        getById("cataloguegame-box").style.display = "block";
        animate(getById("cataloguegame-box"), {
            "height": 440
        })
        getById("cataloguegame").children[0].style.borderBottom = "3px solid #BC2E2E";
    }
    getById("cataloguegame").onmouseout = function () {
        getById("cataloguegame-box").style.display = "";
        animate(getById("cataloguegame-box"), {
            "height": 400
        })
        getById("cataloguegame").children[0].style.borderBottom = "";
    }

    //网易游戏里的 hot new no.1样式的设置（动态生成）
    function ems(as, lis) {
        if (as.else == "number1") {
            var em = document.createElement("em");
            em.style.display = "inline-block";
            em.style.width = 18 + "px";
            em.style.height = 9 + "px";
            em.style.marginTop = 8 + "px";
            em.style.marginRight = 5 + "px";
            em.style.background = "url(images/spilit.png) no-repeat -97px -276px";
            lis.appendChild(em);
        }
        if (as.else == "new") {
            var em = document.createElement("em");
            em.style.display = "inline-block";
            em.style.width = 18 + "px";
            em.style.height = 9 + "px";
            em.style.marginTop = 8 + "px";
            em.style.marginRight = 11 + "px";
            em.style.float = "right";
            em.style.background = "url(images/spilit.png) no-repeat -97px -214px";
            lis.appendChild(em);
        }
        if (as.else == "hot") {
            var em = document.createElement("em");
            em.style.display = "inline-block";
            em.style.width = 18 + "px";
            em.style.height = 9 + "px";
            em.style.marginTop = 8 + "px";
            em.style.marginRight = 11 + "px";
            em.style.float = "right";
            em.style.background = "url(images/spilit.png) no-repeat -97px -152px";
            lis.appendChild(em);
        }
    }

    // 创建网易游戏全目录里的元素 函数封装
    function creteElementevery(arr, ele, length) {
        for (var i = 0; i < arr.length; i++) {
            var as = arr[i];
            var lis = document.createElement("a");
            lis.href = as.link;
            lis.innerHTML = as.name;
            lis.target = as.typetarget;
            lis.className = "aone";
            lis.style.width = length + "px";
            ele.appendChild(lis);
            ems(as, lis);

        }
    }

    // pc游戏数据
    var pcgameone = [
        {"link": "http://xyq.163.com?from=nietop", "typetarget": "_blank", "name": "梦幻西游电脑版", "else": "number1"},
        {"link": "http://tx3.163.com?from=nietop", "typetarget": "_blank", "name": "天下3", "else": "hot"},
        {"link": "http://xy2.163.com?from=nietop", "typetarget": "_blank", "name": "大话2经典版", "else": "hot"},
        {"link": "http://ty.163.com?from=nietop", "typetarget": "_blank", "name": "天谕", "else": ""},
        {"link": "http://dh2.163.com/?from=nietop", "typetarget": "_blank", "name": "大话2免费版", "else": "new"},
        {"link": "http://bw.163.com?from=nietop", "typetarget": "_blank", "name": "西楚霸王", "else": ""},
        {"link": "http://xy3.163.com?from=nietop", "typetarget": "_blank", "name": "新大话3经典版", "else": "new"},
        {"link": "http://xqn.163.com?from=nietop", "typetarget": "_blank", "name": "新倩女幽魂", "else": "new"},
        {"link": "http://x3.163.com?from=nietop", "typetarget": "_blank", "name": "新大话3免费版", "else": "new"},
        {"link": "http://zmq.163.com?from=nietop", "typetarget": "_blank", "name": "镇魔曲", "else": ""},
        {"link": "http://dtws2.163.com?from=nietop", "typetarget": "_blank", "name": "大唐无双零", "else": "new"},
        {"link": "http://long.163.com/?from=nietop", "typetarget": "_blank", "name": "龙魂时刻", "else": "new"},
        {"link": "http://wh.163.com?from=nietop", "typetarget": "_blank", "name": "武魂2", "else": ""},
        {"link": "http://jl.163.com?from=nietop", "typetarget": "_blank", "name": "精灵传说", "else": "new"},
        {"link": "http://zh.163.com?from=nietop", "typetarget": "_blank", "name": "斩魂", "else": ""},
        {"link": "http://ff.163.com?from=nietop", "typetarget": "_blank", "name": "新飞飞", "else": ""},
        {"link": "http://www.warcraftchina.com?from=nietop", "typetarget": "_blank", "name": "魔兽世界", "else": ""},
        {"link": "http://www.diablo3.com.cn/?from=nietop", "typetarget": "_blank", "name": "暗黑破坏神3", "else": ""}

    ];
    var pcgametwo = [
        {"link": "http://ow.blizzard.cn/home?from=nietop", "typetarget": "_blank", "name": "守望先锋", "else": ""},
        {"link": "http://tuji.163.com/?from=nietop", "typetarget": "_blank", "name": "突击英雄", "else": ""},
        {"link": "http://db.163.com/?from=nietop", "typetarget": "_blank", "name": "夺宝联盟", "else": ""},
        {"link": "http://wf.163.com/?from=nietop", "typetarget": "_blank", "name": "无尽战区", "else": ""},
        {"link": "http://z.163.com/?from=nietop", "typetarget": "_blank", "name": "战意", "else": ""},
        {"link": "http://mjdj.163.com/?from=nietop", "typetarget": "_blank", "name": "秘境对决", "else": ""},
        {
            "link": "http://www.heroesofthestorm.com.cn/landing/?from=nietop",
            "typetarget": "_blank",
            "name": "风暴英雄",
            "else": ""
        },
        {"link": "http://sc2.163.com/home?from=nietop", "typetarget": "_blank", "name": "星际争霸", "else": ""},
        {"link": "http://y3.163.com?from=nietop", "typetarget": "_blank", "name": "英雄三国", "else": ""},
        {"link": "http://www.hearthstone.com.cn/?from=nietop", "typetarget": "_blank", "name": "炉石传说", "else": ""},

    ];
    // 手机游戏数据
    var phoneone = [
        {"link": "http://my.163.com/?from=nietop", "typetarget": "_blank", "name": "梦幻西游手游", "else": "hot"},
        {"link": "http://dhxy.163.com/?from=nietop", "typetarget": "_blank", "name": "大话西游手游", "else": "hot"},
        {"link": "http://qnm.163.com/?from=nietop", "typetarget": "_blank", "name": "倩女幽魂手游", "else": "hot"},
        {"link": "http://yys.163.com/?from=nietop", "typetarget": "_blank", "name": "阴阳师", "else": "hot"},
        {"link": "http://stzb.163.com/?from=nietop", "typetarget": "_blank", "name": "率土之滨", "else": "hot"},
        {"link": "http://raven.163.com/?from=nietop", "typetarget": "_blank", "name": "Raven：掠夺者", "else": "hot"},
        {"link": "http://kf.163.com/?from=nietop", "typetarget": "_blank", "name": "功夫熊猫3手游", "else": "hot"},
        {"link": "http://ldxy.163.com/?from=nietop", "typetarget": "_blank", "name": "乱斗西游2", "else": "hot"},
        {"link": "http://mhws.163.com/?from=nietop", "typetarget": "_blank", "name": "西游神魔决", "else": "hot"},
        {"link": "http://sm.163.com/?from=nietop", "typetarget": "_blank", "name": "时空之刃", "else": ""},
        {"link": "http://cb.163.com/?from=nietop", "typetarget": "_blank", "name": "梦想星城", "else": ""},
        {"link": "http://mxxc.163.com/?from=niet", "typetarget": "_blank", "name": "乖离性百万亚瑟王", "else": ""},
        {"link": "http://ma.163.com/?from=nietop", "typetarget": "_blank", "name": "百将行", "else": ""},
        {"link": "http://bjx.163.com/?from=nieto", "typetarget": "_blank", "name": "有杀气童话", "else": ""},

    ];
    var phonetwo = [
        {"link": "http://tx.163.com/?from=nietop", "typetarget": "_blank", "name": "天下手游", "else": "new"},
        {"link": "http://mc.163.com/?from=nietop", "typetarget": "_blank", "name": "我的世界", "else": "new"},
        {"link": "http://hit.163.com/?from=nietop", "typetarget": "_blank", "name": "我守护的一切", "else": "new"},
        {"link": "http://t2.163.com/?from=nietop", "typetarget": "_blank", "name": "终结者2官方手游", "else": "new"},
        {"link": "http://dhrx.163.com/?from=nietop", "typetarget": "_blank", "name": "大话西游热血版", "else": "new"},
        {"link": "http://dt.163.com/?from=nietop", "typetarget": "_blank", "name": "大唐无双手游", "else": "new"},
        {"link": "http://xf.163.com/?from=nietop", "typetarget": "_blank", "name": "曙光先锋", "else": "new"},
        {"link": "http://fc.163.com/?from=nietop", "typetarget": "_blank", "name": "永远的7日之都", "else": "new"},
        {"link": "http://wotb.163.com/?from=nietop", "typetarget": "_blank", "name": "坦克世界闪击战", "else": "new"},
        {"link": "http://dtyxj.163.com/?from=nietop", "typetarget": "_blank", "name": "大唐游仙记"},
        {"link": "http://dhh.163.com/?from=nietop", "typetarget": "_blank", "name": "大航海之路"},
        {"link": "http://hzhy.163.com/?from=nietop", "typetarget": "_blank", "name": "魂之幻影"},
        {"link": "http://dfw9.163.com/?from=nietop", "typetarget": "_blank", "name": "大富翁9"},
        {"link": "http://gfxm.163.com/?from=nietop", "typetarget": "_blank", "name": "功夫熊猫官方手游"},
        {"link": "http://tnj.163.com/?from=nietop", "typetarget": "_blank", "name": "猫和老鼠官方手游"},

    ];
    var newtwo = [
        {"link": "http://zm.163.com/?from=nietop", "name": "镇魔曲手游", "targettype": "_blank", "else": "new"},
        {"link": "http://mjdj.163.com/?from=nieto", "name": "秘境对决", "targettype": "_blank", "else": "new"},
        {"link": "http://bilibili.163.com/?from=nietop", "name": "魔法禁书目录", "targettype": "_blank", "else": "new"},
        {"link": "http://ssydj.163.com/?from=nietop", "name": "三少爷的剑", "targettype": "_blank", "else": "new"},
        {"link": "http://mwsj.163.com/?from=nietop", "name": "迷雾世界", "targettype": "_blank", "else": "new"},
        {"link": "http://land.163.com/?from=nietop", "name": "光明大陆", "targettype": "_blank", "else": "new"},
        {"link": "http://mwsj.163.com/?from=nietop", "name": "迷雾世界", "targettype": "_blank", "else": "new"},
        {"link": "http://jjwz.163.com/?from=nietop", "name": "荆棘王座", "targettype": "_blank", "else": "new"},
        {"link": "http://zztj.163.com/?from=nietop", "name": "重装突击", "targettype": "_blank", "else": "new"},
        {"link": "http://tj.163.com/?from=nietop", "name": "天骄铁骑", "targettype": "_blank", "else": ""},
        {"link": "http://dance.163.com/?from=nietop", "name": "劲舞团", "targettype": "_blank", "else": ""},
        {"link": "http://ry.163.com/?from=nietop", "name": "永恒文明", "targettype": "_blank", "else": ""},
        {"link": "http://dc.163.com/?from=nietop", "name": "貂蝉的移动城堡", "targettype": "_blank", "else": ""},
        {"link": "http://xsd.163.com/?from=nietop", "name": "小时代官方游戏", "targettype": "_blank", "else": ""},
        {"link": "http://ywl.163.com/?from=nietop", "name": "妖刀少女异闻录", "targettype": "_blank", "else": ""},

    ]
    var newthree = [
        {"link": "http://clx.163.com/?from=nietop", "typetarget": "_blank", "name": "楚留香", "else": ""},
        {"link": "http://wcym.163.com/?from=nietop", "typetarget": "_blank", "name": "我朝有马", "else": ""},
        {"link": "http://zj.163.com/?from=nietop", "typetarget": "_blank", "name": "异次元战姬", "else": ""},
        {"link": "http://wxzz.163.com/?from=nietop", "typetarget": "_blank", "name": "无限战争", "else": ""},
        {"link": "http://lxf.163.com/?from=nietop", "typetarget": "_blank", "name": "陆小凤传奇", "else": ""},
        {"link": "http://acg.163.com/?from=nietop", "typetarget": "_blank", "name": "皇牌机娘", "else": ""},
        {"link": "http://hunter.163.com/?from=nietop", "typetarget": "_blank", "name": "狩猎纪元", "else": ""},
        {"link": "http://mblr.163.com/?from=nietop", "typetarget": "_blank", "name": "秘宝猎人", "else": ""},
        {"link": "http://glory.163.com/?from=nietop", "typetarget": "_blank", "name": "格罗亚传奇", "else": ""},
        {"link": "http://wxhd.163.com/?from=nietop", "typetarget": "_blank", "name": "无限幻斗", "else": ""},
        {"link": "http://ha.163.com/?from=nietop", "typetarget": "_blank", "name": "黑暗启元", "else": ""},
        {"link": "http://fd.163.com/?from=nietop", "typetarget": "_blank", "name": "小李飞刀", "else": ""},
        {"link": "http://dao.163.com/?from=nietop", "typetarget": "_blank", "name": "飞刀又见飞刀", "else": ""},
        {"link": "http://txhd.163.com/?from=nietop", "typetarget": "_blank", "name": "天下HD", "else": ""},
        {"link": "http://txx.163.com/?from=nietop", "typetarget": "_blank", "name": "天下X天下", "else": ""}
    ];
    // 网易数据
    var we = [
        {"link": "http://ypw.163.com/?from=nietop", "targettype": "_blank", "name": "游品位", "else": "hot"},
        {"link": "http://mumu.163.com/?from=nietop", "targettype": "_blank", "name": "网易MuMu", "else": "hot"},
        {"link": "http://gift.163.com/?from=nietop", "targettype": "_blank", "name": "网易游戏印象", "else": ""},
        {"link": "http://pt.163.com/?from=nietop", "targettype": "_blank", "name": "网易游戏平台", "else": ""},
        {"link": "http://app.netease.com/?from=nietop", "targettype": "_blank", "name": "游戏论坛app", "else": "new"},
        {"link": "http://mkey.163.com?from=nietop", "targettype": "_blank", "name": "手机将军令", "else": ""},
        {"link": "http://ekey.163.com?from=nietop", "targettype": "_blank", "name": "将军令", "else": ""},
        {"link": "http://zhidao.163.com?from=nietop", "targettype": "_blank", "name": "游戏知道", "else": ""},
        {"link": "http://cbg.163.com?from=nietop", "targettype": "_blank", "name": "藏宝阁", "else": ""},
        {"link": "http://cc.163.com?from=nietop", "targettype": "_blank", "name": "网易CC", "else": ""},
        {"link": "http://gm.163.com?from=nietop", "targettype": "_blank", "name": "客服中心", "else": ""},
        {"link": "http://box.gm.163.com/?fromnietop", "targettype": "_blank", "name": "自助百宝箱", "else": ""},
        {"link": "http://uu.163.com?from=nietop", "targettype": "_blank", "name": "网易UU加速器", "else": ""},
        {"link": "http://uu.163.com?from=nietop", "targettype": "_blank", "name": "网易UU加速器", "else": ""}
    ]

    creteElementevery(pcgameone, getById("pcBo"));
    var ps = document.createElement("p");
    getById("pcBo").appendChild(ps);
    ps.innerHTML = "竞技/休闲";

    // 调用函数 创建pc游戏
    creteElementevery(pcgametwo, getById("pcBo"))
    // 调用函数 手机游戏
    creteElementevery(phoneone, getById("phoneBo"), 125);
    creteElementevery(phonetwo, getById("po"), 126);
    creteElementevery(newtwo, getById("potwo"), 112);
    creteElementevery(newthree, getById("pothree"), 128);
    // 调用函数 网易
    creteElementevery(we, getById("assbottom"), 128);

    var wangyigame = document.createElement("a");
    // --------------------------------------------------------------------------
    wangyigame.href = "http://game.163.com/?from=nietop";//网易游戏链接
    wangyigame.target = "_blank";//网易游戏链接
    wangyigame.style.display = "block";
    wangyigame.style.width = 70 + "px";
    wangyigame.style.height = 23 + "px";
    wangyigame.innerHTML = "网易游戏";
    wangyigame.style.color = "#C65555";
    wangyigame.style.padding = 0 + "px";
    wangyigame.style.paddingLeft = 25 + "px";
    wangyigame.style.marginTop = 10 + "px";
    wangyigame.style.background = "url(images/spilit.png) no-repeat 0 -338px";

    // 右上角小轮播
    getById("assbottom").appendChild(wangyigame);
    // 克隆第一个
    var aFirst = getById("lunbo").children[0].cloneNode(true);
    // 获取所有的a
    var aGifts = getById("lunbo").children;
    // console.log(aGifts);
    // 获取a的高度
    var aGiftHeight = aGifts[0].offsetHeight;
    // console.log(aGiftHeight);
    // 获取div
    var lunboGift = getById("lunbo");
    lunboGift.appendChild(aFirst);
    var timeer = null;
    var pic = 0;
    timeer = setInterval(f1, 1500);
    function f1() {
        if (pic == aGifts.length - 1) {
            pic = 0;
            lunboGift.style.top = 0 + "px";
        }
        pic++;
        animate(lunboGift,
            {
                "top": -pic * aGiftHeight
            });
    }

    getById("giftdiv").onmouseover = function () {
        clearInterval(timeer);
    }
    getById("giftdiv").onmouseout = function () {
        timeer = setInterval(f1, 1500);
    }
}

topNav();