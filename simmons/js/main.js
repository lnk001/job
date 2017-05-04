$(function(){
		
	// 点击缩放
	function zoomFn(obj){
		$(obj).on('touchstart',function(e){
			$(this).css('-webkit-transform','scale3d(0.8,0.8,0.8)');
		})

		$(obj).on('touchend',function(e){
			$(this).css('-webkit-transform','scale3d(1,1,1)');
		})
	}

	zoomFn('.zoomBtn');

	
	// 伪3D轮播
	arrPosition =[
	{"transform":"translateX(0px) scale(1,1)","-webkit-transform":"translateX(0px) scale(1,1)","z-index":"10","opacity":"1"},

	{"transform":"translateX(180px) scale(0.8,0.8)","-webkit-transform":"translateX(180px) scale(0.8,0.8)","z-index":"5","opacity":"0.6"},

	{"transform":"translateX(-180px) scale(0.8,0.8)","-webkit-transform":"translateX(-180px) scale(0.8,0.8)","z-index":"5","opacity":"0.6"},

/*	{"transform":"translateX(0px) scale(0.5,0.5)","-webkit-transform":"translateX(0px) scale(0.5,0.5)","z-index":"1","opacity":"0.6"},

	{"transform":"translateX(0px) scale(0.5,0.5)","-webkit-transform":"translateX(0px) scale(0.5,0.5)","z-index":"1","opacity":"0.6"},

	{"transform":"translateX(0px) scale(0.5,0.5)","-webkit-transform":"translateX(0px) scale(0.5,0.5)","z-index":"1","opacity":"0.6"},

	{"transform":"translateX(0px) scale(0.5,0.5)","-webkit-transform":"translateX(0px) scale(0.5,0.5)","z-index":"1","opacity":"0.6"},

	{"transform":"translateX(0px) scale(0.5,0.5)","-webkit-transform":"translateX(0px) scale(0.5,0.5)","z-index":"1","opacity":"0.6"},

	{"transform":"translateX(-180px) scale(0.8,0.8)","-webkit-transform":"translateX(-180px) scale(0.8,0.8)","z-index":"5","opacity":"0.6"}*/];

	for(var i = 0; i<$('.productImg img').length; i++){

		$('.productImg img').eq(i).css(arrPosition[i]);
	}

	

	var oProduct=document.getElementById("product");

	var kong = 0;
	fnTouch(oProduct,{
		left:function (){
			// alert('左');
			arrPosition.unshift(arrPosition.pop());

			for(var i = 0; i<$('.productImg img').length; i++){

				$('.productImg img').eq(i).css(arrPosition[i]);
			}

			kong ++;

			if (kong>2) {
				kong = 0;
			}

			$('.product p span').removeClass('spanRed');
			$('.product p span').eq(kong).addClass('spanRed');
			
		},
		right:function (){
			// alert('右');
			
			arrPosition.push(arrPosition.shift());

			for(var i = 0; i<$('.productImg img').length; i++){

				$('.productImg img').eq(i).css(arrPosition[i]);
			}

			kong --;
			if (kong<0) {
				kong = 2;
			}

			$('.product p span').removeClass('spanRed');
			$('.product p span').eq(kong).addClass('spanRed');
		}
	});

	// '判断左右滑动'
	function fnTouch(obj,direction){

		var startX;
		var startY;
		var oldLeft;
		var oldTop;
		var disX;
		var disY;

		function cancelTouch(){

			this.removeEventListener("touchmove", onTouchMove, false);
		}

		function onTouchMove(e){

			var oEvent=e||window.event;

			disX=oEvent.touches[0].pageX-startX;
			disY=oEvent.touches[0].pageY-startY;
		
			

			if (e.preventDefault){
				e.preventDefault();
			}
			// cancelTouch();
		}

		obj.addEventListener("touchstart", function (e){

			var oEvent=e||window.event;

			if (oEvent.touches.length==1){

				startX=oEvent.touches[0].pageX;
				startY=oEvent.touches[0].pageY;

				this.addEventListener("touchmove",onTouchMove,false);

			}
			if (e.preventDefault){
				e.preventDefault();
			}
		}, false);

		obj.addEventListener("touchend", function (e){

			if (disX>20&&direction.right){
				direction.right();
			}
			else if (disX<-20&&direction.left){
				direction.left();
			}
			if (disY>20&&direction.down){
				direction.down();
			}
			else if (disY<-20&&direction.up){
				direction.up();
			}
			
		}, false);
	}

	$('.prev').on('touchstart',function(e){e.stopPropagation();});
	$('.prev').on('click',function(e){

		arrPosition.unshift(arrPosition.pop());

		for(var i = 0; i<$('.productImg img').length; i++){

			$('.productImg img').eq(i).css(arrPosition[i]);
		}

		kong ++;

		if (kong>2) {
			kong = 0;
		}

		$('.product p span').removeClass('spanRed');
		$('.product p span').eq(kong).addClass('spanRed');

	});

	$('.next').on('touchstart',function(e){e.stopPropagation();});
	$('.next').on('click',function(e){

		arrPosition.push(arrPosition.shift());

		for(var i = 0; i<$('.productImg img').length; i++){

			$('.productImg img').eq(i).css(arrPosition[i]);
		}

		kong --;
		if (kong<0) {
			kong = 2;
		}

		$('.product p span').removeClass('spanRed');
		$('.product p span').eq(kong).addClass('spanRed');

	});



	$('.phone').on('touchstart',function(e){
	    e.stopPropagation();
	   
	});


	// $('.messageBg label input').focus(function(){
	// 	$('.messageBg').removeClass('posBot');
	// 	$('.messageBg').addClass('posTop');
	// });
	// $('.messageBg label input').blur(function(){
	// 	$('.messageBg').removeClass('posTop');
	// 	$('.messageBg').addClass('posBot');
	// });




	
})