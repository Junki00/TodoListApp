import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
    return (
        <ul className="todo-list">
            {todos.map(todo =>
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            )}
        </ul>
    )
}

export default TodoList;