
$('.ting').click(function(ev){			//播放键的点击
	ev.stopPropagation();				//阻止默认事件
	if($(this).hasClass('ting')){		//如果有停的类
		$('.ting').removeClass('ting');	//就是删除停切换播放
		$('#audio').get(0).play();		//播放音乐
		$('#zhanting').prop("src","images/pause.png");
	}else{									
		$('#audio').get(0).pause();		//如果在播放就暂停
		$(this).addClass('ting');		//换图标
		$('#zhanting').prop("src","images/play.png");
	};
	return false
})
var myid="";
var boFang={
	
	bofang:function(id){
		//console.log(id)
		$.ajax({
			type:"get",
			url:"htdocs/data/geid.json",
			async:true,
			success:function(data){
				
				//console.log(data[id].url)
				myid=id;
				
				
				var urls=data[id].url;
				$('#audio').attr("src",urls);
				$('#audio').get(0).play();
				$('.ting').removeClass('ting');
			},
			error:function(){
				console.log("失败")
			}
		});
	}
};


$('.footer').click(function(ev){
	ev.stopPropagation();
	header( "bofang" );
	$('.footer').hide()
	//$('.wangyi').hide()
	//$('.Dofang').show()
	var taclass=$('.foot_btn').prop('class')
	//console.log(taclass)
	if(taclass=="foot_btn" ){
		//console.log(111111)
		//console.log(taclass)
		$('#zhanting').prop("src","images/pause.png");
	}else{
		//console.log(55555)
		$('#zhanting').prop("src","images/play.png");
	}
	})




