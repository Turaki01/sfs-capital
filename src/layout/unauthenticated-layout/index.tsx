import * as React from "react";
import {
  Container,
  ContaninerWrapper,
  FormContainer,
  MainContent,
} from "./styles";

export const UnauthenticatedLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <ContaninerWrapper>
      <Container>
        <MainContent>
          <FormContainer>
            <section>{props.children}</section>
          </FormContainer>
        </MainContent>
      </Container>
    </ContaninerWrapper>
  );
};
