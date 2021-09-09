import React from "react";
import { SuccessButton } from "../styles";
import { CalculateContainer } from "./styles";

const CalculateInvestments = () => {
  return (
    <CalculateContainer>
      <select className="custom-select" name="product" id="product">
        <option value="">Select product</option>
      </select>

      <input placeholder="How much do want to invest?" className="custom-input" />

      <select className="custom-select" name="duration" id="duration">
        <option value="">For How long?</option>
      </select>

      <SuccessButton style={{height: "59px"}}>Calculate</SuccessButton>
    </CalculateContainer>
  );
};

export default CalculateInvestments;
