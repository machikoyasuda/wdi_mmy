function changeSize() {
	var elements = $('.root>*:not(.left)');
	for (i = 0; i < elements.length; i++) {
		$(elements[i]).css({
			width: 300px,
			height: 400px
		});
	}
}