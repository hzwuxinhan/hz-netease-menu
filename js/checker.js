
function crystalpotChecker () {

	this.requestTimer = requestTimer;
	this.startRequest = startRequest;

	this.handleSuccess = function (data) {};
	this.handleError = function (err) {};

	this.start = function () {
		this.init();
	}
	this.init = function () {
		this.requestTimeout = 1*1000;
		this.remindTime = [[11,30],[17,30]];
		this.requestTimer(this);
	};
}

function requestTimer (that) {
	var remindTime = that.remindTime;
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	remindTime.forEach(function(oneTime,index){
		var timers = new Date(year+"/"+month+"/"+day+" "+oneTime[0]+":"+oneTime[1]).getTime();
		if(timers < now.getTime()) return;
		chrome.alarms.create("remind"+index,{"when":timers})
	})
}

function startRequest (){
	// var html = $.ajax({ url: "http://crystalpot.cn/menus/0", async: false }).responseText;    
	// $(".content").append(html);
	console.log("end")
} ;

chrome.alarms.onAlarm.addListener(function() {
  console.log("time up")
});




