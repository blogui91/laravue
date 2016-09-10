import vue_components from './vue_components.js'
var app = {
	install(Vue) {
		vue_components.forEach((dependency) => {
			if (typeof Vue.options.components[dependency.name] === 'undefined') { //Prevents of warning component already installed 
				Vue.component(dependency.name, require(`${dependency.path}`));
			}
		});
	},
	installedDependencies() {
		return vue_components.map((component) => {
			return component.name
		});
	}
}

export
default app