import { View, StyleSheet, Pressable } from 'react-native';

import theme from '../../theme';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

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

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.background}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput multiline="true" name="text" placeholder="Review" />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
