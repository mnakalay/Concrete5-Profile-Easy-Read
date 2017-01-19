$(document).ready(function() {
    var list = $('div.profile-info-item').find('ul.icon-list');
	var tooltip, listitems, printlistitems;
	$('#profile-pro-account').fadeOut(150, function() {
        $("head").find('link[rel="stylesheet"]').attr("media", "screen, print");
        list.eq(0).addClass('grid-third');
        list.eq(1).addClass('grid-third');
        list.eq(2).addClass('print-grid-third');
        list.eq(3).addClass('print-grid-third');
        printlistitems = $('.print-grid-third').find('li');
        printlistitems.addClass("print-grid-item");
        listitems = $('.grid-third').find('li');
        listitems.addClass("grid-item");
        listitems.each(function(){
            tooltip = $(this).find('img').attr("original-title");
            $(this).append('<p class="icon-desc">'+tooltip+'</p>');
        });
        printlistitems.each(function(){
            tooltip = $(this).find('img').attr("original-title");
            $(this).find('a').attr('title', tooltip);
        });
        $('#profile-pro-account').fadeIn(500);
    });
});