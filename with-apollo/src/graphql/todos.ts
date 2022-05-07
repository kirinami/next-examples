import { gql } from '@apollo/client';

export type Todo = {
  id: number,
  title: string,
  completed: boolean,
};

export const TODO_FIELDS = gql`
  fragment TodoFields on Todo {
    id
    title
    completed
  }
`;

/* */

export type GetTodosData = {
  todos: Todo[],
};

export type GetTodosVars = {};

export const GET_TODOS = gql`
  ${TODO_FIELDS}

  query GetTodos {
    todos: todosAll {
      ...TodoFields
    }
  }
`;

/* */

export type CreateTodoData = {
  todo: Todo,
};

export type CreateTodoVars = {
  todo: {
    title: string,
    completed: boolean,
  },
};

export const CREATE_TODO = gql`
  ${TODO_FIELDS}

  mutation CreateTodo($todo: CreateTodoInput!) {
    todo: todosCreate(todo: $todo) {
      ...TodoFields
    }
  }
`;

/* */

export type UpdateTodoData = {
  todo: Todo,
};

export type UpdateTodoVars = {
  id: number,
  todo: {
    title: string,
    completed: boolean,
  },
};

export const UPDATE_TODO = gql`
  ${TODO_FIELDS}

  mutation UpdateTodo($id: Float!, $todo: UpdateTodoInput!) {
    todo: todosUpdate(id: $id, todo: $todo) {
      ...TodoFields
    }
  }
`;

/* */

export type DeleteTodoData = {
  todo: Todo,
};

export type DeleteTodoVars = {
  id: number,
};

export const DELETE_TODO = gql`
  ${TODO_FIELDS}

  mutation DeleteTodo($id: Float!) {
    todo: todosDelete(id: $id) {
      ...TodoFields
    }
  }
`;
