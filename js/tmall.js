
var imgs= document.querySelectorAll('.banner');
var ban= document.querySelector('.ban');
var liall=document.querySelectorAll('.banli')
var index = 0;
var timer;
//创建函数让其它图片都隐藏，留一个显示
function hideimg(a){
	for(var i = 0;i<imgs.length;i++){
		imgs[i].style.display="none";
		liall[i].style.background='black';
	}
	imgs[a].style.display="block";
	liall[a].style.background='white';
}
time()
function time(){
	timer=setInterval(function(){
		index++;
		if(index>3){
			index = 0;
		}
		hideimg(index)
	},1000)
}

ban.onmouseover=function(){
	clearInterval(timer)
}
ban.onmouseout=function(){
	time()
}

//鼠标放上li标签，停止轮播
for(var j = 0;j<liall.length;j++){
	liall[j].index=j;
	liall[j].onmouseover=function(){
		hideimg(this.index)
	}
}



var two = document.querySelector('.two');
var sside = document.querySelector('.sside');
var ssdown= document.querySelector('.ssdown');
window.onload=function(){
	t = two.offsetTop;
	console.log(t)
}
var body = document.querySelector('body')
body.onscroll=function(){
	 var scr = document.body.scrollTop || document.documentElement.scrollTop;
	 if(scr>t){
	 	sside.style='display:block';
	 	ssdown.style='display:block';
	 }else{
	 	sside.style='display:none';
	 	ssdown.style='display:none';
	 }
}
// console.log(1)
// window.onscroll = function(){
// 	console.log(1)
// 	var scr = document.body.scrollTop || document.documentElement.scrollTop;
	
// 	console.log(scr);
// 	if(scr>t){
// 		sside.style='display:block';
// 	}else{
// 		sside.style='display:none';
// 	}
// }
// document.getElementById("myDIV").addEventListener("scroll", myFunction);
// function myFunction() {
//     document.getElementById("demo").innerHTML = "你滚动了 div。";
// }
// window.onscroll = function(){
// 	console.log(1)
// }



// 点击登录进入登录页
var logins = document.querySelector('.logins')
var login22;
logins.onclick=function(){
	login22=window.open('../cat/login.html')
}

var regist = document.querySelector('.regist')
var regist2;
regist.onclick=function(){
	regist2=window.open('../cat/register.html')
}