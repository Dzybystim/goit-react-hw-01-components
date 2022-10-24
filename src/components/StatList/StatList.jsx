import PropTypes from 'prop-types';
import {StatListStyled} from './StatList.styled'
import {ItemStatList} from 'components/ItemStatList/ItemStatList'

export const StatList = ({statisticsData, numberOfFormats, statisticsWindowSize}) => {
return <StatListStyled>
{statisticsData.map(({id, label, percentage}) => (
    <ItemStatList 
    key={id} 
    label={label} 
    percentage={percentage} 
    numberOfFormats={numberOfFormats} 
    statisticsWindowSize={statisticsWindowSize}/>
))}
</StatListStyled>
}

StatList.propTypes = {
    statisticsData: PropTypes.arrayOf(PropTypes.objectOf),
    numberOfFormats: PropTypes.number.isRequired,
    statisticsWindowSize: PropTypes.number.isRequired
}