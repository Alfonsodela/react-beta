import UserStatus from './UserStatus';
import style from './UserRow.module.css';
import { useState } from 'react';

const UserRow = ({ name, active, role }) => {
	
const [activeState, setActiveState] = useState(active);

	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={activeState}/>
			</div>
			<div className={style.role}>
				<span>{role}</span>
			</div>
			<button className={style.btn} onClick={() => {
				setActiveState(!activeState)
			}}>
				{active ? 'Desactivar' : 'Activar'}
			</button>
		</div>
	);
};

export default UserRow;
