import PropTypes from 'prop-types';
import css from './ItemStatList.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const ItemStatList = ({label, percentage, numberOfFormats, statisticsWindowSize}) =>{
    return <li  className={css.item} style={{
        flexBasis: statisticsWindowSize/numberOfFormats,
        backgroundColor: getRandomHexColor(),
      }}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
}

ItemStatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  numberOfFormats: PropTypes.number.isRequired,
  statisticsWindowSize: PropTypes.number.isRequired
}