import { useStoreActions } from 'easy-peasy'
import { useState } from 'react'

function AddTodoForm() {
  const addTodo = useStoreActions((actions) => actions.addTodo)
  const [todoText, setTodoText] = useState('')
  return (
    <>
      <input onChange={(e) => setTodoText(e.target.value)} value={todoText} />
      <button onClick={() => addTodo(todoText)}>Add Todo</button>
    </>
  )
}

export default AddTodoForm
