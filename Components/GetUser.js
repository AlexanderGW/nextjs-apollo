import { useLazyQuery } from "@apollo/client";
import { useRef, useState } from "react";
import { USER_BY_ID } from "../GraphQL/Queries";

function fetchUser() {
	
}

function GetUser() {
	const userIdSearch = useRef();

	const [
		fetchUser,
		{ data: userSearchedData, error: userError }
	] = useLazyQuery(USER_BY_ID);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error, is the server running?</p>;

	console.log(userSearchedData);

	return (
		<div>
			<input 
				type="text"
				defaultValue="3"
				ref={userIdSearch}
			/>
			<button onClick={() => fetchUser({
				variables: {
					userId: userIdSearch.current.value
				}
			})}>Fetch user</button>
			<div>{userSearchedData?.user && (
				<div>
					<p>{userSearchedData.user.id}: {userSearchedData.user.name}</p>
				</div>
			)}</div>
		</div>
	);
}

export default GetUser;