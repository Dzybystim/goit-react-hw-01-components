import PropTypes from 'prop-types';
import {Item, Label, Percentage} from './ItemStatList.styled'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const ItemStatList = ({label, percentage, numberOfFormats, statisticsWindowSize}) =>{
    return <Item style={{
        flexBasis: statisticsWindowSize/numberOfFormats,
        backgroundColor: getRandomHexColor(),
      }}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </Item>
}

ItemStatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  numberOfFormats: PropTypes.number.isRequired,
  statisticsWindowSize: PropTypes.number.isRequired
}