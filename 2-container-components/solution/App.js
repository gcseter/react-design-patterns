import axios from 'axios';
import { DataSource } from './DataSource';
import { UserInfo } from './UserInfo';
import { Text } from './Text';

const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}

const getLocalStorageData = key => () => {
	return localStorage.getItem(key);
}

function App() {
	return (
		<>
			<DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
				<UserInfo />
			</DataSource>
			<DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
				<Text />
			</DataSource>
		</>
	);
}

export default App;
