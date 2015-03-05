if(!localStorage.getItem("appid") || !localStorage.getItem("jsid")){
	var appid = window.navigator.notification.prompt("appid");
	var jsid  = window.navigator.notification.prompt("jsid");
	while(appid.length != 40 || jsid.lenght != 40){
		appid = prompt("appid");
		jsid  = prompt("jsid");	
	}
	localStorage.setItem("appid",appid);
	localStorage.setItem("jsid",jsid);
	Parse.initialize(localStorage.setItem("appid"),localStorage.setItem("jsid"));
}
else {
	Parse.initialize(localStorage.setItem("appid"),localStorage.setItem("jsid"));
}
function sendshit(){
	var BOK = Parse.Object.extend("BOK");
	var bok = new BOK();
	bok.save({DATE: new Date()}).then(function(object) {
	  alert("Nice one!");
	});
}