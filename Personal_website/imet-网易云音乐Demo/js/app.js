
var time="";
var lrcs = []; //新建一个数组存放最后结果

function header( m,$id  ){
	$id= $id || $('.wangyi');
	$.ajax({
		url:"views/"+m+".html",		//那个文件
		success:function(data){		
			$id.html( data )		//加载到哪里去
			content( m )
		}
	})
}
function content(m){		//加载js
	$.ajax({
		type:"get",
		url:"js/"+m+".js",
		async:true
	});
}

function url(){			//测试获取链接
	var shuj={};
	var myurl=window.location.href;
	var jing=myurl.split("#");
	
	if( jing.length==2  ){
		var jing=jing[1].split("?")[0];
	}
	var url1= myurl.split("?")[1].split("&");
	for( var i = 0;i<url1.length;i++  ){
		var p=url1[i];
		var kv=p.split('=');
		var pa=parseInt(kv[1]);
		shuj[kv[0]]=pa;
	}
	return shuj
}
//url();



$(function(){
	
if(!localStorage.namm){
	localStorage.namm=0;
	localStorage.namm++;
	header( "hallo" );
}else{
	if(localStorage.namm == 1 ){	//如果启动过一次了
		header( "tab" )			//默认加载到网易大盒子
		header( "footer",$('.footer') );
		$('.footer').hide();
		
		
	}
}	



});