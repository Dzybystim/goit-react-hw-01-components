import PropTypes from 'prop-types';
import css from './TitleStatistics.module.css'

export const TitleStatistics = ({text}) => {
    return <h2 className={css.title}>{text}</h2>

}

TitleStatistics.propTypes = {
    text: PropTypes.string.isRequired
}