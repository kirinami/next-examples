import { createAsyncThunk } from '@reduxjs/toolkit';

import http from '@/utils/http';

import Todo from '../types/Todo';

type Req = Pick<Todo, 'id' | 'title' | 'completed'>;

type Res = Todo;

const todosUpdate = createAsyncThunk<Res, Req>('todos/update', async ({ id, title, completed }) => {
  const { data: todo } = await http.patch<Res>(`/todos/${id}`, {
    title,
    completed,
  });

  return todo;
});

export default todosUpdate;
