import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

import InvestmentBg from "../../../../assets/svg/investment.svg";

const PageTitle = styled.h4`
  color: ${colors.pri};
`;

const LatestInvestmentContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 2.5rem;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 40% auto;
    grid-column-gap: 50px;
  }
`;

const InvestmentCard = styled.div`
  position: relative;
  border-radius: 5px !important;
  background: rgb(255, 255, 255);
  margin-bottom: 2rem;
  cursor: pointer;
`;

const InvestmentCardBody = styled.div`
  padding: 20px;
`;

const InvestmentBackgroundOverlay = styled.div`
  background: #0000001f;
  height: 200px;
  border-radius: 5px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InvestmentBackground = styled.div`
  background-image: url(${InvestmentBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;

const InvestmentTitle = styled.h3`
  color: #fff;
  font-weight: normal;
  margin-bottom: 5px;
`;

const InvestmentSubTitle = styled.p`
  margin: 0;
  color: #fff;
  font-size: 14px;
`;

const CardBodyTitle = styled.p`
  color: #b2b7bc;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 14px;
  text-transform: uppercase;
`;

const PlanTag = styled.div`
  background: #000;
  padding: 0 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 24px;
  width: fit-content;
  color: #fff;
  font-size: 13px;
`;

export {
  PageTitle,
  LatestInvestmentContainer,
  InvestmentBackground,
  InvestmentCard,
  InvestmentBackgroundOverlay,
  PlanTag,
  InvestmentTitle,
  InvestmentSubTitle,
  InvestmentCardBody,
  CardBodyTitle,
};
