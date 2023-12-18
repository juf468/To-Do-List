import { ToDo } from '../ToDo/ToDo';
import { TodoFilters } from '../TodoFilters';

const ToDoList = ({
	todos,
	handleSetComplete,
	handleDelete,
	handleClearComplete,
	showAllTodos,
	showActiveTodos,
	showCompletedTodos,
	activeFilter,
}) => {
	//sera un componente contenedor de otro componente x props
	return (
		<div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
			{todos.map((todo) => (
				<ToDo
					key={todo.id}
					todo={todo}
					handleSetComplete={handleSetComplete}
					handleDelete={handleDelete}
				/>
			))}
			<TodoFilters
				activeFilter={activeFilter}
				total={todos.lenght}
				showAllTodos={showAllTodos}
				handleClearComplete={handleClearComplete}
				showActiveTodos={showActiveTodos}
				showCompletedTodos={showCompletedTodos}
			/>
		</div>
	);
};
export { ToDoList };
