import React from 'react';
import PropTypes from 'prop-types';

import {PicUpload} from '../../atoms';
import {ImagePickerModal} from '../../molecules';
import {AddCircle} from '../../../../images';

export const ProfileImage = ({
  modelVisible,
  toggleModel,
  onChangeHandler,
  profilePic,
}) => {
  return (
    <>
      {/* <ImagePickerModal
        modelVisible={modelVisible}
        toggleModel={toggleModel}
        setImage={onChangeHandler}
      /> */}
      <PicUpload
        onPress={toggleModel}
        DefaultImage={AddCircle}
        path={profilePic}
      />
    </>
  );
};

ProfileImage.propTypes = {
  modelVisible: PropTypes.bool,
  toggleModel: PropTypes.func,
  onChangeHandler: PropTypes.func,
  profilePic: PropTypes.string,
};
