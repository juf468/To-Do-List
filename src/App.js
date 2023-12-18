import { useState } from 'react';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { Title } from './components/title';

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'ejemplo 1',
			completed: false,
		},
		{ id: 2, title: 'ejemplo 2', completed: false },
		{
			id: 3,
			title: 'ejemplo 3',
			completed: false,
		},
		{ id: 4, title: 'ejemplo 4', completed: false },
	]);

	const addTodo = (title) => {
		const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

		const newTodo = {
			id: lastId + 1,
			title,
			completed: false,
		};

		const ToDoList = [...todos];
		ToDoList.push(newTodo);
		setTodos(ToDoList);
	};
	const handleSetComplete = (id) => {
		const updatedList = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedList);
	};

	const handleDelete = (id) => {
		const updatedList = todos.filter((todo) => todo.id !== id);
		setTodos(updatedList);
	};
	return (
		<div className="bg-gray-800 min-h-screen h-full font-inter text-gray-300 flex items-center justify-center py-20 px-5">
			<div className="container flex-col max-w-xl">
				<Title />
				<ToDoInput addTodo={addTodo} />
				<ToDoList
					todos={todos}
					handleSetComplete={handleSetComplete}
					handleDelete={handleDelete}
				/>
			</div>
		</div>
	);
}

export default App;
