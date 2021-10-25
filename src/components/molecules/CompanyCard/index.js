import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  CompanyIcon,
  ComapnyTextConatiner,
} from './CompanyCard.styles';

import {Text, Ratings} from '../../atoms';
import {Company} from '../../../../images';

export const CompanyCard = ({name, address, logo}) => {
  return (
    <Container>
      <CompanyIcon>
        {logo ? (
          <Image style={{width: 45, height: 45}} source={{uri: logo}} />
        ) : (
          <Company />
        )}
      </CompanyIcon>
      <ComapnyTextConatiner>
        <Text fontSize="16px" fontColor="#000000" fontWeight={600}>
          {name}
        </Text>
        <Ratings />
        <Text fontSize="14px" fontColor="#000000" fontWeight={400}>
          {address}
        </Text>
      </ComapnyTextConatiner>
    </Container>
  );
};
