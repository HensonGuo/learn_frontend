//语法实例
/*
$(document)
$(this).hide() 隐藏当前的 HTML 元素
$("#test").hide()	隐藏 id="test" 的元素。
$("p").hide()	隐藏所有 <p> 元素。
$(".test").hide()	隐藏所有 class="test" 的元素。
*/



// jQuery 库包含以下特性：
/*
HTML 元素选取
HTML 元素操作
CSS 操作
HTML 事件函数
JavaScript 特效和动画
HTML DOM 遍历和修改
AJAX
Utilities
*/



//jQuery 选择器
/*
选择器允许您对 DOM 元素组或单个 DOM 节点进行操作
*/

//1.元素选择
/*
$("p") 选取 <p> 元素。
$("p.intro") 选取所有 class="intro" 的 <p> 元素。
$("p#demo") 选取所有 id="demo" 的 <p> 元素。
*/

//2.属性选择器
/*
$("[href]") 选取所有带有 href 属性的元素。
$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。
*/

//3.CSS 选择器
/*
jQuery CSS 选择器可用于改变 HTML 元素的 CSS 属性。
*/
$(document).ready(applyClick2Element())

function applyClick2Element()
{
	$('p').click(function(){$(this).hide();})
	$("button").click(function(){$("p").css("background-color", "red")})
}


// 4.调用原有方法
// $('elemement').trigger('functionName')




//名称冲突
/*
jQuery 使用 $ 符号作为 jQuery 的简介方式。
某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。
jQuery 使用名为 noConflict() 的方法来解决该问题。
var jq=jQuery.noConflict()，帮助您使用自己的名称（比如 jq）来代替 $ 符号。
*/