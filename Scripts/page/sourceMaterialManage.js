$(document).ready(function(){
	$(".ckbox, .select-all").uniform();
	
	$(".page-content").on("click",".select-all",function(){
		var checked = $(this).parent().hasClass("checked");
		var pic_total = $(".team-list-item").length;
		if(checked){
			//选中全部
			if(pic_total == 0){
				return;
			}else{
				var check_list = $(".team-list-item").find(".ckbox");
				check_list.each(function(){
					$(this).prop("checked",true).uniform();
				});
			}
		}else{
			//取消选中全部
			if(pic_total == 0){
				return;
			}else{
				var check_list = $(".team-list-item").find(".ckbox");
				check_list.each(function(){
					$(this).prop("checked",false).uniform();
				});
			}
		}
	});
	
	$(".page-content").on("click",".team-list-item .ckbox",function(){
		var ckbox_total = $(".team-list-item .ckbox").length;
		var checked_length = $(".team-list-item .ckbox:checked").length;
		if(ckbox_total == checked_length){
			$(".select-all").prop("checked",true).uniform();
		}else{
			$(".select-all").prop("checked",false).uniform();
		}
	});
	
});