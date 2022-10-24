import data from '../path/user.json'
import statisticsData from '../path/data.json'
import friends from '../path/friends.json'
import transactions from '../path/transactions.json'
import { Profile } from 'components/Profile/Profile'
import {Statistics} from 'components/Statistics/Statistics'
import {FriendList} from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile key={data.username} datauser={data}/>
      <Statistics statisticsData={statisticsData}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
