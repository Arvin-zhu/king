window.onload=function(){
        var judge= 0;
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
            $("body").toggleClass("move-left");
            $(".fold").toggleClass("move-left");
            $("#index .head").toggleClass("move-left2");
            $("#index .footer").toggleClass("move-left2");
            $("#index .district").toggleClass("move-left2");
        })
}
function comment(){
    $(".star").on("click",function(event){
        event=event?event:window.event;
        var obj=event.srcElement?event.srcElement:event.target;
        var ul_index=$(this).index(".star");
        var li_index=$(obj).index(".star li");
        var start=5*ul_index;
        if($($(".star li")[start]).hasClass("star-active")){
            $(obj.parentNode).children().removeClass("star-active").addClass("star-default");
        }
        for( var i=start;i<li_index+1;i++){
            $($(".star li")[i]).removeClass("star-default").addClass("star-active");
        }
    })
    $("ul .right").on("click",function(event){
        event=event?event:window.event;
        var obj=event.srcElement?event.srcElement:event.target;
        var hook_index=$(obj).index();
        if(hook_index==1){
            if($(obj).hasClass("active")){
                $(obj).removeClass("active")
            }else{
                $(obj).addClass("active")
                var _other=$(obj.parentNode).find("span");
                 $(_other[3]).removeClass("active");
            }
        }
        if(hook_index==3){
            if($(obj).hasClass("active")){
                $(obj).removeClass("active")
            }else{
                $(obj).addClass("active")
                var _other=$(obj.parentNode).find("span");
                $(_other[1]).removeClass("active");
            }
        }
    })
}
