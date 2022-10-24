import PropTypes from 'prop-types';
import {Description, Avatar, Name, Tag, Location} from './DataUser.styled'

export const DataUser = ({username, avatar, tag, location}) => {

return <Description>
    <Avatar
      alt={username}
      src={avatar}
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
</Description> 
}

DataUser.propTypes = {
    username: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired
}