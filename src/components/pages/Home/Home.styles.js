import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const blueHelight = screenHeight * 0.6;

export const SafeAreaView = styled.View`
  background-color: white;
`;
export const UpperBody = styled.View`
  background-color: blue;
  height: ${blueHelight}px;
`;

export const LowerBody = styled.View`
  margin: 50px 0 0 25px;
`;
