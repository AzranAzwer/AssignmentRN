import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 17px;
  flex-direction: row;
`;

export const StatusContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #0091ea;
  height: 60px;
  width: 100px;
  ${({marginValue}) => marginValue && `margin-left: ${marginValue}`};
`;
