import { useMutation } from '@apollo/client';
import { IconButton } from '@bluebase/components';
import { useNavigation, useTheme } from '@bluebase/core';
import React, { useCallback } from 'react';

import { DeleteTaskMutationMutation } from '../../graphql-types';
import { TasksCollectionQuery } from '../TaskList/TasksCollectionQuery.graphql';
import { DeleteTaskMutation } from './DeleteTaskMutation.graphql';

export interface TaskDeleteButtonProps {
	id: string
}

export const TaskDeleteButton = (props: TaskDeleteButtonProps) => {
	const { id } = props;
	const { theme } = useTheme();
	const { navigate } = useNavigation();

	const onCompleted = useCallback(() => {
		navigate('TasksApp');
	}, []);

	const [deleteTask, { loading }] = useMutation<DeleteTaskMutationMutation>(DeleteTaskMutation, {
		onCompleted,
		refetchQueries: [TasksCollectionQuery],
		awaitRefetchQueries: true,
		variables: { id }
	});

	return (
		<IconButton
			name="delete"
			onPress={deleteTask}
			color={theme.palette.text.secondary}
			disabled={loading}
		/>
	);
};

TaskDeleteButton.displayName = 'TaskDeleteButton';