import { createPlugin } from '@bluebase/core';

import { ToDoAppIcon } from './components/ToDoAppIcon';
import { routes } from './routes';
import { screens } from './screens';
import { lang } from './lang';
import { filters } from './filter';

// Plug-ins
export default createPlugin({
	key: 'tasks',
	name: 'Tasks',
	description: 'A todo app made with BlueBase framework.',

	// For Settings & Configuration
	// defaultConfigs: {
	// 	'tasks.itemsPerPage': 10,
	// },

	// For Theming
	// assets: {
	// 	NoTasks: require('../assets/no-tasks-light.png'),
	// },
	assets: {
		NoTasks_dark: require('../assets/no-tasks-dark.png'),
		NoTasks_light: require('../assets/no-tasks-light.png'),
	},

	// For Language & Filters
	// filters: {
	// 	...lang,
	// },
	filters: {
		// ...filters,
		...lang,
	},

	components: {
		// Components
		ToDoAppIcon,

		// Screens
		...screens,
	},

	icon: {
		component: 'ToDoAppIcon',
		type: 'component',
	},

	indexRoute: 'TasksApp',

	routes,
});
