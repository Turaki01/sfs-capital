import LandingFooter from "component/landing-footer";
import React from "react";
import { loginKey } from "utils/constants";
import storage from "utils/storage";
import {
  FinancialServices,
  FinancialServicesContainer,
  FinancialServicesItem,
  FinancialServicesItemIcon,
  FinancialServicesTitle,
  HeaderContainer,
  HeaderElement,
  HeaderSubTitle,
  HeaderTitle,
  ItemSubTitle,
  ItemTitle,
  PrimaryButton,
} from "./styles";

import InvestIcon from "../../assets/svg/Invest.svg";
import LaterIcon from "../../assets/svg/Later.svg";
import LeafIcon from "../../assets/svg/leaf.svg";
import AppHeader from "component/app-header";

const Landing = () => {
  const handleLogin = () => {
    storage.set(loginKey, "access_token");
    window.location.reload();
  };

  return (
    <div>
      {/* <p onClick={handleLogin}>Landing works</p> */}

      <HeaderContainer>
        <AppHeader login={handleLogin} />
        <>
          <HeaderElement>
            <HeaderTitle>
              Our Mission is to Empower your Financial Freedom
            </HeaderTitle>

            <HeaderSubTitle>
              We help make dreams happen. Come to us with your dreams of a
              better future and we will make it happen.
            </HeaderSubTitle>

            <PrimaryButton onClick={handleLogin}>Get started now</PrimaryButton>
          </HeaderElement>
        </>
      </HeaderContainer>

      <FinancialServices>
        <FinancialServicesTitle>
          Your guide to financial wellness
        </FinancialServicesTitle>

        <FinancialServicesContainer>
          <FinancialServicesItem>
            <FinancialServicesItemIcon>
              <img src={InvestIcon} alt="Invest" />
            </FinancialServicesItemIcon>

            <ItemTitle>Invest for growth</ItemTitle>

            <ItemSubTitle>Invest with us and see your wealth grow</ItemSubTitle>
          </FinancialServicesItem>

          <FinancialServicesItem>
            <FinancialServicesItemIcon>
              <img src={LaterIcon} alt="Invest" />
            </FinancialServicesItemIcon>

            <ItemTitle>Think of the rainy day</ItemTitle>
            <ItemSubTitle>
              Get ready for the rainy day. Invest today in our growth
              instrument.
            </ItemSubTitle>
          </FinancialServicesItem>

          <FinancialServicesItem>
            <FinancialServicesItemIcon>
              <img src={LeafIcon} alt="Invest" />
            </FinancialServicesItemIcon>

            <ItemTitle>Grow your knowledge</ItemTitle>
            <ItemSubTitle>
              Learn how to get more from your money with easy-to-understand
              articles and videos from financial experts.
            </ItemSubTitle>
          </FinancialServicesItem>
        </FinancialServicesContainer>
      </FinancialServices>
      <LandingFooter />
    </div>
  );
};

export default Landing;
