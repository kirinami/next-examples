import useSelector from '@/hooks/useSelector';
import { State } from '@/helpers/initReduxStore';

export const selectTodos = (state: State) => state.todos.todos;

export default function useTodos() {
  return useSelector(selectTodos);
}
