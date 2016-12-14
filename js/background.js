function init() {
	var checker = new crystalpotChecker() ;
	checker.start()
}

function openOptionsPageInTab(){
	var url = chrome.extension.getURL("options.html");
	chrome.tabs.create({url: url});
	return false ;
}

function playSound(){
	soundControl.play();
}

window.addEventListener("load", init);
