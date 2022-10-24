import css from './Statistics.module.css'
import PropTypes from 'prop-types';
import {TitleStatistics} from 'components/TitleStatistics/TitleStatistics'
import {StatList} from 'components/StatList/StatList'

export const Statistics=({statisticsData}) => {

    const statisticsWindowSize = 300;
    const numberOfFormats = statisticsData.length

    return <section className={css.statistics} style={{width: statisticsWindowSize}}>
    <TitleStatistics text="Upload stats" />
    <StatList statisticsData={statisticsData} statisticsWindowSize={statisticsWindowSize} numberOfFormats={numberOfFormats}/>
    </section>
}

Statistics.propTypes = {
    statisticsData: PropTypes.arrayOf(PropTypes.objectOf)
 }
