

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
    var currentDate = new Date();
    var startDate = new Date("2023-11-04");
    
    var months;
    months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += currentDate.getMonth();
    months = Math.abs(months);

    var result = "<span class=\"digit\">" + months + "</span> months ago.";
    $("#clock").html(result);

    var text = "THE WORLD JUST GOT LUCKIER SINCE ";
    $("#message-box").html(text);
}
