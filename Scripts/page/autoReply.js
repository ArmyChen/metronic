$(document).ready(function(){
	$(".ckbox").uniform();
	$(".nav-title").click(function(){
		var index = $(this).index();
		$(".nav-title").removeClass("active");
		$(".nav-title").eq(index).addClass("active");
		$(".nav-content").removeClass("active");
		$(".nav-content").eq(index).addClass("active");
	});
	
	$(".msg-send-title > span").click(function(){
		var index = $(this).index();
//		$(".msg-send-title > span").removeClass("active");
//		$(".msg-send-title > span").eq(index).addClass("active");
//		$(".msg-send-content > div").removeClass("active");
//		$(".msg-send-content > div").eq(index).addClass("active");
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(this).parent().next().children().removeClass("active");
		$(this).parent().next().children().eq(index).addClass("active");
	});
	
	$(".rule-title").click(function(){
		$(this).toggleClass("open");
		if($(this).hasClass("open")){
			$(this).parent().addClass("open");
			$(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
		}else{
			$(this).parent().removeClass("open");
			$(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
		}
	});
	
	//添加规则按钮
	$(".add-rule-btn").click(function(){
		$(".add-rule-panel").toggleClass("active");
	});
	
});