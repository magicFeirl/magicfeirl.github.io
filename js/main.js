$(document).ready(function(){
	$("body").hide();
	$("body").fadeIn(1500);
	
	
	$("div.content").append("<span class=\"hide\">点我隐藏此条内容</span>");
	
	$("div.content>span").click(function(){
		$(this).parent("div").hide("fast")
		$(this).parents("li").append("<p class=\"show\">点我显示被隐藏的内容</p>");
			$(".show").click(function(){
				$(this).prev().show("fast");
				$(this).remove();
			});
	});				
});