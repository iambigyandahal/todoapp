import React, { useEffect, useState } from "react"
import AddTodo from "./AddTodo";
import SearchBar from "./SearchBar"
import TodoList from "./TodoList"
import UserContext from "../contexts/UserContext";

const TodoContainer: React.FC = () => {
  const [userId, setUserId] = useState(1);
  const user = {
    userId,
    setUserId
  }

  const [todoList, setTodoList] = useState<Todo[] | []>([]);
  const [filterText, setFilterText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleFilterText = (val: string) => {
    setFilterText(val);
  }

  const handleIsCompleted = (val: boolean) => {
    setIsCompleted(val);
  }

  const addTodo = (todo: AddTodo) => {
    let id = (todoList[todoList.length-1]) ? todoList[todoList.length-1].id+1 : 1;
    setTodoList([...todoList, { userId: userId, id: id, ...todo }]);
  }

  const toggleTodoStatus = (id: number) => {
    const index = todoList.findIndex(item => item.id === id);
    todoList[index].completed = todoList[index].completed ? false : true;
    setTodoList([...todoList]);
  }

  const removeTodo = (id: number) => {
    const newTodoList = todoList.filter(item => item.id != id);
    setTodoList(newTodoList);
  }

  useEffect(() => {
    const getData = async () => {
      // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      // const data = await response.json();
      const data = [
        {
          userId: 1,
          id: 1,
          title: "Do Workout",
          completed: true
        },
        {
          userId: 1,
          id: 2,
          title: "Complete office design work",
          completed: false
        },
        {
          userId: 1,
          id: 3,
          title: "Write a blog post",
          completed: false
        }
      ];
      setTodoList(data);
    }

    getData();
  }, [])

  return (
    <UserContext.Provider value={user.userId}>
      <div className="h-full w-full flex items-center justify-center bg-teal-50 font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <h1 className="text-2xl font-normal leading-normal mt-0 mb-2">Todo App</h1>
          <AddTodo
            addTodo={addTodo} />

          <hr />

          <SearchBar
            filterText={filterText}
            isCompleted={isCompleted}
            handleFilterText={handleFilterText}
            handleIsCompleted={handleIsCompleted} />

          <TodoList
            filterText={filterText}
            isCompleted={isCompleted}
            toggleTodoStatus={toggleTodoStatus}
            removeTodo={removeTodo}
            todos={todoList} />
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default TodoContainer