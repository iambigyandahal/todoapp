interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

interface TodoListNode {
  filterText: string,
  isCompleted: boolean,
  removeTodo: (id: number) => void,
  toggleTodoStatus: (id: number) => void,
  todos: Todo[],
}

interface TodoNode {
  toggleTodoStatus: (id: number) => void,
  removeTodo: (id: number) => void,
  todo: Todo
}

interface SearchBarNode {
  filterText: string,
  isCompleted: boolean,
  handleFilterText: (val: string) => void,
  handleIsCompleted: (val: boolean) => void
}

interface AddTodo {
  title: string,
  completed: boolean
}

interface AddTodoNode {
  addTodo: (todo: AddTodo) => void
}