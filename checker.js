
function crystalpotChecker () {

	this.requestTimer = requestTimer;

	this.handleSuccess = function (data) {};
	this.handleError = function (err) {};

	this.start = function () {
		this.init();
	}
	this.init = function () {
		this.remindTime = [[11,35],[17,35]];
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

chrome.alarms.onAlarm.addListener(function() {
  show();
});

chrome.notifications.onButtonClicked.addListener(function(notificationId,buttonIndex){
	chrome.notifications.clear(notificationId);
	chrome.tabs.create({
		url:"http://crystalpot.cn/menus/0"
	})
})

function show() {
	chrome.notifications.create("notification",{
	  	type:"basic",
		iconUrl: 'images/icon48.png',
		title:"吃饭啦！！！",
		message:"每天都要喊吃饭，心好累",
		contextMessage:"👇👇👇👇👇👇",
		buttons:[{
			title:"                        点击查看今日菜单"
		}]
  	});
}

// show()



