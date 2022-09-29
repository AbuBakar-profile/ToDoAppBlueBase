import React from 'react';

import { TaskList } from '../../components/TaskList';

export const PendingTasksScreen = () => {
	return (
		<TaskList completed={false} />
	);
};

PendingTasksScreen.displayName = 'PendingTasksScreen';