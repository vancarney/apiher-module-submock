module.exports = {
	init: function(app, opts, callback) {
		this.app = app;
		callback(null, true);
	},
	getApp: function() {
		return this.app;
	}
};
