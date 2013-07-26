// TeXworksScript
// Title: Open root file
// Description: Attempts to open the root TeX file
// Author: Stefan Löffler
// Version: 0.0.2
// Date: 2013-07-26
// Script-Type: standalone
// Context: TeXDocument

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

function isAbsolute(path) {
	if (path.length == 0)
		return false;
	
	if (TW.platform() == "Windows") {
		return path.matches(/([A-Z]:\/|\/\/)/);
	}
	else
		return (path[0] == "/");
}


var rootRE = new RegExp("% *!TEX +root *= *([^\n]+)\n", "i")
var matched = rootRE.exec(TW.target.text)

if (matched && matched[1]) {
	var filename = matched[1];
	
	if (!isAbsolute(filename))
		filename = basename(TW.target.fileName) + "/" + filename;
	retVal = TW.app.openFileFromScript(filename, TW);
}

undefined;
