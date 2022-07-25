import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../constants/colors';

const Fifteen = ({active, scale}) => (
  <Svg
    width={46}
    height={46}
    scaleX={scale}
    scaleY={scale}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle
      cx={22.773}
      cy={22.773}
      r={20.773}
      stroke={active ? '#007BC1' : colors.gray}
      strokeWidth={4}
    />
    <Path
      d="M37.956 22.773A15.182 15.182 0 0 0 22.773 7.591v15.182h15.183Z"
      fill={active ? '#007BC1' : colors.gray}
    />
  </Svg>
);

export default Fifteen;
