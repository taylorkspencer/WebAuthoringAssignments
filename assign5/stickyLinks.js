// When a scroll occurs, see if the links pane needs to be repositioned
addListener(window, 'scroll', function()
{
	// Get the links pane
	var links = document.getElementById("links");
	
	// If the links pane's position is at or less than 10px, make
	// its position fixed at 10px
	if ((getScrollY()-links.offsetTop)>=-10)
	{
		links.style.position = 'fixed';
		links.style.top = '10px';
		links.style.left = '8px';
	}
	// If the links pane's position is greater than 10px, make its
	// position relative
	else
	{
		links.style.position = 'relative';
		links.style.top = '0%';
		links.style.left = '0%';
	}
});
