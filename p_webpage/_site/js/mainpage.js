$(document).ready(function(){
			var el = "li";
			var elContainer = "#spin";
			var elWidth = 198;
			elWidth = elWidth + 14;
			var elCount = $(elContainer).children().length;

			$(elContainer).width((elCount * elWidth) + "px");


			setInterval(function(){
				$("#spin").animate({
					marginLeft: '-=198px'
				}, 900, 'easeInOutExpo', function() {
					$(elContainer).css({marginLeft: '0'});
					var _first = $(elContainer + ' ' + el +':first').appendTo('#spin');
				});

			}, 2800)

		});
