import { SettingsPageProps } from '@bluebase/plugin-settings-app';

// import TaskSettingsForm from './components/TaskSettingsForm';

export const filters = {
	'bluebase.plugin.setting-app.pages': [
		{
			key: 'bluebase-settings-todo-page',
			priority: 20,

			value: (pages: SettingsPageProps[]) => [
				{
					name: 'TaskSettings',
					path: 'task',

					options: {
						drawerIcon: { type: 'icon', name: 'checkbox-multiple-marked' },
						title: 'Tasks',
					},

					// items: [
					// 	{
					// 		name: 'task-settings',
					// 		component: TaskSettingsForm,
					// 		title: 'Task Settings',
					// 		description: 'Configure your tasks',
					// 	},
					// ],
				},
				...pages,
			],
		},
	],
};