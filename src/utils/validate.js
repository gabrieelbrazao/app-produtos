const validate = (values) => {
  const errors = {};

  const requiredFields = ["name", "email", "sex"];

  requiredFields.forEach((field) => {
    if (!values[field] || (field === "sex" && values[field] === "0")) {
      errors[field] = "Obrigatório";
    }
  });

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "E-mail inválido";
  }

  return errors;
};

export default validate;
