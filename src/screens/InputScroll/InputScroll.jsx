import React, { useEffect } from "react";
import { View, Text, Input, Slider, TextInput, ViewInput } from "./styled";

export default ({
  text,
  maxValue,
  minValue,
  value,
  setValue,
  numberWithCommas,
}) => {
  useEffect(() => {
    setValue(minValue);
  }, []);

  function handleChange(value) {
    setValue(value);
  }

  return (
    <View>
      <Text>{text}</Text>
      <Input value={value > 24 ? `$ ${numberWithCommas(value)}` : `${value}`} />
      <ViewInput>
        <Slider
          maximumValue={maxValue}
          minimumValue={minValue}
          onValueChange={handleChange}
          step={value < 100 ? 1 : 100}
          onSubmitEditing={(text) => console.log(text)}
        />
        <TextInput>
          {minValue < 4 ? minValue : `$ ${numberWithCommas(minValue)}`}
        </TextInput>
        <TextInput>
          {maxValue < 25 ? maxValue : `$ ${numberWithCommas(maxValue)}`}
        </TextInput>
      </ViewInput>
    </View>
  );
};
