reqs:
react-router

<Routes>
  <Route path='/*' element={<AppLayout><Outlet /></AppLayout>}>
  <Route index element={<Navigate to="/todolist" replace={true} />} />
  <Route path="todolist" element={<TodoLists />} />
  <Route path="about" element={<About />} />
</Routes>

display todoitems in todo table

scss
