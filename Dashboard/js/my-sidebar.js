var sidebar = $('.sidebar');
var main = $('.main');
var hmenu = $('#header-menu');
var initial_sidebar = sidebar.html()
var initial_hmenu = hmenu.html()
var initial_content = initial_sidebar + initial_hmenu;
$('.slide').click(function(){
	if (sidebar.css('width') == '0px')
	{
		sidebar.css('width','200px');
		main.css({'margin-left':'200px'});
	}
	else
	{
		sidebar.css('width','0px');
		main.css({'margin-left':'0px'});
	}
	
}); 