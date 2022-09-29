import { IconButton } from '@bluebase/components';
import { useNavigation, useTheme } from '@bluebase/core';
import React, { useCallback } from 'react';

export interface TaskCreateButtonProps {}

export const TaskCreateButton = (_props: TaskCreateButtonProps) => {
	const { theme } = useTheme();
	const { navigate } = useNavigation();

	const onPress = useCallback(() => {
		navigate('CreateTask');
	}, []);

	return (
		<IconButton
			name="plus"
			onPress={onPress}
			color={theme.palette.text.secondary}
		/>
	);
};