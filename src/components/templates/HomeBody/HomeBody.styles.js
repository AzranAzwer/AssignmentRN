import styled from 'styled-components/native';

export const Container = styled.View``;

export const Contact = styled.View`
  flex-direction: row;
  ${({marginValue}) => marginValue && `margin-top: ${marginValue}`}
`;

export const TextContainer = styled.View`
  margin-left: 15px;
`;
