import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {colors} from '../../constants/colors';

const Sixty = ({active, scale}) => (
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
    <Circle
      cx={22.773}
      cy={22.773}
      r={15.182}
      transform="rotate(-180 22.773 22.773)"
      fill={active ? '#007BC1' : colors.gray}
    />
  </Svg>
);

export default Sixty;
