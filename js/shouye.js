$(function () {
    let t = setInterval(move,2000);
    let num = 0,flag=true,a1,a2;
    function move() {
        if(flag){
            flag=false;
            num++;
            let width = $(".lunbo>li:nth-of-type(1)").width();
            if(num>$(".lunbo>li").length-1){
                num = 0;
            }
            $(".lunbo").css({"margin-left":-num*width+"px"});
            $(".dian1>li").eq(num).css({"backgroundColor":"#000"}).siblings().css({"backgroundColor":"#ccc"});
            $(".dian2>li").eq(num).css({"backgroundColor":"#fff"}).siblings().css({"backgroundColor":"#ccc"});
            flag=true;
        }
    }
    $(".dian1").children().on("click",function () {
        a1 = $(".dian1").children().index(this);
        $(".dian1>li").eq(a1).css({"backgroundColor":"#000"}).siblings().css({"backgroundColor":"#ccc"});
        num = a1;
        let width = $(".lunbo>li:nth-of-type(1)").width();
        $(".lunbo").css({"margin-left":-num*width+"px"});
    });
    $(".dian2").children().on("click",function () {
        console.log(2);
        a1 = $(".dian2").children().index(this);
        $(".dian2>li").eq(a1).css({"backgroundColor":"#fff"}).siblings().css({"backgroundColor":"#ccc"});
        num = a1;
        let width = $(".lunbo>li:nth-of-type(1)").width();
        $(".lunbo").css({"margin-left":-num*width+"px"});
    });

    $(".lunbo").mouseover(function(){
        clearInterval(t);
    });
    $("#lunbo-wudi").mouseout(function(){
        t = setInterval(move,2000)
    });
    $(".dian1>li").mouseover(function(){
        clearInterval(t);
    });
    $("#zero").children().mouseout(function(){
        t = setInterval(move,2000)
    });
    $(".dian2>li").mouseover(function(){
        clearInterval(t);
    });
    $("#one").children().mouseout(function(){
        t = setInterval(move,2000)
    });
});

