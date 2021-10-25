import React, {useEffect} from 'react';
import {StatusBar, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SafeAreaView, Container} from './List.styles';
import {Text, LoadingIndicator} from '../../atoms';
import {CompanyfixedCard, CompanyCard} from '../../molecules';
import {getCompanyDetails} from '../../../redux/actions/userAction';

export const List = () => {
  const dispatch = useDispatch();
  const {company, isFetching} = useSelector(state => state.company);

  useEffect(() => {
    dispatch(getCompanyDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // use to render items to flatlist
  const renderItem = ({item}) => {
    return (
      <CompanyCard name={item.name} address={item.address} logo={item.logo} />
    );
  };

  if (isFetching) {
    return <LoadingIndicator />;
  } else {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Container>
          <Text
            margin="33px 0 0 18px"
            fontSize="30px"
            fontWeight={900}
            lineHeight="35px">
            Now select a Company
          </Text>
          <CompanyfixedCard count={company && company.length} />
          <FlatList
            data={company}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Container>
      </SafeAreaView>
    );
  }
};
