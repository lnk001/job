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
	
	//菱形图片切换
	$(".p3_sibian p").on("click",function(){
		var lang = $(this).attr("lang");
		$(".p3_focus").css("background-image","url(images/p3_"+lang+".png)");
		if(lang==1){
			$(".p3_sibian p:nth-child(1) img").attr("src","images/p3_sb_1_hover.png");
			$(".p3_sibian p:nth-child(2) img").attr("src","images/p3_sb_2.png");
			$(".p3_sibian p:nth-child(3) img").attr("src","images/p3_sb_3.png");
			$(".p3_sibian p:nth-child(4) img").attr("src","images/p3_sb_4.png");
			return false;
		}
		
		if(lang==2){
			$(".p3_sibian p:nth-child(1) img").attr("src","images/p3_sb_1.png");
			$(".p3_sibian p:nth-child(2) img").attr("src","images/p3_sb_2_hover.png");
			$(".p3_sibian p:nth-child(3) img").attr("src","images/p3_sb_3.png");
			$(".p3_sibian p:nth-child(4) img").attr("src","images/p3_sb_4.png");
			return false;
		}
		if(lang==3){
			$(".p3_sibian p:nth-child(1) img").attr("src","images/p3_sb_1.png");
			$(".p3_sibian p:nth-child(2) img").attr("src","images/p3_sb_2.png");
			$(".p3_sibian p:nth-child(3) img").attr("src","images/p3_sb_3_hover.png");
			$(".p3_sibian p:nth-child(4) img").attr("src","images/p3_sb_4.png");
			return false;
		}
		if(lang==4){
			$(".p3_sibian p:nth-child(1) img").attr("src","images/p3_sb_1.png");
			$(".p3_sibian p:nth-child(2) img").attr("src","images/p3_sb_2.png");
			$(".p3_sibian p:nth-child(3) img").attr("src","images/p3_sb_3.png");
			$(".p3_sibian p:nth-child(4) img").attr("src","images/p3_sb_4_hover.png");
			return false;
		}
	})
})

$(function () {
/*	function handler() {
		event.preventDefault();
	}*/
	//弹出登录
	$("#examplell").on("click",function () {
		document.addEventListener('touchmove', handler, false);
		var top = ($(window).height() - 340+60)/2;
		var _h = document.body.scrollTop+top;
		//alert(document.body.scrollTop);
		$("#LoginBox").css("top",_h);
		$("#LoginBox").fadeIn("slow");	
		//$("body").css("overflow","hidden");
		$("#topcontrol").fadeOut();
		
	});
	//隐藏登录
	$(".reg_colse").on("click",function () {
		document.removeEventListener('touchmove', handler, false);
		$("#LoginBox").fadeOut("slow");	
		//$("body").css("overflow-x","hidden");
		$("#topcontrol").fadeIn();
	});
	
	

});