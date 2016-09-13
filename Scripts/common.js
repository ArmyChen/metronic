$(document).ready(function(){
	$(".nav-title").click(function(){
		var index = $(this).index();
		$(".nav-title").removeClass("active");
		$(".nav-title").eq(index).addClass("active");
		$(".nav-content").removeClass("active");
		$(".nav-content").eq(index).addClass("active");
	});
});