import styled from "styled-components";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  TextField,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

export const Card = styled(Paper)`
  width: 282px;
  padding: 16px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 5px 5px 15px -8px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }

  &:hover .description {
    transform: translate(0, -100px);
    transition: 0.2s;
  }

  &:hover .actions {
    opacity: 1;
    visibility: visible;
    transition: all 0.5s;
    transition-delay: 0.1s;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  position: relative;
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.7);
  padding-top: 12px;
`;

export const ProductNameText = styled(Typography)`
  margin-top: 12px !important;
`;

export const ProductValueText = styled(Typography)`
  margin: 12px 0 !important;
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: min-content auto min-content;
  column-gap: 16px;
  margin-top: 12px;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: all 0.1s;

  &[hidden] {
    display: none !important;
  }
`;

export const QuantityButton = styled(Avatar)`
  background-color: #ccd4d8;
  cursor: pointer;
`;

export const QuantityInput = styled(TextField).attrs(() => ({
  inputProps: { style: { textAlign: "center" } },
}))``;

export const IconRemove = styled(Remove)`
  color: #56707c;
`;

export const IconAdd = styled(Add)`
  color: #56707c;
`;

export const AddButton = styled(Button)`
  grid-column: 1 / 4;
  margin-top: 12px !important;
`;
