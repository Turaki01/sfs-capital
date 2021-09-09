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
     {props.children}
    </ContaninerWrapper>
  );
};
