import styled from "styled-components";
import { Paper, Typography } from "@material-ui/core";

export const Container = styled.div`
  background-color: #eceff1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(Paper)`
  width: 320px;
  padding: 54px 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 320px) {
    height: 100vh !important;
  }
`;

export const ClientName = styled(Typography)`
  margin-bottom: 4px !important;
  font-weight: bold !important;
`;

export const ImageContainer = styled.div`
  padding: 46px 0;
`;

export const Image = styled.img`
  width: 132px;
`;
