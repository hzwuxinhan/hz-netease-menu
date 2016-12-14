function init() {
	var checker = new crystalpotChecker() ;
	chrome.alarms.getAll(function (alarms){
		if(alarms.length>0) {
			chrome.alarms.clearAll(function(){
				checker.start();
			});
		}else{
			checker.start();
		}
	})
}


window.addEventListener("load",function(){
	init();
	window.setInterval(init,1000*60*60);
});
