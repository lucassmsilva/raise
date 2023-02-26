import { PropsWithChildren } from "react";
import styled from "styled-components";
import { PageTitle } from "./Typography";
import { getColors } from "./Colors";

export const Container = styled.View`
    flex: 1;
    padding: 4px 10px
    background-color: ${props => getColors(props.theme).primaryColor};
`;

export const PageHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 0px;
    border-bottom-width: 2px;
    border-bottom-color: ${props => getColors(props.theme).accentColor};
`;

interface CabecalhoType {
  titulo: string;
  theme: string;
}

export const Cabecalho = ({
  titulo,
  theme,
  children
}: PropsWithChildren<CabecalhoType>) => {
  return (
    <PageHeader theme={theme}>
      <PageTitle theme={theme}>{titulo}</PageTitle>
      {children}
    </PageHeader>
  );
};
