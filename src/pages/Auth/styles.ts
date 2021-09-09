import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

import LandingImage from "../../assets/svg/landing-bg.svg";

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const PrimaryButton = styled.button`
  height: 50px;
  background: #FFD873;
  color: #041942;
  font-weight: bold;
  border: none;
  padding 0 50px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
border-radius: 2px;
`;

const LinkButton = styled.button`
height: 50px;
color: #fff;
background: transparent;
border: none;
padding 0 50px;
`;

const HeaderContainer = styled.div`
  background-image: url(${LandingImage});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 300px;
  min-height: 50vh;
  padding: 30px;

  @media ${device.laptop} {
    background-image: url(${LandingImage});
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 800px;
    height: 80vh;
    padding: 30px 80px;
  }
`;

const HeaderElement = styled.div`
  max-width: 400px;
`;

const HeaderTitle = styled.h2`
  color: ${colors.pri};
  font-size: 27px;
  font-weight: 600;
  @media ${device.laptop} {
    font-size: 35px;
  }
`;

const HeaderSubTitle = styled.p`
  color: #002058b5;
  font-size: 14px;
  margin-bottom: 60px
`;

const FinancialServices = styled.div`
  padding: 70px 30px;
`;

const FinancialServicesTitle = styled.h3`
  color: #152144de;
  font-size: 1.7rem;
  text-align: center;
  padding-bottom: 80px;
  max-width: 300px;
  margin: auto;
`;

const FinancialServicesContainer = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-column-gap: 50px;
    max-width: 1000px;
    margin: auto;
  }
`;

const FinancialServicesItem = styled.div`
  margin-bottom: 30px;
  text-align: center;
  @media ${device.laptop} {
    margin-bottom: 0;
  }
`;

const ItemTitle = styled.h3`
  color: #002058c4;
  font-size: 20px;
`;

const ItemSubTitle = styled.p`
  color: #b3b3b3;
  font-size: 15px;
`;

const FinancialServicesItemIcon = styled.div`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: auto;

  img {
    max-width: 50px;
  }
`;

export {
  LogoContainer,
  FinancialServicesContainer,
  FinancialServicesItem,
  FinancialServicesItemIcon,
  ItemTitle,
  ItemSubTitle,
  FinancialServices,
  FinancialServicesTitle,
  HeaderContainer,
  HeaderTitle,
  HeaderSubTitle,
  HeaderElement,
  PrimaryButton,
  LinkButton,
};
