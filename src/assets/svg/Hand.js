import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Hand = props => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.844 6.563v-.704a1.172 1.172 0 0 0-2.344 0V2.11a1.172 1.172 0 0 0-2.344 0v7.108L3.873 6.99A1.173 1.173 0 0 0 1.84 8.162c1.91 4.025 3.07 5.432 5.66 5.432a4.687 4.687 0 0 0 4.688-4.688V6.562a1.172 1.172 0 1 0-2.344 0v0Z"
      stroke="#737373"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Hand;
