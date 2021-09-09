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

.card-animated {
  transform: translateY(0px);
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.4s;
  }
}

.custom-select {
  border: 2px solid #E3E6EA;
  height: 60px;
  width: 193px;
  color: #494b4c;
  padding: 8px;
  background: #F5F5F5;
  outline: none;
}

.custom-input {
  border: 2px solid #E3E6EA;
  height: 36px;
  width: 193px;
  color: #494b4c;
  padding: 10px;
  background: #F5F5F5;
  outline: none;
  width: 16rem
}

.open-sidebar {
  display: block !important
}
`;

export default GlobalStyles;
