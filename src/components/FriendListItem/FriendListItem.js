import PropTypes from 'prop-types';
import styles from './FriendListItem.css';

const FriendListItem = ({ id, avatar, name, isOnline = false }) => {
  return (
    <li key={id} className="friendlistitem__item">
      <span
        className={
          isOnline ? 'friendlistitem__statusOn' : 'friendlistitem__statusOff'
        }
      >
        {isOnline}
      </span>
      <img
        className="friendlistitem__avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friendlistitem__name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
