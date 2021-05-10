import { Select, Typography } from "@material-ui/core";
import styled from "styled-components";

export const SexSelect = styled(Select)`
  ${(props) => props.value === 0 && "color: #BCBCBC !important"}
`;

export const Footer = styled.div`
  display: grid;
  align-items: end;
  justify-items: end;
  margin-top: 32px;
`;

export const TotalValue = styled(Typography)`
  margin-bottom: 16px !important;
  font-weight: bold !important;
`;

export const PopoverText = styled(Typography)`
  padding: 12px;
`;
