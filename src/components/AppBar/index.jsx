import { ScrollView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import theme from '../../theme';
import AppBarTab from './AppBarTab';
import useSignedUser from '../../hooks/useSignedUser';
import useAuthStorage from '../../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundAppBar,
    paddingBottom: Constants.statusBarHeight / 2,
    flexDirection: 'row'
  }
});

const AppBar = () => {
  const { user } = useSignedUser();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/signin');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name={'Repositories'} onPress={() => navigate('/')} />
        {user ? (
          <>
            <AppBarTab
              name={'Create a review'}
              onPress={() => navigate('/addreview')}
            />
            <AppBarTab name={'Sign out'} onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarTab name={'Sign in'} onPress={() => navigate('/signin')} />
            <AppBarTab name={'Sign up'} onPress={() => navigate('/signup')} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
