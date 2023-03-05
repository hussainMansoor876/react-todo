const Todo = ({ data, completed }) => {
    return (
        <div>
            task: {data?.task}
            <button disabled={data?.isCompleted}>Completed</button>
        </div>
    )
}

export default Todo