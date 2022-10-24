import PropTypes from 'prop-types';
import './TransactionHistoryHeadTable.module.css'

export const TransactionHistoryHeadTable = ({type, amount, currency}) => {
return <thead>
<tr>
  <th>{type}</th>
  <th>{amount}</th>
  <th>{currency}</th>
</tr>
</thead>
}

TransactionHistoryHeadTable.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}