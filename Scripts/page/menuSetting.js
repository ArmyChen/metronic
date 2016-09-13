$(document).ready(function(){
	$(".menu-left-panel").on("click",".main-menu .main-menu-item",function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(this).find(".sub-menu-panel").show();
		$(this).siblings().find(".sub-menu-item").removeClass("active");
		$(this).siblings().find(".sub-menu-panel").hide();
		$(this).find(".sub-menu1 > li").removeClass("active");
		var menu_name = $(this).children().eq(0).text();
		var menu_name_show = $(this).parents(".menu-self").find(".main-title-show");
		var menu_name_edit = $(this).parents(".menu-self").find(".main-title-edit");
		menu_name_show.text(menu_name);
		menu_name_edit.val(menu_name);
		$(".main-menu-set").addClass("active");
		$(".sub-menu-set").removeClass("active");
	});
	
	$(".menu-left-panel").on("click",".sub-menu1 .sub-menu-item",function(e){
		e.stopPropagation();
		$(this).siblings().removeClass("active");
		$(this).parents("li").removeClass("active");
		$(this).addClass("active");
		//子菜单名字添加到右侧编辑
		var menu_name = $(this).text();
		var menu_name_show = $(this).parents(".menu-self").find(".sub-title-show");
		var menu_name_edit = $(this).parents(".menu-self").find(".sub-title-edit");
		menu_name_show.text(menu_name);
		menu_name_edit.val(menu_name);
		
		$(".main-menu-set").removeClass("active");
		$(".sub-menu-set").addClass("active");
	});
	
	//添加主菜单
	$(".menu-left-panel").on("click",".add-main-menu",function(e){
		e.stopPropagation();
		var html ="";
		html += "<li class='main-menu-item active'>";
		html += "<div class='main-menu-title'>主菜单</div>";
		html += "<div class='sub-menu-panel' style='display:block;'>";
		html += "<ul class='sub-menu1'>";
		html += "<li class='add-sub-menu'>+</li>";
		html += "</ul>";
		html += "<div><span class='point-down'></span></div>";
		html += "</div>";
		html += "</li>";
		
		var ul = $(this).parent();
		var main_menu_length = $(this).siblings().length;
		$(this).siblings().removeClass("active");
		$(this).siblings().find(".sub-menu-item").removeClass("active");
		$(this).siblings().find(".sub-menu-panel").hide();
		if(main_menu_length == 0){
			ul.removeClass("one three").addClass("two");
			$(html).insertBefore($(this));
		}else if(main_menu_length == 1){
			ul.removeClass("one two").addClass("three");
			$(html).insertBefore($(this));
		}else if(main_menu_length == 2){
			ul.removeClass("one two").addClass("three");
			$(this).remove();
			ul.append(html);
		}
		//当前主菜单名字添加到右侧编辑栏
		var menu_name = $(html).text();
		var menu_name_show = $(this).parents(".menu-self").find(".main-title-show");
		var menu_name_edit = $(this).parents(".menu-self").find(".main-title-edit");
		menu_name_show.text(menu_name);
		menu_name_edit.val(menu_name);
		
		$(".main-menu-set").addClass("active");
		$(".sub-menu-set").removeClass("active");
	});
	
	//删除主菜单
	$(".menu-right-panel").on("click",".menu-del.main",function(){
		var html = "<li class='add-main-menu'>+</li>";
		var ul = $(".main-menu");
		var del_menu = $(".main-menu-item.active");
		var length = $(".main-menu-item").length;
		if(length == 3){
			//删除，插入添加主菜单按钮
			del_menu.remove();
			ul.append(html);
		}else{
			//直接删除
			del_menu.remove();
			if(length == 2){
				ul.removeClass("one three").addClass("two");
			}else if(length == 1){
				ul.removeClass("two three").addClass("one");
			}
		}
	});
	
	
	//添加子菜单
	$(".menu-left-panel").on("click",".add-sub-menu",function(e){
		e.stopPropagation();
		$(this).siblings().removeClass("active");
		$(this).parents("li").removeClass("active");
		var target = $(this).parent();
		var length = $(this).siblings().length;
		var html = "<li class='sub-menu-item active'>子菜单名称</li>";
		
		var menu_name = $(html).text();
		var menu_name_show = $(this).parents(".menu-self").find(".sub-title-show");
		var menu_name_edit = $(this).parents(".menu-self").find(".sub-title-edit");
		menu_name_show.text(menu_name);
		menu_name_edit.val(menu_name);
		if(length < 4){
			//直接添加
			$(html).insertBefore($(this));
		}else if(length == 4){
			//先删了再添加
			target.append(html);
			$(this).remove();
		}
		$(".main-menu-set").removeClass("active");
		$(".sub-menu-set").addClass("active");
	});
	
	//删除子菜单
	$(".menu-right-panel").on("click",".menu-del.sub",function(){
		var del_ele = $(".sub-menu-item.active");
		var sub_menu = $(".sub-menu-item.active").parent();
		var length = $(".sub-menu-item.active").siblings(".sub-menu-item").length;
		var html = "<li class='add-sub-menu'>+</li>";
		if(length == 4){
			//删除并插入添加子菜单按钮
			del_ele.remove();
			sub_menu.append(html);
		}else{
			del_ele.remove();
		}
	});
	
	$(".msg-send-title > span").click(function(){
		var index = $(this).index();
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(this).parent().next().children().removeClass("active");
		$(this).parent().next().children().eq(index).addClass("active");
	});
	
	//主菜单名字编辑
	$(".menu-right-panel").on("blur",".main-title-edit",function(){
		var menu_name = $(this).val();
		var menu_title = $(this).parents(".main-menu-set").find(".main-title-show");
		var menu_left = $(this).parents(".menu-self").find(".main-menu-item.active").children().eq(0);
		menu_title.text(menu_name);
		menu_left.text(menu_name);
	});
	
	//子菜单名字编辑
	$(".menu-right-panel").on("blur",".sub-title-edit",function(){
		var menu_name = $(this).val();
		var menu_title = $(this).parents(".sub-menu-set").find(".sub-title-show");
		var menu_left = $(this).parents(".menu-self").find(".sub-menu-item.active");
		menu_title.text(menu_name);
		menu_left.text(menu_name);
	});
	
	$(".menu-right-panel").on("change","input[name='how']:checked",function(){
		var val = $(this).val();
		if(val == 0){
			//消息模板
			$(".jump-panel").hide();
			$(".msg-send-panel").show();
		}else{
			//跳转网页
			$(".jump-panel").show();
			$(".msg-send-panel").hide();
		}
	});
	
});