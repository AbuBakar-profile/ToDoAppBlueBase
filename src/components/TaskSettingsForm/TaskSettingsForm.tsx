import { getComponent, useConfig } from '@bluebase/core';
import { JsonFormProps } from '@bluebase/plugin-json-schema-components';
import { FormikHelpers } from 'formik';
import React from 'react';

interface TaskSettingsFormValues {
	itemsPerPage: number;
}

const JsonForm = getComponent<JsonFormProps<TaskSettingsFormValues>>('JsonForm');

export interface TaskSettingsFormProps {}

export const TaskSettingsForm = (props: TaskSettingsFormProps) => {
	const [itemsPerPage, setItemsPerPage] = useConfig('tasks.itemsPerPage');

	return (
		<JsonForm
			{...props}
			schema={{
				validateOnBlur: false,
				validateOnChange: false,

				fields: [
					{
						autoFocus: true,
						label: 'Items per page',
						name: 'itemsPerPage',
						required: true,
						type: 'number',
					},
					{
						schema: { component: 'Divider' },
						type: 'component',
					},
					{
						direction: 'right',
						name: 'form-actions',
						type: 'inline',

						fields: [
							{
								name: 'reset',
								type: 'reset',
							},
							{
								name: 'submit',
								title: 'Save',
								type: 'submit',
							},
						],
					},
				],

				initialValues: {
					itemsPerPage,
				},

				onSubmit: (values: TaskSettingsFormValues, helpers: FormikHelpers<TaskSettingsFormValues>) => {
					const { setSubmitting } = helpers;
					setItemsPerPage(values.itemsPerPage);

					// Wait one second and then setSubmitting to false
					setTimeout(() => setSubmitting(false), 1000);
				}
			}}
		/>
	);
};

TaskSettingsForm.displayName = 'TaskSettingsForm';