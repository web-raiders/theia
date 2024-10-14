import { css } from 'styled-components';
import { IMedia } from 'types';

const sizes = {
  xlargeScreen: 1440,
  largeScreen: 1200,
  midScreen: 1100,
  pad: 1024,
  pc: 1000,
  smallpc: 900,
  tablet: 768,
  miniTablet: 600,
  largePhone: 480,
  phone: 376,
  smallPhone: 330,
};

// iterate through the sizes and create a media template
export const screen = Object.keys(sizes).reduce((accumulator: any, label) => {
  /** use em in breakpoints to work properly cross-browser and support users
   * changing their browsers font-size: https://zellwk.com/blog/media-query-units/
   */
  const emSize = sizes[label as keyof typeof sizes] / 16;
  accumulator[label] = (...args: Parameters<typeof css>) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {}) as IMedia;

export default screen;
