import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  AccessButton,
  DetailButton,
  TextButton,
  ViewText,
} from "./styled";

export default ({ value, numberWithCommas }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    value = numberWithCommas(Math.round(value * 100) / 100);
    setTotal(value);
  }, [total, value]);

  return (
    <View>
      <ViewText>
        <Text fontSize={"14px"} flex={"1 0 auto"}>
          CUOTA FIJA POR MES
        </Text>
        <Text fontSize={"22px"} flex={"1 0 40%"}>{`$ ${total}`}</Text>
      </ViewText>
      <AccessButton backgroundColor={"#4cab8d"}>
        <TextButton fontSize={"16px"}>OBTENÉ CRÉDITO</TextButton>
      </AccessButton>
      <DetailButton>
        <TextButton fontSize={"12px"}>VER DETALLE DE CUOTAS</TextButton>
      </DetailButton>
    </View>
  );
};
