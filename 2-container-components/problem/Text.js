import React, { useState, useEffect } from 'react';

export const Text = () => {
	const [message, setMessage] = useState(null);

	useEffect(() => {
		const item = localStorage.getItem('message');
		setMessage(item);
	}, []);

	return message ? (
		<h3>{message}</h3>
	) : <p>Loading...</p>;
}