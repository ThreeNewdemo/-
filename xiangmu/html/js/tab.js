$("#ul>ol").hide();
$("#ul").mouseover(function(){
	$(this).find('ol').stop().slideDown();
}).mouseout(function(){
	$(this).find('ol').stop().slideUp();
})



function ran(min,max){
				return parseInt(Math.random()*(max-min+1)+min)
			}
			function fun(){
				ipt.value=ran(1000,9999)//随机四位数的验证码
			}
$("#submit").click(function(){
	if($("#ipt").val() == $("#val").val()){
		alert("你想往哪儿提交")
	}else{
		alert("验证码错误")
	}
})
