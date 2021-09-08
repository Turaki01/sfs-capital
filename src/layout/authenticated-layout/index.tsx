import * as React from "react";
import {
  Container,
  LogoMenuContainer,
  MainWindowWrapper,
  MenuItemsDiv,
  MenuWrapper,
  NavigationWrapper,
  MenuItems,
  AppContainer,
} from "./styles";
import Logo from "../../assets/svg/logo.svg";
import { MenuList } from "routes/MenuList";
import { useHistory } from "react-router";

function AuthenticatedLayout(props: React.PropsWithChildren<{}>) {
  const history = useHistory();
  const pathName = history.location.pathname;
  
  return (
    <Container>
      <NavigationWrapper>
        <MenuWrapper>
          <div>
            <LogoMenuContainer>
              <img src={Logo} alt="logo" />
            </LogoMenuContainer>

            <MenuItemsDiv>
              {MenuList.map((item, index) => (
                <MenuItems
                  className={
                    pathName.includes(item.name.toLowerCase())
                      ? "active-menu"
                      : ""
                  }
                  onClick={() => history.push(item.path)}
                  key={index}
                >
                  {item.name}
                </MenuItems>
              ))}
            </MenuItemsDiv>
          </div>
        </MenuWrapper>
      </NavigationWrapper>

      <MainWindowWrapper>
        <AppContainer>{props.children}</AppContainer>
      </MainWindowWrapper>
    </Container>
  );
}

export default AuthenticatedLayout;
