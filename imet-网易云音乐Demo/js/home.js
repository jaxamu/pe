

function topPlayList (datas){
	
	if(wang()){
		var liebiao=JSON.parse(localStorage.liebiao1);  
		datas(liebiao);
		console.log("访问本地缓存");
	}else{
		console.log("访问服务器数据");
		var url="htdocs/data/topPlayList.json"
		$.ajax({
			type:"get",
			url:url,
			async:true,
			success:function(data){
				
				localStorage.liebiao1=JSON.stringify(data.playlists);
				localStorage.shij= new Date().getTime();
				datas(data.playlists);
				//console.log(data.playlists)
			},error: function (){		//服务器响应失败处理函数
				console.log("失败")
			}
		});
	}
}

function wang(){
	
	if(!localStorage.liebiao1){
		return false
	}else{
		var cha=new Date().getTime()-localStorage.shij;		//检查时间过了没 多久
		//console.log(  localStorage.shij )
		if(cha>5*1000){				//如果过了
			return false
		}
		return true
	}
}


topPlayList( function(datas){

var gedan=$('.gedan');
	
var shuj1=$('.yingchang').html();

for (var i=0;i<datas.length;i++  ){
	
	var shuj2=$(shuj1)
	
	//console.log(datas[i].name)
	shuj2.find('.pic_txt').html(datas[i].name)
	shuj2.find('span').html(datas[i].creator.province)
	shuj2.find('img').attr("src",datas[i].coverImgUrl)
	shuj2.find('a').attr("href","#liebiao?id="+datas[i].id)
	.click(function(){
		header("liebiao")
	})
	
	gedan.append(shuj2)
	
}
	
})
	


