import React from "react";
import { FlatList } from "react-native";
import { IStock } from "../../../../types";
import StockCodeCard from "../StockCodeCard";

interface IProps {
  stockList: Array<IStock>;
  setStockCode: (arg0: string) => void;
}

const StockList = ({ stockList, setStockCode }: IProps) => {
  return (
    <FlatList
      keyExtractor={(i) => i.code}
      data={stockList}
      renderItem={({ item }) => (
        <StockCodeCard
          onPress={() => setStockCode(item.code)}
          code={item.code}
          name={item.name}
        />
      )}
    />
  );
};

export default StockList;
