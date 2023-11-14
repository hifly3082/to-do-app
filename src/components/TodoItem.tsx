import { List, Checkbox } from 'antd'
import { useStoreState } from 'easy-peasy'

function TodoItem() {
  const todos = useStoreState((state) => state.todos)
  return (
    <div>
      <List
        dataSource={todos}
        renderItem={(todo, index) => (
          <List.Item>
            <Checkbox
              onChange={() => {
                // Toggle completed status
                // You can dispatch the action here using Easy Peasy
              }}
              checked={todo.completed}>
              {todo.text}
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoItem
