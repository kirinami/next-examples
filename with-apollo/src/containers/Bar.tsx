import { gql, useQuery } from '@apollo/client';

import { GET_TODOS, GetTodosData, GetTodosVars } from '@/graphql/todos';

export default function Bar() {
  const { loading, data, error } = useQuery(gql`
    query GetTodoById($id: Float!) {
      todo: todosById(id: $id) {
        id
        title
        completed
      }
    }
  `, {
    variables: {
      id: 1,
    }
  });
  const todo = data?.todo;

  if (!todo) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <ul>
        <li key={todo.id}>{todo.id}) {todo.title} - {todo.completed ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
}
