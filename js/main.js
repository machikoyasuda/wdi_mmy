$(document).ready(function() {
	//$(".root").fadeOut('slow');
	//$(".r1").effect('explode');
	//$(".r2").effect('bounce', {times:2});

	//console.log($('.l1'));
	// Get '.l1' class, pass that class into console.log
	$(document).keypress(function(e){
			if(e.keyCode == 32)
				reshuffle();
				bounce();
		});
	});

names = [
	'alex',
	'beatrice',
	'corey'
];
/* add names array to each .l1 box, increment l numbers
function addNames(names) {
	for (i = 0; i < names.length; i++) {
		var element = $('.l' + (i + 1));
		element.html(names[i]);
	}
} */
// using 'var' scopes the variable to the function you are currently in
function reshuffle() {
	var elements = $('.root>*:not(.left)');
	for (i = 0; i < elements.length; i++) {	
		$(elements[i]).animate({
			top		: Math.random() * 400,
			right	: Math.random() * 600,
			width	: Math.floor(Math.random() * 100),
			height	: Math.floor(Math.random() * 100)
		}, 1500 );
	}
}

function bounce() {
	var elements = $('.root>*:not(.left)');
	for (i = 0; i < elements.length; i++) {
		$(elements[i]).effect('bounce', {times: 2});
	}
}

/* adjust css width/height for elements that are not in .left 
function changeSize() {
	var elements = $('.root>*:not(.left)');
	for (i = 0; i < elements.length; i++) {
		$(elements[i]).css("height", "45px"),
		$(elements[i]).css("width", "45px")
	}
} */

