// Include the video switcher script so the correct video element is inserted
include("../shared/avSwitcher.js");

// Draw the video canvas to the page
function drawVideoCanvas()
{
	// Replace the videoContainer div tag with our video player
	createAVcontainers();
	
	// Get the video canvas and its 2D context
	try
	{
		var videoCanvas = document.getElementById("videoCanvas");
		try
		{
			var context = videoCanvas.getContext('2d');
		}
		catch (MissingSupport)
		{
			// Do nothing, this is caught below
		}
		
		// Place the height and width attributes from the CSS on the canvas tag
		try
		{
			setPropertyValue(videoCanvas, "height", parseInt(window.getComputedStyle(videoCanvas).height, 10));
			setPropertyValue(videoCanvas, "width", parseInt(window.getComputedStyle(videoCanvas).width, 10));
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
		// Check to see if we have an HTML5 video element
		var videoElement = getElementsByClass("videoContainer")[0].getElementsByTagName("video")[0];
		if (videoElement)
		{
			// Add a listener for playback
			addListener(videoElement, "play", function() { return renderVideoOnCanvas(videoElement, videoCanvas); });
			
			// Return true to indicate success
			return true;
		}
		else
		{
			// Return false to indicate failure
			return false;
		}
	}
	else
	{
		// Return false to indicate failure
		return false;
	}
}

// Render the video in the videoElement argument on the videoCanvas element
// Example adapted from http://html5doctor.com/video-canvas-magic/
function renderVideoOnCanvas(videoElement, videoCanvas)
{
	// Get the context for the videoCanvas
	try
	{
		var context = videoCanvas.getContext('2d');
	}
	catch (MissingSupport)
	{
		// Do nothing, this is caught below
	}
	
	// Check to see if we successfully got the context
	if (context)
	{
		// Make sure the video is playing before continuing
		if ((!videoElement.paused)&&(!videoElement.ended))
		{
			// Enlarge the video by 2x and draw it on the canvas
			context.drawImage(videoElement, 0, 0, videoCanvas.width, videoCanvas.height);
			
			// Set a 20-second timeout for the next call
			setTimeout(renderVideoOnCanvas, 20, videoElement, videoCanvas);
		}
		
		// Return true to indicate success
		return true;
	}
	else
	{
		// Return false to indicate failure
		return false;
	}
}
