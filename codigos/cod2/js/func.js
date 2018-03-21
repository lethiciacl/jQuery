$(document).ready(function(){
	$('h1')
		.css("color","red")
		.text("Seminário de jQuery")
		.hide().delay('1000')
		.fadeIn()
		.click(function(){
			$('body').css('background','red');
			$('h1').css('color','white');
			$('a').eq(2).css('color','yellow');
		});
	$('a').css('display','block');
	$('#link1').css('color','green');
	$('.link2').css('color','orange');
	$('a').eq(2).css('color','red');
});