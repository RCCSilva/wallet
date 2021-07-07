import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { View } from "react-native";
import { IFormInput } from "../../";
import * as S from "./styles";

const StockInput = (props: UseControllerProps<IFormInput>) => {
  const {
    field: { onChange, ...fieldProps },
    fieldState: { error },
  } = useController(props);

  return (
    <View>
      <S.Label>Stock Code:</S.Label>
      <S.Input
        {...fieldProps}
        onChangeText={onChange}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {error ? <S.Warning>{error.type}</S.Warning> : <></>}
    </View>
  );
};

export default StockInput;
