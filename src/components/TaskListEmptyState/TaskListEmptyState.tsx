import { ComponentState, ComponentStateProps } from '@bluebase/components';
import { useIntl, useNavigation } from '@bluebase/core';
import React, { useCallback } from 'react';

export interface TaskListEmptyStateProps extends ComponentStateProps {}

export const TaskListEmptyState = (props: TaskListEmptyStateProps) => {
	const { __ } = useIntl();
	const { navigate } = useNavigation();

	const goToCreate = useCallback(() => navigate('CreateTask'), []);

	return (
		// <ComponentState
		// 	title={__('No tasks')}
		// 	description={__('Start by creating a new task')}
		// 	actionTitle={__('Create Task')}
		// 	imageProps={{ resizeMode: 'contain' }}
		// 	actionOnPress={goToCreate}
		// 	actionProps={{ size: 'small', color: 'success', variant: 'outlined' }}
		// 	{...props}
		// />
		<ComponentState
			imageSource="NoTasks"
			title={__('No tasks')}
			imageProps={{ resizeMode: 'contain' }}
			description={__('Start by creating a new task')}
			actionTitle={__('Create Task')}
			actionOnPress={goToCreate}
			actionProps={{ size: 'small', color: 'success', variant: 'outlined' }}
			{...props}
		/>
	);
};

TaskListEmptyState.displayName = 'TaskListEmptyState';
