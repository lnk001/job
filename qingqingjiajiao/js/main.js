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
		
		var url = window.location.search;
		if(url.indexOf('?')>-1)
			var siteid = url.substr(1).match(/(^|&)_id=(\d+)/)[2];
		else
			var siteid = 32;			
		
		var params = {'username':'', 'phone':mobile, 'memo':'城市：'+city+' - 年级：'+$('#nianji').val() +' - 科目：'+ $('#kemu').val(), 'siteid':siteid, 'sms':0};			
		$.post('/submit.php', params, function(data){
			var msg = '';
			switch(data.status)
			{
				case 0 : msg = '提交成功'; break;
				case 1 : msg = '已经提交过了'; break;
				default : msg = '提交失败，请稍后重试'; break;
			}
			window.alert(msg);
		}, 'json')			
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
		//noValue = true;
	}
	/*if(noValue){
		optElements[0].value=optValue;
		optElements[0].text=optValue;
		return false;
	}*/
}		

//浮动立刻购买
var scrollbottom=function(){
	$(window).scroll(function() {  
		var sTop = $(window).scrollTop();
		//console.log(sTop)
		if(sTop>800 && sTop<1350 ){
			$(".btn-item").css({"display":"none"})
			return false;
		}else{
			$(".btn-item").css({"display":"block"})
			return false;	
		}
	
		
    })	 
}

//滚动跳转
var myscroll =function (id) {  
	$("#" + id).HoverTreeScroll(500);  
} 
