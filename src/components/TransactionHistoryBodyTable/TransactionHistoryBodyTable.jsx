import PropTypes from 'prop-types';

import {TdBody} from './TransactionHistoryBoduTable.styled'

export const TransactionHistoryBodyTable = ({type, amount, currency}) => {
    return <tr>
    <TdBody>{type}</TdBody>
    <TdBody>{amount}</TdBody>
    <TdBody>{currency}</TdBody>
  </tr>
}

TransactionHistoryBodyTable.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}