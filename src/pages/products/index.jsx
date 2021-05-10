import { Divider, Grid, Popover, Typography } from "@material-ui/core";
import React, { useState } from "react";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import Form from "../../components/form";
import data from "./data.json";
import { Container, TitleProducts, TitleClientData } from "./styles";
import { PopoverText } from "../../components/form/styles";

export default function products() {
  const [openPopover, setOpenPopover] = useState(false);
  const { TOTAL_VALUE } = useSelector((state) => state.main);
  const history = useHistory();

  const handleFinishPurchase = () => {
    if (TOTAL_VALUE === 0) {
      setOpenPopover(true);
      return;
    }

    history.replace("/completion");
  };

  return (
    <Container>
      <TitleProducts>
        <Typography variant="h1">Produtos</Typography>
        <Divider />
      </TitleProducts>

      <Grid container>
        {data.map((product) => (
          <Grid
            item
            container
            justify="center"
            xs={12}
            sm={4}
            md={3}
            key={uuid()}
          >
            <ProductCard data={product} />
          </Grid>
        ))}
      </Grid>

      <TitleClientData>
        <Typography variant="h1">Dados do Cliente</Typography>
        <Divider />
      </TitleClientData>

      <Form onSubmit={handleFinishPurchase} />

      <Popover
        open={openPopover}
        onClose={() => setOpenPopover(false)}
        anchorEl={document.getElementsByClassName("buttonSubmit")[0]}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <PopoverText>Por favor, adicione algum item ao carrinho.</PopoverText>
      </Popover>
    </Container>
  );
}
