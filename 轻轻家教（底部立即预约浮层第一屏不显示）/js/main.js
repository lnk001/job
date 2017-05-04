if (/(Android)/i.test(navigator.userAgent)) {   //判断Android
    $(".reg-warpper .form-group select").css("padding-left","2px")
} 

$(document).ready(function(){
	sinacity();
	scrollbottom();
	myscroll();
	
	//提交验证
	$(".btn-buy").on("click", function() {
		var mobile = $("#mobile").val();
		var city = $("#city").val();
		if (mobile == '') {
			alert('请正确填写手机号码');
			return false;
		}
		var re = /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|14[0-9]{1}|17[0-9]{1})+\d{8})$/;
		if (mobile.length != 11 || !re.test(mobile)) {
			alert('请填写有效的手机号码');
			return false;
		}
		
		if (city == '') {
			alert('请选择所在城市');
			return false;
		}
	})
	
});

//新浪城市定位
var sinacity=function(){
	var optElements=document.getElementById("city").children;
	var optValue=remote_ip_info['city'];//新浪城市定位js
	var noValue= false;
	//alert(optValue);
	for(var opt in optElements){
		if(optElements[opt].value==optValue){
			optElements[opt].selected="selected";
			return;
		}
		noValue = true;
	}
	if(noValue){
		optElements[0].value=optValue;
		optElements[0].text=optValue;
		return false;
	}
}		

//浮动立刻购买
var scrollbottom=function(){
	$(window).scroll(function() {  
		var _top=$(document).scrollTop();
		var _bottom=$(document).height() - $(window).height() - $(window).scrollTop();
		var _height=$(window).height()-500;
		//alert(_top+"--"+_bottom+"--"+_height)
		if(_top<_height ){

			$(".btn-item").hide();
			return false;
		}else if(_bottom<_height){

			$(".btn-item").show();
			$(".totop").show();
			$(".buy_show").show();
			return false;
		}else if(_top>_height && _bottom>_height){

			$(".btn-item").show();
			$(".totop").show();
			$(".buy_show").show();
			return false;
		}
    })	 
}

//滚动跳转
var myscroll =function (id) {  
	$("#" + id).HoverTreeScroll(500);  
} 
