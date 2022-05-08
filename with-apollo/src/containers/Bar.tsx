import { gql, useQuery } from '@apollo/client';

import { GET_TODO_BY_ID, GetTodoByIdData, GetTodoByIdVars } from '../stores/graphql/todos/queries/getById';

export default function Bar() {
  const { loading, data, error } = useQuery<GetTodoByIdData, GetTodoByIdVars>(GET_TODO_BY_ID, {
    variables: {
      id: 2,
    },
  });
  const todo = data?.todo;

  if (!todo) {
    return (
      <div>
        Loading...
      </div>
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
