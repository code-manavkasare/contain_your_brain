import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../constants/colors';

const Thirty = ({active, scale}) => (
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
      d="M22.773 37.955a15.182 15.182 0 1 0 0-30.364v30.364Z"
      fill={active ? '#007BC1' : colors.gray}
    />
  </Svg>
);

export default Thirty;
