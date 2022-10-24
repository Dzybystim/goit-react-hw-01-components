
import css from './TransactionHistory.module.css'

import {TransactionHistoryHeadTable} from 'components/TransactionHistoryHeadTable/TransactionHistoryHeadTable'
import {TransactionHistoryBodyTable} from 'components/TransactionHistoryBodyTable/TransactionHistoryBodyTable'


export const TransactionHistory = ({transactions}) => {
return <table className={css.transactionHistory}>
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
</table>
}


