import { ToDo } from './components/ToDo';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { Title } from './components/title';

function App() {
	return (
		<div className="bg-gray-800 min-h-screen h-full font-inter text-gray-300 flex items-center justify-center py-20 px-5">
			<div className="container flex-col max-w-xl">
				<Title />
				<ToDoInput />
				<ToDoList>
					{/*si uitilizo prop con PALABRA REESERVADA CHILDREN podemos ==> */}
					<ToDo />
					<ToDo />
					<ToDo />
					<ToDo />
					<ToDo />
				</ToDoList>
			</div>
		</div>
	);
}

export default App;
