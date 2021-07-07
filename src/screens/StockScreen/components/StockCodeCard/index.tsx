import React from "react";
import { Pressable, Text } from "react-native";
import * as S from "./styles";

interface Props {
  code: string;
  name: string;
  onPress: () => void;
}

const StockCodeCard = ({ code, name, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <S.Container>
        <Text>{code}</Text>
        <Text>{name}</Text>
      </S.Container>
    </Pressable>
  );
};

export default StockCodeCard;
