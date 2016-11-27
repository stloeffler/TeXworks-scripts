// TeXworksScript
// Title: Insert reference
// Description: Lets the user select from a list of references in the .aux file
// Author: Stefan Löffler
// Version: 0.0.1
// Date: 2016-11-27
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+I, Alt+R

function parseAux(content)
{
	var reLabel = /\\newlabel\{([^}]+)\}/g;
	var retVal = [];
	var result;
	while (result = reLabel.exec(content)) {
		retVal.push(result[1]);
	}
	retVal.sort();
	return retVal;
}

var labels = [];

// Parse aux file for labels
if (!TW.target.untitled) {
	var file = TW.target.rootFileName.replace(/\.tex$/, ".aux");
	var aux = TW.readFile(file);
	switch(aux.status) {
		case 0: // success
			labels = parseAux(aux.result);
			break;
		case 1: // failed
			TW.information(TW.target, "Could not read the aux file", "The file '" + aux + "' could not be read. Make sure you TeX'ed your document at least once.");
			break;
		case 2: // permission denied
			TW.information(TW.target, "Permission denied", "You are currently not allowed to access the selected file through a script.\nTo change this, enable \"Allow scripts to read all files\" in the preferences dialog.");
			break;
	}
}
else {
	TW.information(TW.target, "Could not read the aux file", "Make sure you saved and TeX'ed your document at least once.");
}

if (labels.length > 0) {
	// If labels were found, let the user select one
	var sel = TW.getItem(TW.target, "Select reference", "Reference:", labels, 0, true);
	if (sel !== undefined) {
		TW.target.insertText(sel);
	}
}

// return value
undefined;
