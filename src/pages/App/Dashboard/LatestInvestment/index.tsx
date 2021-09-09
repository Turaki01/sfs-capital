import CardComponent from "component/Card";
import React from "react";
import {
  CardBodyTitle,
  ChartTitle,
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

import NairaIcon from "../../../../assets/svg/dark-naira.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LastestInvestment = () => {
  const data = [
    {
      name: "0-10",
      percentage: 11,
      amt: 14,
    },
    {
      name: "11-20",
      percentage: 25,
      amt: 30,
    },
    {
      name: "21-30",
      percentage: 18,
      amt: 0,
    },
    {
      name: "31-40",
      percentage: 16,
      amt: 0,
    },
    {
      name: "41-50",
      percentage: 21,
      amt: 0,
    },
    {
      name: "51-60",
      percentage: 5,
      amt: 0,
    },
    {
      name: "61-70",
      percentage: 3,
      amt: 0,
    },
    {
      name: "71-80",
      percentage: 5,
      amt: 0,
    },
  ];

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
            <p
              style={{ color: "#898D92", marginTop: "0", marginBottom: "30px" }}
            >
              13% monthly
            </p>

            <CardBodyTitle>InvestABLE Amount</CardBodyTitle>
            <div style={{ display: "flex" }}>
              <p style={{ marginTop: "0" }}>
                <img src={NairaIcon} alt="Naira" /> 55,000.00
              </p>
              <p
                style={{ color: "#B2B7BC", marginTop: "0", padding: "0 30px" }}
              >
                TO
              </p>
              <p style={{ marginTop: "0" }}>
                <img src={NairaIcon} alt="Naira" /> 155,000.00
              </p>
            </div>

            <CardBodyTitle>INVESTORS</CardBodyTitle>
            <p style={{ color: "#B2B7BC", marginTop: "0" }}>200</p>
          </InvestmentCardBody>
        </InvestmentCard>

        <CardComponent>
          <ChartTitle>Investment chart</ChartTitle>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#F9A825" />
          </BarChart>
        </CardComponent>
      </LatestInvestmentContainer>
    </div>
  );
};

export default LastestInvestment;
