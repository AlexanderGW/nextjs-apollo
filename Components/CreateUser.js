import { useMutation } from "@apollo/client";
import { useRef } from "react";

import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";

import { USERS_SHORT } from "../GraphQL/Queries";

function CreateUser() {
	const name = useRef();
	const age = useRef();
	const state = useRef();

	const [
		createUser,
		{ error }
	] = useMutation(CREATE_USER_MUTATION);

	if (error) {
		console.log(error);
	}

	return (
		<div>
			<input 
				type="text"
				ref={name}
			/>
			<input 
				type="number"
				min="0"
				defaultValue="18"
				ref={age}
			/>
			<input 
				type="number"
				min="0"
				max="1"
				defaultValue="0"
				ref={state}
			/>
			<button onClick={() => {
				const result = createUser({
					variables: {
						name: name.current.value,
						age: Number(age.current.value),
						state: state.current.value == 1 ? true : false
					},
					refetchQueries: {
						USERS_SHORT
					}
				});
				// console.log(result);
			}}>Create user</button>
		</div>
	);
}

export default CreateUser;