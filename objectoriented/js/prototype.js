//***对象和函数***
/*
凡是通过 new Function() 创建的对象都是函数，其他的都是对象
*/

func1 = new Function('str', 'console.log(str)')
function func2(){};
obj = new func2();

console.log(typeof func1)
console.log(typeof func2)
console.log(typeof obj)



//***原型***
/*
在JavaScript 中，每当定义一个对象（函数）时候，对象中都会包含一些预定义的属性。
其中函数对象的一个属性就是原型对象 prototype。注：普通对象没有prototype,但有__proto__属性。
原型对象其实就是普通对象
*/
console.log(typeof func1.prototype)
console.log(typeof Function.prototype)// Function，这个特殊
//***原型实际上就是创建一个实例对象赋值给prototype***
/*
var temp = new func();
temp.prototype = temp;
*/


//***用于继承***
var person = function(name, age)
{
	this.name = name
	this.age = age || 0
	this.getAge = getAge//类似这样也可以，但是如果我只想这个方法做为这个类本身的方法时，就需要这么写
	console.log(this)
};

person.prototype.getName = function()
{
	return this.name;
};

function getAge()
{
	return this.age
}


var lisan = new person('李三', 20)
var lisi = new person('李四', 18)
console.log(lisan.getName() + ' ' + lisan.age)
console.log(lisi.getName() + ' ' + lisi.getAge())
console.log(lisi.__proto__ == person.prototype)

//总结，定义一个类时（函数对象），需要预定义一些属性和方法；就通过prototype；实例化的时候就是将这个实例对象赋值给prototype




//***原型链***
/*
JS在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做__proto__的内置属性，
用于指向创建它的函数的原型。以上面的例子为例：
*/