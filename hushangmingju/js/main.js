/*if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {  
    window.location.href="m/index.html";
}*/

$(document).ready(function(){
	var _width = document.body.clientWidth;
	var pcimg = " <img src='img/PCH5-1_01.jpg'><img src='img/PCH5-1_02.jpg'><div class='pc_contant'><img src='img/PCH5-1_03.jpg'><img src='img/PCH5-1_04.jpg'><img src='img/PCH5-1_05.jpg'><img src='img/PCH5-1_06.jpg'><img src='img/PCH5-1_07.jpg'></div>";
	
	var mimg = " <img src='img/H5-1_01.jpg'><img src='img/H5-1_02.jpg'><img src='img/H5-1_03.jpg'><a href='tel:02133888831'><img src='img/H5-1_04.jpg'></a><img src='img/H5-1_05.jpg'><a href='tel:02133888831'><img src='img/H5-1_06.jpg'></a><img src='img/H5-1_07.jpg'>";
	if(_width>1024){
			$("#pageImg").html(pcimg);
		}else{
			$("#pageImg").html(mimg);
		}
	
	//提交验证
	$(".btn-buy").on("click", function() {
		
		var xingming = $("#xingming").val();
		var mobile = $("#mobile").val();
		var mianji = $("#mianji").val();
		
		if (xingming == '') {
			alert('请填写您的姓名');
			return false;
		}
		
		if (mobile == '') {
			alert('请正确填写手机号码');
			return false;
		}
		var re = /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|14[0-9]{1}|17[0-9]{1})+\d{8})$/;
		if (mobile.length != 11 || !re.test(mobile)) {
			alert('请填写有效的手机号码');
			return false;
		}
		
		if (mianji == '') {
			alert('请填写建筑面积');
			return false;
		}
		
		var url = window.location.search;
		if(url.indexOf('?')>-1)
			var siteid = url.substr(1).match(/(^|&)_id=(\d+)/)[2];
		else
			var siteid = 32;			
		
		var params = {'username':xingming, 'phone':mobile, 'mianji':mianji, 'siteid':siteid, 'sms':0};			
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
