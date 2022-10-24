
import PropTypes from 'prop-types';
import {TitleStatistics} from 'components/TitleStatistics/TitleStatistics'
import {StatList} from 'components/StatList/StatList'
import {StatisticsStyled} from './Statistics.styled'

export const Statistics=({statisticsData}) => {

    const statisticsWindowSize = 300;
    const numberOfFormats = statisticsData.length

    return <StatisticsStyled style={{width: statisticsWindowSize}}>
    <TitleStatistics text="Upload stats" />
    <StatList statisticsData={statisticsData} statisticsWindowSize={statisticsWindowSize} numberOfFormats={numberOfFormats}/>
    </StatisticsStyled>
}

Statistics.propTypes = {
    statisticsData: PropTypes.arrayOf(PropTypes.objectOf)
 }
