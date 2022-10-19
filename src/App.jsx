import UserList from './components/UserList'

const USERS = [
	{
		name: 'Alfonso López de la Manzanara',
		active: true,
		role: 'Estudiante'
	},
	{
		name: 'Emely Alonzo',
		active: true,
		role: 'Estudiante'
	},
	{
		name: 'Pablo Castellanos',
		active: false,
		role: 'Profesor'
	}
];



const App = () => (
	<UserList users={USERS}>
		<h1>Listado de Usuarios</h1>
	</UserList>
);

export default App;
