import { createAsyncThunk } from '@reduxjs/toolkit';

import http from '@/utils/http';

import Todo from '../types/Todo';

type Req = void;

type Res = Todo[];

const todosRetrieve = createAsyncThunk<Res, Req>('todos/retrieve', async () => {
  const { data: todos } = await http.get<Res>('/todos');

  return todos;
});

export default todosRetrieve;
