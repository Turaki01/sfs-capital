import styled from "styled-components";
import { device } from "../../styles";

const ContaninerWrapper = styled.main`
  height: 100%;
`;

const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1300px;
  padding: 2rem 1rem;

  @media ${device.tablet} {
    padding: 3rem 2rem;
  }

  @media ${device.laptop} {
    padding: 3rem;
  }

  @media ${device.laptopL} {
    padding: 3rem 0 1rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  margin-top: 3rem;

  @media ${device.tablet} {
    height: calc(100% - 3rem);
    margin-top: 8rem;
    padding: 4rem 0 0;
    margin-top: 0;

    align-items: center;
    justify-content: center;
  }
`;

const FormContainer = styled.div`
  padding: 1.5rem;
  margin-top: 1.75rem;
  border-radius: 2px;
  box-shadow: 0px 4px 40px rgba(12, 22, 47, 0.1);
  background: #fff;
  width: 400px;

  a {
    display: inline-block;
    color: rgb(32, 84, 210);
  }

  button {
    height: 3.4rem;
    margin-top: 1.5rem;
  }

  @media ${device.tablet} {
    padding: 2.5rem;
  }
`;

export { ContaninerWrapper, Container, MainContent, FormContainer };
