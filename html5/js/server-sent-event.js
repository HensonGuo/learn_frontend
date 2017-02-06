// Server-Sent 事件指的是网页自动获取来自服务器的更新。
// 以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。

// 所有主流浏览器均支持服务器发送事件，除了 Internet Explorer。


if(typeof(EventSource)!=="undefined")
{
	var source=new EventSource("/example/html5/demo_sse.php");
	source.onmessage=function(event)
	{
		document.getElementById("result").innerHTML+=event.data + "<br />";
	};
}
else
{
	document.getElementById("result").innerHTML="Sorry, your browser does not support server-sent events...";
}


// PHP 代码 (demo_sse.php)：
// <?php
// header('Content-Type: text/event-stream');
// header('Cache-Control: no-cache');

// $time = date('r');
// echo "data: The server time is: {$time}\n\n";
// flush();
// ?>