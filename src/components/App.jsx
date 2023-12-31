import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory"; 

export const App = () => {
  return (
    
    <div
      style={{
        //height: '100vh',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
            
      <Statistics
        stats={data}
      />
            
      <FriendList
        friends={friends}
      />
            
      <TransactionHistory
        items={transactions}
      />
            
    </div>
    
  );
};
