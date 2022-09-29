import gql from 'graphql-tag';

export const CreateTaskMutation = gql`
	mutation CreateTaskMutation ($tasks: [tasksInsertInput!]!){
		insertIntotasksCollection(objects: $tasks) {
			records {
				id
				title
				description
				completed
			}
		}
	}
`;