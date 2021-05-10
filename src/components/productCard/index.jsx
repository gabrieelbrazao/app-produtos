import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parseValueToBrl from "../../utils/parseValue";
import {
  Card,
  Description,
  Actions,
  AddButton,
  Image,
  QuantityButton,
  IconRemove,
  IconAdd,
  QuantityInput,
  ProductValueText,
  ProductNameText,
} from "./styles";

export default function productCard({ data }) {
  const [quantity, setQuantity] = useState(0);
  const { TOTAL_VALUE } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (quantity === 0) return;

    const newValue = TOTAL_VALUE + data.value * quantity;

    dispatch({ type: "SET_TOTAL_VALUE", value: newValue });
  };

  return (
    <Card elevation={0}>
      <Image src={`assets/${data.image}`} alt="Produto" />

      <Description className="description">
        <ProductNameText variant="h3">{data.name}</ProductNameText>

        <ProductValueText variant="h2">
          {parseValueToBrl(data.value)}
        </ProductValueText>

        <Typography variant="h4">
          Em até 12x de {parseValueToBrl(data.value / 12)}
        </Typography>

        <Typography variant="h4">
          {parseValueToBrl((data.value * 90) / 100)} à vista (10% de desconto)
        </Typography>

        <Actions className="actions">
          <QuantityButton
            onClick={() => quantity !== 0 && setQuantity(quantity - 1)}
          >
            <IconRemove />
          </QuantityButton>

          <QuantityInput
            variant="outlined"
            size="small"
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value, 10))}
            onBlur={(event) =>
              (event.target.value < 0 || !event.target.value) && setQuantity(0)
            }
          />

          <QuantityButton onClick={() => setQuantity(quantity + 1)}>
            <IconAdd />
          </QuantityButton>

          <AddButton
            variant="contained"
            color="primary"
            onClick={() => handleAddProduct()}
          >
            adicionar
          </AddButton>
        </Actions>
      </Description>
    </Card>
  );
}
