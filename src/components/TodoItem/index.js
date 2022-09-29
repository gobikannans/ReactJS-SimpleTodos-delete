import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {title, id} = todoList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-container">
      <div className="todo-container">
        <p className="paragraph">{title}</p>
        <button className="btn-style" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
