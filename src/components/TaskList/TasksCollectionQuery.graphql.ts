import { FetchMoreOptions } from '@apollo/client';
import gql from 'graphql-tag';

import { TasksCollectionQueryQuery } from '../../graphql-types';

export const TasksCollectionQuery = gql`
	query TasksCollectionQuery(
		$filter: tasksFilter
		$first: Int
		# $last: Int
		# $before: Cursor
		$after: Cursor
	) {
		tasksCollection(
			filter: $filter
			first: $first
			# last: $last
			# before: $before
			after: $after
		) {
			edges {
	      cursor
				node {
					id
					title
					completed
				}
			}
			pageInfo {
				endCursor
				hasNextPage
				hasPreviousPage
				startCursor
			}
		}
	}
`;

export const TasksCollectionQueryUpdateQueryFn: FetchMoreOptions<TasksCollectionQueryQuery>['updateQuery'] = (
	previousResult,
	{ fetchMoreResult }
) => {
	if (!fetchMoreResult) {
		return previousResult;
	}

	const prevEdges = previousResult.tasksCollection?.edges || [];
	const newEdges = fetchMoreResult.tasksCollection?.edges || [];

	return {
		// Put the new items at the end of the list and update `pageInfo`
		// so we have the new `endCursor` and `hasNextPage` values
		tasksCollection: {
			...previousResult.tasksCollection,

			edges: [...prevEdges, ...newEdges],

			pageInfo: {
				...previousResult.tasksCollection?.pageInfo,

				endCursor: fetchMoreResult.tasksCollection?.pageInfo?.endCursor,
				hasNextPage: !!fetchMoreResult.tasksCollection?.pageInfo?.hasNextPage,
				hasPreviousPage: !!fetchMoreResult.tasksCollection?.pageInfo?.hasPreviousPage,
				startCursor: fetchMoreResult.tasksCollection?.pageInfo?.startCursor,
			},
		},
	};
};