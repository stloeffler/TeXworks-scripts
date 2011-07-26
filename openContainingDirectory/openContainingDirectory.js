// TeXworksScript
// Title: Open containing directory
// Description: Opens the directory containing the current file in the default file browser
// Author: Stefan Löffler & Jonathan Kew
// Version: 0.1.1
// Date: 2011-07-26
// Script-Type: standalone

function basename(str) {
	var base;
	
	base = str.replace(/\/[^\/]*$/, "");

	if(base == "") {
		if(TW.platform() == "Windows") // should never happen; there should always be <letter>: left
			base = "C:/"
		else
			base = "/";
	}
	return base;
}

TW.launchFile(basename(TW.target.fileName));
undefined;

