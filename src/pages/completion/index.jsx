import { Paper, Typography, Button } from "@material-ui/core";
import React from "react";
import purchaseImage from "../../assets/purchase.png";
import "./styles.css";

export default function products() {
  return (
    <div id="container">
      <Paper elevation={0} id="card">
        <Typography variant="h6" id="textName">
          John Doe,
        </Typography>

        <Typography variant="subtitle1" align="center">
          Sua compra no valor &nbsp;
          <Typography variant="subtitle2" component="span">
            R$ 299,00
          </Typography>
          &nbsp; foi finalizada com sucesso
        </Typography>

        <div id="imageContainer">
          <img src={purchaseImage} alt="Compra efetuada" id="image" />
        </div>

        <Button variant="contained" color="primary" id="button">
          iniciar nova compra
        </Button>
      </Paper>
    </div>
  );
}
