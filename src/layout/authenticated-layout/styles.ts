import styled from "styled-components";
import { device } from "../../styles";

const Container = styled.main`
  height: 100%;
  width: 100%;
  position: relative;
  scrollbar-width: none;
`;

const NavigationWrapper = styled.div`
  @media ${device.laptop} {
    width: 14%;
    display: block;
    position: fixed;
    background: #ffffff;
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
  align-items: center;
  justify-content: space-between;
`;

const LogoMenuContainer = styled.div`
  padding: 30px 0px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 0px;
`;

const MenuItemsDiv = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`;

const MenuItems = styled.li`
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  position: relative;
  cursor: pointer;
  padding: 1rem 1.5rem;
  margin-bottom: 0.3rem;
  display: flex;
  color: #60636b;
  font-size: 1rem;
  font-weight: 100;
  transition: all 0.1s ease-in 0s;
  text-decoration: none;
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
  font-size: 1rem;
  font-weight: 100;
  transition: all 0.1s ease-in 0s;
  text-decoration: none;
`;

const MainWindowWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 4.5rem;

  @media ${device.laptop} {
    width: 86%;
    padding: 0;
    height: 100%;
    margin-top: 0;
    margin-left: 14%;
  }
`;

const AppContainer = styled.div`
  margin: 2rem;
  height: 100vh;
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
};
