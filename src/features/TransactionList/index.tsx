import React from 'react';
import { Container, Searchbar } from '@ui';
import List from './List';
import { search } from '@helpers/transforms';
import { connect } from 'react-redux';
import { IRootState, Dispatch } from '@src/store';
import { sortByKey } from '@helpers/transforms';

function TransactionList(props) {
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

  const { transactions, fetchTransaction, resetStateTransaction } = props;

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchTransaction();
    return () => resetStateTransaction();
  }, []);

  React.useEffect(() => {
    setData(transactions);
  }, [transactions]);

  function searchTrx(q: string) {
    const result = search(transactions, q.toLowerCase());
    setData(result);
    forceUpdate();
  }

  function sortTrx(k: string) {
    const result = sortByKey(transactions, k);
    setData(result);
    forceUpdate();
  }

  return (
    <Container scrollable>
      <Searchbar onFilter={sortTrx} onSearch={searchTrx} />
      <List data={data} />
    </Container>
  );
}
const mapStateToProps = (state: IRootState) => {
  return {
    transactions: state.transaction.payload
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTransaction: dispatch.transaction.fetchTransaction,
  resetStateTransaction: dispatch.transaction.normalize,
  saveTransaction: dispatch.transaction.filtered
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
