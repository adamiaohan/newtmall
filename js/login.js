// 登录页面的判断	
// 获取登录的用户名，密码 登录按钮
var user = document.querySelector('[type=text]');
var pwd = document.querySelector('[type=password]');
var btn = document.querySelector('button');
var p3 = document.querySelector('.p3');
console.log(user)
console.log(btn)
btn.onclick=function(){
	if(user.value==''|| pwd.value ==''){
		p3.style='display:block';
	}
}

//点击关闭按钮  input清空
var user = document.querySelector('[type=text]');
var close = document.querySelector('.use i');
close.onclick=function(){
	user.value=''
}



// 切换到二维码登录
var code = document.querySelector('.login .icon i');
var login = document.querySelector('.login');
var login2 = document.querySelector('.login2');
var code2 = document.querySelector('.login2 .icon i');
console.log(code)
code.onclick=function(){
	login.style='display:none';
	login2.style='display:block';
}
code2.onclick=function(){
	login.style='display:block';
	login2.style='display:none';
}

