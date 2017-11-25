define(function(r,e,m){
e.he=function (){
	
		var bPrev = document.querySelector("#prev");
		var bNext = document.querySelector("#next");
		var aCircle = document.querySelectorAll(".ol_ma li");
		var aPicture = document.querySelectorAll(".ul_ma li");
		var oUl = document.querySelector(".ul_ma");
		var oDiv = document.querySelector("#box")
		
		var timer = null;

		var iNum = 0;
		

		function tab(){
			for(var i = 0; i < aPicture.length; i++) {
//				所有的li全部淡出去   圆点类名为空
					move(aPicture[i], {opacity: 0}, 800)
					aCircle[i].className = "";
				}
				//当前的li全部淡入进来   圆点类名为进来
				move(aPicture[iNum], {opacity: 1}, 800)			
				aCircle[iNum].className = "active_ma";
		}
		
		//小圆点点击
		for(var i = 0; i <aCircle.length; i++) {
			aCircle[i].index = i;
			aCircle[i].onclick = function() {

				iNum = this.index;
				tab();
			};

		};

		
		//右点击
		bNext.onclick = appnd
		function appnd(){
			iNum++
			if(iNum>2){
				iNum=0
			}
			tab()
		}
		//自动
		timer = setInterval(appnd,2000);
		
		
			//左点击
		bPrev.onclick = function(){
			iNum--
			if(iNum<0){
				iNum=2
			}
			tab()
		}
	
//		停止定时器
		oDiv.onmouseover = function() {
	
			clearInterval(timer)
		}
		oDiv.onmouseout = function() {
			timer = setInterval(appnd, 1000);
		}


	}
})


/*define(function (require, exports, module) {
   var modA = require('a');//在一个模块内引入其他模块;
   var modB = require('b');
   exports.sum = function () {//exports: 导出一个模块;
      return modA.a + modB.b;
   }
});

* 
* var aa=require("a")//require与参数r无关//注释在同一行会报错，另起一行则不会
* hz或者
* */

/*注释在一行内则不会报错*/