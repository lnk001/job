//定义画布宽高和生成点的个数
var WIDTH = window.innerWidth, HEIGHT = window.innerHeight, POINT = 35;

var canvas = document.getElementById('Mycanvas');
canvas.width = WIDTH,
canvas.height = HEIGHT;
var context = canvas.getContext('2d');
context.strokeStyle = 'rgba(0,0,0,0.2)',
context.strokeWidth = 1,
context.fillStyle = 'rgba(0,0,0,0.1)';
var circleArr = [];

//线条：开始xy坐标，结束xy坐标，线条透明度
function Line (x, y, _x, _y, o) {
	this.beginX = x,
	this.beginY = y,
	this.closeX = _x,
	this.closeY = _y,
	this.o = o;
}
//点：圆心xy坐标，半径，每帧移动xy的距离
function Circle (x, y, r, moveX, moveY) {
	this.x = x,
	this.y = y,
	this.r = r,
	this.moveX = moveX,
	this.moveY = moveY;
}
//生成max和min之间的随机数
function num (max, _min) {
	var min = arguments[1] || 0;
	return Math.floor(Math.random()*(max-min+1)+min);
}
// 绘制原点
function drawCricle (cxt, x, y, r, moveX, moveY) {
	var circle = new Circle(x, y, r, moveX, moveY)
	cxt.beginPath()
	cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
	cxt.closePath()
	cxt.fill();
	return circle;
}
//绘制线条
function drawLine (cxt, x, y, _x, _y, o) {
	var line = new Line(x, y, _x, _y, o)
	cxt.beginPath()
	cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
	cxt.moveTo(line.beginX, line.beginY)
	cxt.lineTo(line.closeX, line.closeY)
	cxt.closePath()
	cxt.stroke();

}
//初始化生成原点
function init () {
	circleArr = [];
	for (var i = 0; i < POINT; i++) {
		circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
	}
	draw();
}

//每帧绘制
function draw () {
	context.clearRect(0,0,canvas.width, canvas.height);
	for (var i = 0; i < POINT; i++) {
		drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
	}
	for (var i = 0; i < POINT; i++) {
		for (var j = 0; j < POINT; j++) {
			if (i + j < POINT) {
				var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
					B = Math.abs(circleArr[i+j].y - circleArr[i].y);
				var lineLength = Math.sqrt(A*A + B*B);
				var C = 0.5/lineLength*7-0.009;
				var lineOpacity = C > 0.03 ? 0.03 : C;
				if (lineOpacity > 0) {
					drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
				}
			}
		}
	}
}



//页面背景三维特效调用执行
window.onload = function () {
	init();
	setInterval(function () {
		for (var i = 0; i < POINT; i++) {
			var cir = circleArr[i];
			cir.x += cir.moveX;
			cir.y += cir.moveY;
			if (cir.x > WIDTH) cir.x = 0;
			else if (cir.x < 0) cir.x = WIDTH;
			if (cir.y > HEIGHT) cir.y = 0;
			else if (cir.y < 0) cir.y = HEIGHT;

		}
		draw();
	}, 16);
}

//开启精准
$('#login-btn').click(function(){
	$('.login-box').addClass('fadeOutUp-words');
	setTimeout(function(){
		$('.hd-logo').removeClass('fadeOutUp-words').fadeIn().addClass('fade-in-words');
		$('.speak_window').fadeIn();
	},500);
	
})

//返回首页
$('.hd-logo').click(function(){
	$(this).addClass('fadeOutUp-words');
	$('.speak_window').fadeOut();
	setTimeout(function(){
		$('.login-box').removeClass('fadeOutUp-words').addClass('fade-in-words');		
	},500);
	
})

//登录对话框
function up_say(){
	 var inputId,inputVal;
	$(":input").each(function(){
		if ($(this).hasClass('_show') ) {
			inputId  = $(this).attr('id');
			inputVal = $(this).val();
			console.log(inputId+"--"+inputVal);
		}
        
    })
	
	
	if(inputId=='username'){
		if(inputVal!=''){
			var inputVal='欢迎您'+inputVal;
			var valok ='请输入密码';
			$('#username').removeClass('_show');
			$('#passwd').addClass('_show');
			inpuok(inputVal,valok);

		}else{
			var errVal = '用户名不能为空';
			inpuerr(errVal);
			return false;
		}
	}else if(inputId=='passwd'){
		if(inputVal!=''){
			$('.prompt_text p').fadeOut();
			var inputVal='密码正确';
			var valok ="请输入验证码<img src='images/captcha.png'></img>";
			$('#username').removeClass('_show');
			$('#passwd').removeClass('_show');
			$('#captcha').addClass('_show');
			inpuok(inputVal,valok);

		}else{
			var errVal = '用户名或密码错误，请重新输入用户名';
			$('#username').addClass('_show');
			$('#passwd').removeClass('_show');
			inpuerr(errVal);
			setTimeout(function(){
				$('.prompt_text p').html('忘记密码').attr('id','getpasswd').fadeIn(500);
			},1000);
			
			return false;
		}
	}else{
		if(inputVal!=''){
			
			var inputVal='验证码正确';
			//var valok ='进入DSP';
			$('#username').removeClass('_show');
			$('#passwd').removeClass('_show');
			$('#captcha').removeClass('_show');
			$('.up-ico').hide();
			
			var	str  = '<div class="question bounceIn-words">';
				str += '<div class="heard_img right"><img src="images/lg-photo-r.png"></div>';
				str += '<div class="question_text clear"><p>'+inputVal+'</p><i></i>';
				str += '</div></div>';
			$('.speak_box').append(str);
				
			setTimeout(function(){
				$('.prompt_text p').html('已记住密码').attr({'id':'autologin','data-id':'1'}).fadeIn(500);
				$('.submit-btn').fadeIn(500);
			},1000);
			//inpuok(inputVal,valok);
		}else{
			var errVal = '验证码错误，请重新输入';
			inpuerr(errVal);
			$('.prompt_text p').fadeOut();
			return false;
		}
		
	}
}

function inpuerr(errVal){
	setTimeout(function(){
		var ans ='<div class="answer bounceIn-words">';
			ans += '<div class="heard_img left"><img src="images/lg-photo-l.png"></div>';
			ans += '<div class="answer_text"><p>'+errVal+'</p><i></i></div>';
			ans += '</div>';
		$('.speak_box').append(ans);
	},1200);
	$(".wenwen-footer input").focus();
	
}

function inpuok(inputVal,valok){
	var	str  = '<div class="question bounceIn-words">';
		str += '<div class="heard_img right"><img src="images/lg-photo-r.png"></div>';
		str += '<div class="question_text clear"><p>'+inputVal+'</p><i></i>';
		str += '</div></div>';
	$('.speak_box').append(str);
	$(".wenwen-footer input").val('');
	$(".wenwen-footer input").focus();
	setTimeout(function(){
		var ans ='<div class="answer bounceIn-words">';
			ans += '<div class="heard_img left"><img src="images/lg-photo-l.png"></div>';
			ans += '<div class="answer_text"><p>'+valok+'</p><i></i></div>';
			ans += '</div>';
		$('.speak_box').append(ans);
	},1000);

}


























