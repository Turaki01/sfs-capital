import styled from "styled-components";
import colors from "styles/colors";
import { device } from "../../styles";

const Container = styled.main`
  height: 100%;
  width: 100%;
  position: relative;
  scrollbar-width: none;
`;

const HamburgerIcon = styled.div`
  position: absolute;
  top: 45px;
  left: 5%;
  z-index: 1;
  cursor: pointer;
`;

const NavigationWrapper = styled.div`
  background: ${colors.pri};
  position: fixed;
  z-index: 1;
  height: 100%;
  overflow-x: hidden;
  display: none;

  @media ${device.laptop} {
    width: 20%;
    display: block;
    position: fixed;
    background: ${colors.pri};
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    overflow-x: hidden;

    a {
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
`;

const LogoMenuContainer = styled.div`
  padding: 25px 16px;
  margin-bottom: 30px;

  img {
    width: 60px;
  }
`;

const MenuItemsDiv = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`;

const AllRightReserve = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 12.5px;
  color: #fff;
`;

const MenuItems = styled.li`
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  position: relative;
  cursor: pointer;
  padding: 1rem 0;
  margin-bottom: 0.3rem;
  display: flex;
  color: #60636b;
  font-size: 1rem;
  font-weight: 100;
  transition: all 0.1s ease-in 0s;
  text-decoration: none;
  align-items: center;

  &:first-child {
    color: #fff !important;
  }
`;

const MenuElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 160px);
`;

const ProfileIconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  width: 40px;
  height: 40px;
  background: #f2f5fb;
  border-radius: 50px;
  align-items: center;
  cursor: pointer;
`;

const LogoutMenu = styled.li`
  border: 2px solid #000;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  color: #60636b;
  font-size: 15px;
  font-weight: 100;
  transition: all 0.1s ease-in 0s;
  text-decoration: none;
`;

const MainWindowWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 1rem;

  @media ${device.laptop} {
    width: 80%;
    padding: 0;
    height: 100%;
    margin-top: 0;
    margin-left: 20%;
    padding-top: 0.8rem;
  }
`;

const AppContainer = styled.div`
  margin: 2rem;
  height: 100vh;
`;

const CloseIconDiv = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
  cursor: pointer;

  @media ${device.laptop} {
    display: none;
  }
`;

export {
  Container,
  NavigationWrapper,
  MainWindowWrapper,
  MenuWrapper,
  LogoMenuContainer,
  MenuItemsDiv,
  MenuItems,
  AppContainer,
  LogoutMenu,
  ProfileIconDiv,
  AllRightReserve,
  MenuElementsContainer,
  HamburgerIcon,
  CloseIconDiv,
};
