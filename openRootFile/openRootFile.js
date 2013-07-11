// TeXworksScript
// Title: Open root file
// Description: Attempts to open the root TeX file
// Author: Stefan Löffler
// Version: 0.0.1
// Date: 2013-07-09
// Script-Type: standalone
// Context: TeXDocument

var rootRE = new RegExp("% *!TEX +root *= *([^\n]+)\n")
matched = rootRE.exec(TW.target.text)

if (matched && matched[1]) {
	retVal = TW.app.openFileFromScript(matched[1], TW);
}

undefined;
