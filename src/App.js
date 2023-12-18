import { useEffect, useState } from 'react';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { Title } from './components/title';

function App() {
	const [todos, setTodos] = useState([]);
	const [activeFilter, setActiveFilter] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState(todos); //copia de la lista

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

	const handleClearComplete = () => {
		const updatedList = todos.filter((todo) => !todo.completed);
		setTodos(updatedList);
	};

	const showAllTodos = () => {
		setActiveFilter('all');
	};

	const showActiveTodos = () => {
		setActiveFilter('active');
	};

	const showCompletedTodos = () => {
		setActiveFilter('completed');
	};

	useEffect(() => {
		if (activeFilter === 'all') {
			setFilteredTodos(todos);
		} else if (activeFilter === 'active') {
			const activeTodos = todos.filter((todo) => todo.completed === false);
			setFilteredTodos(activeTodos);
		} else if (activeFilter === 'completed') {
			const completedTodos = todos.filter((todo) => todo.completed === true);
			setFilteredTodos(completedTodos);
		}
	}, [activeFilter, todos]);
	return (
		<div className="bg-gray-800 min-h-screen h-full font-inter text-gray-300 flex items-center justify-center py-20 px-5">
			<div className="container flex-col max-w-xl">
				<Title />
				<ToDoInput addTodo={addTodo} />
				<ToDoList
					todos={filteredTodos}
					activeFilter={activeFilter}
					handleSetComplete={handleSetComplete}
					handleDelete={handleDelete}
					handleClearComplete={handleClearComplete}
					showAllTodos={showAllTodos}
					showActiveTodos={showActiveTodos}
					showCompletedTodos={showCompletedTodos}
				/>
			</div>
		</div>
	);
}

export default App;
