import { StyleSheet, Pressable } from 'react-native';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.white,
    margin: 8
  }
});

const AppBarTab = ({ name, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default AppBarTab;
