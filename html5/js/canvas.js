function cnvs_getCoordinates(e)
{
	x=e.clientX;
	y=e.clientY;
	document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
}
 
function cnvs_clearCoordinates()
{
	document.getElementById("xycoordinates").innerHTML="";
}



//绘制线条
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.moveTo(10,10);
cxt.lineTo(150,50);
cxt.lineTo(10,50);
cxt.stroke();


//绘制圆
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";
cxt.beginPath();
cxt.arc(70,18,15,0,Math.PI*2,true);
cxt.closePath();
cxt.fill();


//渐变色
// var c=document.getElementById("myCanvas");
// var cxt=c.getContext("2d");
// var grd=cxt.createLinearGradient(0,0,175,50);
// grd.addColorStop(0,"#FF0000");
// grd.addColorStop(1,"#00FF00");
// cxt.fillStyle=grd;
// cxt.fillRect(0,50,175,50);


//位图绘制
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
var img=new Image()
img.src="./file/ct_html5_canvas_image.gif"
cxt.drawImage(img,0,0);