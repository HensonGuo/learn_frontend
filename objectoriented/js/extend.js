//没有明确的继承机制，而是通过模仿实现的
function Parent(name)
{
	console.info('调用父类构造方法')
	this.name = name
	this.sayName = function()
	{
		console.info(this.name)
	}
}


//1.使用对象冒充实现继承----让父类的构造函数成为子类的方法
function Child1(name)
{
	this.parent = Parent;
	this.parent(name);
	delete this.parent;
	this.saySomething = function()
	{
		this.sayName()
	}
}

var xiaoming = new Child1('小明')
xiaoming.saySomething();


//2.采用call方法改变函数上下文实现继承--(该种方式不能继承原型链,若想继承原型链，则采用5混合模式)
//实现原理:改变函数内部的函数上下文this,使它指向传入函数的具体对象
//Parent.call(child, param)

function Child2(name)
{
	this.saySomething = function()
	{
		this.sayName();
	};
	this.name = name
}

var xiaohong = new Child2('小红')
Parent.call(xiaohong, xiaohong.name);
xiaohong.saySomething();


// 3.采用Apply方法改变函数上下文实现继承(该种方式不能继承原型链,若想继承原型链，则采用5混合模式)
// 实现原理:改变函数内部的函数上下文this,使它指向传入函数的具体对象
// Parent.apply(child, [param, ...])
var xiaohua = new Child2('小华')
Parent.apply(xiaohua, ['小华'])
xiaohua.saySomething();


//4.采用原型链的方式实现继承
// 实现原理:使子类原型对象指向父类的实例以实现继承,即重写类的原型,弊端是不能直接实现多继承
Child2.prototype = new Parent();
var xiaoli = new Child2('小李');
xiaoli.saySomething();


//5.采用混合模式实现继承
Parent.prototype.sayParent = function()
{
	console.info('this is parentmethod')
};
Child2.prototype = new Parent();
var xiaozhang = new Child2('小张');
xiaozhang.saySomething();
xiaozhang.sayParent();


//createjs
// namespace:
this.createjs = this.createjs||{};
createjs.extend = function(subclass, superclass) {
	"use strict";

	function o() { this.constructor = subclass; }
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o());
};

function Child3(name)
{
	this.saySomething = function()
	{
		this.sayName();
	};
	this.name = name
}

c = createjs.extend(Child3, Parent)
console.info(c)
var zhangquandan = new Child3('张全蛋')
console.info(zhangquandan)
zhangquandan.saySomething();