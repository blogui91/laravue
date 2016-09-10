module.exports = {
	create(attributes) {
		attributes = attributes.split(',');
		attributes = attributes.filter(function(attr) {
			if (attr !== null && typeof attr !== 'undefined') {
				return attr;
			}
		});

		var attr_obj = {};
		attributes.map(function(attr) {
			attr_obj[attr] = null;
			return attr;
		});
		return JSON.stringify(attr_obj);
	}
}