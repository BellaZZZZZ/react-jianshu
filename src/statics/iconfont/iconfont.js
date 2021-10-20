import { createGlobalStyle } from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* Project id 2468859 */
    src: url('//at.alicdn.com/t/font_2468859_euikhyxkjtg.woff2?t=1634721460063') format('woff2'),
        url('//at.alicdn.com/t/font_2468859_euikhyxkjtg.woff?t=1634721460063') format('woff'),
        url('//at.alicdn.com/t/font_2468859_euikhyxkjtg.ttf?t=1634721460063') format('truetype');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;