import React, { useState } from 'react'

const AddTodo:React.FC<AddTodoNode> = (props) => {
  const [todo, setTodo] = useState<AddTodo>({title: "", completed: false});

  const addTodo = () => {
    props.addTodo(todo);
  }

  return (
    <div className="mb-4">
      <div className="flex mt-4">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-500" placeholder="Add Todo" value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} />
      <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500" onClick={addTodo}>Add</button>
      </div>
    </div>
  )
}

export default AddTodo