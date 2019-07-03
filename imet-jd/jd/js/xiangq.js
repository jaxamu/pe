;$(function(){
	//彭康--Pengk   
	
	//详情页的插件
$.fn.extend({	
zuoyou:function(title){			//图片的左右切换
	var xiatu=$('#xiatu');					//ul大
	var xiatuli=$('#xiatu').find('li');		//ul下的li
	var xiatuliw=xiatuli.outerWidth(true);	//li的宽
	var xiatuw=xiatuli.size()*xiatuliw;  	//算出li的总长
	xiatu.width(xiatuw);					//给ul一个总宽
	var spezuo=$('#spezuo');				//左按钮	++
	var speyou=$('#speyou');				//右按钮	--
	var xiatuli_l0=xiatuli.eq(0).position().left;	//第一个li的left
	var xiatuli_l1=xiatuli.eq(1).position().left;	//第2个li的left
	var xiatuli_l3=xiatuli.eq(2).position().left;	//第2个li的left
	var xiatuli_ca=xiatuli_l1-xiatuli_l0;	//第2个li的left差
	var xiatulieq=xiatuli_ca*3;					//倒数4个
	var xiatuli_z=xiatuli.last().position().left-xiatuli.last().position().left*2+xiatulieq;	//倒数的le
	
	xiatu.css("left",-xiatuli_l1);
	$(spezuo).click(function(){
		var xiatuil=xiatu.css("left");				//这时ul的le
		var xiatuilca=parseInt(xiatuil)-xiatuli_ca;	//ul加上移动的距离
		if(xiatuilca<xiatuli_z){
			//console.log(1);
			xiatuilca=xiatuli_z;
		}else{
			
			xiatu.animate({"left":xiatuilca+'px'},100,"easeOutBounce");
			//console.log(xiatu.css('left'));
			//console.log(0);
		};
	});
	$(speyou).click(function(){
		var xiatuil=xiatu.css("left");				//这时ul的le
		//console.log(xiatuil);
		if(parseInt(xiatuil)>=0){				//记得要 par字符串转换数字
			//console.log(0);
		}else{
			var xiatuilca=xiatuli_ca+parseInt(xiatuil);	//ul加上移动的距离	
			xiatu.finish().animate({"left":xiatuilca+'px'},100,"easeOutBounce");
			//console.log(xiatu.css('left'));
			//console.log(1);
		};
	})
},	

jiaac:function(title){	//给按钮加ac
	
	var xiatuli=$('#xiatu').find('li');		//ul下的li
	$('.item').click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	$(xiatuli).click(function(){
		$(this).addClass('img-hover').siblings().removeClass('img-hover');
	});
	
	//------------------------------------
	//加入购物车的加减按钮
	var zban=$('.wrap-input')
	var btns=$('.btn-add');
	var btnx=$('.btn-reduce');
	var shul=$('#buy-num');
	var shull=shul.val();
	
	$(btns).click(function(){
		shull++;
		shul.prop("value",shull);
	});
	$(btnx).click(function(){
		shull--;
		if(shull<=1){
			shull=1;
		};
		shul.prop("value",shull);
	});
},

zoom:function(){	//放大镜
	
	var small =$('#zoom');	//左的图		1
	var big =$('#zoomyoutu');	//右的图	里的图要是倍数 4
	var oSpan =$('#xiaotu');	//左图里的小图是	1/4
	//var zhuti =$('#spec-n1');		//他们的大盒子
	var bigimg =$('#youimg');	//右图的图片id
	//监视鼠标(镜头)
	
	//var oSpan=$('.box1 span');
	
	$(small).mousemove(function(ev){
		oSpan.show();
		$(big).show();
		
		var l=ev.pageX-$(this).offset().left-oSpan.width()/2;
		var t=ev.pageY-$(this).offset().top-oSpan.height()/2;
		
		//限制范围
		if(l<0){
			l=0
		};
		
		if(t<0){
			t=0
		};
		
		//最大移动距离   盒子宽度--span宽度
		
		var max_l=$(this).width()-oSpan.width();
		var max_t=$(this).height()-oSpan.height();
		
		if(l>max_l){
			l=max_l;
		};
		
		if(t>max_t){
			t=max_t
		};
		
		oSpan.css({"left":l,"top":t});
		
		//移动大图片
		$(bigimg).css({"left":-l*2,"top":-t*2});
		
	});
	
	
	$(small).mouseleave(function(){
		oSpan.hide();
		$(big).hide();
	})
},


});	//添加函数
//运行
$().jiaac()
$().zuoyou()
$().zoom()

$('#InitCartUrl').click(function(){
	alert('加入成功')
})

}); //win的准备
