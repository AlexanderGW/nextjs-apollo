const { users } = require("../FakeData");
const _ = require("lodash");
const { v4: uuidv4 } = require("uuid");

const resolvers = {
	Query: {
		users: () => {
			return users;
		},
		user: (parent, args) => {
			const id = args.id;
			const user = _.find(users, { id: String(id) });
			return user;
		},
	},

	Mutation: {
		createUser(parent, args) {
			const newUser = args;
			newUser.id = uuidv4();
			users.push(newUser);
			return newUser;
		}
	}
}

module.exports = { resolvers };