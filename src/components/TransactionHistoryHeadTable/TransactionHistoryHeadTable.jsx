import PropTypes from 'prop-types';
import {ThHead } from './TransactionHistoryHeadTable.styled'

export const TransactionHistoryHeadTable = ({type, amount, currency}) => {
return <thead>
<tr>
  <ThHead>{type}</ThHead>
  <ThHead>{amount}</ThHead>
  <ThHead>{currency}</ThHead>
</tr>
</thead>
}

TransactionHistoryHeadTable.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}