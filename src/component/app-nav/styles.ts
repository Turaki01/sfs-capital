import styled from "styled-components";
import colors from "styles/colors";
import { device } from "../../styles";

const NavContainer = styled.nav`
  margin: 20px 0 20px 30px;
`;

const NavElements = styled.div`
  margin-bottom: 10px;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 80% auto;
    grid-column-gap: 50px;
    align-items: center;
  }
`;

const NotificationDiv = styled.div`
  background: ${colors.sec};
  font-size: 13px;
  height: 16px;
  padding: 7px 15px;
  border-radius: 50px;
  color: #fff;
  width: fit-content;
  margin-bottom: 10px;
  display: none;

  @media ${device.laptop} {
    margin-bottom: 0;
    display: block;
  }
`;

const UserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    max-width: 40px;
    margin-right: 8px
  }

  p {
    font-size: 13px;
    color: ${colors.pri};
    margin-right: 3px
  }

  @media ${device.laptop} {
    justify-content: start;
  }
`;

const NavBorder = styled.hr`
  border: none;
  border-bottom: 0.5px solid #b2b7bc7a;
`;

export { NavContainer, NotificationDiv, NavBorder, NavElements, UserIcon };
