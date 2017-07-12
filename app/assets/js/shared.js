let instance;

class Shared {

	constructor() {
		if (!instance) instance = this;
		return instance;
	}

	set(key, value) {
		this[key] = value;
	}

	get(key) {
		return this[key];
	}
}

module.exports = Shared;