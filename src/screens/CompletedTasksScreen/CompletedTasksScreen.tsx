import React from 'react';

import TaskList from '../../components/TaskList';

export const CompletedTasksScreen = () => {
	return (
		<TaskList completed />
	);
};

CompletedTasksScreen.displayName = 'CompletedTasksScreen';