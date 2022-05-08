import useTodos from '@/stores/slices/todos/selectors/useTodos';

export default function Foo() {
  const todos = useTodos();

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.id}) {todo.title} - {todo.completed ? 'Yes' : 'No'}</li>
        ))}
      </ul>
    </div>
  );
}
