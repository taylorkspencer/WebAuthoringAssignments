// Draw the canvas demos to the page
function drawCanvasDemos()
{
	draw2dCircleCanvas();
	draw3dCircleCanvas();
}

// Draw the 2D circle canvas to the page
function draw2dCircleCanvas()
{
	// Get the 2D circle canvas and its 2D context
	try
	{
		var twoDcircleCanvas = document.getElementById("twoDcircleCanvas");
		try
		{
			var context = twoDcircleCanvas.getContext('2d');
		}
		catch (MissingSupport)
		{
			// Do nothing, this is caught below
		}
		
		// Place the height and width attributes from the CSS on the canvas tag
		try
		{
			setPropertyValue(twoDcircleCanvas, "height", parseInt(window.getComputedStyle(twoDcircleCanvas).height, 10));
			setPropertyValue(twoDcircleCanvas, "width", parseInt(window.getComputedStyle(twoDcircleCanvas).width, 10));
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
		// Set the font equal to the font for the canvas
		context.font = window.getComputedStyle(twoDcircleCanvas).fontStyle+' '+
			window.getComputedStyle(twoDcircleCanvas).fontVariant+' '+
			window.getComputedStyle(twoDcircleCanvas).fontWeight+' '+
			window.getComputedStyle(twoDcircleCanvas).fontSize+'/'+
			window.getComputedStyle(twoDcircleCanvas).lineHeight+' '+
			window.getComputedStyle(twoDcircleCanvas).fontFamily;
		
		// Draw the circle
		// Set the color for the circle
		context.fillStyle = 'blue';
		
		// Draw the circle
		context.beginPath();
		context.arc((twoDcircleCanvas.height/2), (twoDcircleCanvas.width/2),
			((twoDcircleCanvas.height+twoDcircleCanvas.width)/4),
			(Math.PI/180)*0, (Math.PI/180)*360, true);
		context.fill();
		context.closePath();
		
		// Draw the text on the circle
		// Set the color for the text
		context.fillStyle = 'white';
		
		// Set the text baseline to the middle
		context.textBaseline = "middle";
		
		// Draw the text
		context.fillText("2D Circle", (twoDcircleCanvas.width*(1/20)), (twoDcircleCanvas.height/2), twoDcircleCanvas.width);
	}
	
	// Return true to indicate success
	return true;
}

function draw3dCircleCanvas()
{
	// Get the 3D circle canvas and its 2D context
	try
	{
		var threeDcircleCanvas = document.getElementById("threeDcircleCanvas");
		try
		{
			var context = threeDcircleCanvas.getContext('2d');
		}
		catch (MissingSupport)
		{
			// Do nothing, this is caught below
		}
		
		// Place the height and width attributes from the CSS on the canvas tag
		try
		{
			setPropertyValue(threeDcircleCanvas, "height", parseInt(window.getComputedStyle(threeDcircleCanvas).height, 10));
			setPropertyValue(threeDcircleCanvas, "width", parseInt(window.getComputedStyle(threeDcircleCanvas).width, 10));
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
		// Set the font equal to the font for the canvas
		context.font = window.getComputedStyle(threeDcircleCanvas).fontStyle+' '+
			window.getComputedStyle(threeDcircleCanvas).fontVariant+' '+
			window.getComputedStyle(threeDcircleCanvas).fontWeight+' '+
			window.getComputedStyle(threeDcircleCanvas).fontSize+'/'+
			window.getComputedStyle(threeDcircleCanvas).lineHeight+' '+
			window.getComputedStyle(threeDcircleCanvas).fontFamily;
		
		// Rotate the canvas
		context.rotate(-25*(Math.PI/180));
		
		// Draw the circle
		// Set the gradient for the circle
		var circleGradient = context.createLinearGradient(0, 0, 200, 0);
		circleGradient.addColorStop(0, "#729fcf");
		circleGradient.addColorStop(1, "#204a87");
		context.fillStyle = circleGradient;
		
		// Set the parameters for the shadow of the circle
		context.shadowColor = "#000000";
		context.shadowBlur = 10;
		context.shadowOffsetX = 8;
		context.shadowOffsetY = 8;
		
		// Draw the circle
		context.beginPath();
		context.arc((threeDcircleCanvas.height/2)-40, (threeDcircleCanvas.width/2)+15,
			((threeDcircleCanvas.height+threeDcircleCanvas.width)/4)-10,
			(Math.PI/180)*0, (Math.PI/180)*360, true);
		context.fill();
		context.closePath();
		
		// Draw the text on the circle
		// Set the color for the text
		context.fillStyle = 'white';
		
		// Set the text baseline to the middle
		context.textBaseline = "middle";
		
		// Set the parameters for the shadow of the text
		context.shadowColor = "#000000";
		context.shadowBlur = 2;
		context.shadowOffsetX = -2;
		context.shadowOffsetY = -2;
		
		// Draw the text
		context.fillText("3D Circle", (threeDcircleCanvas.width*(1/20))-30, (threeDcircleCanvas.height/2)+20, threeDcircleCanvas.width);
	}
	
	// Return true to indicate success
	return true;
}
