//工厂方式
function Car(name, color)
{
	var ocar = new Object();
	ocar.name = name;
	ocar.color = color;
	return ocar;
}
var car1 = new Car('小车', '绿色')
var car2 = new Car('大车', '蓝色')
console.log(car1.color + ' ' + car2.color)


//构造函数方式
function Plane(name, color)
{
	this.name = name;
	this.color = color;
	this.showColor = function(){
		alert(this.color)
	}
}

var plane = new Plane('灰机', '白色')
plane.showColor()


//原型方式
function Ship(name, color)
{
	this.name = name
	this.color = color
}

Ship.prototype.showColor = function()
{
	alert(this.color)
}


//动态原型方式
function Person(name)
{
	this.name = name
	if ((typeof Person._initialized) == 'undefined')
	{
		//相当于在构造函数当中只进行一次赋值操作
		Person.prototype.showName = function()
		{
			alert(this.name)
		}
		Person._initialized = true;
	}
}

var zhangsan = new Person('张三')
zhangsan.showName();
var lisi = new Person('李四');
lisi.showName();