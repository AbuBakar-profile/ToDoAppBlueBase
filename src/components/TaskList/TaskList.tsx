import { QueryResult } from '@apollo/client';
import { Divider } from '@bluebase/components';
import { getComponent, useConfig } from '@bluebase/core';
import { GraphqlConnection, GraphqlListProps } from '@bluebase/plugin-json-graphql-components';
import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import { Tasks, TasksCollectionQueryQuery, TasksCollectionQueryQueryVariables } from '../../graphql-types';
import TaskListEmptyState from '../TaskListEmptyState';
import { TaskListItem, TaskListItemProps } from '../TaskListItem';
import { TasksCollectionQuery, TasksCollectionQueryUpdateQueryFn } from './TasksCollectionQuery.graphql';

const GraphqlList = getComponent<GraphqlListProps<TaskListItemProps, TasksCollectionQueryQuery>>('GraphqlList');

function mapQueryResultToConnection(result: QueryResult<TasksCollectionQueryQuery>) {
	return result.data?.tasksCollection as GraphqlConnection<Tasks>;
}

function renderItem({ item }: ListRenderItemInfo<TaskListItemProps>) {
	return <TaskListItem {...item} />;
}

const renderDivider = () => <Divider inset />;

export interface TaskListProps {
	completed: boolean;
}

export const TaskList = (props: TaskListProps) => {
	const { completed } = props;
	const itemsPerPage = 10;
	// const [itemsPerPage] = useConfig('tasks.itemsPerPage');

	const variables: TasksCollectionQueryQueryVariables = {
		filter: {
			completed: { 'eq': completed }
		}
	};

	return (
		<GraphqlList
			key="task-list"
			pagination="infinite"
			itemsPerPage={itemsPerPage}
			query={TasksCollectionQuery}
			updateQueryInfinitePagination={TasksCollectionQueryUpdateQueryFn}
			mapQueryResultToConnection={mapQueryResultToConnection}
			renderItem={renderItem}
			ItemSeparatorComponent={renderDivider}
			ListEmptyComponent={TaskListEmptyState}
			queryOptions={{
				variables
			}}
		/>
	);
};

TaskList.displayName = 'TaskList';