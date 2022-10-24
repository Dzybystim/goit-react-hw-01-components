import PropTypes from 'prop-types';
import {FriendListStyled} from './FriendList.styled'
import {FriendListItem} from 'components/FriendListItem/FriendListItem'


export const FriendList = ({friends}) => {
    return <FriendListStyled>
        {friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem 
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />))}
    </FriendListStyled>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf)
}