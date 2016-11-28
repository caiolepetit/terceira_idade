var tamanhotexto = new Number();
var tamanhotexto = 16;
	function tamanhooriginal(){
		document.getElementById("myCarousel").style.fontSize = 16 + 'px';
	}
function fonte(e){
	var elemento = document.getElementById("myCarousel");
	var atual = elemento.style.fontSize;
	if(e == 'mais'){
		atual = parseInt(atual) + 2 + 'px';
	}else if (e == 'menos') {
		atual = parseInt(atual) - 2 + 'px';
	}else if (e == '100%') {
		atual = tamanhotexto + 'px';
	}
	elemento.style.fontSize = atual;
}