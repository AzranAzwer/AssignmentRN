import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SafeAreaView, UpperBody, LowerBody} from './Home.styles';
import {LoadingIndicator} from '../../atoms';
import {Button, Drawer} from '../../molecules';
import {HomeHeader, HomeBody} from '../../templates';
import {Pencil} from '../../../../images';
import {getData} from '../../../redux/actions/userAction';

export const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {isFetching, data} = useSelector(state => state.home);

  useEffect(() => {
    dispatch(getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetching) {
    return <LoadingIndicator />;
  } else {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <UpperBody>
          <Drawer
            onPress={() => {
              navigation.openDrawer();
            }}
          />
          <HomeHeader
            profilePic={
              data &&
              data.customer &&
              data.customer.profile &&
              data.customer.profile.profilePicURL
            }
            name={
              data &&
              data.customer &&
              data.customer.profile &&
              data.customer.profile.name
            }
            toDo={data && data.toDo}
            inProgress={data && data.on_going}
            completed={data && data.completed}
          />
          <Button onSubmit={() => {}} margin="5px 30px 0 0">
            <Pencil />
          </Button>
        </UpperBody>
        <LowerBody>
          <HomeBody
            address={
              data &&
              data.customer &&
              data.customer.profile &&
              data.customer.profile.address
            }
            mobile={
              data &&
              data.customer &&
              data.customer.profile &&
              data.customer.profile.mobile
            }
            email={
              data &&
              data.customer &&
              data.customer.profile &&
              data.customer.profile.email
            }
          />
        </LowerBody>
      </SafeAreaView>
    );
  }
};
