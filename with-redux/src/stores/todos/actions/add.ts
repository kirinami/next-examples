import { createAsyncThunk } from '@reduxjs/toolkit';

import http from '@/utils/http';

import Todo from '../types/Todo';

type Req = Pick<Todo, 'title' | 'completed'>;

type Res = Todo;

const todosAdd = createAsyncThunk<Res, Req>('todos/add', async ({ title, completed }) => {
  const { data: todo } = await http.post<Res>('/todos', {
    title,
    completed,
  });

  return todo;
});

export default todosAdd;
