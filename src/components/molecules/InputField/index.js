import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TextInput,
  IconContainer,
  EyeContainer,
} from './InputField.styles';

import {Text} from '../../atoms';
import {Email, Password, EyeInVisible, EyeVisible} from '../../../../images';

export const InputField = ({
  margin,
  value,
  onChangeText,
  keyboardType,
  placeholder,
  placeholderTextColor,
  alignValue,
  icon,
  onPress,
  passwordVisible,
}) => {
  return (
    <Container marginValue={margin}>
      <IconContainer>
        {!icon ? <Email /> : <Password />}
        <Text fontSize="18px" margin="5px 5px 0 5px">
          |
        </Text>
      </IconContainer>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        returnKeyType="done"
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        alignValue={alignValue}
        secureTextEntry={icon && !passwordVisible}
        autoCapitalize="none"
      />
      {icon && (
        <EyeContainer onPress={onPress}>
          {passwordVisible ? <EyeVisible /> : <EyeInVisible />}
        </EyeContainer>
      )}
    </Container>
  );
};

InputField.propTypes = {
  margin: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  alignValue: PropTypes.string,
  icon: PropTypes.bool,
  passwordVisible: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};

InputField.defaultProps = {
  keyboardType: 'default',
  placeholderTextColor: '#9EA0A4',
  align: 'left',
  secureTextEntry: true,
};
