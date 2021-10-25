import React from 'react';
import PropTypes from 'prop-types';

import {Container, StatusContainer} from './Status.styles';
import {Text} from '../../atoms';

export const Status = ({todo, inProgress, completed}) => {
  return (
    <Container>
      <StatusContainer>
        <Text
          fontSize="20px"
          fontColor="#FFFFFF"
          fontWeight={800}
          lineHeight="20px">
          {todo}
        </Text>
        <Text fontSize="18px" fontColor="#FFFFFF" margin="5px 0 0 0">
          ToDo
        </Text>
      </StatusContainer>
      <StatusContainer marginValue="20px">
        <Text
          fontSize="20px"
          fontColor="#FFFFFF"
          fontWeight={800}
          lineHeight="20px">
          {inProgress}
        </Text>
        <Text fontSize="18px" fontColor="#FFFFFF" margin="5px 0 0 0">
          In Progress
        </Text>
      </StatusContainer>
      <StatusContainer marginValue="20px">
        <Text
          fontSize="20px"
          fontColor="#FFFFFF"
          fontWeight={800}
          lineHeight="20px">
          {completed}
        </Text>
        <Text fontSize="18px" fontColor="#FFFFFF" margin="5px 0 0 0">
          Completed
        </Text>
      </StatusContainer>
    </Container>
  );
};

Status.propTypes = {
  todo: PropTypes.number,
  inProgress: PropTypes.number,
  completed: PropTypes.number,
};

Status.defaultProps = {
  todo: 0,
  inProgress: 0,
  completed: 0,
};
