// TeXworksScript
// Title: Kill line
// Description: Deletes the line the cursor is currently on
// Author: Stefan Löffler
// Version: 0.0.1
// Date: 2020-06-16
// Script-Type: standalone
// Shortcut: Ctrl+K
// Context: TeXDocument

function killLine(txt, start, len) {
	var end = start + len;

	if (txt.length === 0) {
		// If there is no text, there are no lines to kill
		return;
	}

	if (start < 0 || start > txt.length || len < 0) {
		// Invalid parameters
		return;
	}
	if (end > txt.length) {
		end = txt.length;
	}

	// Search for the preceeding \n
	if (start > 0) {
		// NB: If none is found, this yields start === 0
		start = txt.lastIndexOf('\n', start - 1) + 1;
	}
	// Search for the following \n
	newEnd = txt.indexOf('\n', end);
	if (newEnd >= 0) {
		// if a following \n was found, include it in the deletion range
		end = newEnd + 1;
	}
	else {
		// if no following \n was found, delete until the end of the document...
		end = txt.length;
		if (start > 0) {
			// ...and delete the preceeding \n, if any, to avoid introducing
			// a \n at the end of the document that wasn't there before
			start--;
		}
	}
	TW.target.selectRange(start, end - start);
	TW.target.insertText("");
}

killLine(TW.target.text, TW.target.selectionStart, TW.target.selectionLength);
undefined;
