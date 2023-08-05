import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
//

const FriendList = ({ friends }) => {
    return (
        <ul className="friendlist__friend-list">
            {friends.map((element) => FriendListItem(element))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
