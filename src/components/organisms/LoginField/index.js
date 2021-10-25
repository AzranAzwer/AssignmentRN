import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './LoginField.styles';
import {Text} from '../../atoms';
import {InputField} from '../../molecules';

export const LoginField = ({
  email,
  setEmail,
  password,
  setPassword,
  setPasswordVisible,
  passwordVisible,
  status,
}) => {
  return (
    <Container>
      <InputField
        icon={false}
        margin="45px 0 0 18px"
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <InputField
        icon={true}
        margin="15px 0 0 18px"
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        onPress={setPasswordVisible}
        passwordVisible={passwordVisible}
      />
      {status && status === 'Unauthorized' && (
        <Text
          margin="18px 0 0 31px"
          fontSize="16px"
          fontWeight={500}
          fontColor="#E42222">
          Login credentials do not match
        </Text>
      )}
    </Container>
  );
};

LoginField.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  setPasswordVisible: PropTypes.func,
  passwordVisible: PropTypes.bool,
};

LoginField.defaultProps = {
  passwordVisible: false,
};
