import vue_components from '../vue_components.js'
export
default {
	install(Vue) {
		vue_components.forEach((dependency) => {
			try {
				Vue.component(dependency.name, require(`${dependency.path}`));
			} catch (e) {
				console.warning(e)
			}
		});
	},
	installedDependencies() {
		return vue_components.map((component) => {
			return component.name
		});
	}
}