$(function(){
	document.body.addEventListener('touchstart', function(){ });
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

	
	$(".fold").click(function(){
		//alert($(".menu_right").offset().left +"---"+$(window).width())
		if($(".menu_right").offset().left <0){
			$(".menu_right").stop(true,false).animate({"left":0});
			$(".section .pageWidth").css("width","100%");
			
			$("#optaim_page").click(function(){
				$(".menu_right").stop(true,false).animate({"left":"-120px"});
				$(".fold").stop(true,false).fadeIn("100"); 
			})
			
		}else{
			$(".menu_right").stop(true,false).animate({"left":"-120px"});
			$(this).stop(true,false).fadeIn("100"); 
			
		}
	});
	
	//关于我们-弹出页面
	$('.abuot_imgs,.us_p_more,.imgArea').click(function(){
		//$.fn.fullpage.setAllowScrolling(false);
		var val = $(this).find('a').attr("lang");
		$('.abuot_div').stop(true,false).fadeIn("500"); 
		$('#'+val).stop(true,false).fadeIn("500").siblings().fadeOut(); 
		$('.abuot_content_mark').stop(true,false).fadeIn(); 
	});
	$('.abuot_content_mark,.us_colse').click(function(){
		//$.fn.fullpage.setAllowScrolling(true);
		$('.abuot_div').stop(true,false).fadeOut("500"); 
		$('.abuot_content_mark').stop(true,false).fadeOut(); 
	});
	
	//关于我们-地址
	$('.us_p43 ul li').on("click",function(e){
		var lang = $(this).index();
		var us_show = $('.us_p42 ul li').eq(lang).is(':hidden');
		if(us_show){
				$('.us_p42 ul li').eq(lang).stop(true,false).fadeIn("500").siblings().fadeOut("500"); 
			}else{
				$('.us_p42 ul li').eq(lang).stop(true,false).fadeOut("500"); 
			}
	});
	

});


$(function(){
	
	//二维码
    $(".weixin").on("click",function(){
		var show_c = $(".code").offset().left;
        if(show_c==0){
        	$(".code").stop(true,false).fadeIn("100");
		}else{
			$(".code").stop(true,false).fadeOut("100");
			}
    });

	//主页广告主下方合作伙伴轮播展示
	var url = window.location.href;
    var loc = url.substring(url.lastIndexOf('/')+1, url.length);
	var bool = loc.indexOf("index");
	//返回大于等于0的整数值，若不包含"index"则返回"-1。
	if(bool>=0){
		go_dot(0,"friend");
	}else{
		go_dot(0,"us");
	}
	function go_dot(n,mm){
		if (n >= $("."+mm+"_slidesNav ul li").length) {
        	n = 0;
		}
		$("."+mm+"_wrap li").eq(n).fadeIn().siblings().fadeOut();
		$("."+mm+"_slidesNav ul li").eq(n++).addClass("active").siblings().removeClass("active");
		//t = setTimeout('go_dot('+n+','+mm+')', 3000);
	}

	$(".friend_slidesNav li").on("click",function(){
		var lang = $(this).index();
		//clearTimeout(t);
		go_dot(lang,"friend");
	})
	
	$(".us_slidesNav li").on("click",function(){
		var lang = $(this).index();
		//clearTimeout(t);
		go_dot(lang,"us");
	})
	

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