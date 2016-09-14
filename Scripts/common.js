$(document).ready(function(){
	$(".nav-title").click(function(){
		var index = $(this).index();
		$(".nav-title").removeClass("active");
		$(".nav-title").eq(index).addClass("active");
		$(".nav-content").removeClass("active");
		$(".nav-content").eq(index).addClass("active");
	});

	$(".shaixuan-tj span.crumb-select-item").bind('hover',function(event){
		if(event.type=='mouseenter'){
			$(this).addClass("crumb-select-itemon");
		}else{
			$(this).removeClass("crumb-select-itemon");
		}
	});
	$(".shaixuan-tj span.crumb-select-item").bind('click', function(event){
		event.preventDefault();
		$(this).remove();
		var TTR = $(this).find("em").text();
		$(".show-con a").each(function(){
			var TT = $(this).text();
			THI = $(this);
			THIPP = $(this).parents("dl");
			if(TTR==TT){
				THI.removeClass("nzw12");
				THIPP.css("display","block");
			}
		})
	});
	$(".show-con a").click(function(event){
		event.preventDefault();
		THIP = $(this).parents("dl");
		if($(this).hasClass("nzw12")){
		}else{
			$(this).addClass("nzw12");
			var zhiclass = $(this).parents("dd").siblings("dt").find("a").text();
			zhicon = $(this).text();
			tianjaneir="<span class='crumb-select-item'><a href='/'><b>"+zhiclass+"</b><em>"+zhicon+"</em><i class='icon-remove'></i></a></span>"
			$(".shaixuan-tj").children().last().after(tianjaneir);
			THIP.css("display","none");
		}
	});
	$(".show-more").click(function(event){
		event.preventDefault();
		var ticon = $(this).find("i");
		tspan = $(this).find("span");
		if($(this).hasClass("zk")){
			$(this).siblings(".show-con").css("height","30px");
			ticon.removeClass("icon-angle-up");
			ticon.addClass("icon-angle-down");
			tspan.html("更多");
			$(this).removeClass("zk")
		}else{
			$(this).siblings(".show-con").css("height","auto");
			ticon.removeClass("icon-angle-down");
			ticon.addClass("icon-angle-up");
			tspan.html("收起");
			$(this).addClass("zk")
		}
	});
	$("#sxbtn").click(function(event){
		event.preventDefault();
		var xicon = $(this).find("span i");
		xspan = $(this).find("span em");
		if($(this).hasClass("zkon")){
			xspan.text("收起筛选");
			xicon.removeClass("icon-angle-down");
			xicon.addClass("icon-angle-up");
			$(".sxcon").slideDown();
			$(this).removeClass("zkon")
		}else{
			xspan.text("查看筛选");
			xicon.removeClass("icon-angle-up");
			xicon.addClass("icon-angle-down");
			$(".sxcon").slideUp();
			$(this).addClass("zkon")
		}
	})

	$("#th-large").bind("click",function (e) {
		$("#th-large-container").show();
		$("#list-container").hide();
	});

	$("#list").bind	("click",function (e) {
		$("#th-large-container").hide();
		$("#list-container").show();
	});

	/**usermanage begin**/
	$("#btn-checkall").click(function(){
		if($(this).prop("checked")==true){
			$("input[name='userid']").prop("checked",true);//全选
		}else{
			$("input[name='userid']").removeAttr("checked");
		}
	});
	$("#tree_1").jstree({
		plugins: ["wholerow", "checkbox", "types"],
		core: {
			themes: {
				responsive: !1
			},
			data: ['全部',{
				text: "四川",
				children: [{
					text: "绵阳"
				},
					{
						text: "德阳",
						icon: "fa fa-warning icon-state-danger"
					},
					{
						text: "成都",
						icon: "fa fa-folder icon-state-default",
						children: [{
							text: "武侯区",
							state: {
								selected: !0
							}
						},{
							text: "金牛区"
						}]
					},
					{
						text: "金堂",
						icon: "fa fa-warning icon-state-warning"
					},
					{
						text: "自贡",
						icon: "fa fa-check icon-state-success",
						state: {
							disabled: !0
						}
					}]
			},{
				text: "重庆",
				children: [{
					text: "渝中区"
				},
					{
						text: "万州区",
						icon: "fa fa-warning icon-state-danger"
					},
					{
						text: "九龙坡",
						icon: "fa fa-warning icon-state-warning"
					}]
			}]
		},
		types: {
			"default": {
				icon: "fa fa-folder icon-state-warning icon-lg"
			},
			file: {
				icon: "fa fa-file icon-state-warning icon-lg"
			}
		}
	})
	$("#tree_2").jstree({
		plugins: ["wholerow", "checkbox", "types"],
		core: {
			themes: {
				responsive: !1
			},
			data: ['全部',{
				text: "四川",
				children: [{
					text: "绵阳"
				},
					{
						text: "德阳",
						icon: "fa fa-warning icon-state-danger"
					},
					{
						text: "成都",
						icon: "fa fa-folder icon-state-default",
						children: [{
							text: "武侯区",
							state: {
								selected: !0
							}
						},{
							text: "金牛区"
						}]
					},
					{
						text: "金堂",
						icon: "fa fa-warning icon-state-warning"
					},
					{
						text: "自贡",
						icon: "fa fa-check icon-state-success",
						state: {
							disabled: !0
						}
					}]
			},{
				text: "重庆",
				children: [{
					text: "渝中区"
				},
					{
						text: "万州区",
						icon: "fa fa-warning icon-state-danger"
					},
					{
						text: "九龙坡",
						icon: "fa fa-warning icon-state-warning"
					}]
			}]
		},
		types: {
			"default": {
				icon: "fa fa-folder icon-state-warning icon-lg"
			},
			file: {
				icon: "fa fa-file icon-state-warning icon-lg"
			}
		}
	});
	$("#tree_3").jstree({
		plugins: ["wholerow", "checkbox", "types"],
		core: {
			themes: {
				responsive: !1
			},
			data: [{
				text: "促销类",
				children: [{
					text: "促销"
				}]
			},{
				text: "行为类",
				children: [{
					text: "行为"
				},
					{
						text: "招新",
						icon: "fa fa-warning icon-state-danger"
					},
					{
						text: "分享",
						icon: "fa fa-warning icon-state-warning"
					}]
			}]
		},
		types: {
			"default": {
				icon: "fa fa-folder icon-state-warning icon-lg"
			},
			file: {
				icon: "fa fa-file icon-state-warning icon-lg"
			}
		}
	});
});
