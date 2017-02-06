//显示隐藏
$('#hide').click(function(){$('p').hide()})
$('#show').click(function(){$('p').show()})



//淡入淡出
$('#fadeout').click(function(){$('p').fadeOut(1000)})
$('#fadein').click(function(){$('p').fadeIn('slow')})
//fadeToggle()
/*
方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换
如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。
如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果.
*/
$('#fadetoggle').click(function(){$('p').fadeToggle('slow')})



//滑动
// $('.flip').click(function(){$('.panel').slideDown()})
// $('.flip').click(function(){$('.panel').slideUp()})
$('.flip').click(function(){$('.panel').slideToggle()})


//动画
// $(selector).animate({params},speed,callback);
// left从左移动
// 使用队列功能
$('#anibtn').click(function(){
	$('#aniobj').animate({left:'250px', opacity:'0.5', height:'150px', width:'150px'})
	$('#aniobj').animate({left:'250px', opacity:'0.3', height:'200px', width:'200px'})
})



//stop
$('#stop').click(function(){$('.panel').stop()})


//callback
$('#hide').click(function(){$('p').hide(200, alert('hided'))})



//chainning
$("p").css("color","red").slideUp(2000).slideDown(2000);