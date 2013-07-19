$(document).ready(function(){

	$('.slide-selection-nav li:gt(1)').hide();

	$('#add-slide').click(function(){
		var slideChoices = $('.slide-selection-nav li:gt(1)');
		slideChoices.toggle('slow', function(){
			var display = slideChoices.css("display");
			if (display == 'list-item'){
				$('#add-slide').fadeOut(250, function(){
					$(this).text('Hide');
					$(this).fadeIn(250);
				});
			}
			else{
				$('#add-slide').fadeOut(250, function(){
					$(this).text('Add Slide');
					$(this).fadeIn(250);
				});
			}
		});
	});


	$('#new-cover').click(function(){
	// Append a new div element above the add-slide navbar, with the template of the chosen slide type
	})



});