window.onload=function(){
var ban=document.getElementsByClassName("banner_m")[0]
	var im=document.getElementsByClassName("img_o");
	console.log(im)
	var quan=document.getElementsByClassName("quanquan1");
	console.log(quan)
	// console.log(quan.length)
	var an2=document.getElementsByClassName("banner_l")[0];
	var an1=document.getElementsByClassName("banner_2")[0];
	quan[0].className="quanquan1 hot";
	var num=0;
	var t=setInterval(move,2000);//自动轮播
	ban.onmouseover=function(){
		clearInterval(t);//当把鼠标移到窗口上时，停止轮播
	}
	ban.onmouseout=function(){//当我们离开的时候恢复轮播
		clearInterval(t);
		t=setInterval(move,2000)
	}
	an1.onclick=function(){
		move();
	}
	an2.onclick=function(){
		num--;
		if(num<0){
			num=im.length-1
		}
			for(var i=0;i<im.length;i++){
			animate(im[i],{opacity:0},500)
			quan[i].className="quanquan1 ";
		}
		animate(im[num],{opacity:1},500)
		quan[num].className="quanquan1 hot"
		}
for(var i=0;i<im.length;i++){//按钮
	quan[i].index=i//
	quan[i].onclick=function(){
		num=this.index;//当前页赋值给num
	for(var i=0;i<im.length;i++){
			animate(im[i],{opacity:0},500)
			quan[i].className="quanquan1"
		}
		animate(im[num],{opacity:1},500)
			quan[this.index].className="quanquan1 hot"
	}
}
	function move(){
		num++;//改变图片的下标
		if(num==im.length){
			num=0;//从第一张显示
		}
		for(var i=0;i<im.length;i++){//
			animate(im[i],{opacity:0},500)//把所有图片的层级都降低
			// quan[i].style.background="#fff";
			quan[i].className="quanquan1 ";//把圈圈的属性调为默认的
			//console.log(quan[i]);
			}
			animate(im[num],{opacity:1},500)//把这个图片层级提高
			quan[num].className="quanquan1 hot";//把当前的这个圈圈的样式调为hot的
			// quan[num].style.background="red";
		//动画的核心原理是setInterval

}
}