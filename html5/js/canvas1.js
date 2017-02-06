var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')

'颜色、样式和阴影-------------------------------------------------------------------'
function test1()
{
	reset();
	ctx.fillText('填充色-fillStyle:', 10, 12);
	ctx.fillStyle = "#0000ff";
	ctx.fillRect(20, 20, 150, 100)

	reset();
	ctx.fillText('笔触色-strokeStyle:', 10, 140);
	ctx.strokeStyle = "#0000ff"
	ctx.strokeRect(20, 150, 150, 100)

	reset();
	ctx.fillText('阴影 -shadowColor -shadowBlur', 10, 270)
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black'
	ctx.fillStyle = 'blue'
	ctx.fillRect(20, 280, 150, 100)

	reset();
	ctx.fillText('阴影 -shadowOffsetX -shadowOffsetY', 10, 400)
	ctx.shadowBlur = 20;
	ctx.shadowColor = 'black'
	ctx.fillStyle = 'blue'
	ctx.shadowOffsetX = 20;
	ctx.shadowOffsetY = 20;
	ctx.fillRect(20, 410, 150, 100)

	reset()
	ctx.fillText('线性渐变', 10, 530)
	var grd = ctx.createLinearGradient(0, 0, 200, 0)
	grd.addColorStop(0, 'black');
	grd.addColorStop(0.5,"red");
	grd.addColorStop(1, 'white');
	ctx.fillStyle = grd;
	ctx.fillRect(20, 540, 150, 100)

	reset()
	ctx.fillText('重复元素', 10, 660)
	var img = document.getElementById('lamp')
	var pat = ctx.createPattern(img, 'repeat')//repeat-x repeat-y no-repeat
	ctx.rect(20, 670, 150, 100)
	ctx.fillStyle = pat;
	ctx.fill();

	reset()
	ctx.fillText('放射状/环形的渐变', 10, 790)
	var grd = ctx.createRadialGradient(75,50,5,170,60,100)
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"green");
	ctx.fillStyle = grd
	ctx.fillRect(20, 800, 150, 100)
}





'线条-------------------------------------------------------------------'
function test2()
{
	reset();
	ctx.fillText('设置或返回线条的结束端点样式:', 250, 12);
	ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.lineCap = "round"
	ctx.moveTo(260, 25)
	ctx.lineTo(410, 25)
	ctx.stroke();

	ctx.beginPath();
	ctx.lineCap = "butt"
	ctx.moveTo(260, 50)
	ctx.lineTo(410, 50)
	ctx.stroke();

	ctx.beginPath();
	ctx.lineCap = "square"
	ctx.moveTo(260, 75)
	ctx.lineTo(410, 75)
	ctx.stroke();

	reset();
	ctx.fillText('创建的拐角类型:', 250, 140);
	ctx.beginPath();
	ctx.lineWidth=10;
	ctx.lineJoin="round";
	ctx.moveTo(260,150);
	ctx.lineTo(410,200);
	ctx.lineTo(260,250);
	ctx.stroke();

	reset();
	ctx.fillText('设置或返回当前的线条宽度:', 250, 270);
	ctx.lineWidth=10;
	ctx.strokeRect(260,280,150,100)

	reset();
	ctx.fillText('设置或返回最大斜接长度:', 250, 400);
	ctx.lineWidth=10;
	ctx.lineJoin="miter";
	ctx.miterLimit=5;
	ctx.moveTo(260,410);
	ctx.lineTo(410,460);
	ctx.lineTo(260,510);
	ctx.stroke();	
}




'矩形-------------------------------------------------------------------'
function test3()
{
	reset();
	ctx.fillText('创建矩形:', 500, 12);
	ctx.lineWidth=1;
	ctx.rect(510,20,150,100);
	ctx.stroke();

	reset();
	ctx.fillText('填充矩形:', 500, 140);
	ctx.fillRect(510,150,150,100);

	reset();
	ctx.fillText('绘制矩形（无填充）:', 500, 270);
	ctx.strokeRect(510,280,150,100)

	reset();
	ctx.fillText('在给定的矩形内清除指定的像素:', 500, 400);
	ctx.fillStyle="red";
	ctx.fillRect(510,410,150,100);
	ctx.clearRect(520,430,50,30)
}




'路径-------------------------------------------------------------------'
function test4()
{
	reset();
	ctx.fillText('填充当前绘图:', 740, 12);
	ctx.rect(750,20,150,100);
	ctx.fillStyle="green";
	ctx.fill();

	reset();
	ctx.fillText('绘制已定义的路径:', 740, 140);
	ctx.beginPath();
	ctx.moveTo(750,150);
	ctx.lineTo(750,250);
	ctx.lineTo(900,250);
	ctx.strokeStyle="green";
	ctx.stroke();

	reset();
	ctx.fillText('绘制路径:', 740, 270);
	ctx.beginPath();
	ctx.moveTo(750,280);
	ctx.lineTo(750,380);
	ctx.lineTo(900,380);
	ctx.closePath();
	ctx.stroke();

	reset();
	ctx.fillText('剪切任意形状和尺寸的区域:', 740, 400);
	// 剪切矩形区域
	ctx.rect(750,410,150,100);
	ctx.stroke();
	// ctx.clip();
	// 在 clip() 之后绘制绿色矩形
	ctx.fillStyle="green";
	ctx.fillRect(750,410,100,50);

	reset();//需要将上面的clip注释掉
	ctx.fillText('创建二次贝塞尔曲线:', 740, 530);
	ctx.beginPath();
	ctx.moveTo(750,540);
	ctx.quadraticCurveTo(750,640,900,540);
	ctx.stroke();

	reset();
	ctx.fillText('创建三次贝塞尔曲线:', 740, 660);
	ctx.beginPath();
	ctx.moveTo(750,670);
	ctx.bezierCurveTo(750,770,900,770, 900, 670);
	ctx.stroke();

	reset();
	ctx.fillText('创建弧/曲线:', 740, 790);
	ctx.beginPath();
	ctx.arc(825,850,50,0,2*Math.PI);
	ctx.stroke();

	reset();
	ctx.fillText('创建两切线之间的弧/曲线:', 740, 920);
	ctx.beginPath();
	ctx.moveTo(750,930);           // 创建开始点
	ctx.lineTo(850,930);          // 创建水平线
	ctx.arcTo(900,930,900,980,50); // 创建弧
	ctx.lineTo(900,1030);         // 创建垂直线
	ctx.stroke();                // 进行绘制

	reset();
	ctx.fillText('指定的点位于当前路径中:', 740, 1050);
	ctx.rect(750,1060,150,100);
	if (ctx.isPointInPath(750,1100))
	{
		ctx.stroke();
	};
}





'转换-------------------------------------------------------------------'
function test5()
{
	reset();
	ctx.fillText('缩放:', 990, 12);
	ctx.strokeRect(1000,20,50,25);
	ctx.scale(2,2);//缩放将画布放大两倍
	ctx.strokeRect(1020,30,50,25);

	reset();
	ctx.scale(0.5,0.5);
	ctx.fillText('旋转:', 990, 140);
	ctx.rotate(1*Math.PI/180);//将画布旋转
	ctx.fillRect(1000,150,100,50);
}




'文本-------------------------------------------------------------------'
function test6()
{
	reset();
	ctx.fillText('填充文本:', 990, 12);
	ctx.font="20px Georgia";
	ctx.fillText("Hello World!",1000,50);

	ctx.font="30px Verdana";
	// 创建渐变
	var gradient=ctx.createLinearGradient(1000,20,1150,20);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");
	// 用渐变填色
	ctx.fillStyle=gradient;
	ctx.fillText("w3school.com",1000,90);

	reset();
	ctx.fillText('绘制文本:', 990, 140);
	ctx.font="20px Georgia";
	ctx.strokeText("Hello World!",1000,180);

	ctx.font="30px Verdana";
	// 创建渐变
	var gradient=ctx.createLinearGradient(1000,150,1150,0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");
	// 用渐变填色
	ctx.strokeStyle=gradient;
	ctx.strokeText("w3school.com",1000,220);

	reset();
	ctx.fillText('文本宽度:', 990, 270);
	ctx.font="30px Arial";
	var txt="Hello World"
	ctx.fillText("width:" + ctx.measureText(txt).width,1000,310);
	ctx.fillText(txt,1000,350);
}



'图像-------------------------------------------------------------------'
function test7()
{
	reset();
	ctx.fillText('绘制图像:', 1290, 12);
	var img=document.getElementById("flower");
	ctx.drawImage(img,1300,20);

	reset();
	ctx.fillText('图像数据:', 1290, 140);
	var imgData=ctx.createImageData(100,100);
	// alert("Width of imgData is: " + imgData.width);
	for (var i=0;i<imgData.data.length;i+=4)
	  {
	  imgData.data[i+0]=255;
	  imgData.data[i+1]=0;
	  imgData.data[i+2]=0;
	  imgData.data[i+3]=255;
	  }
	ctx.putImageData(imgData,1300,150);

	reset();
	ctx.fillText('透明值:', 1290, 270);
	ctx.fillStyle="red";
	ctx.fillRect(1300,280,75,50);
	// 调节透明度
	ctx.globalAlpha=0.2;
	ctx.fillStyle="blue";
	ctx.fillRect(1330,300,75,50);
	ctx.fillStyle="green";
	ctx.fillRect(1360,320,75,50);

	reset();
	ctx.fillText('设置或返回新图像如何绘制到已有的图像上:', 1290, 400);
	ctx.fillStyle="red";
	ctx.fillRect(1300,410,75,50);
	ctx.globalCompositeOperation="source-over";
	ctx.fillStyle="blue";
	ctx.fillRect(1330,440,75,50);

	ctx.fillStyle="red";
	ctx.fillRect(1450,410,75,50);
	ctx.globalCompositeOperation="destination-over";
	ctx.fillStyle="blue";
	ctx.fillRect(1480,440,75,50);
}



function reset()
{
	ctx.shadowColor = null
	ctx.shadowBlur = 0
	ctx.fillStyle = '#000000'
	ctx.strokeStyle = '#000000'
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.scale(1,1);
	ctx.font="14px Arial"
	ctx.globalAlpha=1;
}

test1();
test2();
test3();
test4();
// test5();
test6()
test7()