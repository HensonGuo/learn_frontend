
// 注释：// or /*str*/


//变量
var x = 2;
var y = 2;
var z = x + y;
var d = 3.14
var e = 3, c = 'hello', b=null, a

document.write('z=' + z + '<br/>')
document.write('d=' + d + '<br/>')


//数据类型
var a;				//undefined
var b = 6;			//数字
var c = 'bill';		//字符串
var d = true;		//布尔
var e = [a, b]		//数组
var f = new Array();
f[0] = c
f[1] = d

var g = {'firstname': 'bill', 'lastname': 'gates'}	//对象

var h = null;		//null	清空变量
var i = undefined;	//undefined 表示变量不含有值

//声明变量类型
var str = new String;
var num = new Number;
var bool = new Boolean;
var cars = new Array;
var persons = new Object;


//对象
/*
在js中，对象是数据（变量），拥有属性和方法
*/
var txt = 'hello'
var len = txt.length	//创建了一个字符串对象，字符串对象拥有内建的属性length
/*
创建 JavaScript 对象
JavaScript 中的几乎所有事务都是对象：字符串、数字、数组、日期、函数，等等。
*/
var person = new Object();
person.name = 'kitty';
person.age = 10;
person.say = function say(){console.info('my name is' + person.name.toUpperCase())}
person.say()


//函数
function youknow(str)
{
	console.info(str);
	return true;
}
youknow('everything is possible');
//不定参数
function youkonw2()
{
	var n = arguments.length;
	console.info('不定参数长度' + n)
	console.info(arguments)
}
youkonw2(1, 2, 3, 4)


//运算符
var a = 1;
var b = 2;
var c = a + b;
var d = c - b;
var e = b * c;
var f = e / 2;
var h = b % e;
a ++;
b --;
c += 2, d -= 1;


//比较
if (person.age < 18) {console.info('Too young too simple')};
var ischild = person.age < 18 ? true : false;
console.info(ischild);


//条件语句
if (person.age < 18)
{
	ischild = true;
}
else
{
	ischild = false;
}
function printPerson(person)
{
	var age = person.age;
	tooyoung = age < 18;
	switch(tooyoung)
	{
		case tooyoung:
			console.info('is child');
			break;
		default:
			break;
	}
}
printPerson(person)


//循环语句
for(var i = 0; i < 10 ; i++)
{
	document.write(i)
}
document.write('<br/>')

for (var key in person)
{
	document.write(key + ':' + person[key] + '\t')
}

var a = 3;
do
{
	document.write('<br/>')
	document.write('start excute ' + a + ' times');
	a -= 1
}
while(a > 0)

var i = 2, len = 3;
for(; i < len; i++)
{
	//
}


//break and continue
for(var i = 0; i < 5; i++)
{
	if (i == 1)continue;
	if (i == 3)break;
	document.write('<br/>gogogo')
}


//错误
function verifyfunc(age)
{
	try
	{
		if (age < 18) throw 'too young too simple';
	}
	catch(err)
	{
		document.write('<br/>there is a error:' + err);
	}

	try
	{
		if (age < 12) 
		{
			error = new Object()
			error.msg = 'only a child'
			throw error;
		}
	}
	catch(error)
	{
		document.write('<br/>there is a error:' + error.msg);
	}
}
verifyfunc(person.age)


//验证
/*
用户是否已填写表单中的必填项目？
用户输入的邮件地址是否合法？
用户是否已输入合法的日期？
用户是否在数据域 (numeric field) 中输入了文本？
*/
function validate_required(field, alerttext)
{
	with(field)
	{
		if (value == null || value == '') 
		{
			alert(alerttext)
			return false
		}
		else {
			return true
		}
	}
}

function validate_form(form)
{
	with(form)
	{
		if(validate_required(email, 'email must be filled out!') == false)
		{
			email.focus();
			return false;
		}
	}
}