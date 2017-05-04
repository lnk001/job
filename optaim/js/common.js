$(function(){
	$(".go").click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});
	$(".next").click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});
	$(".top").click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(1);
	});	

	//关于我们-弹出页面
	$('.abuot_imgs,.us_p_more,.imgArea,.reg_btn').click(function(){
		$.fn.fullpage.setAllowScrolling(false);
		var val = $(this).find('a').attr("lang");
		$('.abuot_div').stop(true,false).fadeIn("500"); 
		$('#'+val).stop(true,false).fadeIn("500").siblings().fadeOut(); 
		$('.abuot_content_mark').stop(true,false).fadeIn(); 
	});
	$('.abuot_content_mark,.us_colse').click(function(){
		$.fn.fullpage.setAllowScrolling(true);
		$('.abuot_div').stop(true,false).fadeOut("500"); 
		$('.abuot_content_mark').stop(true,false).fadeOut(); 
	});
	

});


$(function(){
	
	//导航栏美化条
	$('.menu_content li').hover(function(){
		$('span',this).stop().css('height','2px');
		$('span',this).animate({
			left:0,
			width:'100%',
		},200);
	},function(){
		$('span',this).stop().animate({
			left:'50%',
			width:'0'
		},200);
	});
	//二维码
    $(".weixin").hover(function(){
        $(".code").off();
        $(".code").stop(true,false).fadeIn("100").animate({"top":60});       
    },function(){
        $(".code").stop(true,false).fadeOut("100").animate({"top":64});
    });
    
    $(".code").hover(function(){
        $(".weixin").off();
        $(this).stop(true,false).fadeIn("100").animate({"top":60});
    },function(){
        $(this).stop(true,false).fadeOut("100").animate({"top":64});
    });
    
    $(".menu_right li").eq(6).hover(function(){
        $(".code_right").off();
        $(".code_right").stop(true,false).fadeIn("100");       
    },function(){
        $(".code_right").stop(true,false).fadeOut("100");
    });
    
    $(".code_right").hover(function(){
        $(".menu_right li").eq(6).off();
        $(this).stop(true,false).fadeIn("100");
    },function(){
        $(this).stop(true,false).fadeOut("100");
    })
	
	//主页广告主下方合作伙伴轮播展示
	var iNow = 0;
	var gOff = true;
	function go_r(mm){
		if(!gOff) return;
		gOff = false;
		var old = iNow;
		var width = $("."+mm+"_wrap").width();
		iNow++;
		if(iNow >= $("."+mm+"_wrap li").length) iNow = 0;
		$("."+mm+"_slidesNav li").eq(iNow).addClass('active').siblings().removeClass('active');
		$("."+mm+"_wrap li").eq(old).animate({"left":-width})
		$("."+mm+"_wrap li").eq(iNow).css("left",width);
		$("."+mm+"_wrap li").eq(iNow).animate({"left":0},function(){
			gOff = true;
		});
	}

	function go_l(mm){
		if(!gOff) return;
		gOff = false;
		var old = iNow;
		var width = $("."+mm+"_wrap").width();
		iNow--;
		if(iNow < 0) iNow = $("."+mm+"_wrap li").length - 1;
		$("."+mm+"_slidesNav li").eq(iNow).addClass('active').siblings().removeClass('active');
		$("."+mm+"_wrap li").eq(old).animate({"left":width});
		$("."+mm+"_wrap li").eq(iNow).css("left",-width);
		$("."+mm+"_wrap li").eq(iNow).animate({"left":0},function(){
			gOff = true;
		})
	}
	
	function go_dot(iNow){
		if(!gOff) return;
		gOff = false;
		var old = $(".friend_slidesNav li.active").index();
		var width = $(".friend_wrap").width();
		$(".friend_slidesNav li").eq(iNow).addClass('active').siblings().removeClass('active');
		//alert(old+"--"+iNow);
		if(old<iNow && old!=iNow)
			$(".friend_wrap li").eq(old).animate({"left":-(width*(iNow-old))});
			$(".friend_wrap li").eq(iNow).css("left",width*(iNow-old));
			$(".friend_wrap li").eq(iNow).animate({"left":-(width*(iNow-old))},function(){
				gOff = true;
			})
		
		if(old>iNow && old!=iNow)
		
			//$(".friend_wrap li").eq(iNow).animate({"left":width*(old-iNow)});
			$(".friend_wrap li").eq(iNow).css("left",-(width*(old-iNow)));
			$(".friend_wrap li").eq(iNow).animate({"left":-(width*(old-iNow))},function(){
				gOff = true;
			})		
		
	}
	
	$(".go_r").click(function(){
		go_r("friend");
	});
	$(".go_l").click(function(){
		go_l("friend");
	});
	
	$(".us_go_r").click(function(){
		go_r("us");
	});
	$(".us_go_l").click(function(){
		go_l("us");
	});
	/*$(".friend_slidesNav li").click(function(){
		var lang = $(this).index();
		go_dot(lang);
	})*/

})
//判断是否移动端浏览
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	}
}