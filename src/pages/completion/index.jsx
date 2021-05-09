import { Typography, Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import parseValueToBrl from "../../utils";
import { Container, Card, ClientName, ImageContainer, Image } from "./styles";

export default function products() {
  const { TOTAL_VALUE, CLIENT_NAME } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNewPurchase = () => {
    dispatch({ type: "CLEAR_STORE" });
    history.replace("/");
  };

  return (
    <Container>
      <Card>
        <ClientName variant="h1" align="center">
          {CLIENT_NAME},
        </ClientName>

        <Typography variant="subtitle1" align="center">
          Sua compra no valor &nbsp;
          <Typography variant="subtitle2" component="span">
            {parseValueToBrl(TOTAL_VALUE)}
          </Typography>
          &nbsp; foi finalizada com sucesso
        </Typography>

        <ImageContainer>
          <Image src="assets/purchase.png" alt="Compra efetuada" />
        </ImageContainer>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleNewPurchase()}
        >
          iniciar nova compra
        </Button>
      </Card>
    </Container>
  );
}
