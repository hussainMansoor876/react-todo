import Todo from "./Todo"

const TodoList = () => {
    const todo = [{ task: 'task1', isCompleted: true }, { task: 'task2', isCompleted: false }]

    return (
        <div>
            <h1>Todo App</h1>
            {todo?.map((v, i) => {
                return (
                    <Todo data={v} completed={'Completed'} />
                )
            })}
        </div>
    )
}

export default TodoList