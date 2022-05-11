import { useDispatch as useBaseDispatch } from 'react-redux';

import { Dispatch } from '@/helpers/initReduxStore';

export default function useDispatch() {
  return useBaseDispatch<Dispatch>();
}
