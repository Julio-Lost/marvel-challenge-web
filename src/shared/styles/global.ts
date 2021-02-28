import { createGlobalStyle } from 'styled-components';
import { Colors } from '../../useful/constants/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: auto;
    -webkit-text-stroke: 0.2px;
  }
  body {
    background: ${Colors.gray6};
    color: ${Colors.gray2};
  }
  body,
  input,
  button,
  textarea {
    font: 400 18px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
  }
`;
