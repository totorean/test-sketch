import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: ${(props) => props.theme.bgBody};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                 sans-serif;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, a,
  abbr, acronym, address, big, cite, code, del, dfn,
  em, img, ins, kbd, q, s, samp, small, strike, strong,
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul,
  li, fieldset, form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside, canvas, details,
  embed, figure, figcaption, footer, header, hgroup, main,
  menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-size: 10px;
  }
`;

export default GlobalStyle;
