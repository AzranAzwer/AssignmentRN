import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: ${({height}) => height};
  width: ${({width}) => width};
  background-color: ${({bgColor}) => bgColor};
  border-radius: ${({radius}) => radius};
  ${({marginValue}) => marginValue && `margin: ${marginValue}`};
  justify-content: center;
  align-items: center;
`;
