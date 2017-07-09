window.onload = function () {
    // 顶部导航效果
    topNav();

    getById("txt1").onkeyup = function () {
        //当出现@时就有问题了
        var keyWords = ["" + this.value + "@qq.com", "" + this.value + "@souhu.com", "" + this.value + "@163.com", "" + this.value + "@126.com", "" + this.value + "@sina.com", "" + this.value + "@163.cn"];
        if (getById("dv")) {
            getById("input1").removeChild(getById("dv"));
        }
        var tempArr = [];
        for (var i = 0; i < keyWords.length; i++) {
            var dt = keyWords[i];
            if (dt.indexOf(this.value) == 0) {
                tempArr.push(dt);
            }
        }
        if (this.value.length == 0 || tempArr.length == 0) {
            if (getById("dv")) {
                getById("input1").removeChild(getById("dv"));
            }
            return;//--------------->?????
        }

        //创建元素
        var dvObj = document.createElement("div");
        getById("input1").appendChild(dvObj);
        dvObj.id = "dv";
        dvObj.style.position = "absolute";
        dvObj.style.width = "262px";
        dvObj.style.height = "200px";
        dvObj.style.backgroundColor = "rgba(255,255,255,0.9)";
//        dvObj.style.border="1px solid red";
        //把临时数组放入到div中
        for (var j = 0; j < tempArr.length; j++) {

            var pObj = document.createElement("p");
            dvObj.appendChild(pObj);
            pObj.style.cursor = "pointer";
            pObj.style.margin = "3px";
            pObj.innerText = tempArr[j];//设置内容
            //注册多个事件
            pObj.onmouseover = function () {
                this.style.backgroundColor = "#fee7e6";
            };
            pObj.onmouseout = function () {
                this.style.backgroundColor = "";
            };
            pObj.onclick = function () {
                getById("txt1").value = this.innerText;//让输入框中的内容为当前点击的P的内容
                dvObj.style.display = "none";
                getById("txt1").style.backgroundColor = "";
                getById("txt1").style.color = "";
            };


        }

    };

    getById("txt1").onfocus = function () {
        if (this.value == "请输入邮箱或手机号") {
            this.value = null;
            this.style.backgroundColor = "";
            this.style.color = "";
        }
        if (getById("txt1").value == "输入的邮箱地址或手机号有误") {
            this.value = null;
            this.style.backgroundColor = "";
            this.style.color = "";
        }
    };

    getById("txt1").onblur = function () {
        var reg = /(^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$)|(([1][358][0-9]{9})|([1][4][7][0-9]{8})|([1][7][178][0-9]{8}))/;
//        var reg2=/([1][358][0-9]{9})|([1][4][7][0-9]{8})|([1][7][178][0-9]{8})/;
//        var reg2=/\d{11}/;
//        if((!(reg1.test(this.value)))||(!(reg2.test(this.value)))){
        if (!reg.test(this.value)) {
            getById("txt1").style.backgroundColor = "#FFE5E9";
            getById("txt1").value = "输入的邮箱地址或手机号有误";
            getById("txt1").style.color = "#C56768";
        }
    };

    getById("txt2").onfocus = function () {
        if (this.value == "请设置6-16位密码，区分大小写") {
            this.value = null;
            this.style.backgroundColor = "";
            this.style.color = ""
        } else if (this.value = "密码范围不正确") {
            this.value = null;
            this.style.backgroundColor = "";
            this.style.color = "";
        } else {
            this.value = this.value;
        }
    };

    getById("txt2").onblur = function () {
        if (getById("txt2").value.length == 0) {
            getById("txt2").value = "请设置6-16位密码，区分大小写";
            getById("txt2").style.backgroundColor = "#FFE5E9";
            getById("txt2").style.color = "#C56768";


        } else if (getById("txt2").value == "请设置6-16位密码，区分大小写") {
            getById("txt2").style.backgroundColor = "#FFE5E9";
            getById("txt2").style.color = "#C56768";


        } else if (getById("txt2").value.length < 6 || getById("txt2").value.length > 16) {
            getById("txt2").value = "密码范围不正确";
            getById("txt2").style.backgroundColor = "#FFE5E9";
            getById("txt2").style.color = "#C56768";

        }
        else {
            getById("txt2").style.backgroundColor = "";
            getById("txt2").style.color = "";

        }
    };

    getById("btn1").onclick = function () {
        if ((getById("txt1").value == "请输入邮箱或手机号") && (getById("txt2").value == "请设置6-16位密码，区分大小写")) {
            getById("txt1").style.backgroundColor = "#fee7e6";
            /*-------正确的颜色*/
            getById("txt1").style.color = "#C56768";
//            getById("txt2").style.backgroundColor="#FFE5E9";
//            getById("txt2").style.color="#C56768";
        }
//第二次点击时，如果密码不正确
//       if(getById("txt2").value=="密码范围不正确"){
//           getById("txt2").style.backgroundColor="#FFE5E9";
//           getById("txt2").style.color="#C56768";
//
//       }
//第二次点击时，如果手机号等不正确
//        if(my$("txt1").value=="输入的邮箱地址或手机号有误"){
//
//        }
        if (getById("txt1").value.length == 0) {
            getById("txt1").value = "请输入邮箱或手机号";
            getById("txt1").style.backgroundColor = "#FFE5E9";
            getById("txt1").style.color = "#C56768";

        } else {

        }
        if (getById("txt2").value.length == 0) {
            getById("txt2").value = "请设置6-16位密码，区分大小写";
            getById("txt2").style.backgroundColor = "#FFE5E9";
            getById("txt2").style.color = "#C56768";


        } else if (getById("txt2").value == "请设置6-16位密码，区分大小写") {
            getById("txt2").style.backgroundColor = "#FFE5E9";
            getById("txt2").style.color = "#C56768";


        } else if (getById("txt2").value.length < 6 || getById("txt2").value.length > 16) {
            getById("txt2").value = "密码范围不正确";
            getById("txt2").style.backgroundColor = "#FFE5E9";
            getById("txt2").style.color = "#C56768";
        }
//        else {
////            getById("txt2").style.backgroundColor="";
////            getById("txt2").style.color="";
//
//        }
    };

}
