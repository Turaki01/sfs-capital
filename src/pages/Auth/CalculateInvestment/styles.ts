import styled from "styled-components";
import { device } from "styles";

const CalculateContainer = styled.div`
  margin: 10px;
  display: block;

  select {
    width: 100%;
    margin: 20px 0;
  }

  button {
      width: 100%
  }

  input {
    width: calc(100vw - 45px);
    max-width: 100%;
  }

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 40px auto;
    max-width: 900px;

    button {
        width: fit-content
    }

    input {
        width: 250px;
      }

    select {
        margin: 0;
        width: 200px
    }
  }
`;

export { CalculateContainer };
