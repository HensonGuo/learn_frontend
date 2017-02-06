//闭包
// 闭包是一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分
// JavaScript中所有的function都是一个闭包。不过一般来说，嵌套的function所产生的闭包更为强大


function a()
{
	var i = 0;
	function b(){
		alert(++i);
	}
	return b;
}
var c = a();
c();
c();

//作用
//闭包的作用就是在a执行完并返回后，闭包使得Javascript的垃圾回收机制GC不会收回a所占用的资源，因为a的内部函数b的执行需要依赖a中的变量