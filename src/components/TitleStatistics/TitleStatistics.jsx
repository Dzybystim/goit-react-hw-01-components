import PropTypes from 'prop-types';
import {TitleStatisticsStyled} from './TitleStatistics.styled'

export const TitleStatistics = ({text}) => {
    return <TitleStatisticsStyled>{text}</TitleStatisticsStyled>
}

TitleStatistics.propTypes = {
    text: PropTypes.string.isRequired
}