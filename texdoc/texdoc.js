// TeXworksScript
// Title: TeXdoc
// Description: Allows you to access the TeX documentation through the texdoc program
// Author: Stefan Löffler
// Version: 0.0.1
// Date: 2013-02-25
// Script-Type: standalone

str = TW.getText(TW.target, "TeXdoc documentation", "Please specify which documentation you are looking for:");

if (typeof(str) == "string" && str != "") {
	retVal = TW.system("texdoc " + str);
	if (retVal["status"] != 2) {
		// Not SystemAccess_PermissionDenied
		if (retVal["output"] != "") {
			TW.information(TW.target, "TeXdoc output", retVal["output"]);
		}
	}
	else {
		// Show "system command disabled" message
		TW.result = retVal["message"];
	}
}

