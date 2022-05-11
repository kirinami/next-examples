import { createAsyncThunk } from '@reduxjs/toolkit';

import http from '@/utils/http';

import Todo from '../types/Todo';

type Req = Pick<Todo, 'id'>;

type Res = Req;

const todosDelete = createAsyncThunk<Res, Req>('todos/delete', async ({ id }) => {
  const { data: todo } = await http.delete<Res>(`/todos/${id}`);

  return todo;
});

export default todosDelete;
