import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.white,
    margin: 8
  }
});

const AppBarTab = ({ name, path }) => {
  return (
    <Pressable>
      <Link to={path}>
        <Text style={styles.text}>{name}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
