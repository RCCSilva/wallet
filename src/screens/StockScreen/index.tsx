import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "react-native";
import * as yup from "yup";
import { IStock } from "../../types";
import StockInput from "./components/StockInput";
import StockList from "./components/StockList";
import * as S from "./styles";

export interface IFormInput {
  stockCode: string;
}

const schema = yup.object().shape({
  stockCode: yup.string().required(),
});

const stockList: Array<IStock> = [
  {
    code: "PETR4",
    name: "Petrólio Brasil",
  },
  {
    code: "SULA11",
    name: "Sul América",
  },
  {
    code: "CVCB3",
    name: "CVC Brasil Operadora",
  },
];

const StockScreen = () => {
  const { control, handleSubmit, setValue, reset } = useForm<IFormInput>(
    {
      resolver: yupResolver(schema),
    }
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <S.Container>
      <StockInput name="stockCode" control={control} />

      <StockList
        stockList={stockList}
        setStockCode={(code) => setValue("stockCode", code)}
      />

      <Button title="Create" onPress={handleSubmit(onSubmit)} />
    </S.Container>
  );
};

export default StockScreen;
