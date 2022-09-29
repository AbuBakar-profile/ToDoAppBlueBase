import { getComponent, useNavigation } from '@bluebase/core';
import { JsonGraphqlFormProps } from '@bluebase/plugin-json-graphql-components';
import React, { useCallback } from 'react';

import { CreateTaskMutationMutationVariables, TasksInsertInput } from '../../graphql-types';
import { CreateTaskMutation } from './CreateTaskMutation.graphql';

const JsonGraphqlForm = getComponent<JsonGraphqlFormProps<TasksInsertInput>>('JsonGraphqlForm');

export interface CreateTaskFormProps {}

export const CreateTaskForm = (props: CreateTaskFormProps) => {
	const { navigate } = useNavigation();

	const onSuccess = useCallback(() => {
		navigate('TasksApp');
	}, []);

	const mapFormValuesToMutationVariables = useCallback(
		(task: TasksInsertInput): CreateTaskMutationMutationVariables => {
			return { tasks: [task] };
		}, []);

	return (
		<JsonGraphqlForm
			mutation={{
				mutation: CreateTaskMutation
			}}
			onSuccess={onSuccess}
			mapFormValuesToMutationVariables={mapFormValuesToMutationVariables}
			{...props}
			schema={{
				validateOnBlur: false,
				validateOnChange: false,

				fields: [
					{
						autoFocus: true,
						label: 'Title',
						name: 'title',
						required: true,
						type: 'text',
					},
					{
						label: 'Description',
						name: 'description',
						type: 'text',
					},
					{
						label: 'Completed',
						name: 'completed',
						type: 'checkbox',
					},
					{
						name: 'status',
						type: 'status',
					},
					{
						fullWidth: true,
						name: 'submit',
						title: 'Create Task',
						type: 'submit',
					},
				],
			}}
		/>
	);
};

CreateTaskForm.displayName = 'CreateTaskForm';