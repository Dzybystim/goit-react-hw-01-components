import PropTypes from 'prop-types';
import {Item, Status, Avatar, Name} from './FriendListItem.styled'

function statusCheck(isOnline) {
    if(isOnline) {
        return "green";
    } else {
    return "red";
    }}
    

export const FriendListItem = ({avatar, name, isOnline}) => {
return <Item>
 <Status style={{ backgroundColor: statusCheck(isOnline) }} ></Status>
 <Avatar src={avatar} alt="User avatar" width="48" />
 <Name>{name}</Name>
</Item>
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}