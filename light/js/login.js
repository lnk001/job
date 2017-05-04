
//设置Cookie保存时间
var time = 0;

// JavaScript Document
$(document).ready(function(e) {
	
	// 获取Cookie保存的用户名和密码
	var username = getCookieValue("cookUser");
	var password = getCookieValue("cookPass");

	if (username != '' && password != '') {
		$(" input[name=phoneNumber]").val(username);
		$(" input[name=password]").val(password);
		$("#rememberMe").addClass("check");
	} else{
		$("#rememberMe").removeClass("check")
		$("#rememberMe").addClass("uncheck");
	}

	$("#rememberMe").click(function() {// 记住密码
		if ($(this).hasClass("uncheck")) {
			$(this).removeClass("uncheck")
			$(this).addClass("check");
			time = 60 * 60 * 60;
		}else{
			$(this).removeClass("check")
			$(this).addClass("uncheck");
			time = 0;
		}
	});
	
	
	/**
	 * 输入密码回车
	 */
	$(" input[name=password]").keypress(function(e) {
		if (e.which == 13) {
			$(".loginBtn").click();
		}
	});
});