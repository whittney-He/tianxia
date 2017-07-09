
// nav部分
    //当鼠标进入小图片时，大图片在下方显示
    //当鼠标移出时，大图片隐藏
   //获取a标签
    var imgObj = getById("gfMusic-nav-img");
    var aObj = imgObj.children[0];
    //获取装着大图的div
    var bigImg = getById("bigImg");
    //鼠标进入，大图显示
    aObj.onmouseover = function () {
        imgObj.className="gfMusic-nav-img special";
        bigImg.className = "bigImg show";
        //鼠标进入大图，大图显示
        bigImg.onmouseover = function () {
            bigImg.className = "bigImg show";
            //鼠标点击x，关闭大图
            getById("closeBtn").onclick = function () {
                bigImg.className = "bigImg hide";
            };
        };
        // 鼠标移出大图，大图隐藏
        bigImg.onmouseout = function () {
            imgObj.className="gfMusic-nav-img normal";
            bigImg.className = "bigImg hide";
        };
    };
    //鼠标移出，图片隐藏
    aObj.onmouseout = function () {

        bigImg.className = "bigImg hide";
    };


//nav中的导航
var　menuObj = getById("gfMusic-nav-menu");
var aObjs = menuObj.children[0].getElementsByTagName("a");
for(var i=0;i<aObjs.length;i++){
    aObjs[i].onmouseover = function () {
        //排他
        for(var j=0;j<aObjs.length;j++){
            aObjs[j].style.borderBottom="none";
            aObjs[j].style.backgroundColor="#FBFBFB";
        }
        this.style.borderBottom="2px solid #B4181B";
        this.style.backgroundColor="#ccc";
    };
    aObjs[i].onmouseout = function () {
        this.style.borderBottom="none";
        this.style.backgroundColor="#FBFBFB";
    };
}




//
// //获取最后一个li
// var aObj1 = getById("donghua");
// setId= setInterval(f1,200);
// function f1() {
//
//     var step=-9;
//     var currentTop =aObj1.offsetTop;
//
//     if(currentTop<-55){
//         aObj1.style.top = 0+"px";
//     }else{
//         currentTop+=step;
//         aObj1.style.top = currentTop +"px";
//     }
// }




