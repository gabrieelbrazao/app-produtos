import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import parseValueToBrl from "../../utils/parseValue";
import validate from "../../utils/validate";
import { Footer, TotalValue, SexSelect } from "./styles";

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) return;

  return <FormHelperText>{touched && error}</FormHelperText>;
};

const renderTextField = ({
  label,
  input,
  placeholder,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    error={touched && invalid}
    helperText={touched && error}
    fullWidth
    variant="outlined"
    InputLabelProps={{
      shrink: true,
    }}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({
  input,
  label,
  name,
  placeholder,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error} variant="outlined" fullWidth>
    <InputLabel>{label}</InputLabel>

    <SexSelect {...input} {...custom} label={label} value={placeholder}>
      {children}
    </SexSelect>

    {renderFromHelper({ touched, error })}
  </FormControl>
);

function form(props) {
  const [sex, setSex] = useState(0);
  const { TOTAL_VALUE } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const { handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} sm={6}>
          <Field
            name="name"
            label="Nome"
            placeholder="Nome do cliente aqui"
            component={renderTextField}
            onBlur={(event) =>
              dispatch({ type: "SET_CLIENT_NAME", name: event.target.value })
            }
          />
        </Grid>

        <Grid item xs={12} md={5} sm={6}>
          <Field
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail aqui"
            component={renderTextField}
          />
        </Grid>

        <Grid item xs={12} md={2} sm={3}>
          <Field
            component={renderSelectField}
            name="sex"
            label="Sexo"
            placeholder={sex}
            onChange={(event) => setSex(event.target.value)}
          >
            <MenuItem value={0} disabled>
              Selecione
            </MenuItem>

            <MenuItem value={1}>Masculino</MenuItem>
            <MenuItem value={2}>Feminino</MenuItem>
          </Field>
        </Grid>
      </Grid>

      <Footer>
        <TotalValue variant="h1" align="right">
          Total: {parseValueToBrl(TOTAL_VALUE)}
        </TotalValue>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className="buttonSubmit"
          disabled={submitting}
        >
          finalizar compra
        </Button>
      </Footer>
    </form>
  );
}

export default reduxForm({
  form: "clientForm",
  validate,
})(form);
