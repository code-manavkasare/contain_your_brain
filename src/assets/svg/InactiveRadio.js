import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

const InactiveRadio = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={10}
      cy={10}
      r={9}
      fill="#fff"
      stroke="#007BC1"
      strokeWidth={2}
    />
  </Svg>
);

export default InactiveRadio;
