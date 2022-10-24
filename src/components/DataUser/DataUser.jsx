import PropTypes from 'prop-types';
import css from './DataUser.module.css';

export const DataUser = ({username, avatar, tag, location}) => {

return <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
</div> 
}

DataUser.propTypes = {
    username: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired
}