//jQuery原型扩展方法
$(function(){

$.fn.extend({
	
	//拖拽
	drag:function(title){  //title ：标题
		
		this.each(function(){
			
			title=title ||$(this);//拖拽部位的判断
			
			var _this=$(this);
			
			title.mousedown(function(ev){
				var disX=ev.pageX-$(this).offset().left;
				var disY=ev.pageY-$(this).offset().top;
				
				$(document).mousemove(function(ev){
					//console.log(ev)	
					var l=ev.pageX-disX;
					var t=ev.pageY-disY;
					
					var s_w=$(window).width();
					var s_h=$(window).height();
					
					if(l<0){
						l=0
					};
					if(t<0){
						t=0
					};
					
					if(l>s_w-_this.outerWidth()){
						l=s_w-_this.outerWidth();
					};
					if(t>s_h-_this.outerHeight()){
						t=s_h-_this.outerHeight();
					};
					//最后赋值
					_this.css({"left":l,"top":t});
					
				});
				
				$(document).mouseup(function(){
					$(document).unbind("mousemove");
				});
				return false;  //阻止默认行为
			});
			
		});
		
		return this;
	},
	
	
	//showCenter
	showCenter:function(){
		
		return this.each(function(){
			var _this=$(this);
			
			function run(){
				var s_w=$(window).width();
				var s_h=$(window).height();
				
				var this_w=_this.outerWidth();
				var this_h=_this.outerHeight();
				
				var l=(s_w-this_w)/2;
				var t=(s_h-this_h)/2;
				
				_this.css({"left":l,"top":t});
			};
			run();
			//改变窗口大小事
			$(window).resize(run);
		});
	},
	
	
	//选项卡
	imgTab:function(opt){//opt:对象  autoPlay：  time
		
		var def={
			"autoPlay":true,
			"time":1000
		};
		
		var n_opt=$.extend(def,opt);
		
		
		return this.each(function(){
			
			var _this=$(this);
			
			//找按钮
			var aBtn=_this.find("ol li");
			var imgLi=_this.find("ul li");
			
			var i=0;
			var timer;
			
			aBtn.click(function(){
				var n=$(this).index();
				
				i=n;
				
				$(this).addClass("ac").siblings().removeClass('ac');
				//切换图片
				imgLi.eq(n).toggle('explode',600).siblings('li').fadeOut();
			});
			//------------------------------
			//自动切换
			if(n_opt.autoPlay){
				$('.banc-you').click(function(){
					i++;
					if(i>=imgLi.length){
						i=0
					}
					imgLi.eq(i).toggle("scale").siblings('li').fadeOut();
					aBtn.eq(i).addClass("ac").siblings().removeClass('ac');
					return i
				});
				$('.banc-zuo').click(function(){
					i--;
					if(i>=imgLi.length){
						i=0
					}else if(i<0){
						i=5
					};
					imgLi.eq(i).toggle("slide", 600).siblings('li').fadeOut();
					aBtn.eq(i).addClass("ac").siblings().removeClass('ac');
					return i
				});
				
				function run(){
					timer=setInterval(function(){
					i==aBtn.length-1? i=0:i++;
					
						imgLi.eq(i).toggle("fade", 600).siblings('li').fadeOut();
						aBtn.eq(i).addClass("ac").siblings().removeClass('ac');
						
					},n_opt.time);
				};
				run();
				//鼠标移入  停止自动
				//鼠标移出 继续自动
				
				$(".ban-ul,.ban-cen ol").hover(
					function(){
						$(".ban-cen i").addClass('i');
						clearInterval(timer);
					},
					function(){
						$(".ban-cen i").removeClass('i');
						run();
					}
				)
			}
		});
	},
	
	//checkAll
	
	checkAll:function(){
		return this.each(function(){
			
			
			
		});
		
	},
dcaidan:function(opt){			//导航菜单
var _this=$(this);
var zli=_this.find(".ban-zuo li");		//左边的
var youli=_this.find('.popup li ');		//右边的
var a=0;
	$(zli).on('mousemove mouseover',function(){		//移动 进入
		var s=$(this).index();
		$(this).addClass('red').siblings().removeClass('red');
		
		var time=setTimeout(function(){
			run();
			clearTimeout(time)
		},80)
			
			
		$('.wrap').mouseleave(function(){		//离开
			$(zli).removeClass('red');
			$(youli).finish().hide();
			clearTimeout(time)
			a=0;
		});
		if(a==0){
			$(zli).mouseleave(function(){
				var time1=setTimeout(function(){
					a=0;
				},370)
				clearTimeout(time)	
				//console.log(33)
				clearTimeout(time1)
			});
		};
		
		$(youli).eq(s).mouseover(function(){		//左边红
			//console.log(s)
			$(zli).eq(s).addClass('red').siblings().removeClass('red');
		});
		function run(){
			if(a==0){

				$(youli).eq(s).stop().fadeIn(900).siblings().finish().hide();
				
				//console.log(0)
			}else if(a==1){
				
				//console.log(1)
				$(youli).eq(s).show().siblings().finish().hide();
				//a=0;
			};
			a=1;
		}
	});		//移动 进入
},
PengKjdg:function(ev){
        	
var flag = true;
var ac=$(".bany-cen-top");
var acp=$(".bany-cen-top p");
var xia=$(".bany-cen .bott");
var xia_zhi=$(".bany-cen .bott li");
var xia_xx= $(".bany-cen .bott .bottx");
$(ac).on("mouseover",function(){	//移动到这上面
    var index = $(this).index();
    if(flag){
        $(acp).addClass("shang")		//改变top值
        $(this).addClass("ac").siblings(ac).removeClass("ac"); 	//加上上边框

        $(xia).animate({top:"27px"},200)	//下面的上来
        $(xia_zhi).eq(index).show().siblings('.bany-cen .bott li').hide(); //对应的li显示
            }
})
        $(xia_xx).on("click",function(){
    flag = false;    //关闭之后变成false 不能触发mouseover事件
    $(ac).removeClass("ac");	//返回原来的样子
    $(acp).removeClass("shang")
    $(xia).animate({top:"227px"},200) //下面的隐藏
   
})
 $(ac).on("mouseleave",function(){  //鼠标离开元素触发    当鼠标离开li才变成true 可以正常滑动
         flag = true;
     })
},
gund:function(title){		//滚动条

	var louc=$('.con-1f');					//每个楼层
	var chelou=$('.sidebar');		//侧边滚动条
	var uli=$(".sidebar li");		//侧边滚动条的li	
	//$(chelou).hide();
	
$(window).scroll(function(){		//滚动条的监听事件
	var lih1=$(louc).eq(0).offset().top-$(louc).eq(0).outerHeight(true)/2;	//第一个楼层的距定高度
	var zuihou=$(window).height()-$(louc).last().outerHeight(true)/2;		//最后一个的距定高度
	//console.log(lih1)
	if ($(window).scrollTop()>lih1){		//如果移动到就显示侧边导航
		//console.log(lih1)
		$(chelou).show();
		$('.ding1').finish().animate({top:0},280,"easeInQuart");
	}else if($(window).scrollTop()<lih1) {
		$('.ding1').finish().animate({top:-62},80,"easeInCubic");
		$(chelou).hide();
		//console.log(0)
	}
	
	$(louc).each(function(i){			//让侧边导航显示对应的显示为红
		var hei_doc=$(this).offset().top-$(window).scrollTop();
		
		if(hei_doc<zuihou&&hei_doc>=0){

			//if($('html,body').is(':animated')==false){
				$(uli).eq(i).addClass('ac').siblings().removeClass('ac');	//对应导航的li变化
			//}
		};
	});

$(uli).click(function(){				//点击对应
		$(this).addClass('ac').siblings().removeClass('ac');
		var li=$(this).index();
		var h0=$(louc).eq(li).outerHeight(true)/2;
		var h=$(louc).eq(li).offset().top-h0;
		
		$('html,body').stop().animate({'scrollTop':h},1000,'easeInQuad');
	})
});
},

xuanxian:function(title){		//选项卡
	
return this.each(function(i,ev){
	
	var _this=$(this)
	
	var li=_this.find('.con1-text li');
	var Oxuanx=_this.find('#xuanx .xuanxx')
	
	
		li.mouseover(function(){
			//console.log(1)
			var index = $(this).index();
			$(this).addClass('con1-wai').siblings("li").removeClass('con1-wai');
			$(Oxuanx).eq(index).stop().show().siblings(".xuanxx").stop().hide();
			
		})
	
});	//louc的	

},	//选项卡

});		//添加函数
			//运行函数
			
});		//win的准备






