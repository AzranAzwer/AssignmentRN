import React from 'react';
import {
  Container,
  Card,
  IconContainer,
  TextContainer,
  View,
} from './CompanyfixedCard.styles';

import {Text} from '../../atoms';
import {Company} from '../../../../images';

export const CompanyfixedCard = ({count}) => {
  return (
    <Container>
      <Card>
        <IconContainer>
          <Company />
        </IconContainer>
        <View>
          <TextContainer>
            <Text fontSize="14px" fontColor="#FFFFFF" fontWeight={300}>
              We found{' '}
            </Text>
            <Text fontSize="14px" fontColor="#FFFFFF" fontWeight={900}>
              {count} certified companies{' '}
            </Text>
            <Text fontSize="14px" fontColor="#FFFFFF" fontWeight={300}>
              in your
            </Text>
          </TextContainer>
          <Text fontSize="14px" fontColor="#FFFFFF" fontWeight={300}>
            Selected ocation
          </Text>
        </View>
      </Card>
    </Container>
  );
};
