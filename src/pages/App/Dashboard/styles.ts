import styled from "styled-components";
import { device } from "styles";

const DashboardCardContainer = styled.div`
  margin-bottom: 2rem;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 50px;
  }
`;

export {
  DashboardCardContainer,
};
