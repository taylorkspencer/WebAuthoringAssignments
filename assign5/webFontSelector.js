// Create the web font selector
function createWebFontSelector()
{
	fillWebFontSelectorControl();
}

// Fill the web font selector form control with the list of web fonts
function fillWebFontSelectorControl()
{
	// Get the form for the web font selector and its fonts selector
	var form = document.getElementsByName("webFontSelector")[0];
	var fontsSelector = document.getElementsByName("fonts")[0];
	
	// Get a list of web fonts from the style sheet
	var webFontsList = getFontFaceRules(document.styleSheets);
	
	// Parse through the list of web fonts
	for (var fontIndex=0; fontIndex<webFontsList.length; fontIndex++)
	{
		// Get the name of the font selected
		var fontName;
		if (webFontsList[fontIndex].style["font-family"])
		{
			fontName = webFontsList[fontIndex].style["font-family"];
		}
		else if (webFontsList[fontIndex].style.cssText)
		{
			// Pull the font family from the CSS text
			var cssText = webFontsList[fontIndex].style.cssText;
			if (cssText.search('\"')!=-1)
			{
				var firstQuote = cssText.search('\"');
				firstQuoteString = cssText.substring(firstQuote+1);
				fontName = firstQuoteString.substring(0, firstQuoteString.search('\"'));
			}
			else if (cssText.search('\'')!=-1)
			{
				var firstQuote = cssText.search('\'');
				firstQuoteString = cssText.substring(firstQuote+1);
				fontName = firstQuoteString.substring(0, firstQuoteString.search('\''));
			}
		}
		
		// Remove any single or double quotes from the font name
		if ((fontName[0]=='\"')&&(fontName[fontName.length-1]=='\"'))
		{
			fontName = fontName.substring(1, fontName.length-1);
		}
		else if ((fontName[0]=='\'')&&(fontName[fontName.length-1]=='\''))
		{
			fontName = fontName.substring(1, fontName.length-1);
		}
		
		// Create the option element for the font
		var fontOption = document.createElement("option");
		var optionName = document.createTextNode(fontName);
		fontOption.value = fontName;
		fontOption.appendChild(optionName);
		
		// Use the font in the option element
		fontOption.style["font-family"] = '\''+fontName+'\'';
		
		// Add the web font to the web font selector control
		fontsSelector.appendChild(fontOption);
	}
	
	// Add a listener to the fonts selector for selection changes
	addListener(fontsSelector, 'change', setCanvasFont);
	
	// Draw the canvas with the first font in the selector
	setCanvasFont(fontsSelector);
}

// Set the font of the canvas equal to the selected font
function setCanvasFont(argument)
{
	// Get the target element
	var target;
	if (argument instanceof Event)
	{
		target = argument.target;
	}
	else
	{
		target = argument;
	}
	
	// Check to see if there are any options in the selector
	if ((target)&&(target.options))
	{
		// Get the selected font
		var selectedFont = target.options[target.selectedIndex].value;
		
		try
		{
			// Get the web font selector canvas
			var webFontSelectorCanvas = document.getElementById("webFontSelectorCanvas");
			
			// Set the CSS font family to the font selected
			webFontSelectorCanvas.style["font-family"] = '\''+selectedFont+'\'';
			
			// Redraw the web font selector canvas with the new font
			drawWebFontSelectorCanvas();
		}
		catch (CanvasUnrecongized)
		{
			// Return false to indicate failure
			return false;
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

// Draw the web font selector canvas to the page
function drawWebFontSelectorCanvas()
{
	// Get the web font selector canvas and its 2D context
	try
	{
		var webFontSelectorCanvas = document.getElementById("webFontSelectorCanvas");
		try
		{
			var context = webFontSelectorCanvas.getContext('2d');
		}
		catch (MissingSupport)
		{
			// Do nothing, this is caught below
		}
		
		// Place the height and width attributes from the CSS on the canvas tag
		try
		{
			setPropertyValue(webFontSelectorCanvas, "height", parseInt(window.getComputedStyle(webFontSelectorCanvas).height, 10));
			setPropertyValue(webFontSelectorCanvas, "width", parseInt(window.getComputedStyle(webFontSelectorCanvas).width, 10));
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
		// Hide the <nocanvas> element
		var webFontSelectorNocanvas = document.getElementsByTagName("nocanvas")[0];
		try
		{
			webFontSelectorNocanvas.style.display = "none";
		}
		catch (MissingSupport)
		{
			// Do nothing
		}
		
		// Clear the previous contents of the canvas
		context.clearRect(0, 0, webFontSelectorCanvas.width, webFontSelectorCanvas.height);
		
		// Set the color equal to the color for the canvas
		context.fillStyle = window.getComputedStyle(webFontSelectorCanvas).color;
		
		// Set the font equal to the font for the canvas
		context.font = window.getComputedStyle(webFontSelectorCanvas).fontStyle+' '+
			window.getComputedStyle(webFontSelectorCanvas).fontVariant+' '+
			window.getComputedStyle(webFontSelectorCanvas).fontWeight+' '+
			window.getComputedStyle(webFontSelectorCanvas).fontSize+'/'+
			window.getComputedStyle(webFontSelectorCanvas).lineHeight+' '+
			window.getComputedStyle(webFontSelectorCanvas).fontFamily;
		
		// Print the first paragraph of Lorem Ipsum
		context.fillText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec a diam lectus.  Sed sit amet ipsum mauris.", 30,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10)),
			webFontSelectorCanvas.width);
		context.fillText("Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.  Donec et mollis dolor.  Praesent et", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*2, webFontSelectorCanvas.width);
		context.fillText("diam eget libero egestas mattis sit amet vitae augue.  Nam tincidunt congue enim, ut porta lorem lacinia", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*3, webFontSelectorCanvas.width);
		context.fillText("consectetur.  Donec ut libero sed arcu vehicula ultricies a non tortor.  Lorem ipsum dolor sit amet, consectetur", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*4, webFontSelectorCanvas.width);
		context.fillText("adipiscing elit.  Aenean ut gravida lorem.  Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*5, webFontSelectorCanvas.width);
		context.fillText("Pellentesque auctor nisi id magna consequat sagittis.  Curabitur dapibus enim sit amet elit pharetra tincidunt", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*6, webFontSelectorCanvas.width);
		context.fillText("feugiat nisl imperdiet.  Ut convallis libero in urna ultrices accumsan.  Donec sed odio eros.  Donec viverra mi", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*7, webFontSelectorCanvas.width);
		context.fillText("quis quam pulvinar at malesuada arcu rhoncus.  Cum sociis natoque penatibus et magnis dis parturient montes,", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*8, webFontSelectorCanvas.width);
		context.fillText("nascetur ridiculus mus.  In rutrum accumsan ultricies.  Mauris vitae nisi at sem facilisis semper ac in est.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*9, webFontSelectorCanvas.width);
		
		// Print the second paragraph of Lorem Ipsum
		context.fillText("Vivamus fermentum semper porta.  Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio.  Maecenas", 30,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*11, webFontSelectorCanvas.width);
		context.fillText("convallis ullamcorper ultricies.  Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit,", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*12, webFontSelectorCanvas.width);
		context.fillText("id fringilla sem nunc vel mi.  Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*13, webFontSelectorCanvas.width);
		context.fillText("urna et turpis.  Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci.  Fusce eget orci a orci congue", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*14, webFontSelectorCanvas.width);
		context.fillText("vestibulum.  Ut dolor diam, elementum et vestibulum eu, porttitor vel elit.  Curabitur venenatis pulvinar tellus", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*15, webFontSelectorCanvas.width);
		context.fillText("gravida ornare.  Sed et erat faucibus nunc euismod ultricies ut id justo.  Nullam cursus suscipit nisi, et", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*16, webFontSelectorCanvas.width);
		context.fillText("ultrices justo sodales nec.  Fusce venenatis facilisis lectus ac semper.  Aliquam at massa ipsum.  Quisque", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*17, webFontSelectorCanvas.width);
		context.fillText("bibendum purus convallis nulla ultrices ultricies.  Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*18, webFontSelectorCanvas.width);
		context.fillText("tortor, viverra pretium nisi quam vitae mi.  Fusce vel volutpat elit.  Nam sagittis nisi dui.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*19, webFontSelectorCanvas.width);
		
		// Print the third paragraph of Lorem Ipsum
		context.fillText("Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque.  Etiam luctus porttitor lorem,", 30,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*21, webFontSelectorCanvas.width);
		context.fillText("sed suscipit est rutrum non.  Curabitur lobortis nisl a enim congue semper.  Aenean commodo ultrices imperdiet.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*22, webFontSelectorCanvas.width);
		context.fillText("Vestibulum ut justo vel sapien venenatis tincidunt.  Phasellus eget dolor sit amet ipsum dapibus condimentum", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*23, webFontSelectorCanvas.width);
		context.fillText("vitae quis lectus.  Aliquam ut massa in turpis dapibus convallis.  Praesent elit lacus, vestibulum at malesuada", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*24, webFontSelectorCanvas.width);
		context.fillText("et, ornare et est.  Ut augue nunc, sodales ut euismod non, adipiscing vitae orci.  Mauris ut placerat justo.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*25, webFontSelectorCanvas.width);
		context.fillText("Mauris in ultricies enim.  Quisque nec est eleifend nulla ultrices egestas quis ut quam.  Donec sollicitudin", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*26, webFontSelectorCanvas.width);
		context.fillText("lectus a mauris pulvinar id aliquam urna cursus.  Cras quis ligula sem, vel elementum mi.  Phasellus non", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*27, webFontSelectorCanvas.width);
		context.fillText("ullamcorper urna.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*28, webFontSelectorCanvas.width);
		
		// Print the fourth paragraph of Lorem Ipsum
		context.fillText("Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  In euismod", 30,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*30, webFontSelectorCanvas.width);
		context.fillText("ultrices facilisis.  Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie.  Proin quis", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*31, webFontSelectorCanvas.width);
		context.fillText("dictum nisl.  Morbi id quam sapien, sed vestibulum sem.  Duis elementum rutrum mauris sed convallis.  Proin", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*32, webFontSelectorCanvas.width);
		context.fillText("vestibulum magna mi.  Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut.  Sed non tortor sodales", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*33, webFontSelectorCanvas.width);
		context.fillText("quam auctor elementum.  Donec hendrerit nunc eget elit pharetra pulvinar.  Suspendisse id tempus tortor.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*34, webFontSelectorCanvas.width);
		context.fillText("Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*35, webFontSelectorCanvas.width);
		context.fillText("Donec vel.", 0,
			(parseInt(window.getComputedStyle(webFontSelectorCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(webFontSelectorCanvas).fontSize, 10))
			*36, webFontSelectorCanvas.width);
	}
	
	// Return true to indicate success
	return true;
}

// Get all the @font-face rules from the document's style sheets
function getFontFaceRules(styleSheets)
{
	var toReturn = new Array();
	// Parse through all the style sheets
	if (styleSheets)
	{
		var fontIndex = 0;
		for (var sheetIndex=0; sheetIndex<styleSheets.length; sheetIndex++)
		{
			if (styleSheets[sheetIndex].cssRules)
			{
				// Parse through all the rules in the style sheet
				for (var ruleIndex=0; ruleIndex<styleSheets[sheetIndex].cssRules.length; ruleIndex++)
				{
					// If the rule is a @font-face rule, add it to the array
					if (styleSheets[sheetIndex].cssRules[ruleIndex].toString()=="[object CSSFontFaceRule]")
					{
						toReturn[fontIndex] = styleSheets[sheetIndex].cssRules[ruleIndex];
						
						// Increment fontIndex for the toReturn array
						fontIndex++;
					}
				}
			}
		}
	}
	// Return the list of @font-face rules
	return toReturn;
}
