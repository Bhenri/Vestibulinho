function deslizar(x){
	secao=x;
	elemento=$("#sec_"+secao);
	coordenadas=elemento.offset();
	
	//alert(coordenadas.top+"x"+coordenadas.left);
	
	$('body,html').animate({
		scrollTop:coordenadas.top
},2000)
}
x = 5;

setTimeout(function(){
},5000)

baixo()
function baixo(){
y=0;
setInterval(function(){
	y++;
	$("div#background").css({
		"background-position": "0px "+y+"px"
	})
},35)
}
