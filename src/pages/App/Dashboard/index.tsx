import React from "react";
import {
  CardAmount,
  CardImage,
  CardTitle,
  DashboardCardContainer,
  InvestDiv,
  InvestIconDiv,
  WelcomeDiv,
  WelcomeText,
} from "./styles";

import InvestIcon from "../../../assets/svg/check-circle.svg";
import Elipse from "../../../assets/svg/ellipse.svg";
import NairaIcon from "../../../assets/svg/naira.svg";

import CardComponent from "component/Card";

const Dashboard = () => {
  return (
    <div>
      <WelcomeDiv>
        <WelcomeText>Hi, Welcome</WelcomeText>

        <InvestDiv>
          Invest Now
          <InvestIconDiv>
            <img src={InvestIcon} alt="Invest" />
          </InvestIconDiv>
        </InvestDiv>
      </WelcomeDiv>

      <DashboardCardContainer>
        <CardComponent animationClass="card-animated" backgroundColor="#F9A825">
          <CardTitle>Total Invested</CardTitle>
          <CardAmount><img src={NairaIcon} alt="Naira"/> 35, 001,500.00</CardAmount>

          <p style={{color: "#fff"}}>from 15 investment plans</p>
          <CardImage src={Elipse} alt="Elipse" />
        </CardComponent>

        <CardComponent animationClass="card-animated" backgroundColor="#0B638D">
          <CardTitle>Total Earned</CardTitle>
          <CardAmount><img src={NairaIcon} alt="Naira"/> 1, 120,500.00</CardAmount>
          <CardImage src={Elipse} alt="Elipse" />
        </CardComponent>

        <CardComponent animationClass="card-animated" backgroundColor="#B2B7BC">
          <CardTitle>Total Payoff</CardTitle>
          <CardAmount><img src={NairaIcon} alt="Naira"/> 501,500.00</CardAmount>
          <CardImage src={Elipse} alt="Elipse" />
        </CardComponent>
      </DashboardCardContainer>
    </div>
  );
};

export default Dashboard;
