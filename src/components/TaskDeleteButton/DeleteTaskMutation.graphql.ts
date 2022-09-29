import gql from 'graphql-tag';

export const DeleteTaskMutation = gql`
	mutation DeleteTaskMutation($id: UUID!) {
		deleteFromtasksCollection(filter: { id: { eq: $id } }) {
			records {
				id
			}
		}
	}
`;