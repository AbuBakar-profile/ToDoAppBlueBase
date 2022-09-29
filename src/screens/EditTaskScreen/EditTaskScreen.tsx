import { useNavigation } from '@bluebase/core';
import React from 'react';

import EditTaskForm from '../../components/EditTaskForm';

export const EditTaskScreen = () => {
	const { getParam } = useNavigation();
	const taskId = getParam('taskId', null);

	return (
		<EditTaskForm id={taskId} />
	);
};

EditTaskScreen.displayName = 'EditTaskScreen';