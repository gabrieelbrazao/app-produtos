import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Popover,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import parseValueToBrl from "../../utils";
import ProductCard from "../../components/productCard";
import data from "./data.json";
import {
  Container,
  TitleProducts,
  TitleClientData,
  Footer,
  TotalValue,
  GenderSelect,
  PopoverText,
} from "./styles";

export default function products() {
  const [gender, setGender] = useState(0);
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { TOTAL_VALUE } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFinishPurchase = (event) => {
    if (TOTAL_VALUE === 0) {
      setAnchorEl(event.currentTarget);
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

      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sm={6}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            label="Nome"
            variant="outlined"
            placeholder="Nome do cliente aqui"
            onBlur={(event) =>
              dispatch({ type: "SET_CLIENT_NAME", name: event.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} md={5} sm={6}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            label="E-mail"
            variant="outlined"
            placeholder="Digite seu e-mail aqui"
          />
        </Grid>

        <Grid item xs={12} md={2} sm={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Sexo</InputLabel>

            <GenderSelect
              value={gender}
              label="Sexo"
              onChange={(event) => setGender(event.target.value)}
            >
              <MenuItem value={0} disabled>
                Selecione
              </MenuItem>

              <MenuItem value={1}>Masculino</MenuItem>
              <MenuItem value={2}>Feminino</MenuItem>
              <MenuItem value={3}>Outro</MenuItem>
            </GenderSelect>
          </FormControl>
        </Grid>
      </Grid>

      <Footer>
        <TotalValue variant="h1" align="right">
          Total: {parseValueToBrl(TOTAL_VALUE)}
        </TotalValue>

        <Button
          variant="contained"
          color="secondary"
          onClick={(event) => handleFinishPurchase(event)}
        >
          finalizar compra
        </Button>

        <Popover
          open={openPopover}
          onClose={() => setOpenPopover(false)}
          anchorEl={anchorEl}
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
      </Footer>
    </Container>
  );
}
