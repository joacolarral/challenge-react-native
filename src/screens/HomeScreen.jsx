import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { View } from "react-native";
import { ViewOutside, ViewInside } from "./styled";
import { LinearGradient } from "expo-linear-gradient";
import Title from "./Title/Title";
import InputScroll from "./InputScroll/InputScroll";
import TotalCredit from "./TotalCredit/TotalCredit";

const HomeScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [montoTotal, setMontoTotal] = useState(0);
  const [plazo, setPlazo] = useState(0);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  }, []);

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  }

  const loadFonts = async () => {
    await Font.loadAsync({
      "Montserrat-bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
    });
    setFontsLoaded(true);
  };

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  }

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <ViewOutside>
      <ViewInside>
        <Title />
        <InputScroll
          text={"MONTO TOTAL"}
          value={montoTotal}
          minValue={5000}
          maxValue={50000}
          setValue={setMontoTotal}
          numberWithCommas={numberWithCommas}
        />
        <InputScroll
          text={"PLAZO"}
          value={plazo}
          minValue={3}
          maxValue={24}
          setValue={setPlazo}
          numberWithCommas={numberWithCommas}
        />
        <TotalCredit
          value={montoTotal / plazo}
          numberWithCommas={numberWithCommas}
        />
      </ViewInside>
      <LinearGradient
        colors={["#114f85", "#093b67"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 300,
          height: 320,
          zIndex: -1,
        }}
      />
    </ViewOutside>
  );
};

export default HomeScreen;
