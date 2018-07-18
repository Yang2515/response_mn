$(function(){
//	require("!style-loader!css-loader!../css/index.css");
//	require("!style-loader!css-loader!../css/bootstrap.css");

	//轮播1
	
	function sli1_prev(){
		let fir=$(".slider-ul>.slide1-box:first-child");
			fir.css("margin-left","-210px");
			setTimeout(function(){
				fir.appendTo($(".slider-ul")).css("margin-left","0");
			},1000)
	}
	
	function sli1_next(){
		let las=$(".slider-ul>.slide1-box:last-child");
			las.insertBefore($("slide1-box:first-child")).css("margin-left","-210px");
			las.animate({
				"margin-left":"0px"
			},1)
	}
	
	function sli_atart(){
		timer2=setInterval(sli1_prev,3000)
	}
	
	$("#sli1-prev").click(function(){
		clearInterval(timer2)
		default_btn($(this));
		sli1_prev();
		setTimeout(sli_atart,3000)
	})
	
	$("#sli1-next").click(function(){
		clearInterval(timer2)
		default_btn($(this));
		sli1_next();
		setTimeout(sli_atart,3000)
	})
	
	sli_atart();
	
	
	//轮播2
	function slider2_prev(){
		let fir=$(".slider2-ul>li:first-child");
			fir.css("margin-left","-220px");
			setTimeout(function(){
				fir.appendTo($(".slider2-ul")).css("margin-left","0");
			},1000)
	}
	
	function slider2_next(){
		let las=$(".slider2-ul>li:last-child");
			las.insertBefore($(".slider2-ul>li:first-child")).css("margin-left","-220px");
			las.animate({
				"margin-left":"0px"
			},1)
	}
	
	$("#sli2-prev").click(function(){
		clearInterval(timer1)
		default_btn($(this));
		slider2_prev()
		setTimeout(startPlay,3000)
	})
	$("#sli2-next").click(function(){
		clearInterval(timer1);
		default_btn($(this));
		slider2_next();
		setTimeout(startPlay,3000)
	})
	function startPlay(){
		timer1=setInterval(slider2_prev,3000);
	}
	function default_btn(btn){
		//阻止用户多次点击按钮
		btn.attr("disabled","disabled");
		setTimeout(function(){
			btn.removeAttr("disabled")
		},2000)
	}
	startPlay();
})
