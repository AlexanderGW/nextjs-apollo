import { useQuery } from "@apollo/client";
import { USERS_SHORT } from "../GraphQL/Queries";

function ActiveUsers() {
	const { loading, error, data } = useQuery(USERS_SHORT);

	if (loading)
		return <p>Loading...</p>;
		
	if (error)
		return <p>Error, is the server running?</p>;

	// console.log(data.users);

	return data.users.map(({ id, name }) => (
		<div key={id}>
			<p>
				{id}: {name}
			</p>
		</div>
	));
}

export default ActiveUsers;