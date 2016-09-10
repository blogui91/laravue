export
default {
	getRandomId(length) {
		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz_'.split('');

		if (!length) {
			length = Math.floor(Math.random() * chars.length);
		}

		var str = '';
		for (var i = 0; i < length; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;

	},
	getRandomNumericId(length) {
		var chars = '0123456789'.split('');

		if (!length) {
			length = Math.floor(Math.random() * chars.length);
		}

		var str = '';
		for (var i = 0; i < length; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}
}