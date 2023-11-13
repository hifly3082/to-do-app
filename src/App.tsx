import AppLayout from './ui/AppLayout'
import TodosList from './components/TodosList'
import AddTodoForm from './components/AddTodoForm'
import './App.css'

function App() {
  return (
    <AppLayout>
      <AddTodoForm />
      <TodosList />
    </AppLayout>
  )
}

export default App
