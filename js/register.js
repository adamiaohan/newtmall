// 注册页面的正则
var inp = document.querySelector('input');
var spa1= document.querySelector('.spa1');
var spa2= document.querySelector('.spa2');
var spa3= document.querySelector('.spa3');
inp.onblur=function(){
	var pat1 = /^\d{11}$/;
	if(pat1.test(inp.value)){
		spa3.style='display:block';
		spa1.style='display:none';
		spa2.style='display:none';
	}else{
		spa2.style='display:block';
		spa1.style='display:none';
		spa3.style='display:none';
	}
	if(inp.value==''){
		spa1.style='display:block';
		spa3.style='display:none';
		spa2.style='display:none';
	}
}