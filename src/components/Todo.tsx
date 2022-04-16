import React from "react"

const Todo: React.FC<TodoNode> = (props) => {
  const toggleTodoStatus = () => {
    props.toggleTodoStatus(props.todo.id);
  }

  const removeTodo = () => {
    props.removeTodo(props.todo.id);
  }

  return (
    <div className="flex mb-4 items-center">
      <p className={props.todo.completed ? "w-full line-through text-green-500": "w-full text-gray-500"}>{props.todo.title}</p>
      
      {props.todo.completed ?
        <button
          className="shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-grey-500 hover:bg-gray-500"
          onClick={toggleTodoStatus}>Not Done</button> :
        <button
          className="shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500"
          onClick={toggleTodoStatus}>Done</button>}

      <button
        className="shrink-0 p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        onClick={removeTodo}>Remove</button>
    </div>
  )
}

export default Todo