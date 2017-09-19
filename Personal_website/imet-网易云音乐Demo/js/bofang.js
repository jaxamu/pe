

$('.bf_fanhui').click(function(){
	header( "liebiao" );
	$('.footer').show();
	$('.pic_img1').css("transform","rotate(0deg)");
		clearInterval(time)
})

$(function(){		//transform: rotate(-30deg);
	function xuanzhuan(){
		console.log(111)
		var i=0
		time=setInterval(function(){
			i++;
			$('.pic_img1').css("transform","rotate("+i+"deg)");
		},100)
	}
	var taclass=$('.foot_btn').prop('class')
	if(taclass=="foot_btn" ){
		xuanzhuan()
		$('.item_gan').css("transform","rotate(0deg)");
		$('#zhanting').prop("src","images/pause.png");
	}else{
		$('.pic_img1').css("transform","rotate(0deg)");
		clearInterval(time)
		$('.item_gan').css("transform","rotate(-30deg)");
		$('#zhanting').prop("src","images/play.png");
	}
	
	$('.geming').html($('.foot_music').html())
	$('.zuozhe').html($('.foot_name').html())

$('#zhanting').click(function(ev){  //暂停键的点击
	
	if($('.foot_btn').hasClass('ting')){		//如果有停的类
		//console.log(888888)
		xuanzhuan()
		$('.item_gan').css("transform","rotate(0deg)");
		$('.foot_btn').removeClass('ting');	//就是删除停切换播放
		$('#audio').get(0).play();		//播放音乐
		$('#zhanting').prop("src","images/pause.png");
	}else{									
		//console.log(666666666666)
		$('.pic_img1').css("transform","rotate(0deg)");
		clearInterval(time)
		$('.item_gan').css("transform","rotate(-30deg)");
		$('#audio').get(0).pause();		//如果在播放就暂停
		$('.foot_btn').addClass('ting');		//换图标
		$('#zhanting').prop("src","images/play.png");
	};
	return false
	
})
})

gechi(function(text) {

lyric = text.split('\r\n'); //先按行分割
var _l = lyric.length; //获取歌词行数

for(i=0;i<_l;i++) {
    var d = lyric[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g);  //正则匹配播放时间
    var t = lyric[i].split(d); //以时间为分割点分割每行歌词，数组最后一个为歌词正文
    
    
    //console.log(String(d))
    if(d==null) { //过滤掉空行等非歌词正文部分
    	console.log('空')
    }else{
        //换算时间，保留两位小数
        var dt = String(d).split(':');  
        var tt = parseInt(dt[0].split('[')[1])*60;  
        var _t = Math.round(parseInt(dt[0].split('[')[1])*60+parseInt(dt[1].split(']')[0])*100)/100;
        var  zuiz=tt+_t;
        lrcs.push([zuiz, t[1]]);
        //console.log(dt) 
        //console.log(zuiz) 
        //console.log(parseInt(dt[0].split('[')[1])*60) 
    }
}

$('#audio').get(0).addEventListener('timeupdate', function() {
	//console.log(audio.currentTime)
	var lrcgc=document.getElementById('lrc')
	//console.log(lrcs[1][0])
	if(lrcgc!=null){	//如果没有跳转到其他页面
		if(audio.currentTime > lrcs[1][0]) {
	    	//console.log(lrcgc)
	        lrcgc.innerHTML = lrcs[1][1];
	        lrcs.shift();  //删除第一个
	    }
	}
},false);
})


function gechi(gc){ //请求歌词数据
	var geming=$('.foot_music').html() //歌名是什么
	//console.log(geming)
	$.ajax({
		type:"get",
		url:"htdocs/data/"+geming+".txt", //加载对应歌名的歌词数据
		async:true,
		success:function(data){
			//console.log("请求成功")
			//console.log(11)
			gc(data)  //传数据到函数里面去
		},
		error:function(){
			console.log("失败")
		}
	});
}


