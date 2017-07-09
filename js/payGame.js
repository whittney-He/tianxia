

window.onload = function () {
    // banner轮播图
    bannerCarousel();

    // 内容区域的tab切换
    contentTab();
};

<!--banner轮播图   by吴素超 2017.1.5-->
// banner轮播图
function bannerCarousel() {

    //获取元素的当前位置,移动,每次移动多少像素
    /**
     *
     * @param element
     * @param target
     */
    function newAnimate(element, target) {
        //每次调用这个函数的时候先清理之前的计时器
        clearInterval(element.setId);
        element.setId = setInterval(function () {
            //获取元素当前的位置
            var current = element.offsetLeft;
            //每次移动的像素
            var step = 100;
            //判断移动的步数应该是正数还是负数
            step = current < target ? step : -step;
            //当前的位置=之前的当前位置+移动的步数
            current = current + step;
            if (Math.abs(target - current) < Math.abs(step)) {
                //把计时器清理
                clearInterval(element.setId);
                element.style.left = target + "px";
            } else {
                //赋值给要移动的元素
                element.style.left = current + "px";
            }
        }, 20);
    }

    //缓动动画
    /*function newAnimate(element, target) {
     //清理计时器
     clearInterval(element.setId);
     //计时器
     element.setId = setInterval(function () {
     //获取元素当前位置
     var current = element.offsetLeft;
     //步数
     var step = (target - current) / 2;
     step = step > 0 ? Math.ceil(step) : Math.floor(step);

     current += step;//设置元素当前位置
     if (current = target) {
     clearInterval(element.setId);
     }
     element.style.left = current + "px"

     }, 200);
     }*/

    /*banner 图片滚动代码*/
    //初始化变量
    var arr = ["pay-ban1.jpg", "pay-ban2.jpg", "pay-ban3.jpg", "pay-ban4.jpg", "pay-ban5.jpg"];
    var payGameBan = getById("pay-game-ban");//图片滚动的 div 框
    var imgWidth = payGameBan.offsetWidth;//获取滚动宽度
    var ulObj = payGameBan.children[0];//获取 pay-game-ban 里面的 ul
    var paySqure = getById("pay-squre");//获取的是小焦点外面的div
    var olObj = paySqure.children[0];//获取的是 pay-squre 的  ol 标签
    var payButton = getById("pay-button");//获取 pay-button 左右按钮的 父级层 div
    var payButtonLeft = getById("pay-button-left");//左边按钮
    var payButtonRight = getById("pay-button-right");//获取左侧按钮
    var pic = 0;//滚动的张数
// console.log(imgWidth); //测试 无用

    for (var i = 0; i < arr.length; i++) {
        var liObj = document.createElement("li");//创建 ul 里 li 标签
        liObj.style.width = payGameBan.offsetWidth + "px";
        liObj.style.backgroundImage = "url(images/paygame/pay-ban" + (i + 1) + ".jpg)";
        ulObj.appendChild(liObj);
    }

    //对应滚动图片
    var liObjs = ulObj.children;//图片的那个 li
    for (var j = 0; j < liObjs.length; j++) {
        var olli = document.createElement("li");//创建 ol 里面的 li 标签
        olObj.appendChild(olli);
        olli.setAttribute("index", j);//索引

        olli.onmouseover = olliHandle;
    }
    function olliHandle() {
        //排他
        for (var k = 0; k < olObj.children.length; k++) {
            olObj.children[k].removeAttribute("class");
        }
        this.className = "current";
        pic = parseInt(this.getAttribute("index"));
        // console.log(pic);
        newAnimate(ulObj, -pic * imgWidth);
    }

    var olWidth = olObj.offsetWidth;//获取  ol 的宽度
    // console.log(olWidth);
    paySqure.style.marginLeft = -olWidth / 2 + "px";//pay-squre 居中显示

    olObj.children[0].className = "current";//设置默认样式
    // console.log(ulObj.children[0].offsetWidth)


    //自动滚动开始
    var setId = null;
    setId = setInterval(payButtonRightHandle, 3000);

    //按钮动画开始
    //注册按钮进入/离开事件
    getById("pay-game").onmouseover = function () {
        payButton.style.display = "block";
        clearInterval(setId);
    }
    getById("pay-game").onmouseout = function () {
        payButton.style.display = "none";
        setId = setInterval(payButtonRightHandle, 3000);
    }

    //克隆 ul 里 第一个 li 标签
    ulObj.appendChild(ulObj.children[0].cloneNode(true));

    //注册右侧按钮点击事件
    payButtonRight.onclick = payButtonRightHandle;
    function payButtonRightHandle() {
        //判断 如果 第一张最后一张图片
        if (pic == ulObj.children.length - 1) {
            pic = 0;
            ulObj.style.left = 0 + "px";
        }
        pic++;
        newAnimate(ulObj, -pic * imgWidth);

        if (pic == ulObj.children.length - 1) {
            olObj.children[0].className = "current";
            olObj.children[olObj.children.length - 1].className = "";
        } else {
            for (var k = 0; k < olObj.children.length; k++) {
                olObj.children[k].removeAttribute("class");
            }
            olObj.children[pic].className = "current";
        }
    }

    //注册左边按钮点击事件
    payButtonLeft.onclick = payButtonLeftHandle;
    function payButtonLeftHandle() {
        //判断如果是第一张
        if (pic == 0) {
            pic = ulObj.children.length - 1;
            ulObj.style.left = -pic * imgWidth + "px";
        }
        pic--;
        newAnimate(ulObj, -pic * imgWidth);
        for (var k = 0; k < olObj.children.length; k++) {
            olObj.children[k].removeAttribute("class");
        }
        olObj.children[pic].className = "current";
    }
}

<!--product部分   by何惠云 2017.1.5-->
// pay-game-product-content部分
// 内容区域的tab切换
function contentTab() {
    //获取所有的span标签
    var spans = getById("pay-game-product-content-tab").getElementsByTagName("span");
    //获取所有的li标签
    var lis = getById("pay-game-product-content-tab").getElementsByTagName("li");
    //遍历循环，获取每一个span标签，注册点击事件
    for (var i = 0; i < spans.length; i++) {
        spans[i].setAttribute("index", i);
        //鼠标点击事件
        spans[i].onclick = function () {
            //排他
            flag = false;
            for (var j = 0; j < spans.length; j++) {
                spans[j].className = "tab" + (j + 1);
            }
            //同时改变li
            //获取自定义属性
            var index = parseInt(this.getAttribute("index"));
            this.className = "current" + (index + 1);

            //排他
            for (var k = 0; k < lis.length; k++) {
                lis[k].className = "";
            }
            lis[index].className = "current";
        };
    }
}