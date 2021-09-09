import * as React from "react";
import {
  ContaninerWrapper,
} from "./styles";

export const UnauthenticatedLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <ContaninerWrapper>
     {props.children}
    </ContaninerWrapper>
  );
};
