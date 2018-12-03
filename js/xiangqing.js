$(function () {
    let num;
    $(".xq-xuan-two>li").on("click",function () {
        num = $(".xq-xuan-two>li").index(this);
        $(".xq-xuan-two>li").eq(num).css({"borderColor":"#D6A650"}).siblings().css({"borderColor":"#fff"});
        $(".xq-xuan-one>li").eq(num).css({"display":"block"}).siblings().css({"display":"none"});
    })
})