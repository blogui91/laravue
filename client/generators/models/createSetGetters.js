module.exports = {
	create(attributes) {
		attributes = attributes.split(',');
		attributes = attributes.filter(function(attr) {
			if (attr !== null && typeof attr !== 'undefined') {
				return attr;
			}
		});

		attributes = attributes.map(function(attr) {
			var func_str = `set ${attr}(${attr}){
			this.attributes.${attr} = ${attr};
			}\n\nget ${attr}(){\nreturn this.attributes.${attr};\n
			}\n`;

			return func_str;
		});

		//convert array to string and remove its commas
		attributes = attributes.join(',')
			.replace(new RegExp(',', 'g'), '\n');

		return attributes;

	}
}