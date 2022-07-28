import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const Brain = props => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M8.014 18.161c-.368 0-.722-.08-1.05-.237a2.455 2.455 0 0 1-1.333-1.735 2.646 2.646 0 0 1-2.43-2.618c0-.317.054-.62.16-.908a2.905 2.905 0 0 1 .277-4.694 2.63 2.63 0 0 1 3.262-3.41c.218.038.419.191.522.408.087.18.097.38.03.567a.755.755 0 0 1-.959.457 1.14 1.14 0 0 0-1.524 1.07c0 .278.1.542.281.749a.756.756 0 0 1 .1.85.745.745 0 0 1-.481.374 1.42 1.42 0 0 0-1.083 1.378c0 .567.338 1.077.86 1.304a.744.744 0 0 1 .287 1.148c-.16.2-.244.443-.244.703a1.14 1.14 0 0 0 1.463 1.091.754.754 0 0 1 .732.174c.19.18.27.45.21.704a.942.942 0 0 0 .511 1.044.947.947 0 0 0 .887-.044.728.728 0 0 1 .564-.083.725.725 0 0 1 .458.337c.21.35.097.81-.254 1.02a2.425 2.425 0 0 1-1.25.348l.004.003Z"
        fill="#007BC1"
      />
      <Path
        d="M10.5 21c-2.804 0-5.44-1.09-7.426-3.07A10.41 10.41 0 0 1 0 10.519c0-1.638.368-3.206 1.093-4.66A10.562 10.562 0 0 1 3.98 2.302c.013-.014.037-.03.06-.05C5.745 1.044 7.86.78 9.424 1.578c1.146.584 1.811 1.645 1.825 2.906v.273l.013 10.735a1.33 1.33 0 0 0 2.66 0v-.046s-.003-.04-.003-.067a.741.741 0 0 1 1.059-.687 1.14 1.14 0 0 0 1.12-1.795.743.743 0 0 1 .378-1.208c.474-.227.788-.717.788-1.274 0-.667-.471-1.251-1.123-1.388a.745.745 0 0 1-.324-1.294 1.14 1.14 0 0 0-1.32-1.735.742.742 0 0 1-.953-.41.753.753 0 0 1-.046-.42.712.712 0 0 0-.698-.84.759.759 0 0 1-.746-.745c0-.41.334-.744.745-.744.983 0 1.851.664 2.119 1.598a2.63 2.63 0 0 1 2.456 3.503 2.914 2.914 0 0 1 1.384 2.472c0 .887-.408 1.728-1.096 2.275a2.634 2.634 0 0 1-2.336 3.503 2.832 2.832 0 0 1-2.73 2.114 2.817 2.817 0 0 1-2.818-2.812L9.765 4.5c-.007-.697-.364-1.264-1.013-1.594-.808-.414-2.296-.52-3.813.54a8.939 8.939 0 0 0-3.445 7.076c0 2.402.935 4.66 2.64 6.361a8.961 8.961 0 0 0 6.373 2.636c2.41 0 4.668-.934 6.373-2.636a8.93 8.93 0 0 0 2.64-6.361c0-3.86-2.46-7.286-6.123-8.524a.747.747 0 0 1-.467-.944.746.746 0 0 1 .945-.467 10.478 10.478 0 0 1 7.135 9.931c0 2.8-1.093 5.431-3.075 7.413A10.433 10.433 0 0 1 10.51 21h-.01Z"
        fill="#007BC1"
      />
      <Path
        d="M7.85 4.654a.809.809 0 0 1-.809-.808.81.81 0 0 1 .809-.807.81.81 0 0 1 .809.807.81.81 0 0 1-.809.808ZM12.552 7.976a.656.656 0 0 1-.585-.95c.167-.327.394-.608.678-.841a.658.658 0 0 1 .923.093.659.659 0 0 1-.094.921c-.14.113-.254.257-.337.42a.656.656 0 0 1-.585.357ZM7.058 10.045h-.034a.598.598 0 0 1-.354-.137c-.12-.097-.458-.304-.591-.347a.624.624 0 1 1 .39-1.184c.298.096.773.39.983.56a.624.624 0 0 1-.39 1.111l-.004-.003ZM12.395 14.295a.636.636 0 0 1-.625-.527.62.62 0 0 1 .11-.47c.2-.281.451-.511.742-.688a.632.632 0 0 1 .943.694.631.631 0 0 1-.288.39 1.23 1.23 0 0 0-.367.34.628.628 0 0 1-.515.264v-.003ZM15.058 12.383a.636.636 0 0 1-.37-.117 1.232 1.232 0 0 0-.432-.196.649.649 0 0 1-.474-.781.65.65 0 0 1 .782-.474c.31.077.605.21.865.394a.646.646 0 0 1-.37 1.17v.004ZM7.68 14.712a.78.78 0 0 1-.78-.778.779.779 0 0 1 1.557 0c.001.43-.35.778-.777.778ZM6.212 12.75a.777.777 0 1 1 0-1.554.78.78 0 0 1 .78.777.78.78 0 0 1-.78.777ZM14.49 9.698a.779.779 0 0 1-.779-.778.779.779 0 0 1 1.558 0 .78.78 0 0 1-.779.778ZM8.498 7.383a.779.779 0 0 1-.778-.778.78.78 0 0 1 .778-.777.78.78 0 0 1 .779.777.78.78 0 0 1-.779.778Z"
        fill="#007BC1"
      />
      <Path
        d="M11.823 1.498a.749.749 0 0 1-.748-.747c0-.41.337-.748.748-.748s.749.337.749.748c0 .41-.338.747-.749.747Z"
        fill="#018D00"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Brain;