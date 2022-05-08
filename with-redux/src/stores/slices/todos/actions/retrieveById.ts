import { createAsyncThunk } from '@reduxjs/toolkit';

import http from '@/helpers/axios/http';

import Todo from '../types/Todo';

type Req = Pick<Todo, 'id'>;

type Res = Todo;

const todosRetrieveById = createAsyncThunk<Res, Req>('todos/retrieveById', async ({ id }) => {
  const { data: todo } = await http.get<Res>(`/todos/${id}`);

  return todo;
});

export default todosRetrieveById;
