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
  AllRightReserve,
  MenuElementsContainer,
} from "./styles";
import Logo from "../../assets/svg/logo.svg";
import { MenuList } from "routes/MenuList";
import { useHistory } from "react-router";
import AppNav from "component/app-nav";

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

            <MenuElementsContainer>
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
                    <img
                      src={item.icon}
                      style={{ maxWidth: "20px", marginRight: "10px" }}
                      alt={item.name}
                    />
                    {item.name}
                  </MenuItems>
                ))}
              </MenuItemsDiv>

              <AllRightReserve>2019 | Copright - sfs Capital</AllRightReserve>
            </MenuElementsContainer>
          </div>
        </MenuWrapper>
      </NavigationWrapper>

      <MainWindowWrapper>
        <AppNav />
        <AppContainer>{props.children}</AppContainer>
      </MainWindowWrapper>
    </Container>
  );
}

export default AuthenticatedLayout;
