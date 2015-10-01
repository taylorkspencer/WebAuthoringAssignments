// Create audio and/or video players on the web page
function createAVcontainers()
{
	// Get the location of this script
	var scripts = document.getElementsByTagName("script");
	var scriptSrc = scripts[scripts.length-1].src;
	var scriptPath = scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));
	
	// Test to see which tags are supported by the browser
	var test_audio = document.createElement("audio");
	var test_video = document.createElement("video");
	var mediaSupport = {audio: (test_audio.play)? true : false,
			video: (test_video.play)? true : false};
	
	// Replace audioContainers with either a HTML5 audio tag or a Flash control
	// pointing at the file referenced by src, depending on the browser
	var audioContainers = getElementsByClass("audioContainer");
	
	if (mediaSupport.audio)
	{
		// Parse through the collection of audioContainers
		for (var containerIndex=0; containerIndex<audioContainers.length; containerIndex++)
		{
			// Create an <audio> element with controls for the audio file
			var audioObject = document.createElement("audio");
			audioObject.controls = "controls";
			
			try
			{
				// Gather the list of sources from the src attribute
				var audioSrc = getProperty(audioContainers[containerIndex], "src");
				
				// Split up the list of sources into an array
				var sourcePaths = audioSrc.split(',');
				
				// Parse through the list of sources
				for (var sourceIndex=0; sourceIndex<sourcePaths.length; sourceIndex++)
				{
					// Detect if the audio type is compatible with the browser
					if (audioObject.canPlayType(getMimeType(sourcePaths[sourceIndex])))
					{
						// Create a <source> element for the <audio> tag and point it to the audio source
						var sourceObject = document.createElement("source");
						sourceObject.src = sourcePaths[sourceIndex];
						
						// Get the MIME type for the audio source and place it in the source element
						sourceObject.type = getMimeType(sourcePaths[sourceIndex]);
						
						// Place the source element inside the audio element
						audioObject.appendChild(sourceObject);
					}
				}
				
				// Place the audio element on the page inside the audioContainer element
				audioContainers[containerIndex].appendChild(audioObject);
			}
			catch (e)
			{
				// Do nothing
			}
		}
	}
	else
	{
		// Parse through the collection of audioContainers
		for (var containerIndex=0; containerIndex<audioContainers.length; containerIndex++)
		{
			// Create an <object> element pointed at the Flash player control
			var audioObject = document.createElement("object");
			// For Internet Explorer
			try
			{
				audioObject.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
			}
			catch (e)
			{
				// Do nothing
			}
			// For all other browsers
			try
			{
				audioObject.type = 'application/x-shockwave-flash';
			}
			catch (e)
			{
				// Do nothing
			}
			audioObject.data = scriptPath+'/player.swf';
			
			try
			{
				// Gather the list of sources from the src attribute
				var audioSrc = getProperty(audioContainers[containerIndex], "src");
				
				// Set the height and width of the player
				audioObject.height = 40;
				audioObject.width = 300;
				
				// Create a <param> object for the player
				var movieParam = document.createElement("param");
				movieParam.name = 'movie';
				movieParam.value = scriptPath+'/player.swf';
				
				// Create a <param> object for quality
				var qualityParam = document.createElement("param");
				qualityParam.name = 'quality';
				qualityParam.value = 'high';
				
				// Create a <param> object for the menu
				var menuParam = document.createElement("param");
				menuParam.name = 'menu';
				menuParam.value = 'false';
				
				// Create a <param> object to disable scaling
				var scalingParam = document.createElement("param");
				scalingParam.name = 'scale';
				scalingParam.value = 'noscale';
				
				// Create a <param> object to enable scripting
				var scriptParam = document.createElement("param");
				scriptParam.name = 'allowScriptAccess';
				scriptParam.value = 'always';
				
				// Create a <param> object to enable swLiveConnect
				var swLiveConnectParam = document.createElement("param");
				swLiveConnectParam.name = 'swLiveConnect';
				swLiveConnectParam.value = 'true';
				
				// Create a <param> object to disable cache busting
				var cacheBustingParam = document.createElement("param");
				cacheBustingParam.name = 'cacheBusting';
				cacheBustingParam.value = 'false';
				
				// Place the param elements inside the audio element
				audioObject.appendChild(movieParam);
				audioObject.appendChild(qualityParam);
				audioObject.appendChild(menuParam);
				audioObject.appendChild(scalingParam);
				audioObject.appendChild(scriptParam);
				audioObject.appendChild(swLiveConnectParam);
				audioObject.appendChild(cacheBustingParam);
				
				// Split up the list of sources into an array
				var sourcePaths = audioSrc.split(',');
				
				// Parse through the list of sources
				for (var sourceIndex=0; sourceIndex<sourcePaths.length; sourceIndex++)
				{
					// Detect if the audio type is compatible with Flash
					var sourceType = getMimeType(sourcePaths[sourceIndex]);
					if ((sourceType=='audio/mpeg')||(sourceType=='audio/aac')||(sourceType=='audio/mp4'))
					{
						// Create a <param> element for the <object> tag and point it to the audio source
						var sourceParam = document.createElement("param");
						sourceParam.name = 'flashvars';
						sourceParam.value = 'skin='+scriptPath+'/mySkin.swf&video='+sourcePaths[sourceIndex];
						
						// Place the param element inside the audio element
						audioObject.appendChild(sourceParam);
					}
				}
				
				// Place the <object> element on the page inside the audioContainer element
				audioContainers[containerIndex].appendChild(audioObject);
			}
			catch (e)
			{
				// Do nothing
			}
		}
	}
	
	// Replace videoContainers with either a HTML5 video tag or a Flash control
	// pointing at the file referenced by src, depending on the browser
	var videoContainers = getElementsByClass("videoContainer");
	
	if (mediaSupport.video)
	{
		// Parse through the collection of videoContainers
		for (var containerIndex=0; containerIndex<videoContainers.length; containerIndex++)
		{
			// Create an <video> element with controls for the video file
			var videoObject = document.createElement("video");
			videoObject.controls = "controls";
			
			try
			{
				// Gather the list of sources from the src attribute
				var videoSrc = getProperty(videoContainers[containerIndex], "src");
				
				// If the tag has a height attribute, set the height for the generated
				// video element equal to its value
				if (getProperty(videoContainers[containerIndex], "height"))
				{
					videoObject.height = getProperty(videoContainers[containerIndex], "height");
				}
				// If the tag has a width attribute, set the width for the generated
				// video element equal to its value
				if (getProperty(videoContainers[containerIndex], "width"))
				{
					videoObject.width = getProperty(videoContainers[containerIndex], "width");
				}
				// If the tag has a preview attribute, set the poster image to the
				// URL of the preview image
				if (getProperty(videoContainers[containerIndex], "preview"))
				{
					videoObject.poster = getProperty(videoContainers[containerIndex], "preview");
				}
				
				// Split up the list of sources into an array
				var sourcePaths = videoSrc.split(',');
				
				// Parse through the list of sources
				for (var sourceIndex=0; sourceIndex<sourcePaths.length; sourceIndex++)
				{
					// Detect if the video type is compatible with the browser
					if (videoObject.canPlayType(getMimeType(sourcePaths[sourceIndex])))
					{
						// Create a <source> element for the <video> tag and point it to the video source
						var sourceObject = document.createElement("source");
						sourceObject.src = sourcePaths[sourceIndex];
						
						// Get the MIME type for the video source and place it in the source element
						sourceObject.type = getMimeType(sourcePaths[sourceIndex]);
						
						// Place the source element inside the video element
						videoObject.appendChild(sourceObject);
					}
				}
			
				// Place the video element on the page inside the videoContainer element
				videoContainers[containerIndex].appendChild(videoObject);
			}
			catch (e)
			{
				// Do nothing
			}
		}
	}
	else
	{
		// Parse through the collection of videoContainers
		for (var containerIndex=0; containerIndex<videoContainers.length; containerIndex++)
		{
			// Create an <object> element pointed at the Flash player control
			var videoObject = document.createElement("object");
			// For Internet Explorer
			try
			{
				videoObject.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
			}
			catch (e)
			{
				// Do nothing
			}
			// For all other browsers
			try
			{
				videoObject.type = 'application/x-shockwave-flash';
			}
			catch (e)
			{
				// Do nothing
			}
			videoObject.data = scriptPath+'/player.swf';
			
			try
			{
				// Gather the list of sources from the src attribute
				var videoSrc = getProperty(videoContainers[containerIndex], "src");
				
				// If the tag has a height attribute, set the height for the generated
				// video element equal to its value
				if (getProperty(videoContainers[containerIndex], "height"))
				{
					videoObject.height = getProperty(videoContainers[containerIndex], "height");
				}
				// If the tag has a width attribute, set the width for the generated
				// video element equal to its value
				if (getProperty(videoContainers[containerIndex], "width"))
				{
					videoObject.width = getProperty(videoContainers[containerIndex], "width");
				}
				// If the tag has a preview attribute, store the preview image for
				// future use
				if (getProperty(videoContainers[containerIndex], "preview"))
				{
					var previewSrc = getProperty(videoContainers[containerIndex], "preview");
				}
				
				// Create a <param> object for the player
				var movieParam = document.createElement("param");
				movieParam.name = 'movie';
				movieParam.value = scriptPath+'/player.swf';
				
				// Create a <param> object for quality
				var qualityParam = document.createElement("param");
				qualityParam.name = 'quality';
				qualityParam.value = 'high';
				
				// Create a <param> object for the menu
				var menuParam = document.createElement("param");
				menuParam.name = 'menu';
				menuParam.value = 'false';
				
				// Create a <param> object to disable scaling
				var scalingParam = document.createElement("param");
				scalingParam.name = 'scale';
				scalingParam.value = 'noscale';
				
				// Create a <param> object to enable fullscreen
				var fullScreenParam = document.createElement("param");
				fullScreenParam.name = 'allowFullScreen';
				fullScreenParam.value = 'true';
				
				// Create a <param> object to enable scripting
				var scriptParam = document.createElement("param");
				scriptParam.name = 'allowScriptAccess';
				scriptParam.value = 'always';
				
				// Create a <param> object to enable swLiveConnect
				var swLiveConnectParam = document.createElement("param");
				swLiveConnectParam.name = 'swLiveConnect';
				swLiveConnectParam.value = 'true';
				
				// Create a <param> object to disable cache busting
				var cacheBustingParam = document.createElement("param");
				cacheBustingParam.name = 'cacheBusting';
				cacheBustingParam.value = 'false';
				
				// Place the param elements inside the video element
				videoObject.appendChild(movieParam);
				videoObject.appendChild(qualityParam);
				videoObject.appendChild(menuParam);
				videoObject.appendChild(scalingParam);
				videoObject.appendChild(fullScreenParam);
				videoObject.appendChild(scriptParam);
				videoObject.appendChild(swLiveConnectParam);
				videoObject.appendChild(cacheBustingParam);
				
				// Split up the list of sources into an array
				var sourcePaths = videoSrc.split(',');
				
				// Parse through the list of sources
				for (var sourceIndex=0; sourceIndex<sourcePaths.length; sourceIndex++)
				{
					// Detect if the video type is compatible with Flash
					var sourceType = getMimeType(sourcePaths[sourceIndex]);
					if ((sourceType=='video/mpeg')||(sourceType=='video/mp4')||(sourceType=='video/x-flv'))
					{
						// Create a <param> element for the <object> tag and point it to the video source
						var sourceParam = document.createElement("param");
						sourceParam.name = 'flashVars';
						sourceParam.value = 'skin='+scriptPath+'/mySkin.swf&video='+sourcePaths[sourceIndex];
						
						// If a preview image was captured, set the thumbnail image to
						// the URL of the preview image
						if (previewSrc)
						{
							sourceParam.value+='&thumbnail='+previewSrc;
						}
						
						// Place the param element inside the video element
						videoObject.appendChild(sourceParam);
					}
				}
				
				// Place the <object> element on the page inside the videoContainer element
				videoContainers[containerIndex].appendChild(videoObject);
			}
			catch (e)
			{
				// Do nothing
			}
		}
	}
}
