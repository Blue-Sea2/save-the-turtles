function buttonClicked() {
	var rotated = false;
	var input = document.getElementById("input").value;
    	var div = document.getElementById('turtle'),
        deg = rotated ? 0 : input;

	div.style.webkitTransform = 'rotate('+deg+'deg)'; 
	div.style.mozTransform    = 'rotate('+deg+'deg)'; 
	div.style.msTransform     = 'rotate('+deg+'deg)'; 
	div.style.oTransform      = 'rotate('+deg+'deg)'; 
	div.style.transform       = 'rotate('+deg+'deg)'; 

	rotated = !rotated;
	setTimeout(function() {
		div.style.transform = 'rotate(0deg)';
	}, 1000)		
}
