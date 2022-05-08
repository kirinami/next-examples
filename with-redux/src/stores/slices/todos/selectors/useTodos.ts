import useSelector from '@/stores/hooks/useSelector';
import { State } from '@/stores/store';

export const selectTodos = (state: State) => state.todos.todos;

export default function useTodos() {
  return useSelector(selectTodos);
}
