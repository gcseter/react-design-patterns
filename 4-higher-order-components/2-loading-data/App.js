import { UserInfo } from './UserInfo';
import { withUser } from './withUser';

const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
	return (
		<UserInfoWithLoader />
	);
}

export default App;
