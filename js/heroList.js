

    //页面加载
    $(function(){
        
        //注册获取焦点事件
        $("#searchTtx").focus(function(){
            if($(this).val()=="请输入角色的名称"){
                $(this).val("");
            }
        });
        //搜索框部分
        //模拟服务器数据
        var keywords=["天天","乐天","九天","整天","天天","我是","但我","冰冷","一个人","两个人","小夏","小小","一小","小孩","小杨","小姐姐","小哥哥","大妈","大爷"];
        
        //获取文本框注册键盘抬起事件
        $("#searchTtx").keyup(function(){
           //如果这个元素存在则删除
            if($("#dv")){
                $("#searchTips").removeChild("#dv");
            }
            //判断文本框中的内容在keywords中是否存在
            //如果存在则放到一个临时的数组中
            var tempArr=[];
            for( i=0; i<keywords.length; i++){

            }
        });


        //鼠标进入显示
        $(".ranklist>ul>li").mouseover(function(){
           $(this).children("ul").show();
        }).mouseout(function(){
            $(this).children("ul").hide();
        });
        $(".hoverBox>li").mouseover(function(){
            $(this).children("a").css({"color":"#fff"});
            $(this).siblings("li").children("a").css("color","#B5B6B7");
        }).mouseout(function(){
            $(".hoverBox>li>a").css("color","#B5B6B7");
        });

        




    });




