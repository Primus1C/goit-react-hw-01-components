import PropTypes from "prop-types";
import styles from "./Profile.css";

function Profile(props) {
    return (
        <div className="profile__profile">
            <div className="description">
                <img
                    src={props.avatar}
                    alt="User avatar"
                    className="profile__avatar"
                />
                <p className="profile__name">{props.username}</p>
                <p className="profile__tag">{props.tag}</p>
                <p className="profile__location">{props.location}</p>
            </div>

            <ul className="profile__stats">
                <li className="profile__statItem">
                    <span className="profile__label">Followers</span>
                    <span className="profile__quantity">
                        {props.stats.followers}
                    </span>
                </li>
                <li className="profile__statItem">
                    <span className="profile__label">Views</span>
                    <span className="profile__quantity">
                        {props.stats.views}
                    </span>
                </li>
                <li className="profile__statItem">
                    <span className="profile__label">Likes</span>
                    <span className="profile__quantity">
                        {props.stats.likes}
                    </span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    props: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.shape({
            label: PropTypes.string.isRequired,
            quantity: PropTypes.string.isRequired,
        }),
    }),
};

export default Profile;
