import { gql } from "@apollo/client";

export const USERS_SHORT = gql`
	query UsersShort {
		users {
			id
			name
		}
	}
`;

export const USER_BY_ID = gql`
	query User($userId: ID!) {
		user(id: $userId) {
			id,
			name
		}
	}
`;