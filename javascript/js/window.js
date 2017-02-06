//window对象
/*
浏览器对象模型 (BOM) Browser Object Model
所有浏览器都支持 window 对象。它表示浏览器窗口。
*/
var w = window.innerWidth;
var h = window.innerHeight;
var w1 = document.documentElement.clientWidth;
var h1 = document.documentElement.clientHeight;
var w2 = document.body.clientWidth;
var h2 = document.body.clientHeight;

x = document.getElementById('demo')
x.innerHTML = "浏览器的内部窗口宽度：" + w + "，高度：" + h + "。"
x.innerHTML = "浏览器的内部窗口宽度：" + w1 + "，高度：" + h1 + "。"
x.innerHTML = "浏览器的内部窗口宽度：" + w2 + "，高度：" + h2 + "。"

// window.open('http://www.baidu.com')
// window.close()
window.resizeTo(100, 50)



//screen
/*
screen.availWidth - 可用的屏幕宽度
screen.availHeight - 可用的屏幕高度
*/
document.write("可用宽度：" + screen.availWidth)


//Location
// window.location.assign('http://www.w3school.com.cn')
document.write("<br/>域名：" + location.hostname)
document.write("<br/>路径：" + location.pathname )
document.write("<br/>链接：" + location.href )
document.write("<br/>端口：" + location.port )
document.write("<br/>协议：" + location.protocol  )


//History
function goBack()
{
	window.history.back();
}
function goForward()
{
	window.history.forward()
}


//Navigator
txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
txt+= "<p>Browser Name: " + navigator.appName + "</p>";
txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
txt+= "<p>Platform: " + navigator.platform + "</p>";
txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";
txt+= "<p>User-agent language: " + navigator.systemLanguage + "</p>";

document.getElementById("example").innerHTML=txt;



//popupalert
/*
可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。
*/
// alert('文本')
// confirm('文本')
// prompt('文本')



//Timing
/*
setTimeout()
clearTimeout()
*/
i = 0
function timedCount()
{
	i += 1;
	console.info(i)
	t = setTimeout('timedCount()', 1000)
}
function stopCount()
{
clearTimeout(t);
}
timedCount()



//Cookies
/*
cookie 是存储于访问者的计算机中的变量。每当同一台计算机通过浏览器请求某个页面时，就会发送这个 cookie。你可以使用 JavaScript 来创建和取回 cookie 的值。
*/
function getCookie(c_name)
{
	if (document.cookie.length>0)
	{ 
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length+1 
			c_end=document.cookie.indexOf(";",c_start)
			if (c_end==-1) c_end=document.cookie.length
			return unescape(document.cookie.substring(c_start,c_end))
		} 
	}
	return ""
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

function checkCookie()
{
	username=getCookie('username')
	if (username!=null && username!="")
  	{alert('Welcome again '+username+'!')}
	else 
  	{
  		username=prompt('Please enter your name:',"")
  		if (username!=null && username!="")
    	{
    		setCookie('username',username,365)
    	}
  	}
}
checkCookie()