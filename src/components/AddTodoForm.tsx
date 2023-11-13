import { useStoreActions } from 'easy-peasy'
import { useState } from 'react'

function AddTodoForm() {
  const addTodo = useStoreActions((actions) => actions.addTodo)
  const [value, setValue] = useState('')
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => addTodo(value)}>Add Todo</button>
    </>
  )
}

export default AddTodoForm
