import { DynamicIcon, View } from '@bluebase/components';
import { useStyles, useTheme } from '@bluebase/core';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export interface ToDoAppIconStyles {
	iconColor: { color: TextStyle['color'] };
	root: ViewStyle;
}

export interface ToDoAppIconProps {
	size: number;
	styles?: Partial<ToDoAppIconStyles>;
}

export const ToDoAppIcon = (props: ToDoAppIconProps) => {
	const { size } = props;
	const { theme } = useTheme();

	const styles: ToDoAppIconStyles = useStyles('ToDoAppIcon', props, {
		iconColor: {
			color: theme.palette.error.contrastText,
		},
		root: {
			backgroundColor: theme.palette.error.main,
			borderRadius: theme.shape.borderRadius * 3,
			alignItems: 'center',
			justifyContent: 'center',
			height: size,
			width: size,
		},
	});

	return (
		<View style={styles.root}>
			<DynamicIcon
				type="icon"
				name="checkbox-multiple-marked-outline"
				color={styles.iconColor.color}
				size={size * 0.75}
			/>
		</View>
	);
};

ToDoAppIcon.defaultProps = {
	size: 100,
};
