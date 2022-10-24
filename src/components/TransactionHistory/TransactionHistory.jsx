import PropTypes from 'prop-types';
import {TransactionHistoryStyled} from './TransactionHistory.styled'

import {TransactionHistoryHeadTable} from 'components/TransactionHistoryHeadTable/TransactionHistoryHeadTable'
import {TransactionHistoryBodyTable} from 'components/TransactionHistoryBodyTable/TransactionHistoryBodyTable'


export const TransactionHistory = ({transactions}) => {
return <TransactionHistoryStyled>
<TransactionHistoryHeadTable type="Type" amount="Amount" currency="Currency"/>
<tbody>
{transactions.map(({id, type, amount, currency})=>(
    <TransactionHistoryBodyTable 
    key={id}
    type={type}
    amount={amount}
    currency={currency}
    />
))}
</tbody>
</TransactionHistoryStyled>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.objectOf),
}

