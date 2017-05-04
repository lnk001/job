var end_timestamp = (Date.parse(new Date()) + 4*3600*1000 + 10*60*1000) / 1000;
var this_time = Date.parse(new Date()) / 1000;

$(document).ready(function(){
    //计算已售件数
    var start = parseInt(mySeedRandom()*50)+600;//开始量
    var end = parseInt(mySeedRandom()*50)+930;//截止量
    var arr = [30,15,12,8,6,4,15,35,60,80,90,85,80,75,80,90,90,85,80,85,90,90,100,95];//权重数组
    buyCount(start,end,arr);

    timedCount();
    countPrice();
    loadImage();
    scrollComment();
});

//计时器
var timedCount=function (){

    this_time=this_time + 1;
    if(this_time != 0){
        setTimeout("timedCount()",1000);
    }
    var sub_all_sec = end_timestamp - this_time;
    var sub_day = parseInt(sub_all_sec / 86400);
    var sub_hour = parseInt((sub_all_sec%86400) / 3600);
    var sub_min = parseInt((sub_all_sec%3600) / 60);
    var sub_sec = parseInt(sub_all_sec%60);
    if(sub_day < 10){
        sub_day = "0" + sub_day;
    }
    if(sub_hour < 10){
        sub_hour = "0" + sub_hour;
    }
    if(sub_min < 10){
        sub_min = "0" + sub_min;
    }
    if(sub_sec < 10){
        sub_sec = "0" + sub_sec;
    }
    $("#day").html(sub_day);
    $("#hour").html(sub_hour);
    $("#min").html(sub_min);
    $("#sec").html(sub_sec);
}

//当前购买量
var buyCount = function(start,end,arr){
    var count = 0;
    var total = 0;
    var span = end - start;
    var myDate = new Date();
    for(var i=0;i<arr.length;i++){
        total += arr[i];
    }
    for(var j=0;j<myDate.getHours();j++){
        count += arr[j] / total * span;
    }
    for(var k=0;k<myDate.getMinutes();k++){
        count += arr[j] / total / 60 * span;
    }
    for(var l=0;l<myDate.getSeconds();l++){
        count += arr[j] / total / 3600 * span;
    }
    $("#buy_count").html(start + parseInt(count))
}

var countPrice=function(){
    var price = '298';
    var old_price = 2980;
    var dec_price = old_price - parseInt(price);
    $("#old_price").html('￥' +old_price);
    $("#dec_price").html('￥' +dec_price);
}

//种子随机数
function mySeedRandom(){
    var min = 0;
    var max = 1;
    var seed = 0;
    var myDate = new Date();
    seed = myDate.getFullYear() * myDate.getMonth() * myDate.getDate();
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280.0;
    return min + rnd * (max - min);
}

//评论滚动
var scrollComment = function(){
    var comment = $(".comment");
    var box = $(".comment-inner");
    var boxClone = box.clone(false);
    comment.append(boxClone);

    setInterval(function(){
        if (boxClone[0].offsetHeight - comment[0].scrollTop <= 0) {
            comment[0].scrollTop -= box[0].offsetHeight;
        } else {
            comment[0].scrollTop++;
        }
    },40)
}


var loadImage = function(){
    var src = $(".banner-item img").attr("src");
    var img = new Image();
    var flag = true;
    img.onload = function(){
        loadImages();
    }
    img.onerror = function(){
        loadImages();
    }
    setTimeout(function(){
        loadImages();
    },1500);
    var loadImages = function(){
        if(flag){
            flag = false;
            $(".lazy-img").each(function(){
                var $ele = $(this);
                $ele.attr({'src':$ele.attr("data-src")});
            });
        }
    }
    img.src = src;
}