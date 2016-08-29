window.onload=function(){
        var judge= 0,
            container_h=$("#index").css("height");
        $(".location").on("click",function(){
            if(judge==0){
                $(".district").slideDown(200);
                $(".zhezhao").fadeIn(150);
                $(".caret").addClass("flip");
                judge=1;
            }else{
                $(".district").slideUp(150);
                $(".zhezhao").fadeOut(200);
                $(".caret").removeClass("flip");
                judge=0;
            }
        })
        $(".district ul").on("click",function(event){
            event=event?event:window.event;
            var obj=event.srcElement?event.srcElement:event.target;
            $(".current-district").html($(obj).html());
            $(obj).addClass("active").siblings().removeClass("active");
            $(".district").slideUp(150);
            $(".zhezhao").fadeOut(200);
            $(".caret").removeClass("flip");
            judge=0;
        })
        $(".menu-bar").on("click",function(){
            $("#index").toggleClass("move-left");
            $(".fold").toggleClass("move-left");
        })
        $(".fold").css("height",container_h);
}
