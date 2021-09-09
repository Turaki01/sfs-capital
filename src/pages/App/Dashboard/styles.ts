import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

const DashboardCardContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 2.5rem;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 50px;
  }
`;

const CardImage = styled.img`
  position: absolute;
  right: 0;
  top: 30%;
`;

const CardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

const CardAmount = styled.h4`
  font-size: 20px;
  color: #fff;
  font-weight: normal
`;

const WelcomeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WelcomeText = styled.h2`
  color: ${colors.pri};
`;

const InvestDiv = styled.div`
  background: #f2994a;
  border: 1px solid #f2f2f2;
  color: #fff;
  height: 60px;
  width: 203px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  cursor: pointer;
`;

const InvestIconDiv = styled.div`
  width: 30px;
  height: 30px;
  background: #ffffff40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
export {
  DashboardCardContainer,
  WelcomeDiv,
  WelcomeText,
  InvestDiv,
  InvestIconDiv,
  CardImage,
  CardTitle,
  CardAmount,
};
