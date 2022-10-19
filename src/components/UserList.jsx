import UserRow from './UserRow';
import style from './UserList.module.css'

const UserList = ({ users, children }) => {
	const usersRendered = users.map((item, index) => (
		<UserRow key={item.name} {...item} />
	));

	return (
		<div className={style.list}>
			{children} 
            {usersRendered}
		</div>
	);
};

export default UserList;