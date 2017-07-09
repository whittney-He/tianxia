
$(function () {

// 设置图片点击显示大图
    imgSlideShow();

    // 生成中部导航和右侧导航
    createNav();

    // 设置右侧导航固定问题
    rightNavFixed();
});

// json数据
function getJson(dataName) {
    var json = [
        {
            "id": 1,
            "name": "beiming",
            "title": "北溟幻世录",
            "nav": "北冥",
            "praise": "国风幻想录",
            "intro": "《天下3》将于近日推出本年度首部重量级全新资料片，再次突破游戏疆域，新开启的国风幻想场景“北溟”则是最核心的亮点！全新剧情将用玩家的第一视角去突破三位嗜血魔侯的围剿，不忘初心重回大荒世界。",
            "imgs": [
                {"id": 1, "imgsrc": "beiming01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {
                    "id": 2,
                    "imgsrc": "beiming02.jpg",
                    "imgtitle": "北溟场景",
                    "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"
                },
                {
                    "id": 3,
                    "imgsrc": "beiming03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "beiming04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "beiming05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "beiming06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "beiming07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "beiming08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "beiming09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "beiming10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "beiming11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 1, "imgsrc": "beiming01.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 2, "imgsrc": "beiming02.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "beiming03.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "beiming04.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "beiming05.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "beiming06.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "beiming07.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "beiming08.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "beiming09.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 10, "imgsrc": "beiming10.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 11, "imgsrc": "beiming11.jpg", "imgtitle": "", "imgdesc": ""}

            ]
        },
        {
            "id": 2,
            "name": "shanchuan",
            "title": "壮美峰峦",
            "nav": "山川",
            "praise": "山川最大气",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {
                    "id": 1,
                    "imgsrc": "shanchuan01.jpg",
                    "imgtitle": "北溟场景",
                    "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"
                },
                {
                    "id": 2,
                    "imgsrc": "shanchuan02.jpg",
                    "imgtitle": "北溟场景",
                    "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"
                },
                {
                    "id": 3,
                    "imgsrc": "shanchuan03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "shanchuan04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "shanchuan05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "shanchuan06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "shanchuan07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "shanchuan08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "shanchuan09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "shanchuan10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "shanchuan11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "shanchuan12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "shanchuan13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "shanchuan14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "shanchuan15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "shanchuan16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "shanchuan17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "shanchuan18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "shanchuan19.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 10, "imgsrc": "shanchuan20.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        },
        {
            "id": 3,
            "name": "yuanye",
            "title": "原野丘陵",
            "nav": "原野",
            "praise": "原野最广袤",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {"id": 1, "imgsrc": "yuanye01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {"id": 2, "imgsrc": "yuanye02.jpg", "imgtitle": "北溟场景", "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"},
                {
                    "id": 3,
                    "imgsrc": "yuanye03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "yuanye04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "yuanye05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "yuanye06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "yuanye07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "yuanye08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "yuanye09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "yuanye10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "yuanye11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "yuanye12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "yuanye13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "yuanye14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "yuanye15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "yuanye16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "yuanye17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "yuanye18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "yuanye19.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        },
        {
            "id": 4,
            "name": "huhai",
            "title": "海岸湖滨",
            "nav": " 湖海",
            "praise": "湖海最清盈",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {"id": 1, "imgsrc": "yuanye01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {"id": 2, "imgsrc": "yuanye02.jpg", "imgtitle": "北溟场景", "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"},
                {
                    "id": 3,
                    "imgsrc": "yuanye03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "yuanye04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "yuanye05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "yuanye06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "yuanye07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "yuanye08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "yuanye09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "yuanye10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "yuanye11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "yuanye12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "yuanye13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "yuanye14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "yuanye15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "yuanye16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "yuanye17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "yuanye18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "yuanye19.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        },
        {
            "id": 5,
            "name": "bingxue",
            "title": "雪地冰渊",
            "nav": " 冰雪",
            "praise": "冰雪最寂寥",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {"id": 1, "imgsrc": "yuanye01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {"id": 2, "imgsrc": "yuanye02.jpg", "imgtitle": "北溟场景", "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"},
                {
                    "id": 3,
                    "imgsrc": "yuanye03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "yuanye04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "yuanye05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "yuanye06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "yuanye07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "yuanye08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "yuanye09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "yuanye10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "yuanye11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "yuanye12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "yuanye13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "yuanye14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "yuanye15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "yuanye16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "yuanye17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "yuanye18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "yuanye19.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        },
        {
            "id": 6,
            "name": "tiankong",
            "title": "浮空奇景",
            "nav": " 天空",
            "praise": "天空最震撼",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {"id": 1, "imgsrc": "yuanye01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {"id": 2, "imgsrc": "yuanye02.jpg", "imgtitle": "北溟场景", "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"},
                {
                    "id": 3,
                    "imgsrc": "yuanye03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "yuanye04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "yuanye05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "yuanye06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "yuanye07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "yuanye08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "yuanye09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "yuanye10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "yuanye11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "yuanye12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "yuanye13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "yuanye14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "yuanye15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "yuanye16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "yuanye17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "yuanye18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "yuanye19.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        },
        {
            "id": 7,
            "name": "xiaozhen",
            "title": "江南水乡",
            "nav": " 小镇",
            "praise": "小镇最迷人",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {"id": 1, "imgsrc": "yuanye01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {"id": 2, "imgsrc": "yuanye02.jpg", "imgtitle": "北溟场景", "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"},
                {
                    "id": 3,
                    "imgsrc": "yuanye03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "yuanye04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "yuanye05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "yuanye06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "yuanye07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "yuanye08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "yuanye09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "yuanye10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "yuanye11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "yuanye12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "yuanye13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "yuanye14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "yuanye15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "yuanye16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "yuanye17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "yuanye18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "yuanye19.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        },
        {
            "id": 8,
            "name": "zhucheng",
            "title": "王朝主城",
            "nav": " 主城",
            "praise": "主城最气派",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {"id": 1, "imgsrc": "yuanye01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {"id": 2, "imgsrc": "yuanye02.jpg", "imgtitle": "北溟场景", "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"},
                {
                    "id": 3,
                    "imgsrc": "yuanye03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "yuanye04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "yuanye05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "yuanye06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "yuanye07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "yuanye08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "yuanye09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "yuanye10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "yuanye11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "yuanye12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "yuanye13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "yuanye14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "yuanye15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "yuanye16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "yuanye17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "yuanye18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "yuanye19.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        },
        {
            "id": 9,
            "name": "daolu",
            "title": "巴山蜀道",
            "nav": " 道路",
            "praise": "道路最崎岖",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {"id": 1, "imgsrc": "yuanye01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {"id": 2, "imgsrc": "yuanye02.jpg", "imgtitle": "北溟场景", "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"},
                {
                    "id": 3,
                    "imgsrc": "yuanye03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "yuanye04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "yuanye05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "yuanye06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "yuanye07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "yuanye08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "yuanye09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "yuanye10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "yuanye11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "yuanye12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "yuanye13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "yuanye14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "yuanye15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "yuanye16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "yuanye17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "yuanye18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "yuanye19.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        },
        {
            "id": 10,
            "name": "jianzhu",
            "title": "国风建筑",
            "nav": " 建筑",
            "praise": "建筑最国韵",
            "intro": "大荒世界，风光旖旎，随处都能看当让您心动的瑰丽景色。本期官网专题，小编整理了大量精美的玩家截图，让我们用不一样的风格，感受不一样的大荒世界！",
            "imgs": [
                {"id": 1, "imgsrc": "yuanye01.jpg", "imgtitle": "北溟场景", "imgdesc": "庄子《逍遥游》有云“北溟有鱼，其名为鲲，鲲之大，不知其几千里也！"},
                {"id": 2, "imgsrc": "yuanye02.jpg", "imgtitle": "北溟场景", "imgdesc": "幻美的景象，魔族的属地，阴沉的氛围中曙光乍现，有如心中不灭的光明。"},
                {
                    "id": 3,
                    "imgsrc": "yuanye03.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "这些朱红的树，映衬着这片土地上嗜血的魔。红色是冰冷已久的血液，蓝色是魔族盘踞剔透的欲孽！"
                },
                {"id": 4, "imgsrc": "yuanye04.jpg", "imgtitle": "夜安城", "imgdesc": "暴戾的雄狮，映衬着过路人的胆颤心惊，恐怖，一直在路上。"},
                {
                    "id": 5,
                    "imgsrc": "yuanye05.jpg",
                    "imgtitle": "夜安城",
                    "imgdesc": "在这个只能用于战斗的地方，只有赢和输、生和死，这里也有过少女的烂漫，但对死亡的祭奠比这多得多。"
                },
                {
                    "id": 6,
                    "imgsrc": "yuanye06.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这凌厉高耸的屋角，层层叠叠的张扬五爪，在崇山峻岭中间，向天勾画着领导者的野心和暴力！"
                },
                {
                    "id": 7,
                    "imgsrc": "yuanye07.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "这巍峨尊严、灯火通明的大殿，仿佛神圣不可侵犯，居住着哪个人的寂寥和渴望？"
                },
                {
                    "id": 8,
                    "imgsrc": "yuanye08.jpg",
                    "imgtitle": "夜明城",
                    "imgdesc": "周遭流动着的蓝色的琥珀，像光，像血液，像气流，一染而尽魔族的黯然和诡异。"
                },
                {"id": 9, "imgsrc": "yuanye09.jpg", "imgtitle": "永夜城", "imgdesc": "皑皑白雪，漠漠纷飞；宫阙楼宇，昂立在前；旷世美景，遗世独立。"},
                {
                    "id": 10,
                    "imgsrc": "yuanye10.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "一阵寒风，垂落一地雪白，这纯洁之至的冰天雪地，灿烂暖阳将抚摸谁的心？"
                },
                {
                    "id": 11,
                    "imgsrc": "yuanye11.jpg",
                    "imgtitle": "永夜城",
                    "imgdesc": "这是路途还是戮途？还是通往心的归属？也许生来是孤独，于是世间便是白雪纷呈。"
                },
                {"id": 2, "imgsrc": "yuanye12.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 3, "imgsrc": "yuanye13.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 4, "imgsrc": "yuanye14.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 5, "imgsrc": "yuanye15.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 6, "imgsrc": "yuanye16.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 7, "imgsrc": "yuanye17.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 8, "imgsrc": "yuanye18.jpg", "imgtitle": "", "imgdesc": ""},
                {"id": 9, "imgsrc": "yuanye19.jpg", "imgtitle": "", "imgdesc": ""}
            ]
        }
    ];

    // 遍历json数据，获取name与dataName相匹配的数据
    for (var i = 0; i < json.length; i++) {
        if (json[i].name == dataName) {
            return json[i];
        }
    }

    return json;
}

// 生成中部导航和右侧导航
function createNav() {
    // 获取中部导航的父元素ul
    var navUl = $("#banner-area>ul");
    // 获取右侧导航的父元素ul
    var navRightUl = $("#right-nav .nav-list>ul");

    // 获取json数据
    var json = getJson();
    // 遍历json数据
    for (var i = 0; i < 10; i++) {
        // 获取每一条json的数据
        var data = json[i];

        // 生成中部导航
        // $('<li><a href="javascript:;" id=' + data.name + '>' + data.nav + '</a></li>').appendTo(navUl);
        // 生成右侧导航
        // $('<li><a href="javascript:;" id=right-' + data.name + '><i></i>' + data.title + '</a></li>').appendTo(navRightUl);
    }

    // 生成风景内容
    createSceneryContent("beiming");

    // 为导航和右侧导航注册点击事件
    navUl.find("a").click(function () {
        createSceneryContent($(this).attr("id"))
    });

    navRightUl.find("a").click(function () {
        // 获取id的名称
        var name = $(this).attr("id").substr(6);
        createSceneryContent(name);

        if ($(document).scrollTop() > 480) {
            $("html,body").animate({"scrollTop": "480"}, 600);
        }

    });
}

// 生成风景内容
function createSceneryContent(dataName) {
    // 根据json的name名称获取到对应风景的那一条json数据
    var sceData = getJson(dataName);

    // 判断如果有则不再添加
    if ($("#sce-area-" + sceData.name).length > 0) {
        console.log("已经存在: " + sceData.name);
    }

    if (!$("#sce-area-" + sceData.name).length > 0) {

        // 创建存放html代码的数据
        var arrHtml = [];

        // 拼接代码开始
        // 每个风景的主div
        // 拼接风景name, 作为每个主div的id
        arrHtml.push('<div class="sce-area" id=sce-area-' + sceData.name + '>');

        // 风景介绍部分
        arrHtml.push('<div class="sce-intro clearfix">');
        arrHtml.push('<h5>国风天下</h5>');
        // 拼接风景介绍
        arrHtml.push('<p>' + sceData.intro + '</p>');
        arrHtml.push('</div>');

        // 风景标题部分
        arrHtml.push('<div class="sce-title">');
        // 拼接赞美语句和title
        arrHtml.push('<h3>' + sceData.praise + '——' + sceData.title + '</h3>');
        arrHtml.push('</div>');

        // 风景内容部分 中间需要插入生成的图片
        arrHtml.push('<div class="sce-cont">');
        arrHtml.push('</div>');

        // 更多美图
        arrHtml.push('<div class="sce-more">');
        arrHtml.push('<div class="sce-more-title">');
        // 拼接title部分
        arrHtml.push('<h4>更多"' + sceData.title + '"美图</h4>');
        arrHtml.push('</div>');
        // 滚动区域
        // 拼接name
        arrHtml.push('<div class="sce-more-items" id="sceMoreItems-' + sceData.name + '">');
        // 左右按钮
        arrHtml.push('<div class="items-cut-btn">');
        arrHtml.push('<span class="leftBtn" id="leftBtn"></span>');
        arrHtml.push('<span class="rightBtn" id="rightBtn"></span>');
        arrHtml.push('</div>');
        // 图片展示区域
        arrHtml.push('<div class="items-roll">');
        // 中间要拼接小图部分
        arrHtml.push('<ul>');
        arrHtml.push('</ul>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');
        arrHtml.push('</div>');

        // 获取所有风景区域的主div
        // 并且将html代码放进去
        $("#scenery").append(arrHtml.join(""));


        // 获取风景数据中的所有风景图片信息
        var imgsDatas = sceData.imgs;
        // 大图html数组
        var arrBigImgHtml = [];
        // 小图html数组
        var arrSmallImgHtml = [];

        for (var i = 0; i < imgsDatas.length; i++) {
            // 获取每个图片信息
            var imgsData = imgsDatas[i];

            // 判断该条图片信息中是否有imgtitle，如果有则为大图，生成大图html，如果没有则为小图，生成小图html
            if (imgsData.imgtitle.length > 0) {
                // 每一个风景
                arrBigImgHtml.push('<div class="sce-cont-item">');
                arrBigImgHtml.push('<div class="item-title">');
                // 插入图片名称
                arrBigImgHtml.push('<h4>' + imgsData.imgtitle + '</h4>');
                arrBigImgHtml.push('</div>');
                arrBigImgHtml.push('<div class="item-part">');
                arrBigImgHtml.push('<div class="item-part-desc">');
                arrBigImgHtml.push('<p>' + imgsData.imgdesc + '</p>');
                arrBigImgHtml.push('</div>');
                arrBigImgHtml.push('<div class="item-part-pic">');
                arrBigImgHtml.push('<a href="javascript:;">');
                arrBigImgHtml.push('<img src="images/geographyRec/' + imgsData.imgsrc + '" alt="">');
                arrBigImgHtml.push('</a>');
                arrBigImgHtml.push('</div>');
                arrBigImgHtml.push('</div>');
                arrBigImgHtml.push('</div>');
            }
            else {
                arrSmallImgHtml.push('<li><a href="javascript:;"><img src="images/geographyRec/' + imgsData.imgsrc + '" alt=""></a></li>');
            }

        }

        // 添加到页面中
        // 添加大图
        $("#sce-area-" + sceData.name + " .sce-cont").append(arrBigImgHtml.join(""));
        $("#sceMoreItems-" + sceData.name + " .items-roll ul").append(arrSmallImgHtml.join(""));

        // 更多美图滚动
        sceImgRoll("sceMoreItems-" + sceData.name);
        // 为图片添加点击事件
    }

    // 获取其他的兄弟元素使其隐藏，并且使当前元素显示
    $("#sce-area-" + sceData.name).css("display", "block").siblings().css("display", "none");
}

// 更多美图滚动
function sceImgRoll(eleId) {

    // 获取ul
    var ulObj = $("#" + eleId + ">.items-roll>ul");
    // 获取左按钮
    var leftBtn = $("#" + eleId + " .leftBtn");
    // 获取右按钮
    var rightBtn = $("#" + eleId + " .rightBtn");
    // 获取li -每个图片的父元素li
    var liObjs = ulObj.find("li");
    // 定义每次移动的距离 等于:li的宽度+左右margin的宽度
    var step = liObjs.eq(0).width() + parseInt(liObjs.eq(0).css("marginLeft")) + parseInt(liObjs.eq(0).css("marginRight"));


    // 设定ul的宽度
    // 计算为:li的个数*li的宽度
    ulObj.css("width", step * liObjs.length);


    // 定义标示，判断动画是否已经执行结束
    var flag = true;
    // 为右按钮注册点击事件
    rightBtn.on("click", function () {
        // 判断动画已经执行结束再执行本次点击滑动显示图片动画
        if (flag) {
            // 将标示设置为false
            flag = false;
            // 移动ul的位置
            ulObj.animate({"left": -step}, 500, function () {
                // 将ul中的第一个li移动到最后
                ulObj.children("li").eq(0).appendTo(ulObj);
                // 并且将ul的位置移动到0
                ulObj.css("left", "0px");
                // 动画结束将标示设置为true
                flag = true;
            });
        }
    });

    // 为左按钮注册点击事件
    leftBtn.on("click", function () {
        // 判断动画已经执行结束再执行本次点击滑动显示图片动画
        if (flag) {
            // 将标示设置为false
            flag = false;
            // 将ul中的最后一个li移动到第一个位置
            ulObj.children("li").eq(liObjs.length - 1).prependTo(ulObj);
            // 并且将ul的位置移动到-step
            ulObj.css("left", -step);

            // 移动ul的位置
            ulObj.animate({"left": 0}, 500, function () {
                // 动画结束将标示设置为true
                flag = true;
            });
        }
    });
}

// 设置右侧导航固定问题
function rightNavFixed() {
    // 注册页面滚动事件
    $(window).scroll(function () {
        // 获取页面卷曲的高度
        var top = $(window).scrollTop();
        // 获取topNav+banner的高度
        var height = $(".topNav").height() + $(".banner").height();
        // 判断如果页面卷曲的高度大于等于topNav+banner的高度
        if (top >= height) {
            // 设置右侧导航添加nav-fixed属性
            $("#right-nav").addClass("nav-fixed");
        }
        else {
            // 移除右侧导航的nav-fixed属性
            $("#right-nav").removeClass("nav-fixed");
        }
    });

    // 为top注册点击事件
    $("#goTop").click(function () {
        $("html,body").animate({"scrollTop": "0"}, 600);
    });
}

// 设置图片点击显示大图
function imgSlideShow() {
    // 获取所有景色图片
    // var scePics = $(".item-part-pic img,.items-roll>ul img");
    var scePics = $(".scenery");

    // 注册点击事件
    scePics.on("click", "img", function () {
        showImg($(this).attr("src"))
    });

    // 获取关闭按钮和遮罩层注册点击事件
    $("#shade, #slide-img-close").click(function () {
        // 隐藏幻灯片
        $("#slide").fadeOut();
    });

    // 设置显示的幻灯片以及弹出幻灯片
    function showImg(imgSrc) {
        // 获取幻灯片主div -设置显示
        var slide = $("#slide");
        // 获取幻灯片的层 -设置margin的偏移到中间位置
        var slideImg = $("#slide .slide-img");
        // 获取幻灯片显示图片的img元素 -设置显示的图片
        var imgTier = $("#slide .slide-img-tier img");

        // 设置幻灯片的图片路径
        imgTier.attr("src", imgSrc);

        // 设置一个image对象，为的是获取当前图片的宽高  -如果有别的方法可以替代
        var img = new Image();
        img.src = imgSrc;
        // 获取图片的宽高
        var imgWidth = img.width;
        var imgHeight = img.height;

        // 设置幻灯片的位置和img的大小
        slide.css("display", "block");
        slideImg.css({"marginTop": -(imgHeight / 2 + 60), "marginLeft": -(imgWidth / 2)});
    }
}