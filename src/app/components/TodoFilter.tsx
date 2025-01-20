function TodoFilter({ setFilter }: any) {
    return (
        <div className="todo-filter">
            <button onClick={() => setFilter('all')}>すべて</button>
            <button className="active-button" onClick={() => setFilter('active')}>未完了</button>
            <button onClick={() => setFilter('done')}>完了済</button>
        </div>
    )
}

export default TodoFilter;