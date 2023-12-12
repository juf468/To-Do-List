import { TodoFilters } from '../TodoFilters';

const ToDoList = ({ children }) => {
	//sera un componente contenedor de otro componente x props
	return (
		<div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
			{children}
			<TodoFilters />
		</div>
	);
};
export { ToDoList };
