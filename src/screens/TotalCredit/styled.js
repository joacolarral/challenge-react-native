import styled from "styled-components/native";

export const View = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 90%;
  flex-basis: 16%;
  align-self: center;
`;

export const ViewText = styled.View`
  flex: 1 0 auto;
  display: flex;
  flex-flow: row wrap;
  height: 60%;
  align-items: center;
  align-content:center
  background-color: #08355d;
`;

export const Text = styled.Text`
  flex: ${(props) => props.flex};
  color: white;
  text-align: center;
  font-family: Montserrat-bold;
  font-size: ${(props) => props.fontSize};
`;

export const AccessButton = styled.TouchableOpacity`
  flex: 2 0 auto;
  background-color: #4cab8d;
  height: 50%;
  justify-content: center;
`;

export const DetailButton = styled.TouchableOpacity`
  flex: 1 0 25%;
  margin-left: 5px;
  background-color: #14548b;
  height: 50%;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: ${(props) => props.fontSize};
  text-align: center;
`;
