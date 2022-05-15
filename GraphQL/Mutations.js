import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
	mutation createUser(
		$name: String!,
		$age: Int!,
		$state: Boolean!,

	) {
		createUser(
			name: $name,
			age: $age,
			state: $state,
		) {
			id,
			name,
			age,
			state
		}
	}
`;