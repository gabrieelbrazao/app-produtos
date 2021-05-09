const parseValueToBrl = (number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);

export default parseValueToBrl;
