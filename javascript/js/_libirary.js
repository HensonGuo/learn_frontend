//JavaScript 框架
/*
框架都提供针对常见 JavaScript 任务的函数，包括动画、DOM 操作以及 Ajax 处理。
*/


//jQuery
/*
jQuery 是目前最受欢迎的 JavaScript 框架。
它使用 CSS 选择器来访问和操作网页上的 HTML 元素（DOM 对象）。
jQuery 同时提供 companion UI（用户界面）和插件。

$()就相当于一个element
ready 等待完成执行
*/

function myFunc1()
{
	var obj = document.getElementById('demo');
	demo.innerHTML = 'abc'
}
myFunc1();


function myFunc2()
{
	$("#demo").attr("style", "color:red").html('haha')
}
$(document).ready(myFunc2)


//Prototype
//Prototype 是一种库，提供用于执行常见 web 任务的简单 API。