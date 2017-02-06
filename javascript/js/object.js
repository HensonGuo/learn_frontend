//创建直接的实例
Kate = new Object()
Kate.name = 'Kate'
Kate.age = 20;
document.write(Kate.name + '<br/>')


//使用对象构造器--------------------------对象的创建一定要记得是new
function person(name, age)
{
	this.name = name;
	this.age = age;
}
Bill = new person('Bill', 50)
document.write(Bill.name + '<br/>')

//把方法添加到 JavaScript 对象
function setlastname(str)
{
	this.lastname = str
}
Bill.setlastname = setlastname;
Bill.setlastname('Gates')
document.write (Bill.lastname + '<br/>')

//JavaScript for...in 循环
for (var attrib in Bill)
{
	document.write(attrib + ':' + Bill[attrib] + '<br/>')
}


//数字
/*
所有 JavaScript 数字均为 64 位
整数（不使用小数点或指数计数法）最多为 15 位。
小数的最大位数是 17，但是浮点运算并不总是 100% 准确：
*/
var a = 0.01 + 0.1


//字符串
var txt = 'hello world!'
len = txt.length;
uppertxt = txt.toUpperCase();
index = txt.indexOf('hello')
matched = txt.match('world')
newtext = txt.replace(/world/, 'son')
console.info(newtext)


//日期
/*
Date()
*/
date = new Date()
console.info(date)
/*
getTime()
*/
console.info("从 1970/01/01 至今已过去 " + date.getTime() + " 毫秒")
/*
setFullYear()
*/
date.setFullYear(1992, 10, 3)
console.info(date)
/*
toUTCString()
*/
console.info(date.toUTCString())
/*
getDay()
*/
console.info(date.getDay())
/*
显示一个钟表
*/
function starttime()
{
	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()
	var s = today.getSeconds()
	m=checkTime(m)
	s=checkTime(s)

	var timeDiv = document.createElement('div')
	document.getElementsByTagName('body')[0].appendChild(timeDiv)
	timeDiv.innerHTML = h+":"+m+":"+s

	t = setTimeout('starttime()', 10000)
}
function checkTime(i)
{
	if (i<10){i="0" + i}
  	return i
}
starttime()


//数组
var cars = ['e', 'd']
cars[2] = 'c'
var newcars = ['a', 'b']
mycars = cars.concat(newcars)
mycars.sort()
for (var car in mycars)
{
	console.info(mycars[car])
}


//算数
console.info(Math.round(4.7))
console.info(Math.random())
console.info(Math.floor(4.7))


//正则表达式
reg = RegExp('e', 'g')
/*
test() 方法检索字符串中的指定值。返回值是 true 或 false。
*/
console.info(reg.test('the best things'))
/*
exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
*/
console.info(reg.exec('the best things'))
/*
compile() 方法用于改变 RegExp。
compile() 既可以改变检索模式，也可以添加或删除第二个参数。
*/
reg = RegExp('e')
console.info(reg.exec('the best things'))
reg.compile('b')
console.info(reg.exec('the best things'))