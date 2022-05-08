import { useDispatch as useBaseDispatch } from 'react-redux';

import { Dispatch } from '@/stores/store';

export default function useDispatch() {
  return useBaseDispatch<Dispatch>();
}
