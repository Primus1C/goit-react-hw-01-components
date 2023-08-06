import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friendlist__friend-list">
      {friends.map(element => (
        <FriendListItem
          key={element.id}
          avatar={element.avatar}
          name={element.name}
          isOnline={element.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
