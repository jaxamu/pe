

function playlist(liebiao){
	
	$.ajax({
		type:"get",
		url:"htdocs/data/playlist.json",
		async:true,
		success:function(data){
			//console.log(data)
			liebiao(data.playlist.tracks)
		}
	});
	
}
playlist(function(liebiaos){

	
var liebiao=$('.liebiao');
var item =$('.yc_liebiao').html();
	
	
for(var i=0;i<liebiaos.length;i++  ){
	
	var $item=$(item)
	
	var music= liebiaos[i];
	
	$item.find('.music_name').html(liebiaos[i].name)
	$item.find('p').html(liebiaos[i].ar[0].name)
	
	$item.data('music',music).click(function(){
		lrcs = []; //清空歌词的数据
		$('.footer').show();
		$('.footer').find('.foot_music').html($(this).data("music").name);
		$('.footer').find('.foot_name').html($(this).data("music").ar[0].name);
		boFang.bofang($(this).data("music").id);
		clearInterval(time);
		
	})
	
	
	liebiao.append($item)

}
	
})

$('.fanhui').click(function(){
	header( "tab" );
	$('.footer').hide();
})

















