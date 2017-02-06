//作用域及命名空间

//公有属性和方法
function User1(name, age)
{
	this.name = name;
	this.age = age;
}

User1.prototype.getAge = function() {
	return age
};


//私有属性和方法
function User2(name, age)
{
	var name = name;
	var age = age;
	var getAge = function()
	{
		return age;
	};
	this.callPrivateFunc = function()
	{
		console.info(getAge())
	};
}
var user2 = new User2('user2', 10)
user2.callPrivateFunc()


//静态属性和方法
User2.TypeGo = 'TypeGo'
User2.gogogo = function(){};


//特权方法
function User3(name, age)
{
	var name = name;
	var age = age;
	this.getName = function()//特权方法
	{
		return name;
	}
}


//静态类
var User4 = {
	init:function(name, age)
	{
		this.name = name;
		this.age = age;
	},
	getName:function()
	{
		return this.name;
	}
}


//立即执行函数，将私有的或者公开的包裹
(function (){

	var Class = function()
	{

	};

	window.Class = Class;
})();