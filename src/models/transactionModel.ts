import { Dispatch } from '../store';
import { omitKey, search, objsToArray } from '@helpers/transforms';

export type TransactionState = {
  payload: [];
  fetching: boolean;
  failure: boolean;
  failureMessage: string;
};

const initState: TransactionState = {
  payload: [],
  fetching: false,
  failure: false,
  failureMessage: ''
};

const transaction = {
  state: {
    payload: [],
    fetching: false,
    failure: false,
    failureMessage: ''
  },
  reducers: {
    normalize: (state: TransactionState) => {
      return {
        ...state,
        ...omitKey(initState, 'payload')
      };
    },
    fetching: (state: TransactionState) => {
      return {
        ...state,
        fetching: true
      };
    },
    success: (state: TransactionState, payload: {}) => {
      return {
        ...state,
        payload: objsToArray(payload),
        fetching: false
      };
    },
    filtered: (state: TransactionState, payload: {}) => {
      return {
        ...state,
        payload
      };
    },
    failure: (state: TransactionState) => {
      return {
        ...state,
        failure: true,
        fetching: false
      };
    }
  },
  effects: (dispatch: Dispatch) => ({
    async fetchTransaction() {
      try {
        fetch('https://nextar.flip.id/frontend-test')
          .then((response) => response.json())
          .then((data) => {
            dispatch.transaction.success(data);
          });
      } catch (error) {
        dispatch.transaction.failure();
      }
    }
  })
};

export default transaction;
