import styled from "styled-components/native";

export const View = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  flex-basis: 25%;
  width: 90%;
  align-self: center;
`;

export const Text = styled.Text`
  flex: 1 0 65%;
  font-family: Montserrat-regular;
  color: white;
  padding-left: 10px;
`;

export const Input = styled.TextInput`
  flex: 1 0 35%;
  border: 1px solid white;
  padding: 5px;
  color: white;
  font-family: Montserrat-regular;
  text-align: center;
  font-size: 16px;
`;

export const ViewInput = styled.View`
  margin-top: 15px;
  flex: 1 0 30%;
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  justify-content: space-between;
`;

export const Slider = styled.Slider`
  align-self: center;
  width: 80%;
  margin: 0 auto;
`;

export const TextInput = styled.Text`
  font-family: Montserrat-regular;
  color: white;
  text-align: center
  flex-basis: 25%;
  font-size: 12px;
`;
