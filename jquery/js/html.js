//获得内容 - text()、html() 以及 val()
$('#btn1').click(function(){
	alert("text: " + $('#test').text())
});
$('#btn2').click(function(){
	alert("text: " + $('#test').html())
});
$('#btn3').click(function(){
	alert("text: " + $('#test1').val())
});



//获取属性 - attr()
$('#btn4').click(function(){
	alert("text: " + $('#w3s').attr('href'))
});



//设置
//text(value) html(value) val(value) attr('attrname', 'value')



//添加
 $("#test2").append(" <b>Appended text</b>.");
 $("#test2").prepend("<b>Prepended text1.</b>", "<b>Prepended text2.</b>");
 $("#test2").after(" <b>after text</b>.");
 $("#test2").before("<b>before text1</b>.", "<b>before text2</b>.");


 //删除
 $('#btn5').click(function(){
	$('#div1').remove()
});




 //css类
 $('#btn6').click(function(){
	$('h1').addClass("blue")
});
 $('#btn7').click(function(){
	$('h1').removeClass("blue")
});
  $('#btn8').click(function(){
	$('h1').toggleClass("blue")
});
 //返回css属性
 $("h1").css("background-color")
//设置css属性
 $("h1").css("background-color", 'yellow')
 //设置多个css属性
 $("#test2").css({"background-color":'yellow', "font-size":"200%"})



 //尺寸
 //width() 和 height() 方法
 console.info($("h1").width());
 //innerWidth() 和 innerHeight() 方法 (包括内边距)
 console.info($("h1").innerWidth());
 //outerWidth() 和 outerHeight() 方法 方法 (包括内边距和边框)
 console.info($("h1").outerWidth());