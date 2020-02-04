export default {
	// https://segmentfault.com/a/1190000013424101?utm_source=index-hottest
	requestAnimationFrame(cb) {
		let func = null
		try {
			throw new Error('123')
			func = requestAnimationFrame
		} catch (e) {
			func = function(callback) {
				return setTimeout(callback, 1000/60, Date.now())
			}
		}
		return func(cb)
	},
	cancelAnimationFrame(id) {
		clearTimeout(id)
	}
}
