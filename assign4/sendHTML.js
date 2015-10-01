var contentEditableContents = new Array();

// Start mirroring between the two controls
function startMirroring(formName, contentEditableName, formInputName)
{
	// Get the form and its elements
	var form = document.getElementsByName(formName)[0];
	var contentEditable = document.getElementsByName(contentEditableName)[0];
	var formInput = document.getElementsByName(formInputName)[0];
	
	// Capture the initial contents of the contentEditable control
	contentEditableContents[contentEditableName] = contentEditable.innerHTML;
	
	// Set the value of formInput equal to the initial contents of contentEditable
	formInput.value = contentEditableContents[contentEditableName];
	
	// Add listeners to the form and its elements
	addListener(form, 'reset', function() { return resetContentEditable(contentEditableName, formInputName); });
	addListener(form, 'submit', function() { return submitContentEditable(contentEditableName, formInputName); });
	addListener(contentEditable, 'input', function() { return contentEditableToForm(contentEditableName, formInputName); });
	addListener(formInput, 'input', function() { return formToContentEditable(formInputName, contentEditableName); });
	
	// Enable editing in the contentEditable control
	contentEditable.contentEditable = true;
}

// Copy the contents of contentEditable to formInput
function contentEditableToForm(contentEditableName, formInputName)
{
	// Get the form elements
	var contentEditable = document.getElementsByName(contentEditableName)[0];
	var formInput = document.getElementsByName(formInputName)[0];
	
	// Copy the contents of the contentEditable to the value of formInput
	formInput.value = contentEditable.innerHTML;
}

// Copy the contents of formInput to contentEditable
function formToContentEditable(formInputName, contentEditableName)
{
	// Get the form elements
	var formInput = document.getElementsByName(formInputName)[0];
	var contentEditable = document.getElementsByName(contentEditableName)[0];
	
	// Copy the value of the formInput to the contents of contentEditable
	contentEditable.innerHTML = formInput.value;
}

// Copy the values of contentEditable over to formInput before submitting
function submitContentEditable(contentEditableName, formInputName)
{
	contentEditableToForm(contentEditableName, formInputName);
	return true;
}

// Reset the values of contentEditable and formInput
function resetContentEditable(contentEditableName, formInputName)
{
	// Get the form elements
	var formInput = document.getElementsByName(formInputName)[0];
	var contentEditable = document.getElementsByName(contentEditableName)[0];
	
	// Reset the values of contentEditable and formInput
	contentEditable.innerHTML = contentEditableContents[contentEditableName];
	formInput.value = contentEditableContents[contentEditableName];
}
