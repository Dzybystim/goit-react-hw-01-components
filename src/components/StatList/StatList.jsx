import PropTypes from 'prop-types';
import css from './StatList.module.css'
import {ItemStatList} from 'components/ItemStatList/ItemStatList'

export const StatList = ({statisticsData, numberOfFormats, statisticsWindowSize}) => {
return <ul className={css.statlist}>
{statisticsData.map(({id, label, percentage}) => (
    <ItemStatList 
    key={id} 
    label={label} 
    percentage={percentage} 
    numberOfFormats={numberOfFormats} 
    statisticsWindowSize={statisticsWindowSize}/>
))}
</ul>
}

StatList.propTypes = {
    statisticsData: PropTypes.arrayOf(PropTypes.objectOf),
    numberOfFormats: PropTypes.number.isRequired,
    statisticsWindowSize: PropTypes.number.isRequired
}