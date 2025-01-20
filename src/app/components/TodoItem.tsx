function TodoItem({ todo, toggleTodo, deleteTodo }: any) {
    return (
        <li className="todo-item">
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
            <div className="todo-item-buttons">
                <button className="toggle-button" onClick={() => toggleTodo(todo.id)}>完了</button>
                <button className="delete-button" onClick={() => deleteTodo(todo.id)}>削除</button>
            </div>
        </li>
    )
}

export default TodoItem;