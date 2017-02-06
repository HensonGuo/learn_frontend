// window事件 
// 可以监听顶层window或者其他子Element
window.onload = function()
{
	console.info('window加载完成')
	//窗口没有加载完成是无法获取其他元素的
	registerUnblurEvent();
	registerKeyboardEvent();
	registerMouseEvent();
}
// window.onresize = function()
// {
// 	console.info("宽：" + window.innerWidth + "高：" + window.innerHeight)
// }
//或者添加addEventListener;事件前面去掉on
window.addEventListener('resize', function(){
	console.info("宽：" + window.innerWidth + "高：" + window.innerHeight);})



//Form 事件
function registerUnblurEvent()
{
	fname = document.getElementById('fname')
	fname.addEventListener('blur', function(){
		var x = fname.value;
		fname.value = x.toUpperCase();
	});
	fname.onchange = function()
	{
		console.info('input value changed:' + fname.value)
	};
	fname.onfocus = function()
	{
		console.info('focused')
	};
	fname.onselect = function()
	{
		alert('俺被选中了')
	};
	submitForm = document.getElementById('submitForm')
	submitForm.onsubmit = function()
	{
		console.info('提交了')
	}
}



// Keyboard 事件
function registerKeyboardEvent()
{
	fname = document.getElementById('fname')
	fname.onkeydown = function()
	{
		var keycode;
		if (window.event)// IE8 以及更早版本
		{
			keycode = event.keyCode;
		}
		else if (event.which)// IE9/Firefox/Chrome/Opera/Safari
		{
			keycode = event.which;
		}
		console.info(String.fromCharCode(keycode));
	}
	fname.addEventListener('keypress', function()
		{
			console.info('键盘按下')
		});
	fname.addEventListener('keyup', function()
		{
			console.info('键盘松开')
		});
}




// Mouse 事件,下面这些事件并非h5特有
function registerMouseEvent()
{
	btn = document.getElementById('btn')
	btn.onclick = function()
	{
		console.info('点击')
	}
	btn.ondblclick = function()
	{
		console.info('双击')
	}
	btn.onmousedown = function()
	{
		console.info('onmousedown')
	}
	btn.onmousemove = function()
	{
		console.info('onmousemove')
	}
	btn.onmouseout = function()
	{
		console.info('onmouseout')
	}
	btn.onmouseover = function()
	{
		console.info('onmouseover')
	}
	btn.onmouseup = function()
	{
		console.info('onmouseup')
	}
	//h5特有事件
	'ondrag ondragend ondragenter onmousewheel onscroll等'
}