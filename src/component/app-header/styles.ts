import styled from "styled-components";
import { device } from "styles";

const HeaderNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptop} {
      margin-bottom: 100px;
  }
`;

const NavLogoContainer = styled.div`
  img {
    max-width: 50px;
  }
`;

export { HeaderNavContainer, NavLogoContainer };
