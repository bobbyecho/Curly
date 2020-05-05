import { useDispatch } from 'react-redux';

export const useRematchDispatch = <D extends {}, MD>(
  selector: (dispatch: D) => MD
) => {
  const dispatch = useDispatch<D>();
  return selector(dispatch);
};
