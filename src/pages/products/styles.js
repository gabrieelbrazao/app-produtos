import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 128px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content min-content min-content auto;

  @media only screen and (max-width: 720px) {
    padding: 32px 16px;
  }
`;

export const TitleProducts = styled.div`
  margin-bottom: 32px;
`;

export const TitleClientData = styled.div`
  margin: 32px 0;
`;

export const Footer = styled.div`
  display: grid;
  align-self: end;
  justify-self: end;
  margin-top: 32px;
`;

export const TotalValue = styled(Typography)`
  margin-bottom: 16px !important;
  font-weight: bold !important;
`;
