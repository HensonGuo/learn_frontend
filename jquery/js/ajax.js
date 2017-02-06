// AJAX 是与服务器交换数据的艺术，它在不重载全部页面的情况下，实现了对部分网页的更新。
// AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
// 简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示

//1.load
$(document).ready(function(){
  $("#btn1").click(function(){
    $('#test').load('file/demo_test.txt');
  })
})

//2.load('url #id')
// 下面的例子把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素中：
$("#div1").load("demo_test.txt #p1");


//load('url', callback)
$("button").click(function(){
  $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success")
      alert("外部内容加载成功！");
    if(statusTxt=="error")
      alert("Error: "+xhr.status+": "+xhr.statusText);
  });
});




//HTTP 请求：GET vs. POST
// 两种在客户端和服务器端进行请求-响应的常用方法是：GET 和 POST。
// GET - 从指定的资源请求数据
// POST - 向指定的资源提交要处理的数据


$("#btn2").click(function(){
  $.get("http://www.w3school.com.cn/demo_test.asp", function(data,status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});


$(document).ready(function(){
  $("#btn3").click(function(){
    $.post("http://www.w3school.com.cn/example/jquery/demo_test_post.asp",
    {
      name:"Donald Duck",
      city:"Duckburg"
    },
    function(data,status){
      alert("数据：" + data + "\n状态：" + status);
    });
  });
});