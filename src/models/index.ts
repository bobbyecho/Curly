import transaction from './transactionModel';

export interface typeRootModel {
  transaction: typeof transaction;
}

export const models: typeRootModel = {
  transaction
};
