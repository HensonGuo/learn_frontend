//id和name的区别
/*
1.id和name都可以做为一个标记，js分别有两个方法定位dom节点 getElementById 和 getElementByName
2.在表单中，name属性可以取到表单域的值（value），而ID无法
3.在同一个dom中id是唯一的，全局的；name是局部的，不同的form当中可以具有相同name的表单元素
4.可以通过id建立css样式，name无法
5.网页编辑建议使用id标志一个节点；而非name（除非post需要）
*/


//HTML DOM(文档对象类型)
/*
当网页被加载时，浏览器会创建页面的文档对象类型（Document Object Model）
Html Dom模型被构造为对象的树 sample:根元素<html> - 子元素<body><head><p>
*/


//getElementById	查找html元素
var x = document.getElementById('intro')
x.innerHTML = 'welcome!!!'


//getElementsByTagName	通过标签名查找HTML元素
var x = document.getElementById('desc')
var y = x.getElementsByTagName('p')
var len = y.length;
for(var i = 0; i < len; i++)
{
	y[i].innerHTML = 'change html: ' + i + Date()
}


//改变样式
x.style.color = "red";
x.style.fontFamily = "Arial";
x.style.fontSize = 20;


//事件
/*
鼠标事件（hover press）
按键事件
加载完成事件（onload 网页、图像）
改变事件（onchange)
提交事件（表单提交）

/*
分配事件到dom节点
*/
x.onclick = function updateDate()
{
	x.innerHTML = Date()
}
/*
onload
*/
function onloadFinished()
{
	console.info('finished')
}
/*
onchange
*/
document.getElementById('fname').onchange = function onChanged()
{
	console.info('changed')
}
/*
mouse
*/
function onover(obj)
{
	obj.innerHTML = 'over'
}
function onout(obj)
{
	obj.innerHTML = 'out'
}
function ondown(obj)
{
	obj.style.backgroundColor="#1ec252"
	obj.innerHTML="请释放鼠标"
}
function onup(obj)
{
	obj.style.backgroundColor="green"
	obj.innerHTML="请按下鼠标"
}
/*
onfocus
*/
function onfocuse(obj)
{
	obj.style.background = "yellow"	
}


//节点
/*
创建新的 HTML 元素
*/
var para = document.createElement('p')
var node = document.createTextNode("这是新段落")
para.appendChild(node)
document.getElementById('intro').appendChild(para)
/*
删除 HTML 元素
*/
var parent = document.getElementById('div1')
var child = document.getElementById('p1')
parent.removeChild(child)
