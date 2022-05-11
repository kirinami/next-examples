import useTodoById from '@/stores/todos/selectors/useTodoById';

export default function Bar() {
  const { loading, todo, error } = useTodoById(2)

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  if (!todo || error) {
    return (
      <div>Error</div>
    );
  }

  return (
    <div>
      <ul>
        <li key={todo.id}>{todo.id}) {todo.title} - {todo.completed ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
}
