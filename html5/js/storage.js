// HTML5 提供了两种在客户端存储数据的新方法：
// localStorage - 没有时间限制的数据存储
// sessionStorage - 针对一个 session 的数据存储
// 之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。


// localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。
localStorage.lastname="Smith";
document.write(localStorage.lastname);

// sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。
sessionStorage.lastname="Smith";
document.write(sessionStorage.lastname);