import useTodoById from '@/stores/todos/selectors/useTodoById';

export default function Bar() {
  const todo = useTodoById(2);

  if (!todo) {
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
