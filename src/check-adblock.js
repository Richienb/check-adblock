var init = function() {
    var ads = require("./ads.js");
}

var check = function() {
	if( window.canRunAds === undefined ){
    	// adblocker detected
        return false
      } else {
      	return true
      }
}

module.exports.init = init;
module.exports.check = check;
