// web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。
// 您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

//所有主流浏览器均支持 web worker，除了 Internet Explorer。

var w;

function startWorker()
{
	if(typeof(Worker)!=="undefined")
	{
	  if(typeof(w)=="undefined")
	  {
	    w=new Worker("demo_workers.js");
	  }
	  w.onmessage = function (event) {
	    document.getElementById("result").innerHTML=event.data;
	  };
	}
	else
	{
		document.getElementById("result").innerHTML="Sorry, your browser
		 does not support Web Workers...";
	}
}

function stopWorker()
{
	w.terminate();
}


// 在这里，我们创建了计数脚本。该脚本存储于 "demo_workers.js" 文件中：
// var i=0;

// function timedCount()
// {
// i=i+1;
// postMessage(i);
// setTimeout("timedCount()",500);
// }

// timedCount();