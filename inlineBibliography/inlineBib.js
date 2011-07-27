// TeXworksScript
// Title: Inline bibliography
// Description: Inlines bibliography data from a .bbl file for journal submission
// Author: Stefan Löffler
// Version: 0.2.1
// Date: 2011-07-27
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+I, Alt+B

var reExt = new RegExp("\\.tex$");
var content = undefined;


if (!TW.target.untitled) {
	var file = TW.target.fileName.replace(reExt, ".bbl");
	var bbl = TW.readFile(file);
	switch(bbl["status"]) {
		case 0: // success
			content = bbl["result"];
			break;
		default:
			// fall through
	}
}
if (content === undefined) {
	var file = TW.app.getOpenFileName("*.bbl");
	if (file != "") {
		var bbl = TW.readFile(file);
		switch(bbl["status"]) {
			case 0: // success
				content = bbl["result"];
				break;
			case 2: // permission denied
				TW.information(TW.target, "Permission denied", "You are currently not allowed to access the selected file through a script.\nTo change this, enable \"Allow scripts to read all files\" in the preferences dialog.");
				break;
			default:
				// fall through
		}
	}
}

if (content !== undefined) {
	// Remember the cursor position so we can select the inserted text later
	var selStart = TW.target.selectionStart
	// insert the bibliography data into the document
	TW.target.insertText(content);
	// select the newly inserted text
	TW.target.selectRange(selStart, content.length);
}

// return value
undefined;
