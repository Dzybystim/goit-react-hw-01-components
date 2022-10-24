import data from '../../path/user.json'
import statisticsData from '../../path/data.json'
import friends from '../../path/friends.json'
import transactions from '../../path/transactions.json'
import { Profile } from 'components/Profile/Profile'
import {Statistics} from 'components/Statistics/Statistics'
import {FriendList} from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'

import {Container} from './App.styled'

export const App = () => {
  return (
    <Container>
      <Profile key={data.username} datauser={data}/>
      <Statistics statisticsData={statisticsData}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </Container>
  );
};
