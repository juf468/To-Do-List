import { useState } from 'react';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { Title } from './components/title';

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'ejemplo 1',
			complete: false,
		},
		{ id: 2, title: 'ejemplo 2', complete: false },
		{
			id: 3,
			title: 'ejemplo 3',
			complete: false,
		},
		{ id: 4, title: 'ejemplo 4', complete: false },
	]);
	return (
		<div className="bg-gray-800 min-h-screen h-full font-inter text-gray-300 flex items-center justify-center py-20 px-5">
			<div className="container flex-col max-w-xl">
				<Title />
				<ToDoInput />
				<ToDoList todos={todos} />
			</div>
		</div>
	);
}

export default App;
