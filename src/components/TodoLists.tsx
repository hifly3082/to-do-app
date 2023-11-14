import { useStoreState } from 'easy-peasy'

function TodoLists() {
  const todos = useStoreState((state) => state.todos)

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.text}>{todo.text}</li>
      ))}
    </ul>
  )
}

export default TodoLists
