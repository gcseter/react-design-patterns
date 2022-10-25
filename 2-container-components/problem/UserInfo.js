import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserInfo = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await axios.get('/current-user');
			setUser(response.data);
		})();
	}, []);

	return user ? (
		<>
			<h3>{user.name}</h3>
			<p>Age: {user.age} years</p>
			<p>Hair Color: {user.hairColor}</p>
			<h3>Hobbies:</h3>
			<ul>
				{user.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
			</ul>
		</>
	) : <p>Loading...</p>;
}