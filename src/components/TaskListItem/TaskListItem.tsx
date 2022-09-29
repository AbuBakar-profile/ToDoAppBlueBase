import { Checkbox, List } from '@bluebase/components';
import { getComponent, useNavigation } from '@bluebase/core';
import { PlaceholderListItemProps } from '@bluebase/plugin-rn-placeholder';
import React, { useCallback } from 'react';

import { Tasks } from '../../graphql-types';

const PlaceholderListItem = getComponent<PlaceholderListItemProps>('PlaceholderListItem');

export interface TaskListItemProps extends Tasks {
	loading?: boolean;
}

export const TaskListItem = (props: TaskListItemProps) => {
	const {
		id,
		title,
		description,
		completed,
		loading,
	} = props;

	if (loading === true) {
		return <PlaceholderListItem avatar description variant="icon" />;
	}

	const { push } = useNavigation();

	const onPress = useCallback(() => {
		push('EditTask', { taskId: id });
	}, [id]);

	return (
		<List.Item
			title={title}
			description={description}
			left={<Checkbox checked={!!completed} disabled />}
			onPress={onPress}
		/>
	);
};

TaskListItem.defaultProps = {};
TaskListItem.displayName = 'TaskListItem';