import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TouchId = ({color}) => (
  <Svg width={70} height={70} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M42.258 1.032C37.353-.191 32.194-.366 27.172.718a.719.719 0 1 0 .304 1.405c4.808-1.038 9.761-.867 14.472.314 11.267 2.824 20.645 11.295 24.217 22.36 1.382 4.28 1.968 8.836 2.086 13.612a.719.719 0 1 0 1.437-.035c-.12-4.842-.713-9.516-2.128-13.936C63.85 12.853 54.049 3.973 42.257 1.032ZM23.526 3.206a.719.719 0 1 0-.383-1.385c-5.25 1.448-12.636 6.453-17.201 13.14l-.006.008c-4.008 6.04-6.52 13.63-5.819 20.997l.002.02c.169 1.346.45 2.688.733 4.032.596 2.83 1.192 5.669.727 8.551A.719.719 0 1 0 3 48.8c.485-3.014-.118-5.953-.722-8.893-.28-1.36-.558-2.72-.73-4.087-.66-6.96 1.717-14.221 5.585-20.052 4.39-6.43 11.501-11.21 16.394-12.56Z"
      fill={color ? color : '#737373'}
    />
    <Path
      d="M32.958 4.812C41.982 4.262 51.004 7.944 57.063 15a.719.719 0 0 1-1.09.936C50.21 9.226 41.624 5.722 33.04 6.247h-.01c-10.855.526-21.021 7.89-24.76 18.21a.719.719 0 0 1-1.352-.49c3.94-10.871 14.614-18.6 26.039-19.155ZM59.252 18.14a.719.719 0 1 0-1.193.801c3.36 5.002 4.748 10.444 5.297 16.903a.719.719 0 0 0 1.432-.122c-.56-6.6-1.993-12.308-5.535-17.582ZM64.308 38.774a.719.719 0 0 1 .762.672c.27 4.335.273 9.238-.206 12.862a.719.719 0 1 1-1.425-.189c.462-3.492.465-8.292.196-12.583a.719.719 0 0 1 .673-.762ZM7.185 27.938a.719.719 0 0 0-1.397-.337 29.072 29.072 0 0 0-.813 6.676c-.01 2.315.421 4.576.853 6.837.353 1.85.707 3.7.818 5.582.146 2.471-.374 4.947-1.272 7.303a.719.719 0 1 0 1.343.512c.95-2.49 1.525-5.173 1.364-7.9-.11-1.869-.464-3.708-.817-5.547-.431-2.244-.862-4.487-.851-6.78.01-2.135.27-4.269.772-6.346Z"
      fill={color ? color : '#737373'}
    />
    <Path
      d="M26.045 11.966a.719.719 0 0 1-.4.934c-7.45 2.993-13.046 9.746-14.188 17.709-.477 3.327.038 6.622.554 9.917.29 1.855.58 3.71.693 5.57.244 4.034-.215 8.465-2.84 12.496a.719.719 0 1 1-1.205-.785c2.392-3.672 2.844-7.752 2.61-11.624-.115-1.887-.403-3.764-.691-5.64-.517-3.364-1.033-6.725-.544-10.138 1.22-8.503 7.178-15.667 15.076-18.839a.719.719 0 0 1 .935.4ZM51.278 16.058c-5.879-5.506-14.4-7.428-22.142-5.73a.719.719 0 0 0 .308 1.405c7.332-1.609 15.355.226 20.85 5.374 4.634 4.339 7.324 10.652 8.028 17.54a.719.719 0 1 0 1.43-.145c-.731-7.153-3.535-13.818-8.474-18.444ZM59.601 37.925a.719.719 0 0 1 .789.641c.682 6.646.388 13.825-.642 20.77a.719.719 0 0 1-1.422-.212c1.016-6.848 1.302-13.904.634-20.411a.719.719 0 0 1 .641-.788Z"
      fill={color ? color : '#737373'}
    />
    <Path
      d="M34.543 14.607c-11.014 0-19.963 8.787-19.963 19.651 0 1.16.103 2.298.3 3.403a.719.719 0 0 0 1.414-.25 18.022 18.022 0 0 1-.277-3.153c0-10.048 8.283-18.213 18.526-18.213 4.628 0 8.857 1.668 12.103 4.425a.719.719 0 1 0 .93-1.096 20.073 20.073 0 0 0-13.033-4.767ZM49.187 22.054a.719.719 0 0 1 1.017.021c3.172 3.308 4.187 8.507 4.859 12.87.756 4.914.872 9.709.872 11.931a.719.719 0 1 1-1.438 0c0-2.186-.114-6.9-.855-11.713-.624-4.05-1.523-9.013-4.476-12.093a.719.719 0 0 1 .021-1.016ZM55.752 50.993a.719.719 0 0 0-1.433-.114c-.352 4.427-.814 8.85-1.75 12.935a.719.719 0 0 0 1.402.32c.96-4.192 1.428-8.702 1.782-13.141ZM16.036 40.307a.719.719 0 0 1 .844.566c1.52 7.718.47 14.728-3.554 20.87a.719.719 0 0 1-1.203-.789c3.787-5.778 4.806-12.393 3.347-19.803a.719.719 0 0 1 .566-.844Z"
      fill={color ? color : '#737373'}
    />
    <Path
      d="M34.543 19.284c-7.15 0-14.164 5.534-14.88 12.49-.313 3.045.127 6.044.568 9.045.384 2.62.77 5.241.652 7.895-.267 6.072-2.049 11.084-5.11 15.212a.719.719 0 0 0 1.155.857c3.247-4.379 5.113-9.673 5.392-16.006.116-2.641-.27-5.254-.656-7.865-.44-2.986-.882-5.97-.57-8.991.628-6.11 6.918-11.2 13.449-11.2 3.046 0 10.928 1.65 13.435 9.817 1.57 5.118 2 12.045 1.619 18.774-.38 6.728-1.564 13.163-3.156 17.29a.719.719 0 0 0 1.341.517c1.665-4.317 2.865-10.916 3.25-17.726.385-6.81-.038-13.928-1.68-19.277-2.783-9.066-11.507-10.832-14.81-10.832Z"
      fill={color ? color : '#737373'}
    />
    <Path
      d="M23.482 61.743a.719.719 0 0 1 .21.995c-.447.684-.839 1.398-1.23 2.114-.393.715-.785 1.43-1.23 2.113a.719.719 0 1 1-1.205-.785c.446-.684.838-1.399 1.23-2.114.392-.715.784-1.43 1.23-2.113a.719.719 0 0 1 .995-.21ZM29.636 26.745a.719.719 0 1 0-.799-1.195c-2.846 1.904-4.592 4.522-4.592 8.357 0 2.283.404 4.15.82 6.064.62 2.865 1.041 5.723.965 8.666-.091 3.573-.79 6.838-2.134 9.949a.719.719 0 1 0 1.32.57c1.42-3.289 2.155-6.736 2.252-10.482.078-3.058-.355-6.03-.999-9.007-.416-1.923-.787-3.64-.787-5.76 0-3.286 1.446-5.484 3.954-7.162ZM32.442 24.22c2.982-.608 6.192.143 8.554 2.055 4.22 3.415 4.781 9.644 5.236 14.691l.023.257c.588 6.507-.085 12.826-1.44 19.172a.719.719 0 0 1-1.406-.3c1.335-6.251 1.985-12.42 1.414-18.742l-.056-.637v-.003c-.405-4.56-.91-10.274-4.675-13.32-2.02-1.635-4.79-2.29-7.363-1.765a.719.719 0 1 1-.287-1.408ZM43.799 63.972a.719.719 0 1 0-1.393-.355 17.369 17.369 0 0 1-1.953 4.666.719.719 0 1 0 1.233.738 18.8 18.8 0 0 0 2.113-5.05ZM40.284 53.541a.719.719 0 0 1 .63.799c-.68 5.736-2.212 10.852-4.67 15.29a.719.719 0 0 1-1.258-.697c2.353-4.247 3.84-9.177 4.5-14.762a.719.719 0 0 1 .798-.63Z"
      fill={color ? color : '#737373'}
    />
    <Path
      d="M40.136 33.53c-.498-2.663-2.783-4.7-5.558-4.7-3.756 0-6.392 3.787-5.463 7.31 1.571 6.219 1.83 12.212.766 17.985l-.001.004c-.924 5.183-2.696 9.845-5.115 13.796a.719.719 0 1 0 1.226.75c2.518-4.112 4.35-8.944 5.304-14.292 1.104-5.995.83-12.199-.787-18.599l-.002-.008c-.697-2.635 1.245-5.508 4.072-5.508 2.04 0 3.764 1.5 4.144 3.521 1.047 6.069 1.591 11.696 1.203 16.541a.719.719 0 1 0 1.433.115c.403-5.022-.165-10.788-1.22-16.905l-.002-.01ZM32.434 64.66a.719.719 0 0 1 .31.967l-1.904 3.706a.719.719 0 1 1-1.279-.657l1.905-3.706a.719.719 0 0 1 .968-.31Z"
      fill={color ? color : '#737373'}
    />
    <Path
      d="M35.113 34.223a.719.719 0 1 0-1.4.328c2.424 10.318 2.091 19.378-.86 27.096a.719.719 0 1 0 1.342.514c3.078-8.048 3.391-17.411.918-27.938Z"
      fill={color ? color : '#737373'}
    />
  </Svg>
);

export default TouchId;
