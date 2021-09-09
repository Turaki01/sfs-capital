import { createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1025px",
  laptopL: "1441px",
  desktop: "2561px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

.js-focus-visible :focus:not([data-focus-visible-added]) {
  outline: none;
  box-shadow: none;
}


*::-webkit-scrollbar {
  display: none;
}

* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 16px;
  min-height: 100%;
  font-family: 'Fira Sans', sans-serif;
  background-color: #f3f5fc;
  -webkit-font-smoothing: antialiased;
  outline: none;
}
`;

export default GlobalStyles;
