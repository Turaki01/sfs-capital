import CardComponent from "component/Card";
import React from "react";
import {
  CardBodyTitle,
  InvestmentBackground,
  InvestmentBackgroundOverlay,
  InvestmentCard,
  InvestmentCardBody,
  InvestmentSubTitle,
  InvestmentTitle,
  LatestInvestmentContainer,
  PageTitle,
  PlanTag,
} from "./styles";

import NairaIcon from "../../../../assets/svg/dark-naira.svg"

const LastestInvestment = () => {
  return (
    <div>
      <PageTitle>Latest Investments</PageTitle>

      <LatestInvestmentContainer>
        <InvestmentCard>
          <InvestmentBackground>
            <InvestmentBackgroundOverlay>
              <PlanTag>Fixed Plan</PlanTag>

              <div>
                <InvestmentTitle>Investment Title</InvestmentTitle>

                <InvestmentSubTitle>
                  The Company currently operates in 25 states in...
                </InvestmentSubTitle>
              </div>
            </InvestmentBackgroundOverlay>
          </InvestmentBackground>
          <InvestmentCardBody>
            <CardBodyTitle>Interest</CardBodyTitle>
            <p style={{ color: "#898D92", marginTop: "0", marginBottom: "30px" }}>13% monthly</p>

            <CardBodyTitle>InvestABLE Amount</CardBodyTitle>
            <div style={{display: "flex"}}>
            <p style={{marginTop: "0" }}><img src={NairaIcon} alt="Naira" /> 55,000.00</p>
            <p style={{ color: "#B2B7BC", marginTop: "0", padding: "0 30px" }}>TO</p>
            <p style={{marginTop: "0" }}><img src={NairaIcon} alt="Naira" /> 155,000.00</p>
            </div>

            <CardBodyTitle>INVESTORS</CardBodyTitle>
            <p style={{ color: "#B2B7BC", marginTop: "0" }}>200</p>
          </InvestmentCardBody>
        </InvestmentCard>

        <CardComponent><></></CardComponent>
      </LatestInvestmentContainer>
    </div>
  );
};

export default LastestInvestment;
