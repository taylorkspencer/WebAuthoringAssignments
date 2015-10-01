// Draw the navigation canvas to the page
function drawNavCanvas()
{
	// Get the navigation canvas and its 2D context
	try
	{
		var navCanvas = document.getElementById("navCanvas");
		try
		{
			var context = navCanvas.getContext('2d');
		}
		catch (MissingSupport)
		{
			// Do nothing, this is caught below
		}
		
		// Place the height and width attributes from the CSS on the canvas tag
		try
		{
			setPropertyValue(navCanvas, "height", parseInt(window.getComputedStyle(navCanvas).height, 10));
			setPropertyValue(navCanvas, "width", parseInt(window.getComputedStyle(navCanvas).width, 10));
		}
		catch (MissingSupport)
		{
			// Do nothing
		}
	}
	catch (CanvasUnrecongized)
	{
		// Do nothing, this is caught below
	}
	
	// Check to see if the browser supports <canvas> before continuing
	if (context)
	{
		// Set the color equal to the color for the canvas
		context.fillStyle = window.getComputedStyle(navCanvas).color;
		
		// Set the font equal to the font for the canvas
		context.font = window.getComputedStyle(navCanvas).fontStyle+' '+
			window.getComputedStyle(navCanvas).fontVariant+' '+
			window.getComputedStyle(navCanvas).fontWeight+' '+
			window.getComputedStyle(navCanvas).fontSize+'/'+
			window.getComputedStyle(navCanvas).lineHeight+' '+
			window.getComputedStyle(navCanvas).fontFamily;
		
		// Set the text baseline to the top
		context.textBaseline = "top";
		
		// Set the alpha transparency for the text
		context.globalAlpha = 1.0;
		
		// Draw the links for Assignment 5's map
		context.fillText("Canvas Demos", 13, 8, navCanvas.width);
		context.fillText("Video+Canvas", 260, 94, navCanvas.width);
		context.fillText("Web Font Selector", 134, 293, navCanvas.width);
		context.fillText("Lorem Ipsum Canvas", 3, 200, navCanvas.width);
		
		// Set the attributes for the shadows to the text
		context.fillStyle = window.getComputedStyle(navCanvas).color;
		context.shadowColor = window.getComputedStyle(navCanvas).color;
		context.globalAlpha = 0.2;
		context.shadowBlur = 3;
		context.setTransform(1, 0, -1, 1, 100, 0);
		
		// Draw the shadows for Assignment 5's map
		context.fillText("Canvas Demos", 3, 8, navCanvas.width);
		context.fillText("Video+Canvas", 340, 94, navCanvas.width);
		context.fillText("Web Font Selector", 414, 293, navCanvas.width);
		context.fillText("Lorem Ipsum Canvas", 193, 200, navCanvas.width);
		
		// Add a listener to the canvas for mouse clicks
		addListener(navCanvas, 'click', navCanvasGo);
		
		// Add a listener to the canvas for mouseover events
		addListener(navCanvas, 'mousemove', navCanvasHover);
	}
	
	// Return true to indicate success
	return true;
}

// Based on the location of the user's click on the navigation canvas, go to a destination
function navCanvasGo(event)
{
	// For Canvas Demos
	if (((getTargetX(event)>=13)&&(getTargetX(event)<=561))&&((getTargetY(event)>=8)&&(getTargetY(event)<=93)))
	{
		location.href = "canvasDemos.html";
	}
	// For Video+Canvas
	else if (((getTargetX(event)>=260)&&(getTargetX(event)<=830))&&((getTargetY(event)>=94)&&(getTargetY(event)<=179)))
	{
		location.href = "videoCanvas.html";
	}
	// For Web Font Selector
	else if (((getTargetX(event)>=134)&&(getTargetX(event)<=953))&&((getTargetY(event)>=293)&&(getTargetY(event)<=379)))
	{
		location.href = "webFontSelector.html";
	}
	// For Lorem Ipsum Canvas
	else if (((getTargetX(event)>=3)&&(getTargetX(event)<=770))&&((getTargetY(event)>=200)&&(getTargetY(event)<=287)))
	{
		location.href = "loremIpsumCanvas.html";
	}
	
	// Return true to indicate success
	return true;
}

// Based on the location of the user's mouse on the navigation canvas, change the cursor
function navCanvasHover(event)
{
	// For Canvas Demos
	if (((getTargetX(event)>=13)&&(getTargetX(event)<=561))&&((getTargetY(event)>=8)&&(getTargetY(event)<=93)))
	{
		event.target.style.cursor = "pointer";
	}
	// For Video+Canvas
	else if (((getTargetX(event)>=260)&&(getTargetX(event)<=830))&&((getTargetY(event)>=94)&&(getTargetY(event)<=179)))
	{
		event.target.style.cursor = "pointer";
	}
	// For Web Font Selector
	else if (((getTargetX(event)>=134)&&(getTargetX(event)<=953))&&((getTargetY(event)>=293)&&(getTargetY(event)<=379)))
	{
		event.target.style.cursor = "pointer";
	}
	// For Lorem Ipsum Canvas
	else if (((getTargetX(event)>=3)&&(getTargetX(event)<=770))&&((getTargetY(event)>=200)&&(getTargetY(event)<=287)))
	{
		event.target.style.cursor = "pointer";
	}
	// For everywhere else
	else
	{
		event.target.style.cursor = "auto";
	}
	
	// Return true to indicate success
	return true;
}
