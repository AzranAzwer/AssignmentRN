import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Container} from './HomeHeader.styles';
import {Text, Ratings} from '../../atoms';
import {Status} from '../../molecules';
import {ProfileImage} from '../../organisms';

export const HomeHeader = ({
  name,
  toDo,
  inProgress,
  completed,
  profilePic,
  ratingCount,
}) => {
  const [modelVisible, setModelVisible] = useState(false);

  // runs when clicked on image picker
  const toggleModel = () => {
    setModelVisible(!modelVisible);
  };

  return (
    <Container>
      <Text
        fontSize="30px"
        fontColor="#FFFFFF"
        lineHeight="35px"
        margin="18px 0 0 0">
        My Profile
      </Text>
      <ProfileImage
        modelVisible={modelVisible}
        toggleModel={toggleModel}
        onChangeHandler={() => {}}
        profilePic={profilePic}
      />
      <Ratings margin="15px 0 0 0" color="#F1B30C" />
      <Text
        fontSize="30px"
        fontColor="#FFFFFF"
        lineHeight="35px"
        margin="10px 0 0 0">
        {name}
      </Text>
      <Status todo={toDo} inProgress={inProgress} completed={completed} />
    </Container>
  );
};

HomeHeader.propTypes = {
  name: PropTypes.string,
  todo: PropTypes.number,
  inProgress: PropTypes.number,
  completed: PropTypes.number,
};
