// Include the stickyLinks JavaScript function to keep the links pane from moving around
include("stickyLinks.js");

// Get the header, its links list, and the links inside the list
addListener(window, 'load', function()
{
	var links = document.getElementById('links').getElementsByTagName('a');
	
	// Parse through the links in the list
	for (var linkIndex=0; linkIndex<links.length; linkIndex++)
	{
		// If the link is pointing to this page, set its class name
		// to "here"
		if ((links[linkIndex].href===window.location.href)
			||(strStartsWith(window.location.href, links[linkIndex].href+'#'))
			||(strStartsWith(window.location.href, links[linkIndex].href+'?')))
		{
			links[linkIndex].className = "here";
		}
	}
});
