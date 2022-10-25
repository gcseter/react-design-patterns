import { UserInfo } from './UserInfo';
import { withEditableUser } from './withEditableUser';

const UserInfoWithLoader = withEditableUser(UserInfo, '234');

function App() {
	return (
		<UserInfoWithLoader />
	);
}

export default App;
