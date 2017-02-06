//jQuery 遍历，意为“移动”，用于根据其相对于其他元素的关系来“查找”（或选取）HTML 元素。以某项选择开始，并沿着这个选择移动，直到抵达您期望的元素为止。



// 向上遍历 DOM 树
// parent()
// parents()
// parentsUntil()
$(document).ready(function(){
  $("span").parents().css({"color":"red","border":"2px solid red"});
});
$(document).ready(function(){
  $("span").parent().css({"color":"blue","border":"2px solid blue"});
});
//过滤
$(document).ready(function(){
  $("span").parents("ul").css({"color":"green","border":"2px solid green"});
});



// 向下遍历 DOM 树
// children()
// find()
$(document).ready(function(){
  $("div").children().css({"color":"red","border":"2px solid red"});
});
//"1" 的所有 <p> 元素
$(document).ready(function(){
  $("div").children("p.1").css({"color":"red","border":"2px solid red"});
});
$(document).ready(function(){
  $("div").find("span").css({"color":"red","border":"2px solid red"});
});
$(document).ready(function(){
  $("div").find("*").css({"color":"red","border":"2px solid red"});
});



// 在 DOM 树中水平遍历
// siblings()
// next()
// nextAll()
// nextUntil()
// prev()
// prevAll()
// prevUntil()
$(document).ready(function(){
  $("h2").siblings();
});
// 下面的例子返回属于 <h2> 的同胞元素的所有 <p> 元素
$(document).ready(function(){
  $("h2").siblings("p");
});
$(document).ready(function(){
  $("h2").next();
});
$(document).ready(function(){
  $("h2").nextAll();
});
// 下面的例子返回介于 <h2> 与 <h6> 元素之间的所有同胞元素：
$(document).ready(function(){
  $("h2").nextUntil("h6");
});



//过滤
// 三个最基本的过滤方法是：first(), last() 和 eq()，它们允许您基于其在一组元素中的位置来选择一个特定的元素。
// 其他过滤方法，比如 filter() 和 not() 允许您选取匹配或不匹配某项指定标准的元素。

// 下面的例子选取首个 <div> 元素内部的第一个 <p> 元素：
$(document).ready(function(){
  $("div p").first();
});
$(document).ready(function(){
  $("div p").last();
});
$(document).ready(function(){
  $("p").eq(1);
});
$(document).ready(function(){
  $("p").filter(".intro");
});
$(document).ready(function(){
  $("p").not(".intro");
});