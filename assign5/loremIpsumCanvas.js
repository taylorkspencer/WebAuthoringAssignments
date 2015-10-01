// Draw the lorem ipsum canvas to the page
function drawLoremIpsumCanvas()
{
	// Get the lorem ipsum canvas and its 2D context
	try
	{
		var loremIpsumCanvas = document.getElementById("loremIpsumCanvas");
		try
		{
			var context = loremIpsumCanvas.getContext('2d');
		}
		catch (MissingSupport)
		{
			// Do nothing, this is caught below
		}
		
		// Place the height and width attributes from the CSS on the canvas tag
		try
		{
			setPropertyValue(loremIpsumCanvas, "height", parseInt(window.getComputedStyle(loremIpsumCanvas).height, 10));
			setPropertyValue(loremIpsumCanvas, "width", parseInt(window.getComputedStyle(loremIpsumCanvas).width, 10));
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
		context.fillStyle = window.getComputedStyle(loremIpsumCanvas).color;
		
		// Set the font equal to the font for the canvas
		context.font = window.getComputedStyle(loremIpsumCanvas).fontStyle+' '+
			window.getComputedStyle(loremIpsumCanvas).fontVariant+' '+
			window.getComputedStyle(loremIpsumCanvas).fontWeight+' '+
			window.getComputedStyle(loremIpsumCanvas).fontSize+'/'+
			window.getComputedStyle(loremIpsumCanvas).lineHeight+' '+
			window.getComputedStyle(loremIpsumCanvas).fontFamily;
		
		// Print the first paragraph of Lorem Ipsum
		context.fillText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec a diam lectus.  Sed sit amet ipsum mauris.", 30,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10)),
			loremIpsumCanvas.width);
		context.fillText("Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.  Donec et mollis dolor.  Praesent et", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*2, loremIpsumCanvas.width);
		context.fillText("diam eget libero egestas mattis sit amet vitae augue.  Nam tincidunt congue enim, ut porta lorem lacinia", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*3, loremIpsumCanvas.width);
		context.fillText("consectetur.  Donec ut libero sed arcu vehicula ultricies a non tortor.  Lorem ipsum dolor sit amet, consectetur", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*4, loremIpsumCanvas.width);
		context.fillText("adipiscing elit.  Aenean ut gravida lorem.  Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*5, loremIpsumCanvas.width);
		context.fillText("Pellentesque auctor nisi id magna consequat sagittis.  Curabitur dapibus enim sit amet elit pharetra tincidunt", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*6, loremIpsumCanvas.width);
		context.fillText("feugiat nisl imperdiet.  Ut convallis libero in urna ultrices accumsan.  Donec sed odio eros.  Donec viverra mi", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*7, loremIpsumCanvas.width);
		context.fillText("quis quam pulvinar at malesuada arcu rhoncus.  Cum sociis natoque penatibus et magnis dis parturient montes,", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*8, loremIpsumCanvas.width);
		context.fillText("nascetur ridiculus mus.  In rutrum accumsan ultricies.  Mauris vitae nisi at sem facilisis semper ac in est.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*9, loremIpsumCanvas.width);
		
		// Print the second paragraph of Lorem Ipsum
		context.fillText("Vivamus fermentum semper porta.  Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio.  Maecenas", 30,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*11, loremIpsumCanvas.width);
		context.fillText("convallis ullamcorper ultricies.  Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit,", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*12, loremIpsumCanvas.width);
		context.fillText("id fringilla sem nunc vel mi.  Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*13, loremIpsumCanvas.width);
		context.fillText("urna et turpis.  Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci.  Fusce eget orci a orci congue", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*14, loremIpsumCanvas.width);
		context.fillText("vestibulum.  Ut dolor diam, elementum et vestibulum eu, porttitor vel elit.  Curabitur venenatis pulvinar tellus", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*15, loremIpsumCanvas.width);
		context.fillText("gravida ornare.  Sed et erat faucibus nunc euismod ultricies ut id justo.  Nullam cursus suscipit nisi, et", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*16, loremIpsumCanvas.width);
		context.fillText("ultrices justo sodales nec.  Fusce venenatis facilisis lectus ac semper.  Aliquam at massa ipsum.  Quisque", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*17, loremIpsumCanvas.width);
		context.fillText("bibendum purus convallis nulla ultrices ultricies.  Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*18, loremIpsumCanvas.width);
		context.fillText("tortor, viverra pretium nisi quam vitae mi.  Fusce vel volutpat elit.  Nam sagittis nisi dui.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*19, loremIpsumCanvas.width);
		
		// Print the third paragraph of Lorem Ipsum
		context.fillText("Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque.  Etiam luctus porttitor lorem,", 30,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*21, loremIpsumCanvas.width);
		context.fillText("sed suscipit est rutrum non.  Curabitur lobortis nisl a enim congue semper.  Aenean commodo ultrices imperdiet.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*22, loremIpsumCanvas.width);
		context.fillText("Vestibulum ut justo vel sapien venenatis tincidunt.  Phasellus eget dolor sit amet ipsum dapibus condimentum", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*23, loremIpsumCanvas.width);
		context.fillText("vitae quis lectus.  Aliquam ut massa in turpis dapibus convallis.  Praesent elit lacus, vestibulum at malesuada", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*24, loremIpsumCanvas.width);
		context.fillText("et, ornare et est.  Ut augue nunc, sodales ut euismod non, adipiscing vitae orci.  Mauris ut placerat justo.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*25, loremIpsumCanvas.width);
		context.fillText("Mauris in ultricies enim.  Quisque nec est eleifend nulla ultrices egestas quis ut quam.  Donec sollicitudin", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*26, loremIpsumCanvas.width);
		context.fillText("lectus a mauris pulvinar id aliquam urna cursus.  Cras quis ligula sem, vel elementum mi.  Phasellus non", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*27, loremIpsumCanvas.width);
		context.fillText("ullamcorper urna.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*28, loremIpsumCanvas.width);
		
		// Print the fourth paragraph of Lorem Ipsum
		context.fillText("Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  In euismod", 30,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*30, loremIpsumCanvas.width);
		context.fillText("ultrices facilisis.  Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie.  Proin quis", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*31, loremIpsumCanvas.width);
		context.fillText("dictum nisl.  Morbi id quam sapien, sed vestibulum sem.  Duis elementum rutrum mauris sed convallis.  Proin", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*32, loremIpsumCanvas.width);
		context.fillText("vestibulum magna mi.  Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut.  Sed non tortor sodales", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*33, loremIpsumCanvas.width);
		context.fillText("quam auctor elementum.  Donec hendrerit nunc eget elit pharetra pulvinar.  Suspendisse id tempus tortor.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*34, loremIpsumCanvas.width);
		context.fillText("Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*35, loremIpsumCanvas.width);
		context.fillText("Donec vel.", 0,
			(parseInt(window.getComputedStyle(loremIpsumCanvas).lineHeight, 10)||
				parseInt(window.getComputedStyle(loremIpsumCanvas).fontSize, 10))
			*36, loremIpsumCanvas.width);
	}
	
	// Return true to indicate success
	return true;
}
