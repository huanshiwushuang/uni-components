export default {
	requestAnimationFrame(...params) {
		// https://segmentfault.com/a/1190000013424101?utm_source=index-hottest
		var lastTime = 0;
		let func = null
		try {
			func = requestAnimationFrame
		} catch (e) {
			console.log(e)
			func = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = setTimeout(function() {
					callback(currTime + timeToCall);
				}, timeToCall)
				lastTime = currTime + timeToCall;
				return id;
			}
		}
		console.log('func')
		console.log(func)
		
		return func(...params)
	},
	cancelAnimationFrame(id) {
		clearTimeout(id);
	}
}
