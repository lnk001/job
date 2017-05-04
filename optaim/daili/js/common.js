$(function(){
	//右侧弹出层
	$(".fcon").click( function(){
		$(".fmess").not(".cons").hide();
		$(".cons").toggle();
			if($(".cons").is(":hidden")){
				$("a.close").hide();
			}else{
				$("a.close").show();	
			}
		});
	$(".ftel").click( function(){
		$(".fmess").not(".telnum").hide();
		$(".telnum").toggle()
			if($(".telnum").is(":hidden")){
				$("a.close").hide();
			}else{
				$("a.close").show();	
			}
		});
	$(".fme").click( function(){
		$(".fmess").not(".leave").hide();
		$(".leave").toggle()
			if($(".leave").is(":hidden")){
				$("a.close").hide();
			}else{
				$("a.close").show();	
			}
		});
	$(".fwx").click( function(){
		$(".fmess").not(".wxcon").hide();
		$(".wxcon").toggle()
			if($(".wxcon").is(":hidden")){
				$("a.close").hide();
			}else{
				$("a.close").show();	
			}
		});
	$("a.close").click( function(){
		$(".fmess").hide();
		$(this).hide();
		
		});	
	
	//关于我们-弹出页面
	$('.btn_b').click(function(){
		$('.abuot_div').stop(true,false).fadeIn("500"); ; 
		$('.abuot_content_mark').stop(true,false).fadeIn(); 
	});
	$('.abuot_content_mark,.us_colse').click(function(){
		$('.abuot_div').stop(true,false).fadeOut("500"); 
		$('.abuot_content_mark').stop(true,false).fadeOut(); 
	});
	
	//页面与导航栏关联
	$(window).scroll(function(){
		var h = $("#div_01").offset().top-50;
			if($(this).scrollTop()>h){
				$("#navon2").addClass('active').siblings().removeClass('active');
			}
		var h = $("#div_02").offset().top-50;
			if($(this).scrollTop()>h){
				$("#navon0").addClass('active').siblings().removeClass('active');
			}
		var h = $("#div_03").offset().top-400;
			if($(this).scrollTop()>h){
				$("#navon1").addClass('active').siblings().removeClass('active');
			}
	})
	
	$("#navon0").click(function(){//代理中心
		$(".centerPage").css("padding-top","15px");
		$(this).addClass('active').siblings().removeClass('active');
		$("html,body").animate({scrollTop:$("#div_02").offset().top},600);
	})
	$("#navon1").click(function(){//合作案例
		$(".centerPage").css("padding-top","15px");
		$(this).addClass('active').siblings().removeClass('active');
		$("html,body").animate({scrollTop:$("#div_03").offset().top},600);
	})
	$("#navon2").click(function(){//关于我们
		$(".centerPage").css("padding-top","15px");
		$(this).addClass('active').siblings().removeClass('active');
		$("html,body").animate({scrollTop:$("#div_01").offset().top},600);
	})
	
	//我要留言验证
	$('#myform').submit(function(){
		if (myform.nr.value.length<2)
		{
			alert("请输入留言内容！");
			myform.nr.focus();
			return false;
		}
		
		if (myform.xm.value.length<1 || myform.xm.value.length>12)
		{
			alert("请输入你的姓名！");
			myform.xm.focus();
			return false;
		}	
			 
		if( myform.dh.value.length==0) 
		{ 
		  alert('请输入手机号码！');
		  myform.dh.focus(); 
		  return false; 
		}     
		if(myform.dh.value.length!=11) 
		{ 
		   alert('请输入有效的手机号码！'); 
		   myform.dh.focus();
		   return false; 
		} 
		
		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
		if(!myreg.test(myform.dh.value)) 
		{ 
		   alert('请输入有效的手机号码！'); 
		   myform.dh.focus(); 
		   return false; 
		}
		
		$.post('/email_daili_fback.php', $(this).serialize(), function(json){
			alert(json.ret_msg);
			if(json.ret_code==0)
			window.location.reload();
		}, 'json');
		
	})
	
});


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
