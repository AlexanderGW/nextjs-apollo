const { gql } = require("apollo-server-express");

const typeDefs = gql`
	# Types
	type User {
		id: ID!
		name: String!
		age: Int
		state: Boolean!
	}

	# Queries
	type Query {
		users: [User]!
		user(id: ID!): User
	}

	# Mutations
	type Mutation {
		createUser(
			name: String!,
			age: Int!,
			state: Boolean!
		): User!
	}
`;

module.exports = { typeDefs };