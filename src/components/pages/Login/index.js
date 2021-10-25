import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Text, LoadingIndicator} from '../../atoms';
import {Button} from '../../molecules';
import {LoginField} from '../../organisms';
import {ArrowRight} from '../../../../images';
import {userSignIn} from '../../../redux/actions/userAction';

export const Login = ({navigation}) => {
  const {isFetching, authUser} = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser && authUser.status === 'OK') {
      navigation.navigate('BottomTab');
    }
  }, [navigation, authUser]);

  const onSubmit = () => {
    const data = {
      username: email,
      password: password,
    };
    dispatch(userSignIn(data));
  };

  if (isFetching) {
    return <LoadingIndicator />;
  } else {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text
            margin="60px 0 0 35px"
            fontSize="30px"
            fontWeight={900}
            lineHeight="35px">
            Welcome
          </Text>
          <Text margin="18px 0 0 35px" fontSize="20px" fontWeight={400}>
            Let’s sign in to continue
          </Text>
        </View>
        <LoginField
          email={email}
          setEmail={text => setEmail(text)}
          password={password}
          setPassword={text => setPassword(text)}
          setPasswordVisible={() => setPasswordVisible(!passwordVisible)}
          passwordVisible={passwordVisible}
          status={authUser && authUser}
        />
        <Button onSubmit={onSubmit} margin="59px 38px 0 0">
          <ArrowRight />
        </Button>
      </SafeAreaView>
    );
  }
};
