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
  HamburgerIcon,
  CloseIconDiv,
} from "./styles";
import Logo from "../../assets/svg/logo.svg";
import { MenuList } from "routes/MenuList";
import { useHistory } from "react-router";
import AppNav from "component/app-nav";
import { RiMenu2Fill, RiCloseCircleFill } from "react-icons/ri";

function AuthenticatedLayout(props: React.PropsWithChildren<{}>) {
  const history = useHistory();
  const pathName = history.location.pathname;

  const [openHamburger, setOpenhamburger] = React.useState(false);

  return (
    <Container>
      <HamburgerIcon>
        <RiMenu2Fill
          onClick={() => setOpenhamburger(true)}
          style={{ fontSize: "20px" }}
        />
      </HamburgerIcon>

      <NavigationWrapper className={`${openHamburger ? "open-sidebar" : ""}`}>
        <CloseIconDiv>
          <RiCloseCircleFill
            onClick={() => setOpenhamburger(false)}
            style={{ fontSize: "20px", color: "#fff" }}
          />
        </CloseIconDiv>

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
