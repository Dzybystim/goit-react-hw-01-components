import css from './Profile.module.css';
import PropTypes from 'prop-types';
import { DataUser } from 'components/DataUser/DataUser'
import {StatUser} from 'components/StatUser/StatUser'

export const Profile = ({datauser}) => {
    const {username, avatar, tag, location, stats} = datauser
    return <div className={css.profile}>
        <DataUser username={username} avatar={avatar} tag={tag} location={location} />
        <StatUser followers={stats.followers} views={stats.views} likes={stats.likes}/>
    </div>
}


Profile.propTypes = {
    datauser: PropTypes.exact({
        username: PropTypes.string.isRequired, 
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats : PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired})
    })
}