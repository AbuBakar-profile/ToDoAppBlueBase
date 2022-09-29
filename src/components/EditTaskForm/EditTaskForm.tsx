import { getComponent, useNavigation } from '@bluebase/core';
import { JsonGraphqlFormProps } from '@bluebase/plugin-json-graphql-components';
import React, { useCallback } from 'react';

import {
	TasksCollectionQueryQuery,
	TasksCollectionQueryQueryVariables,
	TasksInsertInput,
	UpdateTaskMutationMutationVariables
} from '../../graphql-types';
import { TasksCollectionQuery } from '../TaskList/TasksCollectionQuery.graphql';
import { UpdateTaskMutation } from './UpdateTaskMutation.graphql';

const JsonGraphqlForm = getComponent<JsonGraphqlFormProps<any>>('JsonGraphqlForm');

export interface EditTaskFormProps {
	id: string;
}

export const EditTaskForm = (props: EditTaskFormProps) => {
	const { navigate } = useNavigation();
	const { id } = props;

	const onSuccess = useCallback(() => {
		navigate('TasksApp');
	}, []);

	const mapQueryDataToInitialValues = useCallback(
		(data: TasksCollectionQueryQuery) => {
			return data?.tasksCollection?.edges[0]?.node;
		}, []);

	const mapFormValuesToMutationVariables = useCallback(
		(task: TasksInsertInput): UpdateTaskMutationMutationVariables => {
			return {
				id: task.id,
				title: task.title,
				description: task.description,
				completed: task.completed
			};
		}, []);

	const queryVariables: TasksCollectionQueryQueryVariables = {
		filter: {
			id: { 'eq': id }
		}
	};

	return (
		<JsonGraphqlForm
			query={{
				query: TasksCollectionQuery,
				variables: queryVariables
			}}
			mutation={{
				mutation: UpdateTaskMutation,
				refetchQueries: [TasksCollectionQuery],
				awaitRefetchQueries: true
			}}
			onSuccess={onSuccess}
			mapFormValuesToMutationVariables={mapFormValuesToMutationVariables}
			mapQueryDataToInitialValues={mapQueryDataToInitialValues}
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
						name: 'submit',
						title: 'Update Task',
						type: 'submit',
					},
				],
			}}
		/>
	);
};

EditTaskForm.displayName = 'EditTaskForm';