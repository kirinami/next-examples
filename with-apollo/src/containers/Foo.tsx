import { useQuery } from '@apollo/client';

import { GET_TODOS, GetTodosData, GetTodosVars } from '@/stores/graphql/todos/queries/get';

export default function Foo() {
  const { loading, data, error } = useQuery<GetTodosData, GetTodosVars>(GET_TODOS);
  const todos = data?.todos || [];

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
