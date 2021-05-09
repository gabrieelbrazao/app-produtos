import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import uuid from "react-uuid";
import ProductCard from "../../components/productCard";
import data from "./data.json";
import {
  Container,
  TitleProducts,
  TitleClientData,
  Footer,
  TotalValue,
} from "./styles";

export default function products() {
  const [gender, setGender] = useState(0);

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

            <Select
              value={gender}
              label="Sexo"
              style={gender === 0 ? { color: "#BCBCBC" } : {}}
              onChange={(event) => setGender(event.target.value)}
            >
              <MenuItem value={0} disabled>
                Selecione
              </MenuItem>

              <MenuItem value={1}>Masculino</MenuItem>
              <MenuItem value={2}>Feminino</MenuItem>
              <MenuItem value={3}>Outro</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Footer>
        <TotalValue variant="h1">Total: R$ 299,00</TotalValue>

        <Button variant="contained" color="secondary">
          finalizar compra
        </Button>
      </Footer>
    </Container>
  );
}
