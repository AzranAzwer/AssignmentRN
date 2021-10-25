import styled from 'styled-components/native';

export const TextElement = styled.Text`
  font-size: ${({fontSize}) => fontSize};
  color: ${({fontColor, theme}) => fontColor || theme.colorFontButton};
  ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
  ${({alignValue}) => alignValue && `text-align: ${alignValue}`};
  ${({marginValue}) => marginValue && `margin: ${marginValue}`};
  ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
`;
