import React from "react";
import {
  NavBorder,
  NavContainer,
  NavElements,
  NotificationDiv,
  UserIcon,
} from "./styles";

import User from "../../assets/svg/user-icon.svg";
import CaretDown from "../../assets/svg/caret-down.svg";

const AppNav = () => {
  return (
    <NavContainer>
      <NavElements>
        <NotificationDiv>
          Hi Andie! you are yet to complete your account setup
        </NotificationDiv>

        <UserIcon>
          <img src={User} alt="User Icon" />
          <p>Andie kane </p>
          <img src={CaretDown} alt="Caret down" />
        </UserIcon>
      </NavElements>

      <NavBorder />
    </NavContainer>
  );
};

export default AppNav;
