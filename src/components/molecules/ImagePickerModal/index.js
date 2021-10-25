import React from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

import {
  ModalContainer,
  TitleContainer,
  RowContainer,
  ButtonContainer,
} from './ImagePickerModal.styles';
import {Text, Button} from '../../atoms';

export const ImagePickerModal = ({modelVisible, toggleModel, setImage}) => {
  // runs when open camera button clicked
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: Platform.OS === 'ios' ? false : true,
    })
      .then(image => {
        toggleModel();
        setImage(image.path);
      })
      .catch(e => {
        console.log('error ', e);
      });
  };

  // runs when open gallery button clicked
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: Platform.OS === 'ios' ? false : true,
    })
      .then(image => {
        toggleModel();
        setImage(Platform.OS === 'ios' ? image.sourceURL : image.path);
      })
      .catch(e => {
        console.log('error ', e);
      });
  };

  return (
    <Modal
      isVisible={modelVisible}
      onBackButtonPress={toggleModel}
      hasBackdrop={true}
      backdropOpacity={0.9}
      backdropColor={'#ffffff'}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <ModalContainer>
        <TitleContainer>
          <Text
            fontSize="18px"
            fontColor="#000000"
            lineHeight="21px"
            margin="10px 0 10px 0">
            Select an option
          </Text>
        </TitleContainer>
        <RowContainer onPress={openCamera}>
          <Text
            fontWeight={500}
            fontSize="16px"
            lineHeight="21px"
            fontColor="#FFFFFF">
            Open Camera
          </Text>
        </RowContainer>
        <RowContainer onPress={openGallery}>
          <Text
            fontWeight={500}
            fontSize="16px"
            lineHeight="21px"
            fontColor="#FFFFFF">
            Open Gallery
          </Text>
        </RowContainer>
        <RowContainer onPress={() => toggleModel()}>
          <Text
            fontWeight={500}
            fontSize="16px"
            lineHeight="21px"
            fontColor="#FFFFFF">
            Close
          </Text>
        </RowContainer>
      </ModalContainer>
    </Modal>
  );
};

ImagePickerModal.propTypes = {
  modelVisible: PropTypes.bool,
  toggleModel: PropTypes.func,
  setImage: PropTypes.func,
};

ImagePickerModal.defaultProps = {
  modelVisible: false,
};
