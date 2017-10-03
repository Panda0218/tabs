$(".pc-mod-tab div").on('mouseover',function (e) {
  var curIndex=$(this).index();
  $(this).addClass("pc-mod-tab-item-cur").siblings().removeClass("pc-mod-tab-item-cur");
  $(".pc-mod-business-scene-item").eq(curIndex).show().siblings().hide();
});

var curIndex=0;
setInterval(function () {
  curIndex++;
  if(curIndex>3){
    curIndex=0;
  }
  $(".pc-mod-tab div").eq(curIndex).addClass("pc-mod-tab-item-cur").siblings().removeClass("pc-mod-tab-item-cur");
  $(".pc-mod-business-scene-item").eq(curIndex).attr("style","z-index:2;").siblings().attr("style","z-index:1;");
},3000);