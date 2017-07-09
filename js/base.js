

/**
 * 根据id获取元素的函数
 * @param id
 * @returns {Element}
 */
function getById(id) {
    return document.getElementById(id);
}

/**
 * 根据元素名称获取元素的函数
 * @param tagName
 * @returns {NodeList}
 */
function getByTagName(tagName) {
    return document.getElementsByTagName(tagName);
}

/**
 * 根据类名获取元素的函数
 * @param className
 * @returns {NodeList}
 */
function getByClassName(className) {
    return document.getElementsByClassName(className);
}

/**
 * 设置元素的文本内容
 * @param element 元素
 * @param content 文本内容
 */
function setInnerText(element, content) {

    // 判断是否支持innerText，如果不支持则使用textContent
    // IE、高版本火狐、谷歌支持innerText
    // 低版本火狐和高版本火狐、谷歌 支持textContent


    // 浏览器能力检测
    // if(element.textContent) 不能判断吗？
    if (element.textContent == undefined) {
        alert(content);
        // 如果支持则使用innerText
        element.innerText = content;
    }
    else {
        // 如果不支持则使用textContent
        element.textContent = content;
    }
}

/**
 * 获取元素的文本内容
 * @param element 元素
 * @returns {*} 返回文本内容
 */
function getInnerText(element) {
    // 判断是否支持innerText，如果不支持则使用textContent
    if (element.textContent == undefined) {
        // 支持innerText
        return element.innerText;
    }
    else {
        // 不支持则使用textContent
        return element.textContent;
    }
}

/**
 * 获取元素中的第一个子元素
 * @param element 元素
 * @returns {*} 返回第一个子元素
 */
function getFirstElement(element) {
    // 判断是否支持
    if (element.firstElementChild) {
        // 如果支持则直接返回
        return element.firstElementChild;
    }
    else {
        // 获取第一个子节点
        var node = element.firstChild;
        // 循环依次往下获取节点，判断是否为元素，如果为元素则停止循环
        while (node && node.nodeType != 1) {
            // 获取下个节点
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * 获取元素中的最后一个子元素
 * @param element 元素
 * @returns {*} 返回最后一个子元素
 */
function getLastElement(element) {
    // 判断是否支持lastElementChild
    if (element.lastElementChild) {
        return element.lastElementChild;
    }
    else {
        // 获取最后一个子节点
        var node = element.lastChild;
        // 循环依次往上获取节点，判断是否为元素，如果为元素则停止循环
        while (node && node.nodeType != 1) {
            // 获取上个节点
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取元素中的前一个兄弟元素
 * @param element 元素
 * @returns {*} 返回前一个兄弟元素
 */
function getPreviousElementSibling(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    }
    else {
        // 获取前一个兄弟节点
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = element.previousSibling;
        }
        return node;
    }
}

/**
 * 获取元素中的下一个兄弟元素
 * @param element 元素
 * @returns {*} 返回下一个兄弟元素
 */
function getNextElementSibling(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    }
    else {
        // 获取前一个兄弟节点
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = element.nextSibling;
        }
        return node;
    }
}

/**
 * 获取元素的所有兄弟节点
 * @param element 元素
 * @returns {Array} 所有兄弟节点
 */
function getElementsSiblings(element) {

    // 判断该节点是否正确
    if (!element) return;

    // 定义获取所有兄弟节点的数组
    var sibArr = [];
    // 获取前边的兄弟节点
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType == 1) {
            element.push(ele);
        }
        ele = ele.previousSibling;
    }

    // 获取后边的兄弟节点
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType == 1) {
            element.push(ele);
        }
        ele = ele.nextSibling;
    }
    return sibArr;
}

/**
 * 获取左右滚动距离
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
    }
}

/**
 * 获取元素的样式
 * @param element 元素
 * @param attr 属性名称
 * @returns {*} 样式
 */
function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}
/**
 * 缓动动画函数-增加任意多个属性及回调函数和层级和透明度
 * @param element 元素
 * @param json 属性json
 * @param fn 回调函数
 */
function animate(element, json, fn) {
    // 停止计时器
    clearInterval(element.setId);
    // 设置计时器
    element.setId = setInterval(function () {
        // 标示所有的属性都已到达目标
        var flag = true;

        // 循环json获取到每个属性，以及每个属性的目标值
        for (var key in json) {
            if (key == "opacity") {
                // 获取每个属性对应的目标值
                var target = json[key] * 100;
                // 获取当前的属性
                var current = getStyle(element, key) * 100;
                // 定义移动步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                // 累加步数
                current += step;
                // 设置属性
                element.style[key] = current / 100;
            } else if (key == "zIndex") {
                element.style["zIndex"] = json[key];
            } else {
                // 获取每个属性对应的目标值
                var target = json[key];
                // 获取当前的属性
                var current = parseInt(getStyle(element, key)) || 0;
                // 定义移动步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                // 累加步数
                current += step;
                // 设置属性
                element.style[key] = current + "px";
            }

            // 判断如果有属性未到达目标则标记为false
            if (current != target) {
                flag = false;
            }
        }

        // 如果所有的属性都已经到达目标则停止计时器
        if (flag) {
            clearInterval(element.setId);
            // 在定时器结束后再调用回调函数
            // 判断如果有回调函数则执行回调函数
            if (fn) {
                fn();
            }
        }
    }, 30);
}

/**
 * event的兼容
 * @type {{getEvent: EventTools.getEvent, getClientX: EventTools.getClientX, getClientY: EventTools.getClientY, getLeft: EventTools.getLeft, getTop: EventTools.getTop, getPageX: EventTools.getPageX, getPageY: EventTools.getPageY}}
 */
var EventTools = {
    getEvent: function (e) { // 封装事件对象参数:window.event或者e
        return window.event || e;
    },
    getClientX: function (e) { // 封装的是clinetX无论是谷歌还是火狐还是IE8
        return this.getEvent(e).clientX;
    },
    getClientY: function (e) { // 封装的是clinetY无论是谷歌还是火狐还是IE8
        return this.getEvent(e).clientY;
    },
    getLeft: function () { // 获取的是页面的卷曲出去的横坐标
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    },
    getTop: function () { // 获取的是页面的卷曲出去的纵坐标
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    },
    getPageX: function (e) { // 获取的页面的可视区域的横坐标+页面卷曲出去的横坐标
        return this.getEvent(e).pageX ? this.getEvent(e).pageX : this.getClientX(e) + this.getLeft();
    },
    getPageY: function (e) { // 获取的页面的可视区域的纵坐标+页面卷曲出去的纵坐标
        return this.getEvent(e).pageY ? this.getEvent(e).pageY : this.getClientY(e) + this.getTop();
    },
    stopPropagation: function (e) { // 阻止事件冒泡
        // 判断是否支持stopPropagation
        if (this.getEvent(e).stopPropagation) {
            this.getEvent(e).stopPropagation();
        } else {
            this.getEvent(e).cancelBubble = true;
        }
    }
};

/**
 * 添加事件
 * @param element 元素
 * @param type 事件类型(没有on)
 * @param fn 事件处理函数
 */
// function addEventListener(element, type, fn) {
//     // 判断是否支持addEventListener
//     if (element.addEventListener) {
//         // 如果支持则用该方法
//         element.addEventListener(type, fn, false);
//     }
//     else if (element.attachEvent) {
//         element.attachEvent("on" + type, fn);
//     }
//     else {
//         element["on" + type] = fn;
//     }
// }
//
// /**
//  * 移除事件
//  * @param element 元素
//  * @param type 事件类型(没有on)
//  * @param fn 事件处理函数
//  */
// function removeEventListener(element, type, fn) {
//     // 判断是否支持removeEventListener
//     if (element.removeEventListener) {
//         element.removeEventListener(type, fn, false);
//     }
//     else if (element.detachEvent) {
//         element.detachEvent("on" + type, fn);
//     }
//     else {
//         element["on" + type] = null;
//     }
// }