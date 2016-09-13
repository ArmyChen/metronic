$(document).ready(function(){
	$('#summernote').summernote({
    	height:450,
//    	toolbar: [
//    	          ['style', ['bold', 'italic', 'underline', 'clear']],
//    	          ['font', ['strikethrough', 'superscript', 'subscript']],
//    	          ['fontsize', ['fontsize']],
//    	          ['color', ['color']],
//    	          ['para', ['ul', 'ol', 'paragraph']],
//    	          ['height', ['height']],
//    	          ['picture',['picture']],
//    	          ['table',['table']],
//    	          ['hr',['hr']],
//    	          ['fullscreen',['fullscreen']]
//    	        ]
    });
	
	//上传图片
	$(".upload-img-media").click(function(){
		$("#upload-img").modal();
	});
	$(".upload-img-btn").click(function(){
		$("#upload-img").modal("hide");
	});
	$("#upload-img").on("hidden.bs.modal",function(){
		var imgUrl = "http://192.168.0.27:8080/product/img/0.jpg";
		$('#summernote').summernote('insertImage', imgUrl, 'imgName');
	});
	
	//上传视频
	$(".upload-mv-media").click(function(){
		$("#video").modal();
	});
	$(".upload-mv-btn").click(function(){
		$("#video").modal('hide');
	});
	$("#video").on("hidden.bs.modal",function(){
//		var mvUrl = "http://192.168.0.27:8080/product/mv/mv.m4v";
		var node = document.createElement('div');
		$(node).append("<video controls='' src='http://192.168.0.27:8080/product/mv/mv.m4v' width='640' height='360' class='note-video-clip'></video>");
		$('#summernote').summernote('insertNode', node);
	});
	
	
	$(".upload-mv-btn").click(function(){
		$("#mv").modal();
	});
	
	$(".add-word-pic").click(function(){
		addWordPic();
	});
	
	$(".word-pic-panel").on("click",".del",function(){
		$(this).parents(".word-pic-item").remove();
	});
});

function addWordPic(){
	var index = $(".word-pic-panel > div").length + 1;
	var html = "";
	html += "<div class='word-pic-item' title='第"+index+"篇图文'>";
	html += "<div>";
	html += "<div class='default-word-pic'>图片位置</div>";
	html += "<div class='word-pic-title'>标题</div>";
	html += "</div>";
	html += "<div class='word-pic-master'>";
	html += "<i class='fa fa-trash del' title='删除'></i>";
	html += "</div>";
	html += "</div>";
	$(".word-pic-panel").append(html);
}

//上传图片

//function 
