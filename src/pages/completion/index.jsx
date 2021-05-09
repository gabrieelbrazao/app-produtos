import { Typography, Button } from "@material-ui/core";
import React from "react";
import { Container, Card, ClientName, ImageContainer, Image } from "./styles";

export default function products() {
  return (
    <Container>
      <Card>
        <ClientName variant="h1">John Doe,</ClientName>

        <Typography variant="subtitle1" align="center">
          Sua compra no valor &nbsp;
          <Typography variant="subtitle2" component="span">
            R$ 299,00
          </Typography>
          &nbsp; foi finalizada com sucesso
        </Typography>

        <ImageContainer>
          <Image src="assets/purchase.png" alt="Compra efetuada" />
        </ImageContainer>

        <Button variant="contained" color="secondary">
          iniciar nova compra
        </Button>
      </Card>
    </Container>
  );
}
