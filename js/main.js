$(document).ready(function(){
    // NAV
    $(".GNB-main, .GNB-sub ul li").hover(function(){
        $(".GNB-sub").stop().slideDown(200);
    },function(){
        $(".GNB-sub").stop().slideUp(200);    
    });

    $(".GNB-main ul li a").removeClass('active');
    $(".GNB-main ul li a").hover(function(){
        $(this).addClass('active');        
    },function(){
        $(".GNB-main ul li a").removeClass('active');
    });

    $(".GNB-sub ul").hover(function(){
        var GNBsub=$(this).index();
        $(".GNB-main ul li a").eq(GNBsub).addClass('active');
    },function(){
        $(".GNB-main ul li a").removeClass('active');
    });
        
    // slide
    function slidemove(){
        var slimove=$(".slide-con").width();
        $(".slide-box2").animate({
            left:-slimove
        },function(){
            $(".slide-con:first-child").appendTo(".slide-box2");
            $(".slide-box2").css({
                left:0
            });
        });
    }
    setInterval(slidemove, 3000);

    // pop
    $("#pop").hide();
    $(".not-box ul li:first-child").click(function(){
        $("#pop").show();
    });
    $("#pop button").click(function(){
        $("#pop").hide();
    });
});