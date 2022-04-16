import React from "react"
import Todo from "./Todo"

const TodoList: React.FC<TodoListNode> = (props) => {
  return (
    <div className="mt-4">
      {props.todos.map((d) => {
        if(props.isCompleted && d.completed) return;
        if(props.filterText != "" && !d.title.toLowerCase().includes(props.filterText.toLowerCase())) return;
        return (
          <Todo
            key={d.id}
            toggleTodoStatus={props.toggleTodoStatus}
            removeTodo={props.removeTodo}
            todo={d} />
        )
      })}
    </div>
  )
}

export default TodoList