import PropTypes from 'prop-types';

import {Stats, Item, Label, Quantity} from './StatUser.styled'

export const StatUser = ({followers, views, likes}) => {
return <Stats>
  <Item>
    <Label>Followers</Label>
    <Quantity>{followers}</Quantity>
  </Item>
  <Item>
    <Label>Views</Label>
    <Quantity>{views}</Quantity>
  </Item>
  <Item>
    <Label>Likes</Label>
    <Quantity>{likes}</Quantity>
  </Item>
</Stats>
}

StatUser.propTypes = {
    followers: PropTypes.number.isRequired, 
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired  
}