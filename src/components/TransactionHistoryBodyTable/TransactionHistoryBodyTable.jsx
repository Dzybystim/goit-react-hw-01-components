import PropTypes from 'prop-types';
import './TransactionHistoryBodyTable.module.css'

export const TransactionHistoryBodyTable = ({type, amount, currency}) => {
    return <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
}

TransactionHistoryBodyTable.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}