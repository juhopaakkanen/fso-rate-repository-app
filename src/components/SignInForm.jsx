import { View, StyleSheet, Pressable } from 'react-native';

import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.white
  },
  button: {
    textAlign: 'center',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    marginTop: 10,
    marginLeft: 10,
    maxWidth: 200,
    padding: 8
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.background}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
