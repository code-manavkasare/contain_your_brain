import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const ActiveRadio = props => (
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
    <Path
      d="M10 15.833a5.833 5.833 0 1 0 0-11.666 5.833 5.833 0 0 0 0 11.666Z"
      fill="#007BC1"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ActiveRadio;
