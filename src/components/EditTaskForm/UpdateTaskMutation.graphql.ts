import gql from 'graphql-tag';

export const UpdateTaskMutation = gql`
	mutation UpdateTaskMutation(
		$id: UUID!
		$title: String
		$description: String
		$completed: Boolean
	) {
		updatetasksCollection(
			filter: { id: { eq: $id } }
			set: {
				title: $title,
				description: $description,
				completed: $completed
			}
		) {
			affectedCount
			records {
				id
				title
				description
				completed
			}
		}
	}
`;
