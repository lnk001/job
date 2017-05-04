Mugeda.script.push(function (mugeda) {
(function(mugeda, pageIndex){
Mugeda.script.push(function (mugeda) {
    var wx = Mugeda.getMugedaObject();
    wx.addEventListener("renderReady", function () {
    var scene = wx.scene;
    var btn1 = scene.getObjectByName("btn01");
        btn1.addEventListener("click",function(e){
           document.location.href = 'http://tb.cn/V3rSBWx';
        }); 
        
    var btn2 = scene.getObjectByName("btn02");
        btn2.addEventListener("click",function(e){
			document.location.href = 'http://tb.cn/V3rSBWx';
            /*var ua = navigator.userAgent.toLowerCase();
    		if (ua.match(/MicroMessenger/i) == "micromessenger") {
    		        
    		       document.location.href = 'http://tb.cn/V3rSBWx';
    		} else {
    		       document.location.href = 'http://tb.cn/V3rSBWx';
		           return false;
    		}*/
            
        });        
   
});
});
})(mugeda, 4);

});
