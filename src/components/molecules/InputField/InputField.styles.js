import styled from 'styled-components/native';

export const Container = styled.View`
  ${({marginValue}) => marginValue && `margin: ${marginValue}`};
  flex-direction: row;
  border: 1px;
  width: 360px;
  height: 40px;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  margin-left: 5px;
`;

export const EyeContainer = styled.TouchableOpacity`
  margin-left: -30px;
`;

export const TextInput = styled.TextInput`
  width: 310px;
  height: 40px;
  border-radius: 6px;
  font-size: 18px;
  color: black;
  ${({alignValue}) => alignValue && `text-align: ${alignValue}`};
`;
