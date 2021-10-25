import React from 'react';
import PropTypes from 'prop-types';

import {Container, Contact, TextContainer} from './HomeBody.styles';
import {Text} from '../../atoms';
import {Location, Call, Email} from '../../../../images';

export const HomeBody = ({address, mobile, email}) => {
  return (
    <Container>
      <Contact>
        <Location />
        <TextContainer>
          <Text fontSize="14px" fontColor="#AAAAAA" lineHeight="15px">
            Current address
          </Text>
          <Text
            margin="5px 0 0 0"
            fontSize="14px"
            fontColor="#000000"
            lineHeight="15px"
            fontWeight={500}>
            {address}
          </Text>
        </TextContainer>
      </Contact>
      <Contact marginValue="20px">
        <Call />
        <TextContainer>
          <Text fontSize="14px" fontColor="#AAAAAA" lineHeight="15px">
            Mobile Number
          </Text>
          <Text
            margin="5px 0 0 0"
            fontSize="14px"
            fontColor="#000000"
            lineHeight="15px"
            fontWeight={500}>
            {mobile}
          </Text>
        </TextContainer>
      </Contact>
      <Contact marginValue="20px">
        <Email />
        <TextContainer>
          <Text fontSize="14px" fontColor="#AAAAAA" lineHeight="15px">
            E mail Address
          </Text>
          <Text
            margin="5px 0 0 0"
            fontSize="14px"
            fontColor="#000000"
            lineHeight="15px"
            fontWeight={500}>
            {email}
          </Text>
        </TextContainer>
      </Contact>
    </Container>
  );
};

HomeBody.propTypes = {
  address: PropTypes.string,
  mobile: PropTypes.string,
  email: PropTypes.string,
};
