import { ScrollView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundAppBar,
    paddingBottom: Constants.statusBarHeight / 2,
    flexDirection: 'row'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name={'Repositories'} path={'/'} />
        <AppBarTab name={'Sign in'} path={'signin'} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
